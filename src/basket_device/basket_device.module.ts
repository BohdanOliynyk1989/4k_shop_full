import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Device } from "src/device/device.model";
import { User } from "src/users/users.model";
import { Basket } from "../basket/bascet.model";
import { BasketDeviceController } from "./basket_device.controller";
import { Basket_device } from "./basket_device.models";
import { BasketDeviceService } from "./basket_device.service";


@Module({
    imports: [
        SequelizeModule.forFeature([Basket, Basket_device, Device])
    ],
    controllers: [BasketDeviceController],
    providers: [BasketDeviceService]     
})
export class BasketModule{}