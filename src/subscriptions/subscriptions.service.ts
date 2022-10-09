import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './entities/subscription.entity';

@Injectable()
export class SubscriptionsService {

  constructor(
    @InjectRepository(Subscription) private subsRepo:Repository<Subscription>){
  }

  create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.subsRepo.save(createSubscriptionDto);
  }

  findAll() {
    return this.subsRepo.find({
      relations: {
        customer: true
      }
    });
  }

  findOne(id: number) {
    return this.subsRepo.findOne({where: {
      id: id
    } });
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subsRepo.update(id, updateSubscriptionDto);
  }

  remove(id: number) {
    return this.subsRepo.delete(id);
  }
}
