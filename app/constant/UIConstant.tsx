import { View, Text } from 'react-native'
import React from 'react'
import * as color from 'etp.theme.json';

export const UIConstant = {
    UrlPreFixList: [
        {key:"Http", value:"Http" },
        {key:"Https", value:"Https" }
    ],
    WORK_DAY_STATUS: {
        PRESENT: {key:"P", value:color['color-success-600'] },
        ABSENT: {key:"A", value:color['color-danger-600'] },
        ABSENT_OF_PROCESS: {key:"A1", value:color['color-danger-400'] },
        HOLIDAY: {key:"HLD", value:color['color-info-400'] },
        WEEKLY_OFF: {key:"WO", value:color['color-basic-700'] },
        PRESENT_ON_HOLIDAY: {key:"POH", value:color['color-success-600'] },
        PRESENT_ON_WO: {key:"POW", value:color['color-success-600'] },
        SHORT: {key:"SRT", value:"primary" },
        HALFDAY:{key:"HLF", value:color['color-success-200'] } ,
        PRESENT_ON_WO_HLD: {key:"PWH", value:color['color-success-100'] },
        PUNCH_MISS:{key:"MIS", value:color['color-warning-700'] },
        LEAVE: {key:"L", value:color['color-warning-700'] },
        ON_DUTY:{key:"OD", value:color['color-warning-200'] } ,
        LEAVE_WITHOUT_PAY: {key:"LWP", value:color['color-warning-400'] },
        WEEK_OFF_HLD: {key:"WOH", value:color['color-info-600'] },
        PARTIAL_ABSENT: {key:"P-A", value:color['color-danger-200'] },
        CASUAL_LEAVE: {key:"CL", value:color['color-warning-700'] },
        DEFAULT: {key:"CL", value:color['color-info-100'] }
    },
}
export default UIConstant