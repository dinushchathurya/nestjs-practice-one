import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './employeeSearch.dto';
import { EmployeeUpdateDto } from './employeeUpdate.dto';

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

    @Get('/:id')
    getEmployeeById(@Param('id') id:string){
        return this.employeeService.getEmployeeById(id);
    }

    @Put('/:id/city')
    updateEmployee(@Param('id') id: string, @Body() employeeUpdateDto:EmployeeUpdateDto) {
        employeeUpdateDto.id = id;
        this.employeeService.updateEmployee(employeeUpdateDto);
    }

    @Delete('/:id')
    deleteEmployee(@Param('id') id: string) {
        this.employeeService.deleteEmployee(id);
    }

}
