import DefaultLayout from "../layouts/DefaultLayout";
import Card from "../components/elements/Card";

const HomePage = (): JSX.Element =>
  (
    <DefaultLayout>
      <h1>Home</h1>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
    </DefaultLayout>
  );

export default HomePage;
