const Persons = ({ persons, filter }) => {
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

export default Persons;