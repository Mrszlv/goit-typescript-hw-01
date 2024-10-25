interface User {
  name: string;
  age: number;
  email: string;
  adress?: {
    city: string;
    country: string;
  };
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

const polly: User = {
  name: "Polly",
  age: 28,
  email: "polly@example.com",
  adress: {
    city: "NewYork",
    country: "USA",
  },
};
