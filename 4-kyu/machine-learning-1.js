// The learning game - Machine Learning #1
// https://www.codewars.com/kata/5695995cc26a1e90fe00004d

function Machine() {
  this.numActions = ACTIONS().length;
  
  // Keep this in memory until we get a response
  this.pending = {
    command: -1,
    action: -1
  }
  
  this.data = {};
  
  this.rollAction = () => {
    // Consts for readability
    const roll = () => ~~(Math.random() * this.numActions);
    const badActions = this.data[this.pending.command].badActions;
    
    // Roll an action that hasn't had a negative response from the current command
    let action = roll();
    while(badActions.includes(action)) {
      action = roll();
    }
    
    // Store the current action
    this.pending.action = action;
    return action;
  }
  
  return {
    command: (cmd, num) => {
      
      console.log(cmd, num, this.data)
      
      // If we haven't seen this command before, then initialize it in our data
      if (!(cmd in this.data)) {
        this.data[cmd] = { badActions: [] };
      }
      
      // Store the current command
      this.pending.command = cmd;
      
      // Get a random action
      let action = this.rollAction();
      
      // Get all the actions
      // Select the action to try
      // Pass the input to that action
      console.log(`${action}(${num}) -> ${ACTIONS()[action](num)}`);
      return ACTIONS()[action](num);
      
    },
    response: resp => {
      if (!resp) {
        console.log(`Command ${this.pending.command} shouldn't run action ${this.pending.action}`);
        this.data[this.pending.command].badActions.push(this.pending.action);
        return;
      }
      console.log(`Command ${this.pending.command} responded well with action ${this.pending.action}, but it could be a false positive`);
    }
  };
}
