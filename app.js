class Counter {
  constructor(id) {
    this.value = 1;
    this.container = document.getElementById(id);
    if (this.container == null) throw Error(id + " 찾을 수 없습니다.");
    this.render();
  }
  increase() {
    if (this.value > 8) return this.value;
    this.value += 1;
    this.render();
    return this.value;
  }
  decrease() {
    if (this.value < 2) return this.value;
    this.value -= 1;
    this.render();
    return this.value;
  }
  render() {
    this.container.innerHTML = this.value;
  }
}

const counter = new Counter("digit-number")
document.getElementById("minus-btn")
  .addEventListener('click', e => {
    counter.decrease();
  })
document.getElementById("plus-btn")
  .addEventListener('click', e => {
    counter.increase();
  })