import numbersService from "../services/numbers";

const PersonForm = (props) => {
  const [
    persons,
    setPersons,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
  ] = props.tools;

  const addNew = (e) => {
    e.preventDefault();

    const newContact = {
      name: newName,
      number: newNumber,
    };

    let duplicate = "";
    duplicate = persons.find(({ name }) => name === newName);
    console.log(duplicate);

    if (duplicate) {
      if (
        window.confirm(
          `The name ${newName} already exists. WOuld you like to replace the old number with a new one?`
        )
      ) {
        numbersService
          .updateNumber(duplicate.id, newContact)
          .then((updatedContact) => {
            setPersons(
              persons.map((p) => (p.id !== duplicate.id ? p : updatedContact))
            );
          });
      }
    } else {
      numbersService
        .addNew(newContact)
        .then((contact) => setPersons(persons.concat(contact)));
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
