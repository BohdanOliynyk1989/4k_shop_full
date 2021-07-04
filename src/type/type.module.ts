import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Brand } from "src/brand/brand.models";
import { TypeBrand } from "src/brand/type-brands.model";
import { Device } from "src/device/device.model";
import { TypeController } from "./type.controller";
import { Type } from "./type.model";
import { TypeService } from "./type.servise";


@Module({
    imports: [
        SequelizeModule.forFeature([Type, Device, Brand, TypeBrand])
    ],
    controllers: [TypeController],
    providers: [TypeService]    
})
export class TypeModule{}