import React from "react";

export default function login() {
  return (
    <div>
      <a href="/auth/google">
        <button>Login with google</button>
      </a>
      <a href="/auth/facebook">
        <button>Login with facebook</button>
      </a>
    </div>
  );
}
