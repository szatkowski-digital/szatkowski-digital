import { useCallback, useEffect, useState } from "react";

export const useContact = ({ steps, locale }) => {
  const [step, setStep] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleNext = useCallback(async () => {
    const isLastStep = step === steps.length - 1;

    if (!isLastStep) {
      setStep((prev) => prev + 1);
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Coś poszło nie tak, spróbuj ponownie.");
      }
    } catch (error) {
      console.error("Błąd wysyłki:", error);
    } finally {
      setIsSending(false);
    }
  }, [step, steps, formData, locale]);

  const handlePrev = useCallback(() => {
    if (step > 0) setStep((prev) => prev - 1);
  }, []);

  const updateField = useCallback(
    (val) => {
      const currentField = steps[step].field;
      setFormData((prev) => ({ ...prev, [currentField]: val }));
    },
    [step, steps]
  );

  const isStepValid = useCallback(() => {
    const currentField = steps[step].field;
    const currentVal = formData[currentField] || "";

    if (steps[step].id === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentVal);
    }
    return currentVal.length > 2;
  }, [formData, step]);

  return {
    step,
    setStep,
    formData,
    setFormData,
    handleNext,
    handlePrev,
    updateField,
    isStepValid: isStepValid(),
    isSubmitted,
    setIsSubmitted,
    isSending,
  };
};

export const useLocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Europe/Warsaw",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { localTime };
};
