export type Country = {
  name: {
    common: string;
    official: string;
  };
  region: string;
  population: number;
  capital: string;
  languages: {
    [x:string]: string;
  };
  currencies: {
    [x:string]: {
      name: string;
    }[];
  };
  flags: {
    png: string;
    svg: string;
  };
  borders: string[];
  tld: string;
  cca3: string;
};
