import { NextPage } from "next";
import type { FormEvent } from "react";
import { useRef } from "react";
import { auth } from "@/utils/firebase/firebaseClient";

const Auth: NextPage = () => {
  const email = useRef("");
  const password = useRef("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <section className=" h-screen bg-121212 text-white">
      <form
        className="grid gap-6 place-content-center h-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="email">
          <p>Email:</p>
          <input
            onChange={(e) => (email.current = e.currentTarget.value)}
            className="text-black"
            type="email"
            name="email"
            required
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            className="text-black"
            onChange={(e) => (password.current = e.currentTarget.value)}
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default Auth;
