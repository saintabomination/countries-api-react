import { useState, useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import Icon from '../components/elements/Icon';
import Input from '../components/elements/Input';
import Collection from '../components/elements/Collection'
import Card from '../components/elements/Card';
import Loader from '../components/elements/Loader';

import type { ChangeEvent } from 'react';

import type { Country } from '../typings/countryTypes';

const HomePage = (): JSX.Element => {
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [countryDataLoading, setCountryDataLoading] = useState<boolean>(true);
  const [countryQuery, setCountryQuery] = useState<string>('');

  const fetchCountries = async (): Promise<Country[]> => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json();
    return countries;
  }

  useEffect(() => {
    fetchCountries().then(countries => {
      setCountryData(countries);
      setCountryDataLoading(false);
    });
  }, []);

  const filteredCountries = countryData.filter(
    country =>
    country.name.common.toLowerCase().includes(countryQuery.toLowerCase())
  );

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Icon name="paper-plane" type="fas" />
      <Input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCountryQuery(e.target.value)}
        defaultValue={countryQuery}
      />
      <Collection>
        {!countryDataLoading ? filteredCountries && filteredCountries.map((country, index) => (
          <Card key={index}>
            <img src={country.flags.png} alt={country.name.common} height={48} />
            <p>{country.name.common}</p>
          </Card>
        )) : (
          <Loader />
        )}
      </Collection>
    </DefaultLayout>
  );
}

export default HomePage;
