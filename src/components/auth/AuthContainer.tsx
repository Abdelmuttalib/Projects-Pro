import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import CreateAccountForm from "./CreateAccountForm";
import SignInForm from "./SignInForm";

export type TAuthType = "sign-in" | "create-account";

const Auth = () => {
  const [authType, setAuthType] = useState<TAuthType>("sign-in");

  return (
    <div className="flex items-center justify-center">
      {authType === "sign-in" ? (
        <SignInForm setAuthType={setAuthType} />
      ) : (
        <CreateAccountForm setAuthType={setAuthType} />
      )}
    </div>
  );
};

export default Auth;
