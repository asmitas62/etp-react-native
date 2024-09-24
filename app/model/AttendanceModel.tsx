export class AttendanceModel {
    attendances!: Attendance[];
    summary!: Summary;
}

export class Summary {
    absent!: string;
    earlyDeparture!: number
    holiday!: number;
    lateArrival!: number;
    leave!: number;
    present!: number;
    weeklyoff!: number;
    overTime!: string;
    overStay!: string;
    otosFlag!: string;
}

export class Attendance {
    attendanceDate !: string;
    attendanceLocked !: boolean;
    earlyDeparture !: number;
    inTime !: string;
    lateArrival!: number;
    outTime!: string;
    overTime!: string;
    punchChangeStage!: string;
    shiftAttended!: string;
    shiftAttendedID!: number;
    shiftChangeStage!: string;
    shiftEndTime!: string;
    shiftStartTime!: string;
    shiftView!: string;
    status!: string;
    statusChangeStage!: string;
    workingHours!: string;
    viewData!:boolean;
    colorCode!:string
}
export class MarkAttendence{
        otherPunchRequestID!:number;
        employeeID!: string;
        punchTime!: string;
        inOut!: string;
        lat!: number;
        long!: number;
        locationAddress!: string;
        deviceId!:string;
        requestRemark!: string;
        image1!: string;
        image2!: string;
        isPunchOnly?: boolean
        punchSourceID!: number;
        // selectImage1?: boolean;
        // selectImage2?: boolean;
        selectImage1!: boolean;
        selectImage2!: boolean;
}
export class TeamsDetails{
    inTime! : string;
    outTime! : string;
    status! : string;
    employeeID! : number;
    employeeCode! : string;
    fullName! : string;
    designation!: string;
    department!: string;
    branch!: string;
    reportingManagerID!: number;
    profileImagePath! : null;
    dateOfBirth! : null;
    leaveView?:null;
    attendanceView?: null;
}
