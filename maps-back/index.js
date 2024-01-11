const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/api/data',(req,res)=>{
    res.json([
        {
          "id": 1,
          "region": "US",
          "data": 290
        },
        {
          "id": 2,
          "region": "IN",
          "data": 490
        },
        {
          "id": 3,
          "region": "AT",
          "data": 790
        },
        {
          "id": 4,
          "region": "SE",
          "data": 590
        },
        {
          "id": 5,
          "region": "AT",
          "data": 290
        },
        {
          "id": 6,
          "region": "SE",
          "data": 390
        },
        {
          "id": 7,
          "region": "IN",
          "data": 700
        },
        {
          "id": 8,
          "region": "AT",
          "data": 500
        },
        {
          "id": 9,
          "region": "SE",
          "data": 900
        },
        {
          "id": 10,
          "region": "BR",
          "data": 400
        },
        {
          "id": 11,
          "region": "AT",
          "data": 600
        },
        {
          "id": 12,
          "region": "SE",
          "data": 700
        },
        {
          "id": 13,
          "region": "BR",
          "data": 1000
        },
        {
          "id": 14,
          "region": "AT",
          "data": 200
        },
        {
          "id": 15,
          "region": "SE",
          "data": 300
        },
        {
          "id": 16,
          "region": "FR",
          "data": 600
        },
        {
          "id": 17,
          "region": "CN",
          "data": 800
        },
        {
          "id": 18,
          "region": "CA",
          "data": 1000
        },
        {
          "id": 19,
          "region": "MX",
          "data": 700
        },
        {
          "id": 20,
          "region": "FR",
          "data": 400
        },
        {
          "id": 21,
          "region": "CA",
          "data": 500
        },
        {
          "id": 22,
          "region": "FR",
          "data": 800
        },
        {
          "id": 23,
          "region": "AT",
          "data": 300
        },
        {
          "id": 24,
          "region": "AR",
          "data": 400
        },
        {
          "id": 25,
          "region": "FR",
          "data": 700
        },
        {
          "id": 26,
          "region": "BR",
          "data": 500
        }
      
      
      ])
})

app.listen(3001,()=>{
    console.log('listening on port 3001');
});