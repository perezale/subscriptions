export class CreateSubscriptionDto {

  token: string;
  expire_date: Date;
  issue_date: Date;
  user_email: string;
  user_slug: string;
}
