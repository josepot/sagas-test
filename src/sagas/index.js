import { call, fork, take, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { MAIN_BUTTON_PRESSED, CANCEL_BUTTON_PRESSED } from '../actions';
import beforeAfter from './before-after';

export default function* () {
  yield fork(watchMain);
}

function* watchMain() {
  yield takeLatest(MAIN_BUTTON_PRESSED, mainTask);
};

function* mainTask() {
  const bars = [1, 2, 3, 4, 5, 6];
  const foos = ['a', 'b', 'c'];
  const task = yield fork(runBarsAndFoos, bars, foos);
  try {
    yield take(CANCEL_BUTTON_PRESSED);
  } finally {
    if (task.isRunning()) yield cancel(task);
  }
}

function* runBarsAndFoos(bars, foos) {
  yield bars.reduce((prev, bar) =>
    prev.concat(foos.map(foo => ({ bar, foo }))),
    []
  ).map(fooBar => call(beforeAfter, fooBar));
}
