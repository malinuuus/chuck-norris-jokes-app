import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Joke } from './joke.model';
import { JokeDto } from './dto/joke.dto';
import { chuckNorrisApiUrl } from 'src/helpers/api';
import { GetJokeFilterDto } from './dto/get-joke-filter.dto';

@Injectable()
export class JokesService {
  constructor(private httpService: HttpService) {}

  async getRandomJoke(filterDto: GetJokeFilterDto): Promise<JokeDto> {
    const { name, category } = filterDto;
    let url: string = `${chuckNorrisApiUrl}/jokes/random?`;

    if (category) {
      url += `category=${category}`;
    }

    const { data } = await firstValueFrom(
      this.httpService.get<Joke>(url).pipe(
        catchError((err: AxiosError) => {
          throw new HttpException(err.response.data, err.response.status);
        }),
      ),
    );

    const jokeDto: JokeDto = {
      id: data.id,
      value: name ? data.value.replaceAll(/Chuck Norris/ig, name) : data.value,
    };
    return jokeDto;
  }
}
