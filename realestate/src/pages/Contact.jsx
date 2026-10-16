import { useState } from "react";
import { CircleCheck } from "lucide-react";
import PageBanner from "../components/PageBanner";
import FormField from "../components/FormField";

const initialForm = { name: "", email: "", phone: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (form.name.trim().length < 3) newErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) newErrors.email = "Enter a valid email address.";
    if (form.phone && !/^[0-9+\s-]{10,15}$/.test(form.phone.trim())) newErrors.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // backend aane par yahan data server ko bheja jayega
    setSent(true);
    setForm(initialForm);
  }

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Questions about a property? We are happy to help." />

      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row">
        <div className="lg:w-80">
          <h2 className="mb-4 font-heading text-2xl font-bold">Get in touch</h2>
          <p className="mb-2">[YOUR ADDRESS]</p>
          <p className="mb-2">[YOUR PHONE]</p>
          <p className="mb-6">[YOUR EMAIL]</p>
          <h3 className="mb-1 font-bold">Office hours</h3>
          <p>[YOUR OFFICE HOURS]</p>
        </div>

        <div className="flex-1">
          {sent ? (
            <div className="rounded-2xl bg-sand p-10 text-center">
              <CircleCheck size={48} className="mx-auto mb-3 text-golddark" />
              <h2 className="mb-2 font-heading text-2xl font-bold">Message sent</h2>
              <p className="mb-6">Thank you, we will get back to you soon.</p>
              <button
                onClick={() => setSent(false)}
                className="cursor-pointer rounded-full bg-navy px-8 py-3 font-bold text-white hover:bg-golddark"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Your name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
                <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
              </div>
              <FormField label="Phone (optional)" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} />
              <FormField label="Message" name="message" as="textarea" value={form.message} onChange={handleChange} error={errors.message} />
              <button
                type="submit"
                className="cursor-pointer self-start rounded-full bg-navy px-10 py-4 font-bold text-white hover:bg-golddark"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export default Contact;