import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Device } from "src/device/device.model";
import { User } from "src/users/users.model";
import { RaitingController } from "./raiting.controller";
import { Raiting } from "./raiting.model";
import { RaitingService } from "./raiting.service";

@Module({
    imports: [
        SequelizeModule.forFeature([Raiting, User, Device])
    ],
    controllers: [RaitingController],
    providers: [RaitingService]    
})

export class RaitingModule{}