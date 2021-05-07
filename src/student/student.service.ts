import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentsInput } from './student-create.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) {}

    async getStudents(createStudentInput: CreateStudentsInput) {
        const { firstName, lastName, age } = createStudentInput;
        const student = await this.studentRepository.create({ firstName, lastName, age });
        console.log(student);
        return this.studentRepository.save(student);
    }
}
