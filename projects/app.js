const { ajouterContact, listerContacts } = require("./contactService");
const formaterContact = require("./utils/format");

ajouterContact("alice", "060002524");
ajouterContact("islam", "0709381488");

listerContacts().forEach(c => console.log(formaterContact(c)));
