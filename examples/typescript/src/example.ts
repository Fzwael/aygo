import { Aygo } from 'aygo';

// eslint-disable-next-line import/prefer-default-export
export function typescript() {
  const logger = new Aygo('[TS-EXAMPLE-1]');

  logger.debug('DEBUG : This', 'is', { key: 'a test' }, 134);
  logger.log('LOG : This', 'is', { key: 'a test' }, 134);
  logger.info('INFO : This', 'is', { key: 'a test' }, 134);
  logger.warn('WARN : This', 'is', { key: 'a test' }, 134);
  logger.error('ERROR : This', 'is', { key: 'a test' }, 134);
}

window.onload = typescript;
