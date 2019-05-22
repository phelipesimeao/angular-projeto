import express from 'express';
import jwt from 'jsonwebtoken';
import sqlStatement from '../utils/dbFromRoutes'

const router = express.Router();

router.post('/', (req, res) =>{

    if(req.body.nmEmpresa || req.body.cdCnpj || req.body.nmFuncionario || req.body.nmCargo || req.body.nmEmail || req.body.nmSenha){
        
        var nomeEmpresa = req.body.nmEmpresa, codigoCnpj = req.body.cdCnpj;
        var nomeFuncionario = req.body.nmFuncionario, nomecargo = req.body.nmCargo ,nomeEmail = req.body.nmEmail, nomeSenha = req.body.nmSenha;
                global.conn.request()
                            .query(`INSERT INTO TB_EMPRESA (NMEMPRESA, CDCNPJ VALUES) VALUES ('${nome}','${cnpj}')`)
                            .then(cadastroempresa =>{
                                global.coon.request()
                                .query(`SELECT IDEMPRESA FROM TB_EMPRESA WHERE NMEMPRESA = '${nome}' AND CDCNPJ = '${cnpj}'`)
                                .then(result =>{
                                    res.redirect('/gestor/addfirst',result.recordset[0].id,)
                                    
                                }).catch(err => console.error(err))
                            });

    }else{
        res.json({"message": 'Preencha todos os campos!'}).status(401);
    }
});

router.post('/gestor', (req, res) =>{

    console.log(req.body.nmFuncionario)
    if(req.body.nmFuncionario || req.body.nmCargo || req.body.nmEmail || req.body.nmSenha){
        

        var nome = req.body.nmFuncionario, cargo = req.body.nmCargo ,email = req.body.nmEmail, senha = req.body.nmSenha; 
        
        global.conn.request()
            .query(`SELECT nmEmail FROM TB_FUNCIONARIO WHERE  nmEmail = '${email}'`)
            .then(empresa => {
                    if(empresa.recordset.length === 0){
                        global.conn.request()
                            .query(`INSERT INTO TB_FUNCIONARIO (NMFUNCIONARIO,NMCARGO,NMEMAIL,NMSENHA) VALUES (${nome},${cargo},${email},${senha})`);
                            res.json({"message": 'Usuário cadastro com sucesso'}).status(200);
                    }else{
                        res.json({"message": 'Email já cadastrado, por favor escolher outro!'}).status(401);                
                    }
            })
            .catch(err => console.error(err));
    }else{
        res.json({"message": 'Preencha todos os campos!'}).status(401);
    }
});

router.get('/funcionarios/:id', (req, res) =>{
    let idgestor = req.params.id;
    
    global.conn.request()
        //adicionar inner join para computador
        .query(`select * from tb_funcionario f 
                    inner join tb_computador c on f.idfuncionario = c.idfuncionario 
                        where f.idgestor = ${idgestor}`)
        .then(resultado => {
                res.json(resultado.recordset);
        })
        .catch(err => console.error(err));

});

router.get('/computador/:id', (req, res) =>{
    let idcomputador = req.params.id;
    
    global.conn.request()
        //adicionar inner join para computador
        .query(`select top 10 round(vlLeituraCpu, 2) as vlLeituraCpu, CONVERT(VARCHAR(11), dtregistro,108) as dtregistro
                    from tb_leitura_pc where idcomputador = ${idcomputador} order by idleitura desc`)
        .then(resultado => {

                let obj = [{
                    dado: Number,
                    hora: String,
                }]
                
                obj = resultado.recordset

                res.json(obj)

                // let obj = {
                //     dado: [],
                //     hora: [],
                // }

                // resultado.recordset.forEach(element => {
                //     obj.dado.push(element.vlLeituraCpu)
                //     obj.hora.push(element.dtregistro)
                // });

                // res.json(obj)
        })
        .catch(err => console.error(err));

});

router.get('/computador/total/:id', (req, res) =>{
    let idcomputador = req.params.id;
    
    global.conn.request()
        //adicionar inner join para computador
        .query(`select vlmemoriaram, vlarmazenamento from tb_computador where idcomputador = ${idcomputador}`)
        .then(resultado => {

                let obj = resultado.recordset
                console.log(obj)
                res.json(obj)

        })
        .catch(err => console.error(err));

});

router.get('/computador/armazenamento/:id', (req, res) =>{
    let idcomputador = req.params.id;
    
    global.conn.request()
        //adicionar inner join para computador
        .query(`select top 1 round(vlLeituraArmazenamento / 1073741824, 0) as vlLeituraArmazenamento, vlleituramemoria from tb_leitura_pc where idcomputador = ${idcomputador} order by idleitura desc`)
        .then(resultado => {

                let obj = resultado.recordset
                console.log(obj)
                res.json(obj)

        })
        .catch(err => console.error(err));

});



export default router;