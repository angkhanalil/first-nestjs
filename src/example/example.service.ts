import { Injectable } from '@nestjs/common';
// nest generate service example
@Injectable()
export class ExampleService {
  getHello(): string {
    return 'Hello, NestJS Service!';
  }
}
