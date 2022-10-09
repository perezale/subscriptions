import { IsEmail, IsNotEmpty } from "class-validator";
import { Customer } from "src/customers/entities/customer.entity";

export class CreateSubscriptionDto {

  @IsNotEmpty()
  token: string;
  
  @IsNotEmpty()
  expire_date: Date;
  
  @IsNotEmpty()
  issue_date: Date;

  @IsNotEmpty()
  customer: Customer;
}
