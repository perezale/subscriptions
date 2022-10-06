import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionsService } from './subscriptions.service';

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  // ...
}));

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

describe('SubscriptionsService', () => {
  let service: SubscriptionsService;
  let repositoryMock: MockType<Repository<Subscription>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionsService,
        {
          provide: getRepositoryToken(Subscription),
          useFactory: repositoryMockFactory
        }],
    }).compile();

    service = module.get<SubscriptionsService>(SubscriptionsService);
    repositoryMock = module.get(getRepositoryToken(Subscription));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
