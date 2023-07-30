import { createGlobalStyle } from 'styled-components';

import Font_R from '@/assets/fonts/Happiness-Sans-Regular.ttf';
import Font_B from '@/assets/fonts/Happiness-Sans-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: "Happiness-Sans";
        src: local("Happiness-Sans"), url(${Font_R}) format('truetype'); 
        font-weight: normal;
    }
    @font-face {
        font-family: "Happiness-Sans";
        src: local("Happiness-Sans"), url(${Font_B}) format('truetype');
        font-weight: bold;
    }
    
`;
