/* eslint-disable no-console */
import { Aygo } from '../src';

describe('Basic test suite', () => {

  /*
   * Testing if the console.debug is called or not
   */
  it('should call console.debug', () => {
    console.debug = jest.fn();
    Aygo.debug('debug');
    expect(console.debug).toHaveBeenCalledWith('debug');
  });

  /*
   * Testing if the console.log is called or not
   */
  it('should call console.log', () => {
    console.log = jest.fn();
    Aygo.log('log');
    expect(console.log).toHaveBeenCalledWith('log');
  });

  /*
   * Testing if the console.info is called or not
   */
  it('should call console.ibfo', () => {
    console.info = jest.fn();
    Aygo.info('info');
    expect(console.info).toHaveBeenCalledWith('info');
  });

  /*
   * Testing if the console.warn is called or not
   */
  it('should call console.warn', () => {
    console.warn = jest.fn();
    Aygo.warn('warn');
    expect(console.warn).toHaveBeenCalledWith('warn');
  });

  /*
   * Testing if the console.error is called or not
   */
  it('should call console.error', () => {
    console.error = jest.fn();
    Aygo.error('error');
    expect(console.error).toHaveBeenCalledWith('error');
  });
});
