import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle the sign-in logic (API call, validation, etc.)
    console.log("Sign In:", { email, password });
  };

  return (
    <div className="container mx-auto mt-16">
      <h1 className="text-4xl font-bold text-center mb-6">Sign In</h1>
      <form onSubmit={handleSignIn} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
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
        <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-bold">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
