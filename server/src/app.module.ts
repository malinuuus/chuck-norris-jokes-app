import { Module } from '@nestjs/common';
import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';
import { HttpModule } from '@nestjs/axios';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [HttpModule],
  controllers: [JokesController, CategoriesController],
  providers: [JokesService, CategoriesService]
})
export class AppModule {}
