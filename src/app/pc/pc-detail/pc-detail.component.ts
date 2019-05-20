import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartsDataService } from 'src/app/shared/services/charts-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.scss']
})
export class PcDetailComponent implements OnInit {
  constructor(private chartsService: ChartsDataService, private route: ActivatedRoute,){}
  
  data = [];
  horario = [];
  
  ngOnInit(){
    const id = this.route.snapshot.params.id;
    setInterval(()=>{  
        this.chartsService.getDadosPC(id)
        .subscribe(data => {
          console.log(data);
          for (let index = 0; index < 10 ; index++) {
            this.data[index] = data[index].vlLeituraCpu;
            this.horario[index] = data[index].dtregistro;
          }
          console.log(this.data)
          console.log(this.horario)
        })
        
    }, 1000);
  }

    //colocar um array de numeros que será recebido do node
    public lineChartData: ChartDataSets[] = [
      { data: this.data.reverse(), label: 'Processamento' },
    ];

    //labels, talvez seria legal tirar o horario do banco, como no semestre anterior, ou talvez uma média diaria
    public lineChartLabels: Label[] = this.horario;
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
          //linha da direita, não sei se é necessario deixar.
          // {
          //   id: 'y-axis-1',
          //   position: 'right',
          //   gridLines: {
          //     color: 'rgba(255,0,0,0.3)',
          //   },
          //   ticks: {
          //     fontColor: 'red',
          //   }
          // }
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
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // red
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    //public lineChartPlugins = [pluginAnnotations];
  

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
}

