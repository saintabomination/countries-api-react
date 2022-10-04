import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Icon from '../components/elements/Icon';
import Input from '../components/elements/Input';
import Collection from '../components/elements/Collection'
import Card from '../components/elements/Card';
import Loader from '../components/elements/Loader';
import { setCountries } from '../redux/slices/dataSlice';

import type { ChangeEvent } from 'react';

import type { RootState } from '../redux/store';
import type { Country } from '../typings/countryTypes';

const HomePage = (): JSX.Element => {
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [countryDataLoading, setCountryDataLoading] = useState<boolean>(true);
  const [countryQuery, setCountryQuery] = useState<string>('');
  const { countries } = useSelector((state: RootState) => state.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchCountries = async (): Promise<Country[]> => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json();
    return countries;
  }

  useEffect(() => {
    !countries || countries.length === 0 ? fetchCountries().then(countries => {
      console.log('fetch');
      setCountryData(countries);
      setCountryDataLoading(false);
      dispatch(setCountries(countries));
    }) : (() => {
      setCountryData(countries);
      setCountryDataLoading(false);
    })();
  }, []);

  const filteredCountries = countryData.filter(
    country =>
    country.name.common.toLowerCase().includes(countryQuery.toLowerCase())
  );

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Input
        icon={<Icon name="magnifying-glass" type="fas" size={0.8} />}
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCountryQuery(e.target.value)}
        defaultValue={countryQuery}
      />
      <Collection>
        {!countryDataLoading ? filteredCountries && filteredCountries.map((country, index) => (
          <Card key={index}>
            <img src={country.flags.png} alt={country.name.common} height={48} />
            <div>
              <Icon name="flag" type="fas" />
              <span>{country.name.common}</span>
            </div>
            <div>
              <Icon name="earth-americas" type="fas" />
              <span>{country.region}</span>
            </div>
            <div>
              <Icon name="user" type="fas" />
              <span>{country.population}</span>
            </div>
            <button onClick={() => navigate(`/country/${country.cca3.toLowerCase()}`)}>View</button>
          </Card>
        )) : (
          <Loader />
        )}
      </Collection>
    </DefaultLayout>
  );
}

export default HomePage;
