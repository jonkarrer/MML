import Link from "next/link";

const DashButton = () => (
  <Link passHref href="/">
    <span className="w-24 h-9 grid place-content-center bg-white rounded-full bg-opacity-30 cursor-pointer">
      <h6 className="opacity-80 dark:text-white text-ty">Dashboard</h6>
    </span>
  </Link>
);

export default DashButton;
