# First-App Node.js Project

## Overview
This project is a set of Node.js exercises designed to explore **modularity, module.exports, and require()**.  
It includes small utilities, testing modules, and a CLI contact manager to practice Node.js module concepts.

---

## Folder Structure


---

## Modules and Responsibilities

### 1. `app.js` (root)
- Demonstrates:
  - Declaring functions and constants
  - Using modules (`require`)
  - Executing functions

### 2. `test.js`
- Explores Node.js internal mechanics:
  - `module` object
  - `__filename` and `__dirname`
  - `exports` vs `module.exports`

### 3. `utilities/greet.js`
- Provides utility functions:
  - `saluer(nom)` → returns a greeting string
  - `direAuRevoir(nom)` → returns a goodbye string  
- **Note:** Only one function can be exported at a time.

### 4. `projects/app.js`
- CLI entry point for the contact manager
- Uses `contactService` to add contacts
- Uses `utils/format.js` to display contacts

### 5. `projects/contactService.js`
- Manages the contacts data:
  - `ajouterContact(nom, telephone)` → adds a contact
  - `listerContacts()` → returns all contacts

### 6. `projects/utils/format.js`
- Formats contact objects for display:
```js
{name} -> {telephone}
