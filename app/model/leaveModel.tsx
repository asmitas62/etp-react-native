export class LeaveModel {
    leaveID!: number;
    leaveCode!: string;
    leaveName!: string;
    accrualLeave!: number;
    consumeLeave!: number;
    deductLeave!: number;
    balanceLeave!: number;
    color?: string;
}

export class Holiday {
    holidayId!: number;
    holidayName!: string;
    description!: string;
    holidayDate!: string;
    holidayType!: string;
    isSelected!: boolean;
    color?: string;
    type?: string
}