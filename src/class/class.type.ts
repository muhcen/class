import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

@ObjectType('class')
export class ClassType {
    @Field((type) => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    startDate: string;

    @Field()
    lastDate: string;

    @Field((Type) => [StudentType])
    students: string[];
}
