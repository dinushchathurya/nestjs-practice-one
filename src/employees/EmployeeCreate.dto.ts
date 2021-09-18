import { EmployeeTier, EmployeeStatus } from "./employee.model";

export interface EmployeeCreateDto {
    id: string;
    firstName: string
    lastName: string
    designation: string
    nearestCity: string
    tier: EmployeeTier,
    status: EmployeeStatus
}