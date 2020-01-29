/* eslint-disable no-console */
import { Aygo } from '../src';

describe('Log test suite', () => {
  it('should call console.log', () => {
    console.log = jest.fn();
    Aygo.log('hello');
    expect(console.log).toHaveBeenCalledWith('hello');
  });
});
