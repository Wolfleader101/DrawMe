const shapes = ['square', 'circle', 'rectangle'];
function DetermineArgument() {

  // Run loop to check all arugments
  for(args of UserArgument) {

     //check the users shape
    if (shapes.includes(args)) {
      ShapeObjects[args].Draw();

    } else {

      alert('ERROR USER COMMAND NOT RECOGNIZED')
      console.log('ERROR USER COMMAND NOT RECOGNIZED');
    }
  }
}
