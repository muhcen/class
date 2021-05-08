import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Class } from 'src/class/class.entity';
import { Student } from 'src/student/student.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb://localhost:27017/class',
    synchronize: true,
    useUnifiedTopology: true,
    entities: [Student, Class],
};
