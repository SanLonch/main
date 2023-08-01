class Accumulator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}

class CancelableAccumulator extends Accumulator {
    constructor(initialValue) {
      super(initialValue);
      this.initialValue = initialValue;
    }
  
    clear() {
      this.value = this.initialValue;
    }
  }

const accumulator = new Accumulator(5);
console.log(accumulator.value);

accumulator.increment();
console.log(accumulator.value);

accumulator.decrement();
console.log(accumulator.value);

const cancelableAccumulator = new CancelableAccumulator(10);
console.log(cancelableAccumulator.value);

cancelableAccumulator.increment();
console.log(cancelableAccumulator.value);

cancelableAccumulator.clear();
console.log(cancelableAccumulator.value);
