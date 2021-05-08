import { Column, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
}
