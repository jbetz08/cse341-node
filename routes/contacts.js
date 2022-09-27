const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

async function main(){

    const uri = "mongodb+srv://joshuafb:W2tyjm42Qb89qLKa@jfb-341.piiehq2.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    try {
        await client.connect();

        await findOneContact(client, "632f86bb70a257238859833a");

        //await listDatabases(client);

        await findAllContacts(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })

}

async function findOneContact(client, id) {
    const result = await client.db("341db").collection("contacts").findOne({'_id': ObjectId(id)});

    if (result) {
        console.log(result);
    }
}

async function findAllContacts(client) {
    const result = await client.db("341db").collection("contacts").find({}).toArray({});

    if(result){
        console.log(result);
    }
}