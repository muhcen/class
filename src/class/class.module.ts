import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './class.entity';
import { ClassResolver } from './class.resolver';
import { ClassService } from './class.service';

@Module({
    imports: [TypeOrmModule.forFeature([Class])],
    providers: [ClassService, ClassResolver],
})
export class ClassModule {}
