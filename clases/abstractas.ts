(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo salvado";
    }
  }
  class Villan extends Mutante {
    destruitMundo() {
      return "Mundo destruido";
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villan("Magneto", "Magnus");

  console.log(wolverine.salvarMundo());
  console.log(magneto.destruitMundo());

  const printName = (caracter: Mutante) => {
    console.log(caracter.realName);
  };

  printName(magneto);
})();
