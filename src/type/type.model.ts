import { BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Device } from "src/device/device.model";
import { Brand } from "src/brand/brand.models";
import { TypeBrand } from "src/brand/type-brands.model";

interface TypeCreationAttrs {
    name: string;
}

@Table({tableName: 'type'})
export class Type extends Model<Type, TypeCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Техника для кухни', description: 'Описание типу товаров'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @HasMany(() => Device) 
    devices: Device[];

    @BelongsToMany(() => Brand, () => TypeBrand)
    brands: Brand[];

}
