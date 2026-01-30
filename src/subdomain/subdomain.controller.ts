import { Controller, Get } from '@nestjs/common';

@Controller({ host: ':admin' })
export class SubdomainController {
  @Get()
  index(): string {
    return 'Admin Page';
  }
}
