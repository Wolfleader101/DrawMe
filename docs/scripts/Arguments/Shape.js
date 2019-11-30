class Shape {
  cmd;
  args;

  DetermineCommand() {
    // Run loop until all commands done
    for(this.cmd of Usercmds) {

      // Check if User Commands are create
      if(Create.includes(this.cmd)) {
        // check the argument
        this.DetermineArgument();

        // if they aren't check if they are destroy
      } else if(Destroy.includes(this.cmd)) {
        //check the argument
        this.DetermineArgument();

      } else {
        alert(`Error: The User Command ${this.cmd} was not found`);
        console.log("\n" + `%cError: The User Command ${this.cmd} was not found`, "color: red;");
      }
    }
  }
  DetermineArgument() {
    // Run loop to check all arguments
    for(this.args of UserArgument) {

      //check the users shape
      if (shapes.includes(this.args)) {
        ShapeObjects[this.args].Draw();

      } else {

        alert(`Error: The User Argument ${this.args} was not found`);
        console.log("\n" + `%cError: The User Argument ${this.args} was not found`, "color: red;");
      }
    }
  }

}