import { printHello } from '../src/err-lint-hello-world';

describe('hello world', () => {
  it('it should text return', () => {
    expect(printHello('Hello World!')).toEqual('Hello World!');
  });
});
