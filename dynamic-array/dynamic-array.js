class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    if (index > this.length) return false;

    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    let ele = this.data[this.length - 1];

    this.data[this.length - 1] = null;
    this.length--;

    return ele;
  }

  shift() {
    let ele = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--
    return ele;
  }

  unshift(val) {
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    // Your code here
  }

  resize() {
    // Your code here
  }
}

module.exports = DynamicArray;
