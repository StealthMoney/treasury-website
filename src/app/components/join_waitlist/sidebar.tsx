"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WaitlistSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function WaitlistSidebar({
  open,
  onClose,
}: WaitlistSidebarProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessEmail: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    [key: string]: string;
  }>({});

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!form.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!form.businessName.trim()) {
      errors.businessName = "Business name is required";
    }

    if (!form.businessEmail.trim()) {
      errors.businessEmail = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
      errors.businessEmail = "Please enter a valid email";
    }

    setFieldErrors(errors);

    return Object.keys(errors).length > 0;
  };

  const handleReset = () => {
    setFieldErrors({});
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      businessName: "",
      businessEmail: "",
    }));
  };

  useEffect(() => {
    handleReset();
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      handleReset();
    };
  }, [open]);

  const handleSubmit = () => {
    const hasErrors = validateForm();

    if (hasErrors) return;

    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-[#DBE1E7] bg-[#FAFAFA] px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-0 transition-colors";

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          w-full sm:w-[480px] lg:w-[520px]
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-8 sm:px-10 py-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center flex-1 py-12 px-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                className="mb-6"
              >
                <div className="w-20 h-20 bg-[#090909] rounded-full flex items-center justify-center">
                  <motion.svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="text-center mb-8"
              >
                <h2 className="text-2xl font-semibold text-[#090909] mb-2">
                  You&rsquo;re on the list!
                </h2>
                <p className="text-sm text-[#707070] max-w-xs leading-relaxed">
                  We&rsquo;ll let you know as soon as your spot is ready. Keep
                  an eye on your inbox.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                onClick={onClose}
                className="w-full bg-[#090909] text-white py-3 cursor-pointer rounded-xl text-sm font-medium transition-colors"
              >
                Close
              </motion.button>
            </motion.div>
          ) : (
            <>
              <div className="mb-8 pt-4">
                <h2 className="text-2xl font-semibold text-[#090909] mb-2 tracking-tight">
                  You found it early
                </h2>
                <p className="text-sm text-[#707070] leading-relaxed max-w-sm">
                  We&rsquo;re opening access in waves. Join the waitlist and
                  we&rsquo;ll let you know when your spot is ready.
                </p>
              </div>

              <div className="flex flex-col gap-5 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#090909]">
                      First Name
                    </label>
                    <input
                      className={inputClass}
                      placeholder="e.g., John"
                      value={form.firstName}
                      onChange={(e) => {
                        setForm({ ...form, firstName: e.target.value });

                        if (fieldErrors.firstName) {
                          setFieldErrors((prev) => {
                            const next = { ...prev };
                            delete next.firstName;
                            return next;
                          });
                        }
                      }}
                    />
                    {fieldErrors.firstName && (
                      <p className="text-[#B31919] text-xs -mt-1">
                        {fieldErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#090909]">
                      Last Name
                    </label>
                    <input
                      className={inputClass}
                      placeholder="e.g., Doe"
                      value={form.lastName}
                      onChange={(e) => {
                        setForm({ ...form, lastName: e.target.value });

                        if (fieldErrors.lastName) {
                          setFieldErrors((prev) => {
                            const next = { ...prev };
                            delete next.lastName;
                            return next;
                          });
                        }
                      }}
                    />
                    {fieldErrors.lastName && (
                      <p className="text-[#B31919] text-xs -mt-1">
                        {fieldErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#090909]">
                    Business Name
                  </label>
                  <input
                    className={inputClass}
                    placeholder="e.g., Moniewave"
                    value={form.businessName}
                    onChange={(e) => {
                      setForm({ ...form, businessName: e.target.value });

                      if (fieldErrors.businessName) {
                        setFieldErrors((prev) => {
                          const next = { ...prev };
                          delete next.businessName;
                          return next;
                        });
                      }
                    }}
                  />
                  {fieldErrors.businessName && (
                    <p className="text-[#B31919] text-xs -mt-1">
                      {fieldErrors.businessName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#090909]">
                    Business Email
                  </label>
                  <input
                    className={inputClass}
                    type="email"
                    placeholder="e.g., moniewave@gmail.com"
                    value={form.businessEmail}
                    onChange={(e) => {
                      setForm({ ...form, businessEmail: e.target.value });

                      if (fieldErrors.businessEmail) {
                        setFieldErrors((prev) => {
                          const next = { ...prev };
                          delete next.businessEmail;
                          return next;
                        });
                      }
                    }}
                  />
                  {fieldErrors.businessEmail && (
                    <p className="text-[#B31919] text-xs -mt-1">
                      {fieldErrors.businessEmail}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-[#090909] cursor-pointer text-white text-sm font-medium rounded-xl active:scale-[0.99] transition-all duration-150"
                >
                  Get early access
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
