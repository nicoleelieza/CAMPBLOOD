import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle the sign-up logic (API call, validation, etc.)
    console.log("Sign Up:", { email, password });
  };

  return (
    <div className="container mx-auto mt-16">
      <h1 className="text-4xl font-bold text-center mb-6">Sign Up</h1>
      <form onSubmit={handleSignUp} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-bold">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
