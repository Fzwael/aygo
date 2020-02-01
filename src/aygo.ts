/* eslint-disable no-console, import/prefer-default-export */

export class Aygo {
  /**
   *
   * module here refers to the name of the module that initialized the logger
   * the module name will be added before each log
   * @example : new Aygo("[MyModule]");
   * @private
   * @type {String}
   * @memberof Aygo
   */
  private module: String;

  /**
   * Constructor for initializing the logger
   */
  constructor(module: String) {
    this.module = module;
  }

  /**
   *
   * This method will call console.debug using the values passed to it.
   * @param {...unknown[]} values : the values to be logged
   */
  debug(...values: unknown[]): void {
    console.debug(this.module, ...values);
  }

  /**
  *
  * This method will call console.log using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  log(...values: unknown[]): void {
    console.log(this.module, ...values);
  }

  /**
  *
  * This method will call console.info using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  info(...values: unknown[]): void {
    console.info(this.module, ...values);
  }

  /**
  *
  * This method will call console.warn using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  warn(...values: unknown[]): void {
    console.warn(this.module, ...values);
  }

  /**
  *
  * This method will call console.error using the values passed to it.
  * @param {...unknown[]} values : the values to be logged
  */
  error(...values: unknown[]): void {
    console.error(this.module, ...values);
  }
}
