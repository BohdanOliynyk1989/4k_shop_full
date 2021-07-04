import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Device } from "src/device/device.model";
import { TypeBrand } from "./type-brands.model";
import { Type } from "src/type/type.model";

interface BrandCreationAttrs {
    name: string;
}

@Table({tableName: 'brand'})
export class Brand extends Model<Brand, BrandCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Sony', description: 'Описание бренда товаров'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @HasMany(() => Device)
    devices: Device[];

    @BelongsToMany(() => Type, () => TypeBrand)
    types: Type[];

}
