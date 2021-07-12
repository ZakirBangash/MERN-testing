import express from 'express'

import cors from 'cors'
import data from './data.js'

// app config
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());





// api routes
app.get('/api/sync', (req, res) => {
        res.status(200).send(data);
})

app.get('/', (req, res) => {
    console.log(req.body)
        res.status(200).send("Hello World Engineer");
})



// app.post('/message', (req, res) => {
//     const dbMessage = req.body; 
//     Messages.create(dbMessage, (err, data) => {
//         if(err){
//             res.status(500).send(err)
//         }else{
//             res.status(201).send(data)
//         }
//     })
// })

// app.post("/user", (req, res) => {
//     const dbUser = req.body;
//     users.create(dbUser, (err, user) => {
//         if(err) {
//             res.status(500).send(err);
//         }else {
//             res.status(201).send(user);
//         }
//     })
// });




// listen
app.listen(port, () => console.log(`Listening on local host ${port}`));