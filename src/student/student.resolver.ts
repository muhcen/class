import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentsInput } from './student-create.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
    constructor(private studentService: StudentService) {}

    @Query((returns) => StudentType)
    get() {}
    @Mutation((returns) => StudentType)
    createStudent(@Args('createStudentInput') createStudentsInput: CreateStudentsInput) {
        return this.studentService.getStudents(createStudentsInput);
    }
}
