export interface Employee {
    firstName: string
    lastName:string
    designation: string
    nearestCity: string
    tier: EmployeeTier
}

export enum EmployeeTier {
    TIER_ONE = 'TIER_ONE',
    TIER_TWO = 'TIER_TWO',
    TIER_THREE = 'TIER_THREE',
    TIER_FOUR = 'TIER_FOUR',
    TIER_ZERO = 'TIER_ZERO'
}