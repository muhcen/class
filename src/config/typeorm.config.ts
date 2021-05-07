import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from 'src/student/student.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb://localhost:27017/classes',
    synchronize: true,
    useUnifiedTopology: true,
    entities: [Student],
};
