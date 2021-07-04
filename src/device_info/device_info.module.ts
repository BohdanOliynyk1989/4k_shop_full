import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Device } from "src/device/device.model";
import { DeviceInfoController } from "./device_info.controllers";
import { DeviceInfo } from "./device_info.models";
import { DeviceInfoService } from "./device_info.service";


@Module({
    imports: [
        SequelizeModule.forFeature([DeviceInfo, Device])
    ],  
    controllers: [DeviceInfoController],
    providers: [DeviceInfoService]     
})
export class DeviceInfoModule{}