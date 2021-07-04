import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Basket_device } from "src/basket_device/basket_device.models";
import { Brand } from "src/brand/brand.models";
import { DeviceInfo } from "src/device_info/device_info.models";
import { FilesModule } from "src/files/files.module";
import { Raiting } from "src/raiting/raiting.model";
import { Type } from "src/type/type.model";
import { DeviceController } from "./device.controller";
import { Device } from "./device.model";
import { DeviceService } from "./device.service";


@Module({
    imports: [
        SequelizeModule.forFeature([Device, Type, Brand, Raiting, Basket_device, DeviceInfo]),
        FilesModule
    ],
    controllers: [DeviceController],
    providers: [DeviceService]     
})
export class DeviceModule{}