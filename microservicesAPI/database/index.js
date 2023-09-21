const server = require('./src/server');

const DBPORT = 8004

server.listen(DBPORT, ()=> {
    console.log(`DataBase running in port ${DBPORT}`)
})