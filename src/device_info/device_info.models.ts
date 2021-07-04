import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Device } from "src/device/device.model";

interface DeviceInfoCreationAttrs {
    title: string;
    description: string;  
    deviceId: number;
}

@Table({tableName: 'device_info'})
export class DeviceInfo extends Model<DeviceInfo, DeviceInfoCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Вес', description: 'Определенная характеристика товару'})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: '20 кг', description: 'Описание характеристики'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number;

    @BelongsTo(() => Device)
    device: Device;

}
