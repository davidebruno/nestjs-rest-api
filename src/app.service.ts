import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAPIStatus(): string {
    return 'Recipe API is up and running!';
  }
}
