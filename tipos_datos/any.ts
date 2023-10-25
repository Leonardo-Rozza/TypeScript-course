(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr. Strange";

  console.log((avenger as string).charAt(1)); //Tipo de casteo

  avenger = 25.13522;

  console.log(<number>avenger.toFixed(2)); //Otro tipo de Casteo.
})();
