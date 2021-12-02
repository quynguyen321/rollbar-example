require(`dotenv`).config();
const express = require(`express`);
const app = express();

const path = require(`path`)

const Rollbar = require('rollbar');

// const {SERVER_PORT, ROLLBAR_TOKEN } = process.env;

var rollbar = new Rollbar({
    accessToken: 'd94fe3c8da58416aaad280a17c365c62',
    captureUncaught: true,
    captureUnhandledRejections: true,
  })

app.use(express.json());

//student
const students = [`bob`, `barbara`, `sam`]
//endpoint
app.get('/', (req,res) => {
    rollbar.info(`someone visited`)
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post(`//api/students`, (req,res ) => {
    const { name } =req.body;

    if (!name){
        rollbar.error(`error`)
    }

    const index = students.findIndex(studentname => name=== studentName)
    if (indent === -1){
        rollbar.info(`someone add student`)
        students.push(name);

        res.status(200).send(students);

    }else {
rollbar.error(`someone try to add an existing student `)

res.status(403).send('student already eixt')
    }
})

rollbar.log(`server startred`)

const port = process.env.PORT || 5050

app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))