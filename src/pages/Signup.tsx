import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      await axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        password,
      });
      alert("Signup successful!");
      navigate("/signin");
    } catch (error) {
      alert("Signup failed. Try again.");
    }
  }

  function goToSignin() {
    navigate("/signin");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create your account
        </h2>

        <div className="space-y-2 text-center">
          <Input reference={usernameRef} placeholder="Username" />
          <Input reference={passwordRef} placeholder="Password" />
        </div>

        <div className="mt-6">
          <Button
            loading={false}
            variant="primary"
            text="Sign Up"
            size="md"
            fullWidth={true}
            onClick={signup}
          />
        </div>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={goToSignin}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
