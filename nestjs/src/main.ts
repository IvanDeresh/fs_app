import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app
    .listen(3003)
    .then(() => console.log(`your server running on http://localhost:3003`));
}
bootstrap();
