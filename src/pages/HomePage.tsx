import { useState, useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import Collection from '../components/elements/Collection';
import Card from '../components/elements/Card';

import type { Country } from '../typings/countryTypes';

const HomePage = (): JSX.Element => {
  const [countryData, setCountryData] = useState<Country[]>([]);

  const fetchCountries = async (): Promise<Country[]> => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json();
    return countries;
  }

  useEffect(() => {
    fetchCountries().then(countries => setCountryData(countries));
  }, []);

  console.log(countryData);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Collection>
        {countryData.map((country, index) => (
          <Card key={index}>
            <img src={country.flags.png} alt={country.name.common} height={48} />
            <p>{country.name.common}</p>
          </Card>
        ))}
      </Collection>
    </DefaultLayout>
  );
}

export default HomePage;
