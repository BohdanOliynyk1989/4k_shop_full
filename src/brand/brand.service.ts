import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Brand } from "./brand.models";
import { CreateBrandDto } from "./dto/create-brand.dto";

@Injectable()

export class BrandService{
constructor(@InjectModel(Brand) private brandModel: typeof Brand){}
    
    async create(dto: CreateBrandDto){
        const newBrand = await this.brandModel.create(dto, {include: {all: true}});
        return newBrand;
    }  

    async getAll(){
        const brands = await this.brandModel.findAll();
        return brands;
    }
}
