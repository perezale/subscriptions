import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Subscription } from './subscriptions/entities/subscription.entity';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

const db_options = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...db_options,
      entities: [Subscription],
      synchronize: true,
    }),
    SubscriptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
