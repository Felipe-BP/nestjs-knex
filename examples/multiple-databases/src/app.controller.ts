import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllCats() {
    return this.appService.getAllCats();
  }

  @Get('albums')
  getAllAlbums() {
    return this.appService.getAllAlbums();
  }
}
