const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map(function(line)) {
//   }
// }

function titleCased() {
  return tutorials.map(function(line) {
    const lineChunks = line.split(" ");
    console.log("Chunks:", lineChunks);
  });
}

titleCased()

  
//   // return new array with case tutorial names ... use map()
// const newtutorials = tutorials.map(f())
  
//   // access each word in turtorials --- how to sperate ... splite (" ")
//   //feed tutorial lines info function that creates small chucks

// const lineChunks = line.split(" ");
//   // iteration second time ... what data is here?

//   // capitalize first letter of each word
//   // function that takes word first letter capitlaize it and concatenate with slice

// function capitalizeFirstLetter(word) {
//   return word.charAt(0).uppercase() + word.slice(1);

//  const orignalLine = "what does the this keyword mean?"
