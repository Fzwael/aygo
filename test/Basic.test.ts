/* eslint-disable no-console */
import { Aygo } from '../src';

/**
 * Define the logger to be used in the tests
 */
let logger: Aygo;

beforeAll(() => {
  logger = new Aygo('[JEST]');
});

describe('Basic test suite', () => {
  /*
   * Testing if the console.debug is called or not
   */
  it('should call console.debug', () => {
    console.debug = jest.fn();
    logger.debug('debug');
    expect(console.debug).toHaveBeenCalledWith('[JEST]', 'debug');
  });

  /*
   * Testing if the console.log is called or not
   */
  it('should call console.log', () => {
    console.log = jest.fn();
    logger.log('log');
    expect(console.log).toHaveBeenCalledWith('[JEST]', 'log');
  });

  /*
   * Testing if the console.info is called or not
   */
  it('should call console.ibfo', () => {
    console.info = jest.fn();
    logger.info('info');
    expect(console.info).toHaveBeenCalledWith('[JEST]', 'info');
  });

  /*
   * Testing if the console.warn is called or not
   */
  it('should call console.warn', () => {
    console.warn = jest.fn();
    logger.warn('warn');
    expect(console.warn).toHaveBeenCalledWith('[JEST]', 'warn');
  });

  /*
   * Testing if the console.error is called or not
   */
  it('should call console.error', () => {
    console.error = jest.fn();
    logger.error('error');
    expect(console.error).toHaveBeenCalledWith('[JEST]', 'error');
  });
});
