import { Body, Controller, Get, Param, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { DeviceService } from "./device.service";
import { CreateDeviceDto } from "./dto/create-device.dto";

@Controller('/device')
export class DeviceController{

    constructor(private deviceService: DeviceService) {}

    @Post()
    @UseInterceptors(FileInterceptor('img'))
    createPost(@Body() dto: CreateDeviceDto, @UploadedFile() img) {
        return this.deviceService.create(dto, img);
    }
    @Get()
    getAll(@Query() query: Record<string, any>){
        return this.deviceService.getAll(query);
    }

    @Get('/:id')
    getOne(@Param('id') id: number){
        return this.deviceService.getOne(id);
    }
}