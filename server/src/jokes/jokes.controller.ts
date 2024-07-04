import { Controller, Get, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokeDto } from './dto/joke.dto';
import { GetJokeFilterDto } from './dto/get-joke-filter.dto';

@Controller('jokes')
export class JokesController {
  constructor(private jokesService: JokesService) {}

  @Get('random')
  getRandomJoke(@Query() filterDto: GetJokeFilterDto): Promise<JokeDto> {
    return this.jokesService.getRandomJoke(filterDto);
  }
}
