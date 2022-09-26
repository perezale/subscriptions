import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateSubscriptionDto {

  @IsNotEmpty()
  token: string;
  
  @IsNotEmpty()
  expire_date: Date;
  
  @IsNotEmpty()
  issue_date: Date;

  @IsEmail()
  @IsNotEmpty()
  user_email: string;
  
  @IsNotEmpty()
  user_slug: string;
}
