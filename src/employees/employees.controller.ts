import { Controller, Get, Post, Body, Query, Param, Put, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './employeeSearch.dto';
import { EmployeeUpdateDto } from './employeeUpdate.dto';
import { EmployeeCreateDto } from './EmployeeCreate.dto';

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
    createEmployee(@Body() employeeCreateDto:EmployeeCreateDto) {
        return this.employeeService.createEmployee(employeeCreateDto)
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
    @HttpCode(204)
    deleteEmployee(@Param('id') id: string) {
        if(!this.employeeService.deleteEmployee(id)) {
            throw new NotFoundException('Employee does not exists');
        }
    }

}
