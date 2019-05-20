import { ExtractJwt, Strategy } from 'passport-jwt';
import envoriment from 'dotenv-safe';

//setando as variáveis de ambiente, que não conseguiam ser 'vistas' daqui sem isso
envoriment.config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.SECRET_KEY}`
};

//console.log(process.env.SECRET_KEY)

const strategy = new Strategy(options, (payload, done) => {

    console.log(payload)

    global.conn.request()
        .query(`SELECT idFuncionario FROM TB_FUNCIONARIO WHERE idFuncionario = '${payload.id}'`)
        .then(user => {

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }).catch(err => {
            return done(err, null);
        })
});

export default strategy;