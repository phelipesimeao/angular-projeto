import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res) => {
    //verifica se há algo no corpo da requisição
    if (req.body.email && req.body.senha) {
        //guarda numa variavel os dados de email e senha
        var email = req.body.email, senha = req.body.senha;

        //buscar o usuário no banco
        global.conn.request()
            .query(`SELECT nmSenha, idFuncionario, idtipo FROM TB_FUNCIONARIO WHERE NMEMAIL = '${email}'`)
            .then(user => {
                //verifica se trouxe alguma coisa
                if (user.recordset.length > 0) {
                    //se trouxe, verifica se a senha bate
                    if (user.recordset[0].nmSenha === senha) {
                        //se a senha bater, faz um token com o ID do usuário
                        let payload = { id: user.recordset[0].idFuncionario };
                        let token = jwt.sign(payload, process.env.SECRET_KEY);
                        //e responde, com status de sucesso, uma mensagem de OK e o token (que será usado no front)
                        res.json({ message: "ok", token: token, id: user.recordset[0].idFuncionario, cargo: user.recordset[0].idtipo }).status(200);
                    } else {
                        //mensagem de senha incorreta com status de não autorizado
                        res.json({"message":"senha incorreta"}).status(401);
                    }
                } else {
                    //mensagem de email nao encontrado com status de não autorizado
                    res.json({"message":'usuario não encontrado'}).status(401);
                }
            })
            .catch(err => console.error(err));
            
    } else {
        res.json({"message":'preencha todos os campos!'}).status(401);
    }
});

export default router;