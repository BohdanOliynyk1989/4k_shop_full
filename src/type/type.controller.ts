import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { TypeService } from "./type.servise";

@Controller('type')
export class TypeController{
    constructor(private typeService: TypeService){}

    @Post()
    createType(@Body() dto: CreateTypeDto){
        return this.typeService.createType(dto);
    }

    @Get()
    getAll(){
        return this.typeService.getAll();
    }
}