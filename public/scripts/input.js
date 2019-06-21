function SubmitInput() {
  let Input = document.getElementById("DrawInput").value;
  Input = Input.toLowerCase();
  const acceptedWords = ['draw', 'create', 'make', 'square', 'destroy'];
  const commands = ['draw', 'create', 'make', 'destroy'];
  const arguments = ['square', 'circle', 'box'];

  // Filter out the useless words. FilteredWords is now the words we keep
  FilteredWords = Input.split(' ').filter(word => acceptedWords.includes(word));
  console.log("%cThe Filtered words:", "color: aqua;");  
  console.log(FilteredWords); // make sure its working

  // check the users commands (e.g draw)
    var Usercmds = FilteredWords.filter(x => commands.includes(x));
    console.log("\n" + "%cThe User's Commands", "color: aqua;");
    console.log(Usercmds); // make sure its working

  // check the users arguments (e.g square)
  var UserArgument = FilteredWords.filter(y => arguments.includes(y));
  console.log("\n" + "%cThe User's Arguements", "color: aqua;");
  console.log(UserArgument); // make sure its working
    
  // Run loop until all commands done
  for(i = 0; i < Usercmds.length; i++) {

    // Check if User Commands are create
    if(Usercmds.filter(z => Create.includes(z))) {
      // check the argument

    // if they aren't check if they are destroy
    } else if (Usercmds.filter(z => Destroy.includes(z))) {
      //check the argument
      
    // if it is neither assume error
    } else {
      alert('ERROR USER COMMAND NOT RECOGINIZED')
      console.log('ERROR USER COMMAND NOT RECOGINIZED');
    }

  }

  
    //run the command (e.g Draw the square)
  //Now delete those words from array using  .shift()
  //Each command needs an argument and aeach argument requires a command otherwise delete
  //if the command has another command after it. delete it.
  //loop until no words left.
  

}




// DO NOT USE
/* 

let command, argument;

for(const word of arrayFromBefore) {
    if(commands.includes(word)) command = word;g
    if(args.includes(word) && command) argument = word;

    if(command && argument) {
        runCommand(command, argument);
        command = null;
        argument = null;
    }
}
*/
