import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Joke } from './joke.model';
import { JokeDto } from './dto/joke.dto';
import { chuckNorrisApiUrl } from 'src/helpers/api';

@Injectable()
export class JokesService {
  constructor(private httpService: HttpService) {}

  async getRandomJoke(): Promise<JokeDto> {
    const { data } = await firstValueFrom(
      this.httpService.get<Joke>(`${chuckNorrisApiUrl}/jokes/random`).pipe(
        catchError((err: AxiosError) => {
          throw new HttpException(err.response.data, err.response.status);
        }),
      ),
    );

    const jokeDto: JokeDto = {
      id: data.id,
      value: data.value,
    };
    return jokeDto;
  }
}
