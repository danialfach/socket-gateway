import { Injectable } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost/3001');
  }

  onModuleInit() {
    this.registerConsumerEvents;
  }

  private registerConsumerEvents() {
    // this.socketClient.emit('newMessage', { msg: 'Halo Kawan! ' });
    this.socketClient.on('connect', () => {
      console.log('Connected to Gateway');
    });
    this.socketClient.on('onMessage', (payload: any) => {
      console.log(payload);
    });
  }
}
