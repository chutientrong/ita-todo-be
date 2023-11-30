import { TableInheritance, Column, PrimaryGeneratedColumn } from 'typeorm';

@TableInheritance()
export abstract class EntityBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: false })
    isDeleted: boolean;

}