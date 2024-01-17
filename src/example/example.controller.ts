import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ExampleService } from './example.service';
// cmd : nest generate controller example
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}
  @Get()
  getExample(): string {
    return this.exampleService.getHello();
  }

  @Get()
  async findAll() {
    try {
      await 'findAll';
      return 'findAll';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return id;
  }
}
