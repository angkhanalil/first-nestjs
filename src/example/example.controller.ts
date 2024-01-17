import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';
// cmd : nest generate controller example
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}
  @Get()
  getExample(): string {
    return this.exampleService.getHello();
  }
}
