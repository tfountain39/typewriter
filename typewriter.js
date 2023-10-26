// #typewriter

// Sentence to print
const sentence = "hello there from lighthouse labs";
// Initialize index variable as counter
let index = 0

// Loop each index
for (const char of sentence) {
  // 
  setTimeout(function() {
    // use process.stdout.write on each character to have them appear in the same line
    process.stdout.write(char)
    // Delay by 50 ms per character
  }, index * 50);
  // increment
  index++;  
}

// After all iterations are done, add a newline based on delay
setTimeout(function() {
  process.stdout.write('\n');
}, sentence.length * 50);