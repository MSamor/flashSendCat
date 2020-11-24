import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  request: any;
  getHello(): string {
    return 'Hello World!';
  }
}
