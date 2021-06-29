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
    if (this.data.length === this.length) this.resize();
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
    this.length--;
    return ele;
  }

  unshift(val) {
    if (this.data.length === this.length) this.resize();
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (val == this.data[i]) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    let newArr = new Array(this.data.length * 2);

    for (let i = 0; i < this.data.length; i++) {
      newArr[i] = this.data[i];
    }

    this.data = newArr;
    this.capacity = this.data.length;
  }
}

module.exports = DynamicArray;
