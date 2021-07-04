import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { Basket_device } from "src/basket_device/basket_device.models";

interface BasketCreationAttrs {
    userId: number;
} 

@Table({tableName: 'basket'})
export class Basket extends Model<Basket, BasketCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    user: User

    @HasMany(() => Basket_device)
    devices: Basket_device[];
}
