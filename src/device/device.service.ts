import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { DeviceInfo } from "src/device_info/device_info.models";
import { FilesService } from "src/files/files.service";
import { Device } from "./device.model";
import { CreateDeviceDto } from "./dto/create-device.dto";

@Injectable()

export class DeviceService{
constructor(@InjectModel(Device) private deviceRepository: typeof Device,
                private fileService: FilesService) {}

    async create(dto: CreateDeviceDto, img: any) {
        const fileName = await this.fileService.createFile(img);
        const device = await this.deviceRepository.create({...dto, img: fileName}, {include: {all: true}})
        return device;
    }

    async getAll(query){
        let {brandId, typeId, limit, page} = query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let devices;
        if (!brandId && !typeId) {
            devices = await this.deviceRepository.findAndCountAll({limit, offset});
        }

         if (brandId && !typeId) {
            devices = await this.deviceRepository.findAndCountAll({where: {brandId}, limit, offset});
        }

         if (!brandId && typeId) {
            devices = await this.deviceRepository.findAndCountAll({where: {typeId}, limit, offset});
        }

        if (brandId && typeId) {
            devices = await this.deviceRepository.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }

        return devices;
    }

    async getOne(id){
        const device = await this.deviceRepository.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo}] 
            }
        )
        return device;
    }
}