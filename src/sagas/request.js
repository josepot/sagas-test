import { call, put } from 'redux-saga/effects';
import {
  REQUEST_STARTED,
  REQUEST_SUCCEED,
  REQUEST_ERRORED,
} from '../actions';

export default function* (callArgs, meta) {
  yield put({ type: REQUEST_STARTED, meta });
  try {
    const response = yield call(...callArgs);
    yield put({ type: REQUEST_SUCCEED, payload: response, meta });
  } catch (err) {
    yield put({ type: REQUEST_ERRORED, payload: err, meta });
  }
};
