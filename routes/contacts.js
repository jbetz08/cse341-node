const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.findAllContacts);

router.get('/:id', contactsController.findOneContact);

router.post('/', contactsController.createOneContact);

router.put('/:id', contactsController.updateWholeContact);

router.delete('/:id', contactsController.deleteWholeContact);

module.exports = router;
