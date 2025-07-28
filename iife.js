// IIFE
//  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// EXAMPLE

function chai() {
  console.log(`DB CONNECTION`);
}
chai();

(function chai() {
  // names iife
  console.log(`DB CONNECTION`);
})();

(() => {
  // simple iife
  console.log(`DB CONNECTION`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("sonu");
