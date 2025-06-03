import { css } from "styled-components";

const Variables = css`
  :root {
    
    /* color  */

    --light: #fbfbfb;
    --pup-white: #e3d5f6;
    --purple: #7515f5;
    --dark-primary: #121214;
    --dark-secondary: #1a1a1e;
    --dark-gray-: #222327;
    --dark-ms-bg-: #4e3e63;
    --dark-text-primary: #efeff0;
    --dark-text-secondary: #d4d4d9;
    
    /* Semantic Colors */
    /* --success-100: hsla(143.05882352941177, 100%, 50%, 0.175); */
    --success-500: #43a25a;
    --info-100: hsl(
      20,
      57%,
      94%
    );
    --info-500: #f2c100;
    /* --danger-100: hsl(0, 57.142857142857174%, 94.50980392156862%); */
    --danger-500: #e06363;

    
    /* Shadows */
    --shadow-nm: 0 0 12px 3px #00000016;
    --shadow-md: 0 0 12px 3px #00000024;
    --shadow-lg: 0 0 12px 3px #00000032;

    /* Font size variables  */
    --text-xxs: 0.8rem; /* 8px */
    --text-xs: 1rem; /* 10px */
    --text-sm: 1.2rem; /* 12px */
    --text-base: 1.4rem; /* 14px */
    --text-md: 1.5rem; /* 16px */
    --text-lg: 1.6rem; /* 20px - h4/subheaders */
    --text-xl: 2rem; /* 24px - h3 */
    --text-xxl: 3rem; /* 30px - h2 */
    --text-xxxl: 4rem; /* 38px - h1 */
    --text-giant: 5rem; /* 48px - display text */
    --text-big: 6rem; 

    --text-h4: var(--text-lg);
    --text-h3: var(--text-xl);
    --text-h2: var(--text-xxl);
    --text-h1: var(--text-xxxl);

    /* Border radius scale */
    --radius-xxs: 0.2rem; /* 2px - subtle rounding */
    --radius-xs: 0.4rem; /* 4px - small elements */
    --radius-sm: 0.8rem; /* 8px - default radius */
    --radius-md: 1rem; /* 12px - cards/containers */
    --radius-lg: 1.2rem; /* 12px - large containers */

    /* border */

    --border-dark-color: #232328;
    --border-light-sm: 1px solid var(--neutral-300);

    /* gradient */

    --purple-gradient: linear-gradient(55deg, #7515F5, #440C8F)
  }
`;

export default Variables;
