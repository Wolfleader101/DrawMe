// Defined so other scripts can access these variables
var UserArgument;
var Usercmds;
var commands;

// All 2d shapes
const shapes = ['square', 'circle', 'rectangle', 'semicircle'];

function SubmitInput() {
  let Input = document.getElementById("DrawInput").value;
  Input = Input.toLowerCase();

  // create variable with combines create and destroy arrays
  const commands = Create.concat(Destroy);

  // create acceptedWords variable that combines the shapes and commands array
  const acceptedWords = commands.concat(shapes);

  // Filter out the useless words. FilteredWords is now the words we keep
  let FilteredWords = Input.split(' ').filter(word => acceptedWords.includes(word));

  /* These are purely for testing */
  console.log("%cThe Filtered words:", "color: aqua;");
  console.log(FilteredWords);

  // check the users commands (e.g draw)
  Usercmds = FilteredWords.filter(cmd => commands.includes(cmd));

   /* These are purely for testing */
    console.log("\n" + "%cThe User's Commands", "color: aqua;");
    console.log(Usercmds); 

  // check the users arguments (e.g square)
  UserArgument = FilteredWords.filter(arg => shapes.includes(arg));

   /* These are purely for testing */
  console.log("\n" + "%cThe User's Arguments", "color: aqua;");
  console.log(UserArgument); 

  // run code to determine shape
  let d = new DetermineShape(Usercmds, UserArgument);
  d.DetermineCommand();

   //run the command (e.g Draw the square)
  //Now delete those words from array using  .shift()
  //Each command needs an argument and each argument requires a command otherwise delete
  //if the command has another command after it. delete it.
  //loop until no words left.
  }
