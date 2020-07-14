import { createStore } from 'redux';

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

const initalState = {
  value: 1,
};
const reducer = function (state = initalState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      if (state.value > 8) return state;
      return {
        value: state.value + 1,
      };
    case DECREASE_COUNT:
      if (state.value < 2) return state;
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};

class Counter {
  constructor(id) {
    this.store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    this.container = document.getElementById(id);
    if (this.container == null) throw Error(id + ' 찾을 수 없습니다.');
    this.render();
    this.store.subscribe(() => this.render());
  }
  increase() {
    this.store.dispatch({ type: INCREASE_COUNT });
  }
  decrease() {
    this.store.dispatch({ type: DECREASE_COUNT });
  }
  render() {
    this.container.innerHTML = this.store.getState().value;
  }
}

const counter = new Counter('digit-number');
document.getElementById('minus-btn').addEventListener('click', (e) => {
  counter.decrease();
});
document.getElementById('plus-btn').addEventListener('click', (e) => {
  counter.increase();
});
