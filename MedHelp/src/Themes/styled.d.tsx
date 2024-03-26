import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        //fontText: 

        colors: {
            primary: string;
            secundary: string;
            tertiary: string;
        };
    }
}