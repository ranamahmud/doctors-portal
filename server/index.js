
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jbp81.mongodb.net/doctorsPortal?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('doctors'))
app.use(fileUpload())
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


client.connect(err => {
    const appointmentCollection = client.db("doctorsPortal").collection("appointments");
    // perform actions on the collection object
    console.log('database connected')

    app.post('/addAppointment', (req, res) => {
        const appointment = req.body;
        appointmentCollection.insertOne(appointment)
            .then(result => {
                res.send(result.insertedCount > 0)
            })

    })

    app.post('/appointmentsByDate', (req, res) => {
        const date = req.body;
        appointmentCollection.find({ date: date.date })
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.post('/addDoctor', (req, res) => {
        const file = req.files.file;
        const name = req.body.name;
        const email = req.body.email;
        console.log(name, email, file);
        file.mv(`${__dirname}/doctors/${file.name}`, err => {
            if (err) {
                console.log(err)
                return res.status(500).send({ msg: 'Failed to upload image' })
            }
            return res.send({ name: file.name, path: `/${file.name}` })
        })

    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})