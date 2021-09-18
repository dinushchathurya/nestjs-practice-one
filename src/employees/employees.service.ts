import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {

    private employees: Employee[] =[]

    getAllEmployees(){
        return this.employees;
    }
}
