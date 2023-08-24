let kelereng = 'kuning'; // Global Scope

function sebuahFunction() {
   let kelereng = 'merah'; // Local Scope

   return function functionDiDalam() {
      console.log(kelereng); // Lexical Scope
   }

   functionDiDalam();
}

console.dir(sebuahFunction());