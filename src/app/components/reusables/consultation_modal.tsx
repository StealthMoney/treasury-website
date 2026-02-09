"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useConsultationModal } from "./context/consultation";
import { motion, AnimatePresence } from "framer-motion";
import { useRecaptcha } from "@/app/shared/hooks";

interface formWithRecaptchaType {
  companyName: string;
  companyEmail: string;
  companyRep: string;
  repPosition: string;
}

export function ConsultationModal() {
  const isDev = process.env.NODE_ENV === "development";
  const { isOpen, closeModal } = useConsultationModal();
  const [submitting, setSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [fieldErrors, setFieldErrors] = React.useState<{
    [key: string]: string;
  }>({});
  const [formData, setFormData] = React.useState<formWithRecaptchaType>({
    companyName: "",
    companyEmail: "",
    companyRep: "",
    repPosition: "",
  });

  const [recaptchaError, setRecaptchaError] = React.useState<string | null>(
    null
  );

  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }
    if (!formData.companyEmail.trim()) {
      errors.companyEmail = "Company email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
      errors.companyEmail = "Please enter a valid email";
    }
    if (!formData.companyRep.trim()) {
      errors.companyRep = "Company rep name is required";
    }
    if (!formData.repPosition.trim()) {
      errors.repPosition = "Rep position is required";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const { getToken } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setRecaptchaError(null);
    setError(null);
    setFormData((prev) => ({
      ...prev,
      recaptchaToken: null,
      recaptchaAction: null,
    }));

    const action = "get_consultation";
    let recaptchaToken: string | null = null;

    if (!isDev) {
      try {
        recaptchaToken = await getToken(action);
      } catch (err) {
        console.error("reCAPTCHA error:", err);
        setError("reCAPTCHA failed. Please refresh and try again.");
        setSubmitting(false);
        return;
      }
    }

    if (!recaptchaToken && !isDev) {
      setRecaptchaError("recaptcha failed, please refresh page and try again");
      setSubmitting(false);
      return;
    }

    const payload = {
      ...formData,
      recaptchaAction: isDev ? null : action,
      recaptchaToken,
    };

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let message = `Request failed`;

        try {
          const data = await res.json();
          console.log(data, "is data");
          if (data?.message) message = data.message;
          if (message.includes("reCAPTCHA")) {
            setRecaptchaError(message);
          } else {
            setError(message);
          }
        } catch {}
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        "An error occurred while processing your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsSuccess(false);
      setFieldErrors({});
      setRecaptchaError(null);
      setError(null);
      setFormData({
        companyName: "",
        companyEmail: "",
        companyRep: "",
        repPosition: "",
      });
      closeModal();
    }
  };

  React.useEffect(() => {
    setFormData({
      companyName: "",
      companyEmail: "",
      companyRep: "",
      repPosition: "",
    });
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="sm:max-w-md"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center py-12 px-4"
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
                    <div className="w-20 h-20 bg-[#161616] rounded-full flex items-center justify-center">
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
                    <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-2">
                      Consultation Successfully Booked
                    </h2>
                    <p className="text-gray-600 text-sm font-dmSans">
                      Thank you! Our team will be in touch shortly.
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    onClick={() => handleOpenChange(false)}
                    className="w-full bg-[#161616] hover:bg-[#161616]/80 text-white font-semibold font-montserrat py-3 cursor-pointer rounded-md transition-colors text-[16px]"
                  >
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <div>
                  <DialogHeader>
                    <DialogTitle className="text-[24px] font-montserrat font-bold my-8">
                      Let&apos;s have a discovery call
                    </DialogTitle>
                  </DialogHeader>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 font-switzer text-[12px]"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="companyName"
                          placeholder="Company Name*"
                          value={formData.companyName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#E6E6E6] border-0 text-sm text-gray-900 placeholder-[#707070] focus:bg-white transition-colors ${
                            fieldErrors.companyName
                              ? "bg-red-50 focus:bg-red-50"
                              : ""
                          }`}
                        />
                        {fieldErrors.companyName && (
                          <p className="text-[#B31919] text-xs mt-1">
                            {fieldErrors.companyName}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="companyEmail"
                          placeholder="Company Email*"
                          value={formData.companyEmail}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#E6E6E6] border-0 text-sm text-gray-900 placeholder-[#707070] focus:bg-white transition-colors ${
                            fieldErrors.companyEmail
                              ? "bg-red-50 focus:bg-red-50"
                              : ""
                          }`}
                        />
                        {fieldErrors.companyEmail && (
                          <p className="text-[#B31919] text-xs mt-1">
                            {fieldErrors.companyEmail}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="companyRep"
                          placeholder="Company Rep*"
                          value={formData.companyRep}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#E6E6E6] border-0 text-sm text-gray-900 placeholder-[#707070] focus:bg-white transition-colors ${
                            fieldErrors.companyRep
                              ? "bg-red-50 focus:bg-red-50"
                              : ""
                          }`}
                        />
                        {fieldErrors.companyRep && (
                          <p className="text-[#B31919] text-xs mt-1">
                            {fieldErrors.companyRep}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="repPosition"
                          placeholder="Rep position*"
                          value={formData.repPosition}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#E6E6E6] border-0 text-sm text-gray-900 placeholder-[#707070] focus:bg-white transition-colors ${
                            fieldErrors.repPosition
                              ? "bg-red-50 focus:bg-red-50"
                              : ""
                          }`}
                        />
                        {fieldErrors.repPosition && (
                          <p className="text-[#B31919] text-xs mt-1">
                            {fieldErrors.repPosition}
                          </p>
                        )}
                      </div>
                    </div>

                    {(recaptchaError || error) && (
                      <div className="w-full text-[#B31919] text-sm">
                        {recaptchaError || error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#161616] hover:bg-[#161616]/80 disabled:bg-[#E6E6E6] font-montserrat disabled:cursor-not-allowed text-white font-semibold py-3 cursor-pointer rounded-md transition-colors mt-6 text-[16px]"
                    >
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
