import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './superhero/entities/superhero.entity';
import { SuperheroModule } from './superhero/superhero.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [User],
      synchronize: true,
    }),
    SuperheroModule,
  ],
})
export class AppModule {}
