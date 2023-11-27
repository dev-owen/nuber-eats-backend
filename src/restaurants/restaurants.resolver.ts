import {Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entity";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";

@Resolver()
export class RestaurantsResolver {
    @Query(returns => [Restaurant])
    restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
        return [];
    }

    @Mutation(returns => Boolean)
    createRestaurant(@Args() createRestaurantInput: CreateRestaurantDto): boolean {
        return true;
    }
}