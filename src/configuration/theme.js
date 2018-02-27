// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    deepPurple900,
    yellow500,
    pink500,
    darkBlack,
    red100,
} from 'material-ui/styles/colors'

export const Theme = getMuiTheme({
    palette: {
        primary1Color: deepPurple900,
        accent1Color: yellow500,
        accent2Color: red100,
        textColor: darkBlack,
        alternateTextColor: pink500,
        pickerHeaderColor: deepPurple900
    },
    fontFamily: 'sans-serif',
});