const Shape = ['square', 'circle', 'box'];

const sSquare = "square";
const sCircle = "circle";

function DetermineArgument() {

  // Run loop to check all arugments
  for(args of UserArgument) {

     //check the users shape
    if (sSquare.includes(args)) {

      console.log("Square")

    } else if (sCircle.includes(args)) {

      console.log("Circle")

    } else {

      alert('ERROR USER COMMAND NOT RECOGNIZED')
      console.log('ERROR USER COMMAND NOT RECOGNIZED');
    }
  }
}