import { call } from 'redux-saga/effects';
import delayedSelfReturn from '../api/delayed-self-return';
import requestSequence from './request';

export default function* (fooBar) {
  yield [
    call(requestSequence, [delayedSelfReturn, { type: 'before' }], fooBar),
    call(requestSequence, [delayedSelfReturn, { type: 'after' }], fooBar),
  ];
}
