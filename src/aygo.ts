/* eslint-disable no-console, import/prefer-default-export */
import { LEVELS } from './log.levels';
import { shouldLog } from './helpers';

export class Aygo {
  /**
   *
   * module here refers to the name of the module that initialized the logger
   * the module name will be added before each log
   * @example : new Aygo("[MyModule]");
   * @private
   * @type {string}
   * @memberof Aygo
   */
  private module: string;

  /**
   *
   * Represents the log minimum logging level
   * To be defined via LEVELS enum
   * @private
   * @type {number}
   * @memberof Aygo
   */
  private level: number;

  /**
   * Constructor for initializing the logger
   */
  constructor(module: string, level: number) {
    this.module = module;
    this.level = level;
  }

  /**
   *
   * This method will call console.debug using the values passed to it.
   * @param {...unknown[]} values : the values to be logged
   */
  debug(...values: unknown[]): void {
    if (shouldLog(this.level, LEVELS.DEBUG)) {
      console.debug(this.module, ...values);
    }
  }

  /**
  *
  * This method will call console.log using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  log(...values: unknown[]): void {
    if (shouldLog(this.level, LEVELS.LOG)) {
      console.log(this.module, ...values);
    }
  }

  /**
  *
  * This method will call console.info using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  info(...values: unknown[]): void {
    if (shouldLog(this.level, LEVELS.INFO)) {
      console.info(this.module, ...values);
    }
  }

  /**
  *
  * This method will call console.warn using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  warn(...values: unknown[]): void {
    if (shouldLog(this.level, LEVELS.WARN)) {
      console.warn(this.module, ...values);
    }
  }

  /**
  *
  * This method will call console.error using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  error(...values: unknown[]): void {
    if (shouldLog(this.level, LEVELS.ERROR)) {
      console.error(this.module, ...values);
    }
  }
}
