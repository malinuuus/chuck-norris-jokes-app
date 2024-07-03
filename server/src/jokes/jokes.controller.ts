import { Controller, Get } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokeDto } from './dto/joke.dto';

@Controller('jokes')
export class JokesController {
  constructor(private jokesService: JokesService) {}

  @Get('random')
  getRandomJoke(): Promise<JokeDto> {
    return this.jokesService.getRandomJoke();
  }
}
