import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import type { ContactData } from "../App";

type ContactProps = {
  data: ContactData;
};

const getMotionValue = (name: string, fallback: number) => {
  if (typeof window === "undefined") return fallback;

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return Number.parseFloat(value) || fallback;
};

const fieldClass =
  "min-h-12 w-full rounded-md border border-transparent bg-[var(--site-contact-control-bg)] px-5 text-sm text-[var(--site-page-text)] outline-none transition-colors duration-[var(--motion-fast)] placeholder:text-[var(--site-page-muted)] focus:border-accent focus:bg-[var(--site-contact-control-focus)] focus:ring-2 focus:ring-[rgb(var(--site-accent-rgb)/18%)]";

const errorClass = "mt-2 text-xs font-medium text-red-400";

export const Contact = ({ data }: ContactProps) => {
  const [state, handleSubmit] = useForm(data.formId);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-7xl px-6 pb-24 pt-4 sm:px-10 lg:px-16 lg:pb-32 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: getMotionValue("--motion-section-duration", 0.45),
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2
          id="contact-title"
          className="text-2xl font-bold text-[var(--site-page-text)]"
        >
          {data.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-[var(--site-page-muted)]">
          {data.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: getMotionValue("--motion-section-duration", 0.45),
          delay: getMotionValue("--motion-section-delay", 0.08),
        }}
        className="mx-auto mt-12 max-w-5xl"
      >
        {state.succeeded ? (
          <div
            className="mx-auto max-w-xl rounded-md border border-[var(--site-border)] bg-[var(--site-contact-control-bg)] px-6 py-8 text-center"
            role="status"
          >
            <h3 className="text-lg font-semibold text-[var(--site-page-text)]">
              Thanks for reaching out.
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--site-page-muted)]">
              Your message is on its way. I will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Name"
                required
                className={fieldClass}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                required
                className={fieldClass}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone Number"
                className={fieldClass}
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div>
              <label htmlFor="service" className="sr-only">
                Service Of Interest
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className={`${fieldClass} appearance-none bg-[linear-gradient(45deg,transparent_50%,var(--site-page-muted)_50%),linear-gradient(135deg,var(--site-page-muted)_50%,transparent_50%)] bg-[length:6px_6px,6px_6px] bg-[position:calc(100%-23px)_50%,calc(100%-17px)_50%] bg-no-repeat pr-12`}
              >
                <option value="" disabled>
                  Service Of Interest
                </option>
                {data.services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <ValidationError
                prefix="Service"
                field="service"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div>
              <label htmlFor="timeline" className="sr-only">
                Timeline
              </label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                placeholder="Timeline"
                className={fieldClass}
              />
              <ValidationError
                prefix="Timeline"
                field="timeline"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div className="lg:row-span-2">
              <label htmlFor="message" className="sr-only">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Project Details..."
                required
                rows={5}
                className={`${fieldClass} min-h-36 resize-y py-4 lg:min-h-full`}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New portfolio contact request"
            />

            <div className="flex justify-start lg:col-start-2 lg:justify-end">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex h-11 min-w-28 items-center justify-center gap-2 rounded-md border border-[var(--site-page-muted)] px-6 text-sm font-semibold text-[var(--site-page-text)] transition-colors duration-[var(--motion-fast)] hover:border-accent hover:bg-accent hover:text-[var(--site-page-inverse)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send aria-hidden="true" className="h-4 w-4" />
                {state.submitting ? "Sending" : "Send"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};
