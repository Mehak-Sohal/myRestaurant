const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQHLxJKJr124CJljikLhOBK2Gz5CYOCwVU1cI55RMTnAVUPpwmYhJqDnWecLCmD1ykjiwSLTWkX6TLt9Jvax2Eg00qZ5QFUc0');

// API
const app = express();
app.use(cors({ origin: true }));
app.use(express.json())

// - API Routes
app.get('/', (request, response) => response.status(200).send('helloooooo'));

 app.post('/payments/create', async (request, response) => {
     const total = request.query.total;
    console.log("Payment request received for -> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "cad"
    })

    // ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen
exports.api = functions.https.onRequest(app) 


// URL: http://localhost:5001/clone-36782/us-central1/api 
