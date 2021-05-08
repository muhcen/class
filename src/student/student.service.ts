import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentsInput } from './student-create.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) {}

    async createStudent(createStudentInput: CreateStudentsInput): Promise<Student> {
        const { firstName, lastName, age } = createStudentInput;
        const student = await this.studentRepository.create({
            firstName,
            lastName,
            age,
            id: uuid(),
        });
        return this.studentRepository.save(student);
    }

    async getStudents(): Promise<Student[]> {
        const students = await this.studentRepository.find();
        console.log(students);
        return await this.studentRepository.find();
    }
}
