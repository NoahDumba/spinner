const symbols = ['|', '/', '-', '\\', '|'];
let timer = 100;

for (let symbol of symbols) {
  //console.log(symbol);
  setTimeout(() => {
    process.stdout.write(`\r${symbol} `);
  }, timer);
  timer += 200;
}
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);