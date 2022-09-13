import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quotes } from 'src/entity/quotes.entity';
import { Repository } from 'typeorm';


export interface QuotesInterface {
    quote: string,
    author: string,
    likes: number,
    dislikes: number,
    tags:string,
}

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quotes)
    private QuotesRepository: Repository<QuotesInterface>,
  ) {}

create(quotes: QuotesInterface): Promise<QuotesInterface> {
    return this.QuotesRepository.save(
      this.QuotesRepository.create(quotes)
    );
  }

findAll(): Promise<QuotesInterface[]> {
    return this.QuotesRepository.find();
  }

update(id: string, data: any): Promise<any> {
    return this.QuotesRepository
    .createQueryBuilder()
    .update()
    .set({
      author: data.author,
      quote: data.quote,
      tags: data.tags

    })
    .where('id = :id', { id })
    .execute()
  }

delete(id: string): Promise<any> {
    return this.QuotesRepository
    .createQueryBuilder()
    .delete()
    .from(Quotes)
    .where('id = :id', { id })
    .execute()
  }
}