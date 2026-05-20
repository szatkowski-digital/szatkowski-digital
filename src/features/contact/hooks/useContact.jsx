import { useCallback, useEffect, useState } from "react";

export const useContact = ({ steps }) => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleNext = useCallback(() => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  }, [step]);

  const handlePrev = useCallback(() => {
    if (step > 0) setStep(step - 1);
  }, [step]);

  const updateField = useCallback(
    (val) => {
      const currentField = steps[step].field;
      setFormData((prev) => ({
        ...prev,
        [currentField]: val,
      }));
    },
    [step]
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
    isSending: false, // Placeholder for sending state
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
