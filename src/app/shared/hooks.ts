"use client";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useEffect, useCallback, useState } from "react";

export function useRecaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getToken = async (action: string) => {
    if (!executeRecaptcha) {
      throw new Error("reCAPTCHA not ready");
    }
    return executeRecaptcha(action);
  };

  return { getToken };
}

export function useCountdown(targetDate: Date) {
  const calc = useCallback(() => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const diff = target - now;
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      s: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);

  return time;
}
