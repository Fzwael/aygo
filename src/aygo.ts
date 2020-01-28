/* eslint-disable no-console */

/**
 *
 * This method will call console.debug using the values passed to it.
 * @param {...unknown[]} values : the values to be logged
 */
export function debug(...values: unknown[]): void {
  console.debug(values);
}

/**
 *
 * This method will call console.log using the values passed to it.
 * @param {...unknown[]} values : the values to be logged
 */
export function log(...values: unknown[]): void {
  console.log(values);
}

/**
 *
 * This method will call console.info using the values passed to it.
 * @param {...unknown[]} values : the values to be logged
 */
export function info(...values: unknown[]): void {
  console.info(values);
}

/**
 *
 * This method will call console.warn using the values passed to it.
 * @param {...unknown[]} values : the values to be logged
 */
export function warn(...values: unknown[]): void {
  console.warn(values);
}

/**
 *
 * This method will call console.error using the values passed to it.
 * @param {...unknown[]} values : the values to be logged
 */
export function error(...values: unknown[]): void {
  console.error(values);
}
