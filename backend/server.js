const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

const data = {
    "customers":[
        { "id": 1, "name": "Ahmed Ali" },
        { "id": 2, "name": "Aya Elsayed" },
        { "id": 3, "name": "Mina Adel" },
        { "id": 4, "name": "Sarah Reda" },
        { "id": 5, "name": "Mohamed Sayed" }
    ],
    "transactions": [
        { "id": 1, "customer_id": 1, "date": "2022-01-01", "amount": 1000 },
        { "id": 2, "customer_id": 1, "date": "2022-01-02", "amount": 2000 },
        { "id": 3, "customer_id": 2, "date": "2022-01-01", "amount": 550 },
        { "id": 4, "customer_id": 3, "date": "2022-01-01", "amount": 500 },
        { "id": 5, "customer_id": 2, "date": "2022-01-02", "amount": 1300 },
        { "id": 6, "customer_id": 4, "date": "2022-01-01", "amount": 750 },
        { "id": 7, "customer_id": 3, "date": "2022-01-02", "amount": 1250 },
        { "id": 8, "customer_id": 5, "date": "2022-01-01", "amount": 2500 },
        { "id": 9, "customer_id": 5, "date": "2022-01-02", "amount": 875 },
        { "id": 10, "customer_id": 1, "date": "2022-01-03", "amount": 5000 },
        { "id": 11, "customer_id": 4, "date": "2022-01-06", "amount": 15000 },
        {
            "id": 10,
            "customer_id": 1,
            "date": "2022-01-03",
            "amount": 1800
        },
        {
            "id": 11,
            "customer_id": 2,
            "date": "2022-01-04",
            "amount": 950
        },
        {
            "id": 12,
            "customer_id": 3,
            "date": "2022-01-05",
            "amount": 1200
        },
        {
            "id": 13,
            "customer_id": 4,
            "date": "2022-01-06",
            "amount": 300
        },
        {
            "id": 14,
            "customer_id": 5,
            "date": "2022-01-07",
            "amount": 700
        },
        {
            "id": 15,
            "customer_id": 1,
            "date": "2022-01-08",
            "amount": 850
        },
        {
            "id": 16,
            "customer_id": 2,
            "date": "2022-01-09",
            "amount": 1600
        },
        {
            "id": 17,
            "customer_id": 3,
            "date": "2022-01-10",
            "amount": 1100
        },
        {
            "id": 18,
            "customer_id": 4,
            "date": "2022-01-11",
            "amount": 1400
        },
        {
            "id": 19,
            "customer_id": 5,
            "date": "2022-01-12",
            "amount": 950
        },
        {
            "id": 20,
            "customer_id": 1,
            "date": "2022-01-13",
            "amount": 1750
        },
        {
            "id": 21,
            "customer_id": 2,
            "date": "2022-01-14",
            "amount": 1250
        },
        {
            "id": 22,
            "customer_id": 3,
            "date": "2022-01-15",
            "amount": 800
        },
        {
            "id": 23,
            "customer_id": 4,
            "date": "2022-01-16",
            "amount": 650
        },
        {
            "id": 24,
            "customer_id": 5,
            "date": "2022-01-17",
            "amount": 950
        },
        {
            "id": 25,
            "customer_id": 1,
            "date": "2022-01-18",
            "amount": 1300
        },
        {
            "id": 26,
            "customer_id": 2,
            "date": "2022-01-19",
            "amount": 1100
        },
        {
            "id": 27,
            "customer_id": 3,
            "date": "2022-01-20",
            "amount": 1450
        },
        {
            "id": 28,
            "customer_id": 4,
            "date": "2022-01-21",
            "amount": 900
        },
        {
            "id": 29,
            "customer_id": 5,
            "date": "2022-01-22",
            "amount": 750
        },
        {
            "id": 30,
            "customer_id": 1,
            "date": "2022-01-23",
            "amount": 1200
        }


        
    ]
};

app.get('/api/data', (req,res) =>{
    res.json(data);
});

app.listen(port,() =>{
    console.log(`server is running on http://localhost:${port}`);
});