import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      if (username) localStorage.setItem("username", username);

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  }

  function goToSignup() {
    navigate("/signup");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Welcome back
        </h2>

        <div className="space-y-4 text-center">
          <Input reference={usernameRef} placeholder="Username" />
          <Input reference={passwordRef} placeholder="Password" />
        </div>

        <div className="mt-6">
          <Button
            loading={false}
            variant="primary"
            text="Sign In"
            size="md"
            fullWidth={true}
            onClick={signin}
          />
        </div>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={goToSignup}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
