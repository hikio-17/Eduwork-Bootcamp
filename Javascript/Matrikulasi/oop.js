class Orang {
   constructor(name, status) {
      this.name = name;
      this.status = status;
   }

   sayHay() {
      console.log('Hello, ' + this.name);
   }
}

class Pekerjaan extends Orang {
   constructor(name, role) {
      super(name);

      this.role = role;
   }
}

const fajri = new Pekerjaan('Fajri', 'Programmer');

console.log(fajri);