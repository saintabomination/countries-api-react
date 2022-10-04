import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Loader from '../components/elements/Loader';

import type { Country } from '../typings/countryTypes';

const CountryPage = (): JSX.Element => {
  const [countryData, setCountryData] = useState<Country | null>(null);
  const [countryDataLoading, setCountryDataLoading] = useState<boolean>(true);
  const { code } = useParams();

  const fetchCountry = async (): Promise<Country> => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const country = await res.json();
    return country[0];
  }

  useEffect(() => {
    fetchCountry().then(country => {
      setCountryData(country);
      setCountryDataLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <DefaultLayout>
      {countryData ? (
        <>
          <h1>{countryData.name?.common}</h1>
          <img src={countryData.flags.png} alt={countryData.name.common} height={96} />
          <p>Population: {countryData.population}</p>
          <p>Top level domain: {countryData.tld}</p>
          <p>Capital: {countryData.capital}</p>
          <p>Currencies: {Object.keys(countryData.currencies).join(', ')}</p>
          <p>Borders: {countryData.borders?.join(', ')}</p>
        </>
      ) : null}
      {countryDataLoading ? (
        <Loader />
      ) : null}
    </DefaultLayout>
  );
}

export default CountryPage;
