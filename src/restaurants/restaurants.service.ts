import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) // get repository : connection.getRepository()
    private restaurants: Repository<Restaurant>,
  ) {}

  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  createRestaurant(createRestaurantDto: CreateRestaurantDto) {
    const newRestaurant: Restaurant =
      this.restaurants.create(createRestaurantDto);
    return this.restaurants.save(newRestaurant);
  }
}
