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
};