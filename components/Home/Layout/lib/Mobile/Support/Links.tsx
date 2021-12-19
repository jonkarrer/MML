import Link from "next/link";

const fillColor = "fill-current text-white";
const wrapper = "grid grid-flow-col place-content-start items-center gap-3";
const text = "text-xs font-medium text-white";

export const Start = () => (
  <Link passHref href="/">
    <span className={wrapper}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.75 4.5V13.5L16.125 9L9.75 4.5ZM3 13.5L9.375 9L3 4.5V13.5Z"
          className={fillColor}
        />
      </svg>

      <p className={text}>Quick Start</p>
    </span>
  </Link>
);

export const About = () => (
  <Link passHref href="/">
    <span className={wrapper}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 4.125C9.69619 4.125 10.3639 4.40156 10.8562 4.89384C11.3484 5.38613 11.625 6.05381 11.625 6.75C11.625 7.44619 11.3484 8.11387 10.8562 8.60615C10.3639 9.09844 9.69619 9.375 9 9.375C8.30381 9.375 7.63613 9.09844 7.14384 8.60615C6.65156 8.11387 6.375 7.44619 6.375 6.75C6.375 6.05381 6.65156 5.38613 7.14384 4.89384C7.63613 4.40156 8.30381 4.125 9 4.125ZM3.75 6C4.17 6 4.56 6.1125 4.8975 6.315C4.785 7.3875 5.1 8.4525 5.745 9.285C5.37 10.005 4.62 10.5 3.75 10.5C3.15326 10.5 2.58097 10.2629 2.15901 9.84099C1.73705 9.41903 1.5 8.84674 1.5 8.25C1.5 7.65326 1.73705 7.08097 2.15901 6.65901C2.58097 6.23705 3.15326 6 3.75 6ZM14.25 6C14.8467 6 15.419 6.23705 15.841 6.65901C16.2629 7.08097 16.5 7.65326 16.5 8.25C16.5 8.84674 16.2629 9.41903 15.841 9.84099C15.419 10.2629 14.8467 10.5 14.25 10.5C13.38 10.5 12.63 10.005 12.255 9.285C12.9 8.4525 13.215 7.3875 13.1025 6.315C13.44 6.1125 13.83 6 14.25 6ZM4.125 13.6875C4.125 12.135 6.3075 10.875 9 10.875C11.6925 10.875 13.875 12.135 13.875 13.6875V15H4.125V13.6875ZM0 15V13.875C0 12.8325 1.4175 11.955 3.3375 11.7C2.895 12.21 2.625 12.915 2.625 13.6875V15H0ZM18 15H15.375V13.6875C15.375 12.915 15.105 12.21 14.6625 11.7C16.5825 11.955 18 12.8325 18 13.875V15Z"
          className={fillColor}
        />
      </svg>

      <p className={text}>About Us</p>
    </span>
  </Link>
);

export const Learn = () => (
  <Link passHref href="/">
    <span className={wrapper}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 2.25L0.75 6.75L9 11.25L15.75 7.5675V12.75H17.25V6.75L9 2.25ZM3.75 9.885V12.885L9 15.75L14.25 12.885V9.885L9 12.75L3.75 9.885Z"
          fill="#3D5368"
          className={fillColor}
        />
      </svg>

      <p className={text}>Learn</p>
    </span>
  </Link>
);

export const Blog = () => (
  <Link passHref href="/">
    <span className={wrapper}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.25 2.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V14.25C15.75 15.0825 15.075 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25ZM12.525 7.0125C12.69 6.855 12.69 6.5925 12.525 6.435L11.565 5.475C11.4075 5.31 11.145 5.31 10.9875 5.475L10.2375 6.225L11.775 7.7625L12.525 7.0125ZM5.25 11.205V12.75H6.795L11.34 8.205L9.795 6.66L5.25 11.205Z"
          fill="#3D5368"
          className={fillColor}
        />
      </svg>

      <p className={text}>Blog</p>
    </span>
  </Link>
);

export const Contact = () => (
  <Link passHref href="/">
    <span className={wrapper}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 2.25C13.125 2.25 16.5 4.935 16.5 8.25C16.5 11.565 13.125 14.25 9 14.25C8.07 14.25 7.1775 14.115 6.3525 13.875C4.1625 15.75 1.5 15.75 1.5 15.75C3.2475 14.0025 3.525 12.825 3.5625 12.375C2.2875 11.3025 1.5 9.8475 1.5 8.25C1.5 4.935 4.875 2.25 9 2.25Z"
          fill="#3D5368"
          className={fillColor}
        />
      </svg>

      <p className={text}>Contact Us</p>
    </span>
  </Link>
);
