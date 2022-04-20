// based of Daniel Shiffman's code from
// https://github.com/CodingTrain/website/blob/main/Courses/programming_with_text/session03/3-01_rita_js/sketch.js

let input;
let button;

let lexicon;

function setup() {
  noCanvas();
  lexicon = new RiLexicon(); // let's use some of the RiTa vocabulary
  input = createInput('Gimme some of that chocolate chip cookie ice cream');
  input.changed(goRita);
  
  button = createButton('click me');
  button.size(100,100);
  button.position(50,80);
  button.mouseClicked(goRita);
  input.size(600);
}

function draw() {
  // put drawing code here
}

function goRita(){
  let s = input.value();
  let rs = new RiString(s);
  let words = rs.words();
  let pos = rs.pos();
  console.log(pos);
  console.log(words);

  let output = '';

  for(let i = 0; i < words.length; i++){

    //if(pos[i] === 'nn'){
    if(/nn.*/.test(pos[i])) {
      
      // output += lexicon.randomWord('nn');
    output += lexicon.randomWord(pos[i]);
    } else {
      output += words[i];
     
    }
     output += ' ' ;
  }
  createP(output); // creates a HTML paragraph tag
  
}

















