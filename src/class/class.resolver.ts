import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ClassInput, StudentsInput } from './class-create.input';
import { Class } from './class.entity';
import { ClassService } from './class.service';
import { ClassType } from './class.type';
import { PubSub } from 'graphql-subscriptions';
import { Student } from 'src/student/student.entity';
const pubSub = new PubSub();
@Resolver((of) => ClassType)
export class ClassResolver {
    private pubSub: PubSub;
    constructor(private classService: ClassService) {
        this.pubSub = new PubSub();
    }

    @Query((returns) => [ClassType])
    classes(): Promise<Class[]> {
        return this.classService.getClasses();
    }

    @Mutation((returns) => ClassType)
    createClass(@Args('classInput') classInput: ClassInput): Promise<Class> {
        const Class = this.classService.createClass(classInput);
        pubSub.publish('createClass', { createClassPop: Class });
        return Class;
    }

    @Mutation((returns) => ClassType)
    updateClass(
        @Args('studentsInput') Students: StudentsInput,
        @Args('id') id: string,
    ): Promise<Class> {
        const Class = this.classService.updateClass(Students, id);
        pubSub.publish('createClass', { createClassPop: Class });
        return Class;
    }

    @Subscription((returns) => ClassType)
    createClassPop() {
        return pubSub.asyncIterator('createClass');
    }
}
