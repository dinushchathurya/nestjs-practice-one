import { Injectable } from '@nestjs/common';
import { Employee, EmployeeTier, EmployeeStatus } from './employee.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class EmployeesService {

    private employees: Employee[] =[]

    getAllEmployees(){
        return this.employees;
    }

    createEmployee(firstName: string, lastName: string, designation: string, nearestCity: string, tier: EmployeeTier, status: EmployeeStatus) {
        
        const employee = {
            id: uuid(),
            firstName,
            lastName,
            designation,
            nearestCity,
            tier: EmployeeTier.TIER_ZERO,
            status: EmployeeStatus.ACTIVE
        }
        this.employees.push(employee);
        return employee;
    }
}
