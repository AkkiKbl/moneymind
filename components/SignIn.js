import React, { useContext } from "react";

import { authContext } from "@/lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <main className="container flex flex-col items-center max-w-2xl px-6 mx-auto">
      <h1 className="mb-6 text-6xl font-bold text-center text-black">
        Welcome to MoneyMind
      </h1>

      <div className="flex flex-col max-w-md p-8 overflow-hidden shadow-md shadow-slate-500 bg-slate-600 rounded-2xl">
        <div className="px-4 py-8">
          <h3 className="text-2xl text-center">Sign-In To Continue</h3>

          <button
            onClick={googleLoginHandler}
            className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg"
          >
            <FcGoogle className="text-2xl" /> Google
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
