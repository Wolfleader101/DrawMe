



function SubmitInput() {
  let Input = document.getElementById("DrawInput").value;
  let acceptedWords = ['Draw', 'Create', 'Make',]

  Input = Input.split(' ').filter(word => !acceptedWords.includes(word))

  console.log(Input);
  
  if (Input.toLowerCase() === "draw" || Input.toLowerCase() === "create") {
    if (Input.toLowerCase() === "square") {

      square.DrawSquare();

    }  else {

      alert("Incorrect Format")
    }
  } else {

    alert("Follow the guide!")
  }
}



/* 

let command, argument;

for(const word of arrayFromBefore) {
    if(commands.includes(word)) command = word;
    if(args.includes(word) && command) argument = word;

    if(command && argument) {
        runCommand(command, argument);
        command = null;
        argument = null;
    }
}
*/
