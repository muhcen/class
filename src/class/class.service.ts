import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { Repository } from 'typeorm';
import { ClassInput, StudentsInput } from './class-create.input';
import { Class } from './class.entity';
import { v4 as uuid } from 'uuid';
import { Student } from 'src/student/student.entity';
@Injectable()
export class ClassService {
    constructor(@InjectRepository(Class) private classRepository: Repository<Class>) {}

    async createClass(classInput: ClassInput): Promise<Class> {
        const { name, description, startDate, lastDate, students } = classInput;

        console.log(students);
        const Class = await this.classRepository.create({
            id: uuid(),
            description,
            name,
            startDate,
            lastDate,
            students,
        });

        return this.classRepository.save(Class);
    }

    async updateClass(Students: StudentsInput, id: string): Promise<Class> {
        const Class = await this.classRepository.findOne({ id: id });
        const { students } = Students;
        students.forEach((student, i) => {
            if (Class.students.includes(student))
                throw new BadRequestException(`user with id ${student} before join`);
        });
        Class.students = [...Class.students, ...students];

        return await this.classRepository.save(Class);
    }

    async getClasses(): Promise<Class[]> {
        const classes = await this.classRepository.find();

        return classes;
    }
}
