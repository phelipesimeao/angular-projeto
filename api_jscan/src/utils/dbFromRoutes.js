export default (sqlQuery, res) => {
    global.conn.request()
        .query(sqlQuery)
        .then(result => res.json(result.recordset))
        .catch(err => console.error(err));
}