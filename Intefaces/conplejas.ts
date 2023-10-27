(() => {
  interface Cliente {
    name: string;
    age: number;
    adress: Adress;
    getFullAdress(id: string): void;
  }

  interface Adress {
    city: string;
    id: number;
    zip: string;
  }

  const client: Cliente = {
    name: "Leonardo",
    age: 27,
    adress: {
      city: "Buenos Aires",
      id: 2255,
      zip: "LA25L3",
    },
    getFullAdress() {
      return "Hola, que tal tu ciomo estas?";
    },
  };
})();
