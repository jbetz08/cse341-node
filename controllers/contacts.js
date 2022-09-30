const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;




const findAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};


const findOneContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};



// const createContact = async (req, res) => {
//     const contact = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       favoriteColor: req.body.favoriteColor,
//       birthday: req.body.birthday
//     };
//     const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
//     if (response.acknowledged) {
//       res.status(201).json(response);
//     } else {
//       res.status(500).json(response.error || 'Some error occurred while creating the contact.');
//     }
//   };

const createOneContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the contact.');
    }
};

async function createNewContact(client, contact) {
    const result = await client.db("341db").collection("contacts").insertOne(contact);

    console.log(`New contact created with the following ID: ${result.insertedId}`);
}

async function updateContactById(client, id, updatedContact) {
    const result = await client.db("341db").collection("contacts").updateOne({ '_id': ObjectId(id) }, { $set: updatedContact });

    console.log(`Status: ${result.status}.send()`);
}

async function deleteContactByName(client, name) {
    const result = await client.db("341db").collection("contacts").deleteOne({fistName: name});

    console.log(`Status: ${result.httpStatus}`);

}