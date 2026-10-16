import { useState } from "react";
import { Link } from "react-router";
import FormField from "../components/FormField";

const initialForm = { name: "", email: "", password: "", confirm: "" };

function Signup() {
  const [form, setForm] = useState(initialForm);
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
    if (form.name.trim().length < 3) newErrors.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) newErrors.email = "Enter a valid email address.";
    if (form.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    if (form.confirm !== form.password) newErrors.confirm = "Passwords do not match.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setDone(true);
  }

  const passwordType = showPassword ? "text" : "password";

  return (
    <section className="mx-auto max-w-md px-6 py-16">
      <div className="rounded-3xl bg-white p-8 shadow-xl shadow-navy/10">
        <h1 className="mb-1 font-heading text-3xl font-bold">Create account</h1>
        <p className="mb-6 text-navy/70">Save favorites and contact agents faster.</p>

        {done && (
          <p className="mb-4 rounded-xl bg-sand p-3 text-sm">
            Form is valid. Real signup will be added with the backend.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <FormField label="Full name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
          <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
          <FormField label="Password" name="password" type={passwordType} value={form.password} onChange={handleChange} error={errors.password} />
          <FormField label="Confirm password" name="confirm" type={passwordType} value={form.confirm} onChange={handleChange} error={errors.confirm} />

          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
            Show passwords
          </label>

          <button type="submit" className="cursor-pointer rounded-full bg-navy px-8 py-3.5 font-bold text-white hover:bg-golddark">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-golddark hover:underline">Sign in</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;