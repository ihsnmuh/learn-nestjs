import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  // * http response decorator Header() HttpCode()
  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  saampleRespose(): Record<string, string> {
    return {
      data: 'Hello json',
    };
  }

  // * http response decorator Redirect()
  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/sample-response',
      statusCode: 301,
    };
  }

  // * http request query
  @Get('/hello')
  async sayHello(
    @Query('first_name') first_name: string,
    @Query('last_name') last_name: string,
  ): Promise<string> {
    return `Hello ${first_name} ${last_name}`;
  }

  // * http request params
  @Get('/:id')
  getbyiId(@Param('id') id: string): string {
    return `GET ${id}`;
  }

  //* simple data
  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'GET';
  }
}
