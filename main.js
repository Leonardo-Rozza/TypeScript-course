"use strict";
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
    console.log(atman.bio());
    console.log(Avenger.avgAge());
})();
//# sourceMappingURL=main.js.map