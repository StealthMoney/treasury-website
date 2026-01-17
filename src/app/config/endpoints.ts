const endpoints = (params?: string | number) => {
  const env = process.env.NODE_ENV;
  const local =
    process.env.STEALTH_ENDPOINT_DEV ||
    process.env.NEXT_PUBLIC_STEALTH_ENDPOINT_DEV;
  const prod =
    process.env.STEALTH_ENDPOINT_PROD ||
    process.env.NEXT_PUBLIC_STEALTH_ENDPOINT_PROD;

  const reCAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!reCAPTCHA || (!local && !prod)) throw new Error("Missing env variables");

  const baseUrl = env === "development" ? local : prod;

  const consultation = `${baseUrl}/consultation/book`;

  return {
    consultation,
  };
};

export default endpoints;
