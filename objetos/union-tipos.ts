(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Leonardo";
  console.log(typeof myCustomVariable);

  myCustomVariable = 27;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Leonardo",
    age: 27,
    powers: ["Lala"],
  };
  console.log(typeof myCustomVariable);
})();
