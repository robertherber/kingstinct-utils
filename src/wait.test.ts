import wait from './wait';

test('Should wait', async () => {
  jest.useFakeTimers();

  const dowork = jest.fn();

  const doworkAfterPromise = async (): Promise<void> => {
    await wait(1000);
    dowork();
  };

  const workDone = doworkAfterPromise();

  expect(dowork).not.toBeCalled();
  jest.advanceTimersByTime(1000);
  await workDone;
  expect(dowork).toBeCalled();
});
