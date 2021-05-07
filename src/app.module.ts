import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { StudentModule } from './student/student.module';

@Module({
    imports: [
        StudentModule,
        TypeOrmModule.forRoot(typeOrmConfig),
        GraphQLModule.forRoot({ autoSchemaFile: true }),
    ],
})
export class AppModule {}
