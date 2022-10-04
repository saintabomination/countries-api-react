import { useState, useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
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

  return (
    <DefaultLayout>
      <h1>Home</h1>
      {countryData.map(country => (
        <Card>
          {country.name.common}
        </Card>
      ))}
    </DefaultLayout>
  );
}

export default HomePage;
