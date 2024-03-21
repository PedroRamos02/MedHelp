import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = '#F5F5F5';
const secundary = '325CC8';
const tertiary = '0D3290';

 const theme = {
    fontSizes,
    fonts: {
        primary,
        secundary,
        tertiary,
    }
 };

 export const Theme:React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };