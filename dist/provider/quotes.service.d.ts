import { Repository } from 'typeorm';
export interface QuotesInterface {
    quote: string;
    author: string;
    likes: number;
    dislikes: number;
    tags: string;
}
export declare class QuotesService {
    private QuotesRepository;
    constructor(QuotesRepository: Repository<QuotesInterface>);
    create(quotes: QuotesInterface): Promise<QuotesInterface>;
    findAll(): Promise<QuotesInterface[]>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
