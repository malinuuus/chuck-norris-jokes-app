import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { chuckNorrisApiUrl } from 'src/helpers/api';

@Injectable()
export class CategoriesService {
  constructor(private httpService: HttpService) {}

  async getJokesCategories(): Promise<string[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<string[]>(`${chuckNorrisApiUrl}/jokes/categories`).pipe(
        catchError((err: AxiosError) => {
          throw new HttpException(err.response.data, err.response.status);
        }),
      ),
    );

    return data;
  }
}
