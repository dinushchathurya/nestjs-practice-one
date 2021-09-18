import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './employeeSearch.dto';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService:EmployeesService) {

    }

    @Get()
    getAllEmployees(@Query() param: EmployeeSearchDto) {

        if(Object.keys(param).length){
            return this.employeeService.employeeSearch(param);
        } else {
            return this.employeeService.getAllEmployees();
        }
    }

    @Post()
    createEmployee(
        @Body('firstName') firstName:string,
        @Body('lastName') lastName: string,
        @Body('designation') designation: string,
        @Body('nearestCity') nearestCity: string,
        @Body('tier') tier,
        @Body('status') status
    ) {
        return this.employeeService.createEmployee(firstName, lastName, designation, nearestCity, tier, status)
    }
}
