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
          <h1>{filterList[0].name}</h1>
          <p>capital {filterList[0].capital}</p>
          <p>population {filterList[0].population}</p>
          <h3>laguages</h3>
          <ul>
            {filterList[0].languages.map(language => (<li key={language.iso639_1}>{language.name}</li>))}
          </ul>
          <img src={filterList[0].flag} alt="flag" />
        </div>
      );
    } else {
      return (
        <div>
          {filterList.map((country) => (
            <p key={country.alpha3Code}>{country.name}</p>
          ))}
        </div>
      );
    }
  }
};

export default Result;
