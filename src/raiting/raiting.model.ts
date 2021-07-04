import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { Device } from "src/device/device.model";

interface RaitingCreationAttrs {
    rate: number;
    userId: number;
    deviceId: number;
}

@Table({tableName: 'raiting'})
export class Raiting extends Model<Raiting, RaitingCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '3', description: 'Рейтинг товара'})
    @Column({type: DataType.INTEGER, allowNull: false})
    rate: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    createdBy: User;

    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number;

    @BelongsTo(() => Device)
    device: Device;

}
