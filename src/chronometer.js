class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId.setInterval(() => {
      this.currentTime = this.currentTime + 1;
      printTimeCallback = this.currentTime;
    }, 1);
    return null;
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
  }

  computeTwoDigitNumber(value) {

    if(String.length === 2)

    return
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
