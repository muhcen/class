import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassInput } from './class-create.input';
import { Class } from './class.entity';
import { ClassService } from './class.service';
import { ClassType } from './class.type';

@Resolver((of) => ClassType)
export class ClassResolver {
    constructor(private classService: ClassService) {}

    @Query((returns) => [ClassType])
    classes():Promise<Class[]> {
        return this.classService.getClasses()
    }

    @Mutation((returns) => ClassType)
    createClass(@Args('classInput') classInput: ClassInput):Promise<Class> {
        return this.classService.createClass(classInput);
    }
}
