import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('student')
export class StudentType {
    @Field((type) => ID)
    _id: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    age: number;
}
