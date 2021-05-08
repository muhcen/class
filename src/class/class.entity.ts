import { Student } from 'src/student/student.entity';
import { Column, Entity, ManyToMany, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Class {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    startDate: Date;

    @Column()
    lastDate: Date;

    @Column()
    students: String[];
}
