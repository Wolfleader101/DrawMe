// Defined so other scripts can access these variables
var UserArgument;
var Usercmds;
var arguments;
var commands;

function SubmitInput() {
  let Input = document.getElementById("DrawInput").value;
  Input = Input.toLowerCase();
  commands = ['draw', 'create', 'make', 'destroy', 'delete'];
  arguments = ['square', 'circle', 'rectangle'];
  const acceptedWords = commands.concat(arguments);

  // Filter out the useless words. FilteredWords is now the words we keep
  FilteredWords = Input.split(' ').filter(word => acceptedWords.includes(word));
  console.log("%cThe Filtered words:", "color: aqua;");  
  console.log(FilteredWords); // make sure its working

  // check the users commands (e.g draw)
  Usercmds = FilteredWords.filter(x => commands.includes(x));
    console.log("\n" + "%cThe User's Commands", "color: aqua;");
    console.log(Usercmds); // make sure its working

  // check the users arguments (e.g square)
  UserArgument = FilteredWords.filter(y => arguments.includes(y));
  console.log("\n" + "%cThe User's Arguments", "color: aqua;");
  console.log(UserArgument); // make sure its working
    
  // Run loop until all commands done
    for(cmd of Usercmds) {

      // Check if User Commands are create
      if(Create.includes(cmd)) {
        // check the argument
        DetermineArgument();
        
      // if they aren't check if they are destroy
      } else if(Destroy.includes(cmd)) {
        //check the argument
        DetermineArgument();

      } else {
        alert('ERROR USER COMMAND NOT RECOGNIZED')
        console.log('ERROR USER COMMAND NOT RECOGNIZED');
      }
    }
   //run the command (e.g Draw the square)
  //Now delete those words from array using  .shift()
  //Each command needs an argument and aeach argument requires a command otherwise delete
  //if the command has another command after it. delete it.
  //loop until no words left.
  }
 