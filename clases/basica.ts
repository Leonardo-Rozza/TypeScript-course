(() => {
  class Avenger {
    // private name: string;
    // public realName?: string;
    // public team: string;
    static ageProm: number = 35;
    static avgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    private bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const atman: Avenger = new Avenger("Atman", "Capitan", "Scott Lang");
  //console.log(atman);

  //console.log(atman.bio());
  //console.log(Avenger.avgAge());
})();
