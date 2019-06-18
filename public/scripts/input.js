function SubmitInput() {
  let Input = document.getElementById("DrawInput").value;
  const acceptedWords = ['draw', 'create', 'make', 'square', 'destroy'];
  const commands = ['draw', 'create', 'make', 'destroy'];
  const arguments = ['square'];

  // Filter out the useless words. FilteredWords is now the words we keep
  FilteredWords = Input.split(' ').filter(word => acceptedWords.includes(word));
  console.log(FilteredWords); // make sure its working

//convert filtered words to lowercase
FilteredWords.map(v => v.toLowerCase());

  // check what the command is (e.g draw) then the argument (e.g square)
    var Usercmds = FilteredWords.filter(x => commands.includes(x));
    console.log(Usercmds);

  //check for first command then set variable
  //check for first argument set variable
    //run the command (e.g Draw the square)
  //Now delete those words from array using  .shift()
  //loop until no words left.
  //Each command needs an argument and aeach argument requires a command otherwise delete

}




// DO NOT USE
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
