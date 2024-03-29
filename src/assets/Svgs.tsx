interface iconProps {
  classname?: string;
}
const SignoutIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${classname}`}>
      <path d="M17 2H7C5.3 2 4 3.3 4 5v6h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l2.3-2.3H4v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z"></path>
    </svg>
  );
};

const PhoneIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={`${classname}`}>
      <path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 00-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 00.02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 00.722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 00-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 00-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 00.26-.766z"></path>
    </svg>
  );
};

const GoogleIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className={`${classname}`}>
      <path
        fill="#F44336"
        d="M12 5c1.617 0 3.101.554 4.286 1.474l3.637-3.47A11.94 11.94 0 0012 0C7.392 0 3.397 2.6 1.386 6.41L5.43 9.603A6.996 6.996 0 0112 5z"></path>
      <path
        fill="#2196F3"
        d="M23.896 13.502C23.96 13.01 24 12.509 24 12c0-.858-.094-1.693-.265-2.5H12v5h6.486a7.072 7.072 0 01-2.648 3.32l4.06 3.204a11.987 11.987 0 003.998-7.522z"></path>
      <path
        fill="#FFC107"
        d="M5 12c0-.843.157-1.648.43-2.397L1.386 6.41A11.94 11.94 0 000 12c0 1.997.495 3.876 1.358 5.533l4.05-3.197A6.972 6.972 0 015 12z"></path>
      <path
        fill="#00B060"
        d="M12 19a6.997 6.997 0 01-6.592-4.664l-4.05 3.197C3.36 21.373 7.37 24 12 24c3.028 0 5.789-1.125 7.897-2.976l-4.059-3.205A6.831 6.831 0 0112 19z"></path>
      <path
        d="M12 23.75a12.416 12.416 0 01-8.952-3.779C5.245 22.438 8.436 24 12 24a11.94 11.94 0 008.888-3.96A12.406 12.406 0 0112 23.75z"
        opacity="0.1"></path>
      <path
        d="M12 14.25L12 14.5 18.4862061 14.5 18.587492 14.25z"
        opacity="0.1"></path>
      <path
        fill="#E6E6E6"
        d="M23.994 12.147c.001-.05.006-.098.006-.147l-.002-.041c0 .063-.004.125-.004.188z"></path>
      <path
        fill="#FFF"
        d="M12 9.5v.25h11.786a12.487 12.487 0 00-.05-.25H12z"
        opacity="0.2"></path>
      <linearGradient
        id="SVGID_1_"
        x1="0"
        x2="24"
        y1="12"
        y2="12"
        gradientUnits="userSpaceOnUse">
        <stop
          offset="0"
          stopColor="#FFF"
          stopOpacity="0.2"></stop>
        <stop
          offset="1"
          stopColor="#FFF"
          stopOpacity="0"></stop>
      </linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M23.735 9.5H12v5h6.486C17.478 17.122 14.977 19 12 19a7 7 0 010-14c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-.082-.063A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.118 0 11.155-4.581 11.896-10.498.063-.492.104-.993.104-1.502 0-.858-.094-1.693-.265-2.5z"></path>
      <path
        d="M15.789 5.89A6.932 6.932 0 0012 4.75a7 7 0 00-6.999 7.117A6.994 6.994 0 0112 5c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-3.637 3.22c-.157-.122-.33-.224-.497-.333z"
        opacity="0.1"></path>
      <path
        fill="#FFF"
        d="M12 .25c2.975 0 5.683 1.098 7.78 2.892l.143-.138-.11-.096A11.829 11.829 0 0012 0C5.373 0 0 5.373 0 12c0 .042.006.083.006.125C.074 5.555 5.415.25 12 .25z"
        opacity="0.2"></path>
    </svg>
  );
};
const InstagramIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.87 28.87"
      className={`${classname}`}>
      <defs>
        <linearGradient
          id="a"
          x1="-1.84"
          x2="32.16"
          y1="30.47"
          y2="-3.03"
          gradientUnits="userSpaceOnUse">
          <stop
            offset="0"
            stopColor="#fed576"></stop>
          <stop
            offset="0.26"
            stopColor="#f47133"></stop>
          <stop
            offset="0.61"
            stopColor="#bc3081"></stop>
          <stop
            offset="1"
            stopColor="#4c63d2"></stop>
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <rect
            width="28.87"
            height="28.87"
            fill="url(#a)"
            rx="6.48"
            ry="6.48"></rect>
          <g
            fill="#fff"
            data-name="&lt;Group&gt;">
            <path
              d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 013.8 3.3 8 8 0 01.3 1.5v8.8a6.94 6.94 0 01-1.2 3.1 5.51 5.51 0 01-4.5 1.9h-7.5a5.49 5.49 0 01-3.7-1.2A5.51 5.51 0 015 18.14v-7a7.57 7.57 0 01.1-1.5 4.9 4.9 0 013.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 003.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 00-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 00-3.7 3.7z"
              data-name="&lt;Compound Path&gt;"></path>
            <path
              d="M9.64 14.54a4.91 4.91 0 014.9-4.9 5 5 0 014.9 4.9 4.91 4.91 0 01-4.9 4.9 5 5 0 01-4.9-4.9zm4.9-3.1a3.05 3.05 0 103 3 3 3 0 00-3-3z"
              data-name="&lt;Compound Path&gt;"></path>
            <path
              d="M18.34 9.44a1.16 1.16 0 011.2-1.2 1.29 1.29 0 011.2 1.2 1.2 1.2 0 01-2.4 0z"
              data-name="&lt;Path&gt;"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
const LinkedInIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.87 28.87"
      className={`${classname}`}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <rect
            width="28.87"
            height="28.87"
            fill="#0b86ca"
            rx="6.48"
            ry="6.48"></rect>
          <path
            fill="#fff"
            d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"></path>
        </g>
      </g>
    </svg>
  );
};

const UserIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${classname}`}>
      <circle
        cx="12"
        cy="8"
        r="4"
        fill="#464646"></circle>
      <path
        fill="#464646"
        d="M20 19v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a6 6 0 016-6h4a6 6 0 016 6z"></path>
    </svg>
  );
};

const EmailIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`${classname}`}>
      <path
        fill="none"
        d="M0 0h24v24H0V0z"></path>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 11.9-1.44L12 11l6.7-4.19a.85.85 0 11.9 1.44z"></path>
    </svg>
  );
};

const AboutUsIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 6.35 6.35"
      className={`${classname}`}>
      <path
        d="M3.175 0A3.175 3.175 0 000 3.175 3.175 3.175 0 003.175 6.35 3.175 3.175 0 006.35 3.175 3.175 3.175 0 003.175 0zm0 1.323a.265.265 0 01.265.264.265.265 0 01-.265.265.265.265 0 01-.265-.265.265.265 0 01.265-.264zm.001 1.058a.265.265 0 01.264.265v2.116a.265.265 0 01-.264.266.265.265 0 01-.266-.266V2.646a.265.265 0 01.266-.265z"
        paintOrder="markers fill stroke"></path>
    </svg>
  );
};

const SocialXIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      className={`${classname}`}>
      <path
        fill="#fff"
        d="M36.653 3.808H43.4L28.66 20.655 46 43.58H32.422L21.788 29.676 9.62 43.58H2.869l15.766-18.02L2 3.808h13.922l9.613 12.709 11.118-12.71zM34.285 39.54h3.738L13.891 7.634H9.879l24.406 31.907z"></path>
    </svg>
  );
};

const SocialInstagramIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      className={`${classname}`}>
      <g
        fill="#fff"
        clipPath="url(#clip0_17_63)">
        <path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z"></path>
        <path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z"></path>
      </g>
      <defs>
        <clipPath id="clip0_17_63">
          <path
            fill="#fff"
            d="M0 0H48V48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

const SocialLinkedinIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      className={`${classname}`}>
      <g clipPath="url(#clip0_17_68)">
        <path
          fill="#fff"
          d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"></path>
      </g>
      <defs>
        <clipPath id="clip0_17_68">
          <path
            fill="#fff"
            d="M0 0H48V48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

const SocialWhatsappIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      className={`${classname}`}>
      <path
        fill="#fff"
        d="M0 48l3.374-12.326A23.734 23.734 0 01.2 23.782C.206 10.67 10.876 0 23.986 0c6.362.002 12.334 2.48 16.826 6.976a23.648 23.648 0 016.96 16.828c-.006 13.114-10.676 23.784-23.786 23.784a23.8 23.8 0 01-11.376-2.896L0 48zm13.194-7.614c3.352 1.99 6.552 3.182 10.784 3.184 10.896 0 19.772-8.868 19.778-19.77.004-10.924-8.83-19.78-19.762-19.784-10.904 0-19.774 8.868-19.778 19.768-.002 4.45 1.302 7.782 3.492 11.268L5.71 42.348l7.484-1.962zm22.774-10.928c-.148-.248-.544-.396-1.14-.694-.594-.298-3.516-1.736-4.062-1.934-.544-.198-.94-.298-1.338.298-.396.594-1.536 1.934-1.882 2.33-.346.396-.694.446-1.288.148-.594-.298-2.51-.924-4.78-2.95-1.766-1.576-2.96-3.522-3.306-4.118-.346-.594-.036-.916.26-1.212.268-.266.594-.694.892-1.042.302-.344.4-.592.6-.99.198-.396.1-.744-.05-1.042-.15-.296-1.338-3.222-1.832-4.412-.484-1.158-.974-1.002-1.338-1.02l-1.14-.02c-.396 0-1.04.148-1.584.744s-2.08 2.032-2.08 4.958 2.13 5.752 2.426 6.148c.298.396 4.19 6.4 10.152 8.974 1.418.612 2.526.978 3.388 1.252 1.424.452 2.72.388 3.744.236 1.142-.17 3.516-1.438 4.012-2.826.496-1.39.496-2.58.346-2.828z"></path>
    </svg>
  );
};

const ReadIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className={`${classname}`}>
      <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
    </svg>
  );
};

const CrossIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      id="close"
      className={`${classname}`}>
      <path
        fill="none"
        d="M0 0h24v24H0Z"
        data-name="Path 3730"></path>
      <path
        fill="#424242"
        d="M15.741 17.61 12 13.87l-3.742 3.74a1.323 1.323 0 0 1-1.873-1.869L10.128 12 6.385 8.258a1.324 1.324 0 0 1 1.873-1.873L12 10.127l3.741-3.742a1.324 1.324 0 0 1 1.873 1.873L13.872 12l3.742 3.741a1.323 1.323 0 0 1-1.873 1.869Z"
        data-name="Path 2645"></path>
    </svg>
  );
};

const SearchIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="search"
      className={`${classname}`}>
      <g data-name="Layer 2">
        <path
          d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
          data-name="search"></path>
      </g>
    </svg>
  );
};

const MobileIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      className={`${classname}`}>
      <path d="M43 54c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3H17c-1.7 0-3 1.3-3 3v42c0 1.7 1.3 3 3 3h26zm-27-3V9c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v42c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1z"></path>
      <path d="M27 10H33V12H27z"></path>
      <path d="M22 10H24V12H22z"></path>
      <path d="M30 50c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"></path>
    </svg>
  );
};

const DesktopIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={`${classname}`}>
      <path
        d="M46 18.75H18a3 3 0 00-3 3v17a3 3 0 003 3h28a3 3 0 003-3v-17a3 3 0 00-3-3zm1 20a1 1 0 01-1 1H18a1 1 0 01-1-1v-17a1 1 0 011-1h28a1 1 0 011 1zm-5.51 4.5h-19a1 1 0 000 2h19a1 1 0 100-2z"
        data-name="pc"></path>
    </svg>
  );
};

const CaretDownIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={`${classname}`}>
      <path
        fill="none"
        d="M0 0H256V256H0z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18"
        d="M208 96L128 176 48 96"></path>
    </svg>
  );
};

const TextAlignLeftIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="text-align-left"
      className={`${classname}`}>
      <rect
        width="256"
        height="256"
        fill="none"></rect>
      <line
        x1="40"
        x2="216"
        y1="68"
        y2="68"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"></line>
      <line
        x1="40"
        x2="168"
        y1="108"
        y2="108"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"></line>
      <line
        x1="40.006"
        x2="216"
        y1="148"
        y2="148"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"></line>
      <line
        x1="40.006"
        x2="168"
        y1="188"
        y2="188"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"></line>
    </svg>
  );
};
const TextAlignCenterIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="text-align-center"
      className={`${classname}`}>
      <rect
        width="256"
        height="256"
        fill="none"></rect>
      <line
        x1="40"
        x2="216"
        y1="68"
        y2="68"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="64"
        x2="192"
        y1="108"
        y2="108"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="40.003"
        x2="215.997"
        y1="148"
        y2="148"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="64.003"
        x2="191.997"
        y1="188"
        y2="188"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
    </svg>
  );
};
const TextAlignRightIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="text-align-right"
      className={`${classname}`}>
      <rect
        width="256"
        height="256"
        fill="none"></rect>
      <line
        x1="40"
        x2="216"
        y1="68"
        y2="68"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="88"
        x2="216"
        y1="108"
        y2="108"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="40.006"
        x2="216"
        y1="148"
        y2="148"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="88.006"
        x2="216"
        y1="188"
        y2="188"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
    </svg>
  );
};
const TextAlignJustifyIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="text-align-justify"
      className={`${classname}`}>
      <rect
        width="256"
        height="256"
        fill="none"></rect>
      <line
        x1="40"
        x2="216"
        y1="68"
        y2="68"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="40"
        x2="216"
        y1="108"
        y2="108"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="40.006"
        x2="216"
        y1="148"
        y2="148"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="40.006"
        x2="216"
        y1="188"
        y2="188"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
    </svg>
  );
};
const TextUnderlineIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="text-underline"
      className={`${classname}`}>
      <rect
        width="256"
        height="256"
        fill="none"></rect>
      <line
        x1="40"
        x2="216"
        y1="216"
        y2="216"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        d="M64,56v64a64,64,0,0,0,128,0V56"></path>
    </svg>
  );
};
const TextItalicIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="text-italic"
      className={`${classname}`}>
      <rect
        width="256"
        height="256"
        fill="none"></rect>
      <line
        x1="151.994"
        x2="103.994"
        y1="55.995"
        y2="199.995"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="63.994"
        x2="143.994"
        y1="199.995"
        y2="199.995"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
      <line
        x1="111.994"
        x2="191.994"
        y1="55.995"
        y2="55.995"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"></line>
    </svg>
  );
};
const LetterSpacingIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      id="letterspacing"
      className={`${classname}`}>
      <path
        d="M34.75 11.71h3.07v24.58h-3.07Zm-24.57 0h3.07v24.58h-3.07ZM26 14.78h-4l-7.35 17.67H18l1.53-3.84h8.85l1.54 3.84h3.33Zm1.18 10.76h-6.25L24 18Z"
        data-name="Layer 3"></path>
    </svg>
  );
};

const LineHeightIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      id="format-line-spacing"
      className={`${classname}`}>
      <path
        fill="none"
        d="M0 0h24v24H0V0z"></path>
      <path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"></path>
    </svg>
  );
};

const Menu = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={`${classname}`}>
      <path
        fill="#444"
        d="M0 1h16v3H0V1zm0 5h16v3H0V6zm0 5h16v3H0v-3z"></path>
    </svg>
  );
};

const ShoppingCartIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={`${classname}`}>
      <path
        fill="none"
        d="M0 0H256V256H0z"></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M184 184H69.818L41.922 30.569A8 8 0 0034.05 24H16"></path>
      <circle
        cx="80"
        cy="204"
        r="20"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"></circle>
      <circle
        cx="184"
        cy="204"
        r="20"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"></circle>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M62.545 144h125.556a16 16 0 0015.742-13.138L216 64H48"></path>
    </svg>
  );
};

const UserIcon1 = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 29 29"
      className={`${classname}`}>
      <path d="M14.5 2A12.514 12.514 0 002 14.5 12.521 12.521 0 0014.5 27a12.5 12.5 0 000-25zm7.603 19.713a8.48 8.48 0 00-15.199.008A10.367 10.367 0 014 14.5a10.5 10.5 0 0121 0 10.368 10.368 0 01-2.897 7.213zM14.5 7a4.5 4.5 0 104.5 4.5A4.5 4.5 0 0014.5 7z"></path>
    </svg>
  );
};

const IncognitoIcon = ({ classname }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={`${classname}`}>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M17.5 14.75a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm-4.25 2.75a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zm-12-6.5a.75.75 0 01.75-.75h12a.75.75 0 110 1.5H2a.75.75 0 01-.75-.75zm16 0a.75.75 0 01.75-.75h4a.75.75 0 110 1.5h-4a.75.75 0 01-.75-.75z"
        clipRule="evenodd"></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M10.75 4a.75.75 0 01-.749.75c-.993.002-1.688.013-2.225.09-.518.072-.826.197-1.068.387-.26.202-.466.495-.678 1.05-.218.573-.411 1.34-.689 2.45l-.613 2.455a.75.75 0 01-1.456-.364l.626-2.5c.263-1.053.476-1.908.73-2.575.266-.696.602-1.266 1.157-1.699.517-.403 1.104-.595 1.782-.69.659-.093 1.461-.102 2.432-.104a.75.75 0 01.751.75zm2.5 0a.75.75 0 01.751-.75c.971.002 1.773.01 2.432.104.678.095 1.265.287 1.782.69.555.433.892 1.003 1.157 1.699.254.667.467 1.522.73 2.575l.626 2.5a.75.75 0 01-1.456.364l-.613-2.455c-.278-1.11-.47-1.877-.69-2.45-.21-.555-.418-.848-.677-1.05-.242-.19-.55-.315-1.068-.388-.537-.076-1.232-.087-2.225-.089A.75.75 0 0113.25 4zM6.5 14.75a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM2.25 17.5a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z"
        clipRule="evenodd"></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M13.006 17.842a2.25 2.25 0 00-2.012 0l-.659.329a.75.75 0 01-.67-1.342l.658-.329a3.75 3.75 0 013.354 0l.658.33a.75.75 0 01-.67 1.34l-.659-.328z"
        clipRule="evenodd"></path>
    </svg>
  );
};

export {
  MobileIcon,
  CaretDownIcon,
  DesktopIcon,
  SearchIcon,
  CrossIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedInIcon,
  UserIcon,
  ReadIcon,
  EmailIcon,
  AboutUsIcon,
  SocialInstagramIcon,
  SocialWhatsappIcon,
  SocialLinkedinIcon,
  SocialXIcon,
  PhoneIcon,
  SignoutIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextUnderlineIcon,
  TextItalicIcon,
  LetterSpacingIcon,
  LineHeightIcon,
  Menu,
  ShoppingCartIcon,
  UserIcon1,
  IncognitoIcon,
};
