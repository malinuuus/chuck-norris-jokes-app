import { Module } from '@nestjs/common';
import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [JokesController],
  providers: [JokesService]
})
export class AppModule {}
