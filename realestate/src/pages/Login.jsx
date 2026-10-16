import { useState } from "react";
import { Link } from "react-router";
import FormField from "../components/FormField";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [done, setDone] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) newErrors.email = "Enter a valid email address.";
    if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setDone(true);
  }

  return (
    <section className="mx-auto max-w-md px-6 py-16">
      <div className="rounded-3xl bg-white p-8 shadow-xl shadow-navy/10">
        <h1 className="mb-1 font-heading text-3xl font-bold">Welcome back</h1>
        <p className="mb-6 text-navy/70">Sign in to your account.</p>

        {done && (
          <p className="mb-4 rounded-xl bg-sand p-3 text-sm">
            Form is valid. Real login will be added with the backend.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
          <FormField label="Password" name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={handleChange} error={errors.password} />

          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
            Show password
          </label>

          <button type="submit" className="cursor-pointer rounded-full bg-navy px-8 py-3.5 font-bold text-white hover:bg-golddark">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          New here?{" "}
          <Link to="/signup" className="font-bold text-golddark hover:underline">Create an account</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;