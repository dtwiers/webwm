import { createConnection } from 'net';
import { Subject } from 'rxjs';
import { XClientConnectionEvent } from './types';

export type ConnectionOptions = {
  x11path: string;
  displayId: number;
};

export const connectX = (connectionOptions: Partial<ConnectionOptions>) => {
  const socketString = `/tmp/.X11-unix/X${connectionOptions.displayId ?? 0}`;
  const client$ = new Subject<XClientConnectionEvent>();
  createConnection(socketString)
    .on('connect', () => client$.next({ type: 'connect' }))
    .on('close', (hadError) => {
      client$.next({ type: 'disconnect', hadError });
    })
    .on('data', (data) => {
    });
};
