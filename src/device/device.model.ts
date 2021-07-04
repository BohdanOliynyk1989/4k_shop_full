import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Type } from "src/type/type.model";
import { Brand } from "src/brand/brand.models";
import { Raiting } from "src/raiting/raiting.model";
import { Basket_device } from "src/basket_device/basket_device.models";
import { DeviceInfo } from "src/device_info/device_info.models";

interface DeviceCreationAttrs {
    name: string;
    price: number;
    rating: number;
    img: string;
    typeId: number;
    brandId: number;
}

@Table({tableName: 'device'})
export class Device extends Model<Device, DeviceCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Ноутбук', description: 'Описание ноутбука'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: '1200', description: 'Цена товара'})
    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;

    @ApiProperty({example: '3', description: 'Рейтинг товара'})
    @Column({type: DataType.INTEGER, defaultValue: 0})
    rating: number;

    @ApiProperty({example: 'img.jpg', description: 'Картинка товара'})
    @Column({type: DataType.STRING, allowNull: false})
    img: string;

    @ForeignKey(() => Type)
    @Column({type: DataType.INTEGER, allowNull: false})
    typeId: number;

    @BelongsTo(() => Type)
    type: Type;

    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER, allowNull: false})
    brandId: number;

    @BelongsTo(() => Brand)
    brand: Brand;

    @HasMany(() => Raiting)
    raiting: Raiting[];

    @HasMany(() => Basket_device)
    basket_device: Basket_device;

    @HasMany(() => DeviceInfo)
    device_info: DeviceInfo[];

}
