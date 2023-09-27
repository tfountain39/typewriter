const sentence = "hello there from lighthouse labs";
let index = 0

for (const char of sentence) {
  setTimeout(function() {
    process.stdout.write(char)
  }, index * 50);
  index++;  
}

setTimeout(function() {
  process.stdout.write('\n');
}, sentence.length * 50);