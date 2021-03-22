import numbersService from "../services/numbers";

const DeleteButton = ({id, persons, setPersons}) => {
  return(
    <button
          onClick={() => {
            if (window.confirm(`are you sure?`)) {
              numbersService.deleteNumber(id);
              setPersons(persons.map(person => person.id !== id))
            }
          }}
        >
          delete
        </button>
  )
}

const Persons = ({ persons, setPersons, filter }) => {
  let people = "";
  if (filter === "") {
    people = persons.map((person) => (
      <p key={person.name}>
        {person.name} : {person.number}{" "}
        <button
          onClick={() => {
            if (window.confirm(`are you sure?`)) {
              numbersService.deleteNumber(person.id).then(err => {
                console.log(err)
                setPersons(persons.filter(p => p.id !== person.id))
                })
            }
          }}
        >
          delete
        </button>
      </p>
    ));
  } else {
    people = persons.filter(({ name, number }) => {
      if (name.toLowerCase().includes(filter.toLowerCase())) return true;
      else return false;
    });
    people = people.map((person) => (
      <p key={person.name}>
        {person.name} : {person.number}{" "}
        <button
          onClick={() => {
            if (window.confirm(`are you sure?`)) {
              numbersService.deleteNumber(person.id).then(err => {
                console.log(err)
                if(err==={}) {
                  setPersons(persons.map(p => p.id !== person.id))
                }
                })
            }
          }}
        >
          delete
        </button>
      </p>
    ));
  }
  return <div>{people}</div>;
};

export default Persons;
