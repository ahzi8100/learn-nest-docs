import { Controller, Get, HttpCode, Post, Redirect, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)

  @Post()
  @HttpCode(201)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() req: Request): string {
    console.log(req.body);
    return 'This actions return all cats';
  }

  @Get('abc/*')
  wildCard() {
    return 'this route uses wildcard';
  }
}
