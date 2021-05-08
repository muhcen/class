import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { Repository } from 'typeorm';
import { ClassInput } from './class-create.input';
import { Class } from './class.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ClassService {
    constructor(@InjectRepository(Class) private classRepository: Repository<Class>) {}

    async createClass(classInput: ClassInput) {
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
}
