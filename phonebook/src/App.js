import React, { useState } from "react";

const Contacts = ({ persons, filter }) => {
  let people = "";
  if (filter === "") {
    people = persons.map((person) => (
      <p key={person.name}>
        {person.name} : {person.number}
      </p>
    ));
  } else {
    people = persons.filter(({ name, number }) => {
      if (name.includes(filter)) return true;
      else return false;
    });
    people = people.map((person) => (
      <p key={person.name}>
        {person.name} : {person.number}
      </p>
    ));
  }
  return <div>{people}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const addNew = (e) => {
    e.preventDefault();

    const newContact = {
      name: newName,
      number: newNumber,
    };

    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newContact));
    }

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input
          value={newFilter}
          onChange={(e) => {
            setNewFilter(e.target.value);
          }}
        />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addNew}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => {
              setNewNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons} filter={newFilter} />
    </div>
  );
};

export default App;
