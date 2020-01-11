import isFunction from './isFunction';

test('Should not see object as a function', () => {
  expect(isFunction({})).toBeFalsy();
});

test('Should see shorthand function as function', () => {
  expect(isFunction(() => {})).toBeTruthy();
});

test('Should see verbose function as function', () => {
  function hello(): void {}
  expect(isFunction(hello)).toBeTruthy();
});

test('Should not see number as function', () => {
  expect(isFunction(1)).toBeFalsy();
});

test('Should not see string as function', () => {
  expect(isFunction('sdf')).toBeFalsy();
});

test('Should see class function as function', () => {
  class Hello {
    bajs = (): void => {

    };
  }
  const hello = new Hello();
  expect(isFunction(hello.bajs)).toBeTruthy();
});
