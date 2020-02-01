/* eslint-disable no-console */
import { Aygo, LEVELS } from '../src';

/**
 * Define the logger to be used in the tests
 */
let logger: Aygo;

beforeAll(() => {
  logger = new Aygo('[JEST]', LEVELS.WARN);
});

describe('Level test suite', () => {
  /*
   * Testing if the console.debug is called or not
   */
  it('should not call console.debug', () => {
    console.debug = jest.fn();
    logger.debug('debug');
    expect(console.debug).toHaveBeenCalledTimes(0);
  });

  /*
   * Testing if the console.log is called or not
   */
  it('should not call console.log', () => {
    console.log = jest.fn();
    logger.log('log');
    expect(console.log).toHaveBeenCalledTimes(0);
  });

  /*
   * Testing if the console.info is called or not
   */
  it('should not call console.info', () => {
    console.info = jest.fn();
    logger.info('info');
    expect(console.info).toHaveBeenCalledTimes(0);
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
