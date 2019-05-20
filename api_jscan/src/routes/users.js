import express from 'express';
import passport from 'passport';

import sqlStatement from '../utils/dbFromRoutes'

const router = express();

router.get('/get/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    //teste de rota
    sqlStatement(`SELECT * FROM TB_FUNCIONARIO WHERE IDFUNCIONARIO = ${req.params.id}`, res);

    //para criação de rotas, só fazer o processo padrão de criar rotas, protegê-las com
    //o passport.authenticate , e chamar o SQLStatement, passando a query e o response

    //nesta rota tem o modelo de como usar os parametros de rota tambem, mas nem sempre elas serão usadas    
});

export default router;