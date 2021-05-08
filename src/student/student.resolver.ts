import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentsInput } from './student-create.input';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
    constructor(private studentService: StudentService) {}

    @Query((returns) => [StudentType])
    getStudents(): Promise<Student[]> {
        return this.studentService.getStudents();
    }
    @Mutation((returns) => StudentType)
    createStudent(
        @Args('createStudentInput') createStudentsInput: CreateStudentsInput,
    ): Promise<Student> {
        return this.studentService.createStudent(createStudentsInput);
    }
}
