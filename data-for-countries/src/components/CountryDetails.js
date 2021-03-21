const CountryDetails = ({country}) => {

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>laguages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" style={{width: "200px"}} />
      <h3>Weather</h3>
      <p><strong>temp:</strong>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
      <p><strong>wind:</strong>{"26 mph direction SSW"}</p>
    </div>
  );
};

export default CountryDetails;
