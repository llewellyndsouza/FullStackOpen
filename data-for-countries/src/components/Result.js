import CountryDetails from "./CountryDetails";

const Result = ({ countries, search }) => {
  if (search === "") {
    return <p>Enter a name to begin - case insensitive</p>;
  } else {
    const filterList = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filterList);

    if (filterList.length === 1) {
      return (
        <div>
          <CountryDetails country={filterList[0]} />
        </div>
      );
    } else {
      return (
        <div id="container">
          {filterList.map((country) => (
            <p key={country.alpha3Code}>
              {country.name}
              <button>Show</button>
            </p>
          ))}
        </div>
      );
    }
  }
};

export default Result;
