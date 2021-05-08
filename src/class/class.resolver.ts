import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassInput } from './class-create.input';
import { ClassService } from './class.service';
import { ClassType } from './class.type';

@Resolver((of) => ClassType)
export class ClassResolver {
    constructor(private classService: ClassService) {}

    @Query((returns) => [ClassType])
    classes() {
        return 'h';
    }

    @Mutation((returns) => ClassType)
    createClass(@Args('classInput') classInput: ClassInput) {
        return this.classService.createClass(classInput);
    }
}
