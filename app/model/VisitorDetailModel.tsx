export class VisitorModel{

    visitorLogID?: number;
    visitorID!: number;
    fullName!: string;
    contactNumber!: string;
    companyName!: string;
    companyAddress!: string;
    expectedIn!: string;
    expectedInTime!: string;
    profileImagePath!: string;
    visitStatusID?: number;
    approvedStatusID?: number
    visitStatusColor?: string;
    approvalStatusColor?: string;
  }
  export class VisitorStatusModel{
    monthOut?:number;
    todayIn?:number;
    todayOut?:number;
    todayPending?:number;
    visitDate?:Date;
    totalVisitor?:number;
  
  }