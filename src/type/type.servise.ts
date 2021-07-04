import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTypeDto } from "./dto/create-type.dto";
import { Type } from "./type.model";

@Injectable()

export class TypeService{

    constructor(@InjectModel(Type) private type: typeof Type){}
    
    async createType(dto: CreateTypeDto){
        const newType = this.type.create(dto, {include: {all: true}});
        return newType;
    }  

    async getAll(){
        const types = await this.type.findAll();
        return types;
    }
}