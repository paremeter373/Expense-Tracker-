import { SignIn, SignUp } from "@clerk/clerk-react";

export function SignInPage() {
  return (
    <div className="auth-container">
      <SignIn />
    </div>
  );
}

export function SignUpPage() {
  return (
    <div className="auth-container">
      <SignUp />
    </div>
  );
} 