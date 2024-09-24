import { default as etptheme } from 'etp.theme.json';
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
const theme = useTheme();
const calenderStyle = StyleService.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        maxHeight: "100%",
        // backgroundColor:"#FFFFFF",
    },
    calenderView: {
        borderWidth: 1,
        borderColor: '#E4E9F2',
        height: 350
    }
});
export const styles = useStyleSheet(calenderStyle);
