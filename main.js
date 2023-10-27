"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
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
    const printName = (caracter) => {
        console.log(caracter.realName);
    };
    printName(magneto);
})();
(() => {
    class Avenger {
        static avgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.ageProm = 35;
    const atman = new Avenger("Atman", "Capitan", "Scott Lang");
})();
//# sourceMappingURL=main.js.map