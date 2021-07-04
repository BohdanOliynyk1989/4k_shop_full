import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Basket } from "src/basket/bascet.model";
import { Device } from "src/device/device.model";

interface Basket_deviceCreationAttrs {
    basketId: number;
    deviceId: number;
} 

@Table({tableName: 'basket_device'})
export class Basket_device extends Model<Basket_device, Basket_deviceCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Basket)
    @Column({type: DataType.INTEGER})
    basketId: number;

    @BelongsTo(() => Basket)
    basket: Basket;

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number;

    @BelongsTo(() => Device)
    device: Device;
}
