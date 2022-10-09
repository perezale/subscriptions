import { IsEmail } from "class-validator";
import { Subscription } from "src/subscriptions/entities/subscription.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  company: string;

  @OneToMany(type => Subscription, subscription => subscription.customer)
  subscriptionList: Subscription[];

}
