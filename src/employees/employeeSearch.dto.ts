import { EmployeeStatus } from "./employee.model";

export interface EmployeeSearchDto{
    // @IsIn(Object.values(EmployeeStatus))
    status: EmployeeStatus
    name: string
}