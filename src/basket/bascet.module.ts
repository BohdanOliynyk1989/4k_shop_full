import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Basket_device } from "src/basket_device/basket_device.models";
import { User } from "src/users/users.model";
import { Basket } from "./bascet.model";
import { BasketController } from "./basket.controller";
import { BasketService } from "./basket.service";


@Module({
    imports: [
        SequelizeModule.forFeature([Basket, User, Basket_device])
    ],
    controllers: [BasketController],
    providers: [BasketService]        
})
export class BasketModule{}