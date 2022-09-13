import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesController } from 'src/controller/quotes.controller';
import { Quotes } from 'src/entity/quotes.entity';
import { QuotesService } from 'src/provider/quotes.service';



@Module({
  imports: [TypeOrmModule.forFeature([Quotes])],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}