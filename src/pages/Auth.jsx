import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LoginForm from "../components/ui/LoginForm";
import SignupForm from "../components/ui/SignupForm";

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const modeParam = searchParams.get("mode");
  const [mode, setMode] = useState(
    modeParam === "register" ? "register" : "login"
  );

  useEffect(() => {
    setSearchParams({ mode });
  }, [mode, setSearchParams]);

  const switchToLogin = () => setMode("login");
  const switchToSignup = () => setMode("register");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      {mode === "login" ? (
        <LoginForm onSwitchToSignup={switchToSignup} />
      ) : (
        <SignupForm onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
};

export default Auth;
