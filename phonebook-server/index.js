const express = require("express");

const app = express();

let persons = [
  {
    name: "Arto1 Hellas1",
    number: "040-87476657",
    id: 1,
  },
  {
    name: "Arto2 Hellas2",
    number: "040-652456",
    id: 2,
  },
  {
    name: "Arto3 Hellas3",
    number: "040-123456",
    id: 3,
  },
  {
    name: "Arto4 Hellas4",
    number: "040-12748234",
    id: 4,
  },
];

const totalContacts = () => {
  return persons.length;
};

app.get("/info", (request, response) => {
  console.log("Request for info");
  response.send(
    `<p>Phonebook has info for ${totalContacts()} people</p><p>${new Date()}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  console.log("Request for all persons");
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  console.log("Request for particular person");
  const id = Number(request.params.id);
  console.log("id:", id);
  const person = persons.find((p) => p.id === id);
  console.log("person:", person);
  if (person) {
    response.json(person)
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id",(request,response)=>{
  console.log("Request to delete");
  const id = Number(request.params.id);
  console.log("id:", id);
  const person = persons.find((p) => p.id === id);
  console.log("person:", person);
  if (person) {
    persons = persons.filter(person=>person.id!==id)  
    console.log("deleted person");
    response.status(204).end();
  } else {
    console.log('person not found');
    response.status(404).end();
  }
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
