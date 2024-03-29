import { useRouter } from 'next/router';
import styles from './logo.module.css';

const Logo = () => {
  const router = useRouter();
  return (
    <svg
      aria-hidden="true"
      className={styles.logo}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      onClick={() => router.push('/')}
    >
      <defs>
        <clipPath id=":r0:monogram-clip">
          <path d="M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z"></path>
        </clipPath>
      </defs>
      <rect
        clipPath="url(#:r0:monogram-clip)"
        width="100%"
        height="100%"
      ></rect>
      <g clipPath="url(#:r0:monogram-clip)">
        <rect className={styles.logo_inner} width="100%" height="100%"></rect>
      </g>
    </svg>
  );
};

export default Logo;
