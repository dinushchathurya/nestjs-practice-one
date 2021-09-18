import { Injectable } from '@nestjs/common';
import { Employee, EmployeeTier, EmployeeStatus } from './employee.model';
import { v1 as uuid } from 'uuid';
import { EmployeeSearchDto } from './employeeSearch.dto';

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

    employeeSearch(employeeSearchDto: EmployeeSearchDto) {

        const { status, name } = employeeSearchDto;
        let employees = this.getAllEmployees();

        if (status) {
            employees = employees.filter(employee => employee.status === status);
        }

        if (name) {
            employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name));
        }

        return employees;
    }
}
