import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Subscription } from './subscriptions/entities/subscription.entity';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret123!',
      database: 'subscriptions',
      entities: [Subscription],
      synchronize: true,
    }),
    SubscriptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
