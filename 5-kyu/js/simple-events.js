// Simple Events
// https://www.codewars.com/kata/52d3b68215be7c2d5300022f
class Event {
  /**
   * Constructs an Event object.
   * Examples: let event = new Event()
   * @return {Object.<Event>} An observer event.
   */
  constructor() {
    // create a place to store subscribers
    this.callbacks = []
  }
  
  /**
   * Adds a callback function as a subscriber to this event.
   * Examples:
   *   function f() { ... }
   *   let event = new Event();
   *   event.subscribe(f);
   * @param {Function} handler - the function subscribing to this event.
   */
  subscribe(handler) {
    // Add new handlers, ignore if already subscribed
    if (!this.callbacks.includes(handler)) {
      this.callbacks.push(handler);
    }
  }

  /**
   * Removes a callback function from the callback list of this event.
   * Examples:
   *   function f() { ... }
   *   let event = new Event();
   *   event.subscribe(f);
   *   event.unsubscribe(f);
   * @param {Function} handler - the function subscribing to this event.
   */
  unsubscribe(handler) {
    // Find if this handler is on the subscriber list,
    // If so, then remove it from the list
    const index = this.callbacks.indexOf(handler);
    if (0 <= index) {
      this.callbacks.splice(index, 1);
    }
  }
  
  /**
   * Calls the subscribed callback functions with the arguments, if any, passed to emit.
   * Examples:
   *   function f() { ... }
   *   let event = new Event();
   *   event.subscribe(f);
   *   event.emit('abc', 123);
   */
  emit() {
    // Call every subscriber with any arguments provided.
    for (let f of this.callbacks) {
      f(...arguments);
    }
  }
  
};
