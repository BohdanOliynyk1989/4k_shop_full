import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Device } from "src/device/device.model";
import { Type } from "src/type/type.model";
import { BrandController } from "./brand.controller";
import { Brand } from "./brand.models";
import { BrandService } from "./brand.service";
import { TypeBrand } from "./type-brands.model";

@Module({
    imports: [
        SequelizeModule.forFeature([Brand, Device, Type, TypeBrand])
    ],
    controllers: [BrandController],
    providers: [BrandService]        
})
export class BrandModule{}