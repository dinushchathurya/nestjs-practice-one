import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { MONGO_URI } from './app.propeties';

@Module({
  imports: [
    EmployeesModule, 
    MongooseModule.forRoot(MONGO_URI)
  ]
})
export class AppModule {}
