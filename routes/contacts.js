const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.findAllContacts);

router.get('/:id', contactsController.findOneContact);

router.post('/', contactsController.createOneContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;





const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

async function main(){

    const uri = "mongodb+srv://joshuafb:W2tyjm42Qb89qLKa@jfb-341.piiehq2.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    try {
        await client.connect();

        //await findAllContacts(client);

        //await findOneContact(client, "632f86bb70a257238859833a");

        // await createNewContact(client, {
        //     firstName: "Tristin",
        //     lastName: "Farrow",
        //     email: "tf@aol.com",
        //     favoriteColor: "red",
        //     birthday: "12/11/2001"
        // });

        await updateContactById(client, "632f86bb70a257238859833a", {favoriteColor: "salmon"});

        await deleteContactByName(client, "Zack");

        

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

