import { signIn } from "next-auth/react";

export default function LoginWidget() {
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location.origin}/`,
          })
        }
      >
        Login
      </button>
    </div>
  );
}
