import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService:EmployeesService) {

    }

    @Get()
    getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }
}
