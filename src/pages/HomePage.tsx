import { useState, useEffect } from "react";

import DefaultLayout from "../layouts/DefaultLayout";
import Card from "../components/elements/Card";

const HomePage = (): JSX.Element => {
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
    </DefaultLayout>
  );
}

export default HomePage;
