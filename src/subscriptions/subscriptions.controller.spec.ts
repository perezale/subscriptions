import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { MockType, repositoryMockFactory } from './subscriptions.service.spec';

describe('SubscriptionsController', () => {
  let controller: SubscriptionsController;
  let repositoryMock: MockType<Repository<Subscription>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionsController],
      providers: [SubscriptionsService,
        {
          provide: getRepositoryToken(Subscription),
          useFactory: repositoryMockFactory
        }],
    }).compile();

    controller = module.get<SubscriptionsController>(SubscriptionsController);
    repositoryMock = module.get(getRepositoryToken(Subscription));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
