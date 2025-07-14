import { css } from "styled-components";

const Variables = css`
  :root {
    --light: #fbfbfb;
    --pup-white: #e3d5f6;
    --blue: #2492c2;
    --dark-blue: rgb(13, 104, 143);
    --primary: #121214;
    --secondary: #1a1a1e;
    --jet: #222327;
    --gray: #9d9c9c;
    --ms-bg: #4e3e63;
    --text-primary: #efeff0;
    --text-secondary: #d4d4d9;
    --border-color: #1a1a1e;

    --success-500: #43a25a;
    --info-100: hsl(20, 57%, 94%);
    --info-500: #f2c100;
    --danger-500: #e06363;

    --shadow-sm: 0 0 12px 3px #00000016;
    --shadow-md: 0 0 12px 3px #00000024;
    --shadow-lg: 0 0 12px 3px #00000032;

    --border-px: 1px solid;

    --text-xxs: 0.8rem;
    --text-xs: 1rem;
    --text-sm: 1.2rem;
    --text-base: 1.4rem;
    --text-md: 1.6rem;
    --text-lg: 1.7rem;
    --text-xl: 2rem;
    --text-xxl: 3rem;
    --text-xxxl: 4rem;
    --text-giant: 5rem;
    --text-big: 6rem;

    --text-h4: var(--text-lg);
    --text-h3: var(--text-xl);
    --text-h2: var(--text-xxl);
    --text-h1: var(--text-xxxl);

    --radius-xxs: 0.2rem;
    --radius-xs: 0.4rem;
    --radius-sm: 0.8rem;
    --radius-md: 1rem;
    --radius-lg: 1.2rem;

    --blue-gradient: linear-gradient(55deg, #7515f5, #440c8f);

    --font-family: "Inter", "Roboto", "Poppins", -apple-system,
      "BlinkMacSystemFont", "Segoe UI", "Segoe UI Variable", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      "Helvetica", "Arial", "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
`;

export default Variables;
