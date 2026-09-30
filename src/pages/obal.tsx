import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  // 1. Manage form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // 2. Handle input changes dynamically
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle form submission logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your chosen Form backend endpoint (e.g., Formspree, Web3Forms, Netlify)
      // const response = await fetch("https://formspree.io", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Clear inputs on success
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Contact
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
          Let's grow together.
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400 leading-7">
          I'm currently transitioning into fullstack web development and always
          open to opportunities, collaborations, or simply connecting with other
          people who enjoy building for the web.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Email
                </p>
                <a
                  href="mailto:xafdil@gmail.com"
                  className="text-lg text-white transition hover:text-gray-300">
                  xafdil@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Location
                </p>
                <p className="text-lg text-white">Pekanbaru, Riau, Indonesia</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
                Find me online
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/xafdil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 transition hover:border-white hover:bg-white hover:text-black">
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/xafdil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 transition hover:border-white hover:bg-white hover:text-black">
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Send me a message</h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm uppercase tracking-wider text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm uppercase tracking-wider text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm uppercase tracking-wider text-gray-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 py-3 font-semibold text-black transition hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-50">
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Feedback System */}
              {submitStatus === "success" && (
                <p className="mt-2 text-center text-sm font-medium text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-2 text-center text-sm font-medium text-red-400">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">© 2026 Afdil Saputra.</p>
        </div>
      </div>
    </section>
  );
}
