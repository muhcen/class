import { Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
    constructor(private studentService: StudentService) {}

    @Query((returns) => StudentType)
    getStudents() {
        return this.studentService.getStudents();
    }
}
