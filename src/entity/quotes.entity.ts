import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('Quotes')
export class Quotes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
    quote: string;

    @Column()
    author: string;

    @Column({default: 0})
    likes: number;


    @Column({default: 0})
    dislikes: number;

    @Column()
    tags:string;
 
}