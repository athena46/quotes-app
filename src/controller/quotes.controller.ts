import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { Quotes } from 'src/entity/quotes.entity';
import { QuotesInterface, QuotesService } from 'src/provider/quotes.service';
interface CreateQuotes {
    quote: string,
    author: string,
    likes: number,
    dislikes: number,
    tags:string,
}
@Controller('Quotes')
export class QuotesController {
QuotesService: any;
constructor(private quotesService: QuotesService) {}


@Post()
  async create(@Body() createQuotes: CreateQuotes) {
    const quote = await this.QuotesService.create(createQuotes);
    if(!quote) {
      return 'error in creating quotes'
    }
    return 'quotes created successfully'
  }

@Get()
  async findAll(@Req() request: Request) {
    const quotes: Array<QuotesInterface> = await this.QuotesService.findAll()
    return quotes
  }


@Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newQuotes: any = await this.QuotesService.update(id, body)
    return "Quotes updated";
  }


@Delete(':id')
  async remove(@Param('id') id: string) {
    await this.QuotesService.delete(id)
    return "Quote deleted"
  }
}