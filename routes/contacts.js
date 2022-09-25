const { MongoClient, ServerApiVersion } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://joshuafb:W2tyjm42Qb89qLKa@jfb-341.piiehq2.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    findAllContacts(client);
    client.close();
    });
}


async function findAllContacts(client) {
    const result = await client.db("jfb-341").collection("contacts").documents;

    if(result){
        console.log(result);
    }
}