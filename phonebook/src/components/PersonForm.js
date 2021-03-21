const PersonForm = (props) => {
  const [persons, setPersons, newName, setNewName, newNumber, setNewNumber] = props.tools;
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
  );
};

export default PersonForm;