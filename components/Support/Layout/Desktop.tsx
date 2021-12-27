/* eslint-disable @next/next/no-html-link-for-pages */
import { FC } from "react";
import { useRouter } from "next/router";

const Desktop: FC = () => {
  const router = useRouter();
  return (
    <header className="hidden lg:block w-full absolute top-0 left-0 py-2 shadow-header">
      <div className="wrapper flex items-center justify-between m-auto">
        <div className="grid grid-flow-col gap-9 items-center">
          <a
            href="/"
            className="text-232333 dark:text-white text-center text-xm font-black hover:opacity-60"
          >
            mml
          </a>
          <a
            href="/"
            className="text-232333 dark:text-white text-center text-14 font-medium hover:opacity-60"
          >
            Pricing
          </a>
          <a
            href="/"
            className="text-232333 dark:text-white text-center text-14 font-medium hover:opacity-60"
          >
            Account
          </a>
        </div>

        {router.pathname.includes("signup") ? (
          <div className="flex space-x-4 text-14">
            <p>Already a member? </p>{" "}
            <a className="font-bold" href="/auth/">
              Sign In
            </a>
          </div>
        ) : (
          <div className="flex space-x-4 text-14">
            <p>Not a member?</p>
            <a className="font-bold" href="/auth/signup">
              Sign Up
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Desktop;
