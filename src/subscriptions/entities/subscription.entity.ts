import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subscription {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  token: string;

  @Column()
  expire_date: Date;
  
  @Column()
  issue_date: Date;

  @Column()
  user_email: string;

  @Column()
  user_slug: string;


}
