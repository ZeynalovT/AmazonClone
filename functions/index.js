const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")

const stripe = require("stripe")("sk_test_51JCIlkHMV2rvdoJNLj8F0hc6uGIRZwLZkv9zo4z4YJUkYd3kerfqjqJ5GRxIPQYCzlHZ877eT9R8CdH0gc8sZyhI002w86yxq2")

//API


//App config
const app = express();

//Middleware
app.use(cors({origin: true}));
app.use(express.json());

// Api Routes
app.get("/", (request, response) => response.status(200).send("Hello world"));


app.post("/payments/create", async(request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});



// Listen comand
exports.api = functions.https.onRequest(app);


//example end point
//http://localhost:5001/fir-72bdf/us-central1/api
