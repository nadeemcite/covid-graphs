import { Injectable } from '@nestjs/common';
import Constants from './constants';

@Injectable()
export class AppService {
  getHello(): string {
    return Constants.WELCOME_MSG;
  }
}
