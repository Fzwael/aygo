import { Aygo, LEVELS } from 'aygo';

// eslint-disable-next-line import/prefer-default-export
export function typescript() {
  /**
   * Default logging methods
   */
  const logger = new Aygo('[TS-EXAMPLE-1]', LEVELS.DEBUG);
  logger.debug('DEBUG : This', 'is', { key: 'a test' }, 134);
  logger.log('LOG : This', 'is', { key: 'a test' }, 134);
  logger.info('INFO : This', 'is', { key: 'a test' }, 134);
  logger.warn('WARN : This', 'is', { key: 'a test' }, 134);
  logger.error('ERROR : This', 'is', { key: 'a test' }, 134);

  /**
   * Only methods above warning will be logged
   */
  const logger2 = new Aygo('[TS-EXAMPLE-2]', LEVELS.WARN);
  logger2.debug('DEBUG : This', 'is', { key: 'a test' }, 134);
  logger2.log('LOG : This', 'is', { key: 'a test' }, 134);
  logger2.info('INFO : This', 'is', { key: 'a test' }, 134);
  logger2.warn('WARN : This', 'is', { key: 'a test' }, 134);
  logger2.error('ERROR : This', 'is', { key: 'a test' }, 134);
}

window.onload = typescript;
