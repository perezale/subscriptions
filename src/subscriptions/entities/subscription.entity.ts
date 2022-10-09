import { Customer } from "src/customers/entities/customer.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToOne(type => Customer, customer => customer.subscriptionList )
  @JoinColumn({name: "customer_id"})
  customer: Customer;

}
