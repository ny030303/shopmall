export const setObserverVisibility = (element, callback) => {
  let intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => callback(entry.intersectionRatio > 0));
  });
  intersectionObserver.observe(element);
};

const getCallerClassName= () => {
  let callerClass = (new Error()).stack.split("\n")[3].trim().split(" ")[1];
  return callerClass.indexOf('.') > 0 ? callerClass.substr(0, callerClass.indexOf('.')) : callerClass;
};

class EventService {
  constructor() {
    this.callbacks = {};
  }

  emitEvent(eventName, data = null) {
    if (this.callbacks[eventName]) {
      Object.keys(this.callbacks[eventName]).forEach((id) => {
        this.callbacks[eventName][id](data);
      });
    }
  }

  listenEvent(eventName, callback) {
    let callerClass = getCallerClassName();
    console.log(`listenEvent: ${eventName} - ${callerClass}`);
    this.callbacks[eventName] = Object.assign(this.callbacks[eventName] || {}, {[callerClass]: callback});
  }

  unlistenEvent(eventName) {
    let callerClass = getCallerClassName();
    console.log(`listenEvent: ${eventName} - ${callerClass}`);
    if( this.callbacks[eventName] ) {
      delete this.callbacks[eventName][callerClass];
    }
  }
}

const eventService = new EventService;

export default eventService;