import { Body, Controller, Get, HttpCode, Param, Post, Redirect, Req } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { createCatDto } from './create-cats.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createDto: createCatDto) {
    return 'This actions adds a new cat';
  }

  @Get()
  findAllCats(): Observable<any> {
    return of([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action return a param #${id} cat`;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} cat`;
  // }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)

  // @Post()
  // @HttpCode(201)
  // create(): string {
  //   return 'This action adds a new cat';
  // }

  // @Get()
  // findAll(@Req() req: Request): string {
  //   console.log(req.body);
  //   return 'This actions return all cats';
  // }

  @Get('abc/*')
  wildCard() {
    return 'this route uses wildcard';
  }
}
