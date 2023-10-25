(() => {
  type Avengeer = {
    name: string;
    wapon: string;
  };

  const ironman: Avengeer = {
    name: "Ironman",
    wapon: "Armadura",
  };
  const capAmerica: Avengeer = {
    name: "Capitan America",
    wapon: "Escudo",
  };
  const thor: Avengeer = {
    name: "Thor",
    wapon: "Martillo",
  };

  const avengers: Avengeer[] = [ironman, capAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.wapon);
  }
})();
