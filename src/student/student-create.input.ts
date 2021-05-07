import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateStudentsInput {
    @Field()
    @IsString()
    firstName: string;

    @Field()
    @IsString()
    lastName: string;

    @Field()
    @IsNumber()
    age: number;
}
