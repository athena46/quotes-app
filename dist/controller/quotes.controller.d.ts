import { Request } from 'express';
import { QuotesInterface, QuotesService } from 'src/provider/quotes.service';
interface CreateQuotes {
    quote: string;
    author: string;
    likes: number;
    dislikes: number;
    tags: string;
}
export declare class QuotesController {
    private quotesService;
    QuotesService: any;
    constructor(quotesService: QuotesService);
    create(createQuotes: CreateQuotes): Promise<"error in creating quotes" | "quotes created successfully">;
    findAll(request: Request): Promise<QuotesInterface[]>;
    update(id: string, body: any): Promise<string>;
    remove(id: string): Promise<string>;
}
export {};
