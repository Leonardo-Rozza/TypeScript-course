(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo está salvado`;

  let myFunction: any;
  //let myFunction: (a: number, b: number) => number;
  //let myFunction: (a:string) => string;
  //let myFunction: () => void;

  myFunction: myFunction = 10;
  console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(2, 4));

  myFunction = greet;
  console.log(myFunction("Leonardo"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
