import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import { BasketModule } from "./basket/bascet.module";
import { Basket } from "./basket/bascet.model";
import { RaitingModule } from "./raiting/raiting.module";
import { Raiting } from "./raiting/raiting.model";
import { Basket_device } from "./basket_device/basket_device.models";
import { TypeModule } from "./type/type.module";
import { DeviceModule } from "./device/device.module";
import { Type } from "./type/type.model";
import { Device } from "./device/device.model";
import { BrandModule } from "./brand/brand.modulse";
import { Brand } from "./brand/brand.models";
import { DeviceInfoModule } from "./device_info/device_info.module";
import { DeviceInfo } from "./device_info/device_info.models";
import { TypeBrand } from "./brand/type-brands.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname, 'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post, Basket, Raiting, Basket_device, Type, Device, Brand, DeviceInfo, TypeBrand],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        BasketModule,
        RaitingModule,
        TypeModule,
        DeviceModule,
        BrandModule,
        DeviceInfoModule
    ]
})
export class AppModule {}
