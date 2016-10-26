import bPromise from 'bluebird';

export default (value) => {
  // Between 0 and 5 secs
  const msToWait = Math.random() * 5000;
  return bPromise.delay(msToWait).then(() => value);
};
