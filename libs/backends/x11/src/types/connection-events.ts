export type XClientConnectEvent = {
  type: 'connect';
};

export type XClientDisconnectEvent = {
  type: 'disconnect';
  hadError: boolean;
};

export type XClientConnectionEvent =
  | XClientConnectEvent
  | XClientDisconnectEvent;
