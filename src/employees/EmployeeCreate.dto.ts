import { EmployeeTier, EmployeeStatus } from "./employee.model";
import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class EmployeeCreateDto {
    id: string
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string
    designation: string
    nearestCity: string
    tier: EmployeeTier
    status: EmployeeStatus
}