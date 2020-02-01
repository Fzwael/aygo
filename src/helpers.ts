/* eslint-disable import/prefer-default-export */

/**
 *
 * Returns true if the calling method is allowed to log
 * @export
 * @param {number} logLevel The configured log level for the logger
 * @param {number} logMethod The calling method's level
 * @returns {boolean}
 */
export function shouldLog(logLevel: number, logMethod: number): boolean {
  return logMethod >= logLevel;
}
