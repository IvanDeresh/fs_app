import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly userService: SuperheroService) {}

  @Post()
  createUser(@Body() body: { name: string }) {
    return this.userService.createUser(body.name);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
