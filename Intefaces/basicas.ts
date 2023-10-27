(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry",
    age: 24,
    powers: ["Velocidad", "Viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Klar",
    age: 62,
    powers: ["Velocidad", "Vision nocturna"],
    getName() {
      return this.name;
    },
  };
})();
