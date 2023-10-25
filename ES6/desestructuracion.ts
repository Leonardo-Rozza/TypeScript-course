(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  // const { vision, activo, poder } = avengers;

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  };

  printAvenger(avengers);

  const avengersArr = ["Ironman", "Hulk", "Loki", "Thor"];

  const [ironman] = avengersArr;

  console.log(ironman);
})();
