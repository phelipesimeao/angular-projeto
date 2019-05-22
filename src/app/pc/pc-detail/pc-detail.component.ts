import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartsDataService } from 'src/app/shared/services/charts-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.scss']
})
export class PcDetailComponent implements OnInit {
  constructor(private chartsService: ChartsDataService, private route: ActivatedRoute,){
    this.pieChartLabels = ['Armazenamento', 'Disponivel'];
    
  }
  
  data = [];
  horario = [];
  armazenamentoTotal: number;
  armazenamentoTotalRam: any;
  async ngOnInit(){
    const id = this.route.snapshot.params.id;
    this.getArmazenamentoRamTotal(id);
    this.pieChartData = [100, 0];

    let valors = await this.chartsService.getDadosProcessamentoPC(id).toPromise();

    setInterval(()=>{ 
        this.chartsService.getDadosProcessamentoPC(id)
        .subscribe(data => {
          for (let index = 0; index < 10 ; index++) {
            this.data[index] = data[index].vlLeituraCpu;
            this.horario[index] = data[index].dtregistro;
          }
          console.log(this.horario.reverse())
        })
        
    }, 2000);

    setInterval(()=>{ 
      this.chartsService.getArmazenamentoUtilizado(id)
      .subscribe(data => {  
          this.alterargrafico(data[0].vlLeituraArmazenamento)
      })
  }, 1000);
  }


    alterargrafico(valor){
      this.pieChartData = [valor, this.armazenamentoTotal - valor];
    }

    getArmazenamentoRamTotal(id){
      this.chartsService.getMemoriaeRamTotal(id)
        .subscribe(
          resultado => {
            let string: any = resultado[0].vlarmazenamento;
            if(string.includes('TiB')){
              let nova = string.split(" ");
              this.armazenamentoTotal = nova[0] * 1000;
            }else if (string.includes('GiB')){
              let nova = string.split(" ");
              this.armazenamentoTotal  = nova[0];
            }
            
            let string2: any = resultado[0].vlmemoriaram;
            let nova = string2.split(" ");
            this.armazenamentoTotalRam = nova[0];

          }
        )
   }

    //colocar um array de numeros que será recebido do node
    public lineChartData: ChartDataSets[] = [
      { data: this.data, label: 'Processamento' }
    ];

    //labels, talvez seria legal tirar o horario do banco, como no semestre anterior, ou talvez uma média diaria
    public lineChartLabels: Label[] = this.horario.reverse();
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{}],
        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',
          },
        ]
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 1,
            label: {
              enabled: true,
              fontColor: 'orange',
              content: 'LineAnno'
            }
          },
        ],
      },
    };

    //colocar em um json e fazer a chamada da pagina para tirar a "poluição" do código atual
    public lineChartColors: Color[] = [
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
  

    //daqui para baixo são tudo eventos, não sei se há algum util para o grupo, 
    //mas a principio não vejo utilidade para eles
    // @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  
    // public randomize(): void {
    //   for (let i = 0; i < this.lineChartData.length; i++) {
    //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //       this.lineChartData[i].data[j] = this.generateNumber(i);
    //     }
    //   }
    //   this.chart.update();
    // }
  
    // private generateNumber(i: number) {
    //   return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    // }
  
    // // eventos
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    // public hideOne() {
    //   const isHidden = this.chart.isDatasetHidden(1);
    //   this.chart.hideDataset(1, !isHidden);
    // }
  
    // public pushOne() {
    //   this.lineChartData.forEach((x, i) => {
    //     const num = this.generateNumber(i);
    //     const data: number[] = x.data as number[];
    //     data.push(num);
    //   });
    //   this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
    // }
  
    // public changeColor() {
    //   this.lineChartColors[2].borderColor = 'green';
    //   this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
    // }
  
    // public changeLabel() {
    //   this.lineChartLabels[2] = ['1st Line'];
    //   // this.chart.update();
    // }



    public pieChartOptions: ChartOptions = {
      responsive: true,
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      legend: {
        position: 'top',
      },
      // plugins: {
      //   datalabels: {
      //     formatter: (value, ctx) => {
      //       const label = ctx.chart.data.labels[ctx.dataIndex];
      //       return label;
      //     },
      //   },
      // }
    };
    public pieChartLabels: Label[];
    public pieChartData: number[];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartColors = [
      {
        backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
      },
    ];
  
    
 
    addSlice() {
      this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
      this.pieChartData.push(400);
      this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
    }
  
    removeSlice() {
      this.pieChartLabels.pop();
      this.pieChartData.pop();
      this.pieChartColors[0].backgroundColor.pop();
    }
}

