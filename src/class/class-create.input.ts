import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString, IsUUID, MinLength } from 'class-validator';
import { StudentType } from 'src/student/student.type';

@InputType()
export class ClassInput {
    @Field()
    @IsString()
    @MinLength(4)
    name: string;

    @Field()
    @IsString()
    @MinLength(20)
    description: string;

    @Field()
    @IsString()
    startDate: string;

    @Field()
    lastDate: string;

    @IsUUID('4', { each: true })
    @Field(() => [ID], { defaultValue: [] })
    students: string[];
}
