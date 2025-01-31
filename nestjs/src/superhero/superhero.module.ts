import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/superhero.entity';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [SuperheroService],
  controllers: [SuperheroController],
})
export class SuperheroModule {}
