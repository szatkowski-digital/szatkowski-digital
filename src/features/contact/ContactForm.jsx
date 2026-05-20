import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export const ContactForm = ({
  step,
  setStep,
  steps,
  setIsSubmitted,
  isSubmitted,
  setFormData,
  formData,
  formUi,
  handleNext,
  handlePrev,
  updateField,
  isStepValid,
  isSending,
}) => {
  return (
    <div className="lg:col-span-7 w-full glass-card rounded-[40px] p-12 md:p-20 lg:p-24 relative overflow-hidden">
      {/* PROGRESS BAR */}
      <div className="absolute top-0 left-0 h-1 bg-n-1/5 w-full">
        <motion.div
          className="h-full bg-primary-pink"
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* FORM SECTION */}
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[10px] tracking-[0.5em] text-n-1/50 uppercase">
                {formUi.stepLabel} 0{step + 1} / 04
              </span>

              <h2 className="text-4xl md:text-[clamp(2rem,4.5vw,4rem)] font-display font-bold uppercase tracking-tighter leading-none">
                {steps[step].question}
              </h2>
            </div>

            <div className="relative">
              {steps[step].options ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {steps[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        updateField(opt);
                        setTimeout(handleNext, 300);
                      }}
                      className={`p-6 rounded-2xl border transition-all duration-500 text-center group relative overflow-hidden ${
                        formData.service === opt
                          ? "border-primary-pink bg-primary-pink/10"
                          : "border-n-1/10 bg-n-1/5 hover:border-n-1/30"
                      }`}
                    >
                      <span className="relative z-10 text-sm uppercase tracking-wider">
                        {opt}
                      </span>
                      {formData.service === opt && (
                        <motion.div
                          layoutId="active-opt"
                          className="absolute inset-0 bg-primary-pink/10"
                        />
                      )}
                    </button>
                  ))}
                </div>
              ) : steps[step].type === "textarea" ? (
                <textarea
                  autoFocus
                  value={formData[steps[step].field]}
                  onChange={(e) => updateField(e.target.value)}
                  placeholder={steps[step].placeholder}
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl md:text-4xl font-light focus:outline-none focus:border-primary-pink transition-colors resize-none h-32"
                />
              ) : (
                <input
                  autoFocus={steps[step].id !== "name"}
                  type={steps[step].type}
                  value={formData[steps[step].field]}
                  onChange={(e) => updateField(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && isStepValid && handleNext()
                  }
                  placeholder={steps[step].placeholder}
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl md:text-4xl font-light focus:outline-none focus:border-primary-pink transition-colors"
                />
              )}
            </div>

            {/* BUTTONS */}
            <div className="flex items-center justify-between pt-4 md:pt-6">
              <button
                onClick={handlePrev}
                disabled={step === 0}
                className={`text-[10px] font-mono tracking-widest uppercase transition-opacity ${
                  step === 0
                    ? "opacity-0 pointer-events-none"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                {formUi.back}
              </button>

              <Button
                onClick={handleNext}
                disabled={!isStepValid && !steps[step].options}
                className={"text-sm md:text-base"}
              >
                {step === steps.length - 1
                  ? formUi.dispatching
                  : formUi.continue}
              </Button>
            </div>
          </motion.div>
        ) : (
          <ContacFormSuccess
            t={formUi.success}
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ContacFormSuccess = ({
  t,
  formData,
  setFormData,
  setStep,
  setIsSubmitted,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-12 h-12 text-primary-aqua" />
      </div>

      <h2 className="text-4xl md:text-[clamp(2rem,4.5vw,4rem)]  font-display font-bold uppercase tracking-tighter">
        {t.title_1} <br />{" "}
        <span className="text-primary-aqua">{t.title_2}</span>
      </h2>

      <p className="text-n-1/50 text-xl font-light max-w-md mx-auto leading-relaxed">
        {t.description(formData.name, formData.service)}
      </p>

      <button
        onClick={() => {
          setIsSubmitted(false);
          setStep(0);
          setFormData({
            name: "",
            email: "",
            service: "",
            message: "",
          });
        }}
        className="font-mono text-[10px] tracking-widest uppercase text-primary-pink hover:text-white transition-colors"
      >
        {t.resetLabel}
      </button>
    </motion.div>
  );
};

const ContactFormError = ({ errorKey, resetForm, t }) => {
  const validKeys = ["requiredFields", "sendFailed"];
  const finalKey = validKeys.includes(errorKey) ? errorKey : "unknown";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <XCircle className="w-12 h-12 text-primary-pink" />
      </div>

      <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">
        {t("errorTitle").split(".")[0]} <br />
        <span className="text-primary-pink">
          {t("errorTitle").split(".")[1] || "Error."}
        </span>
      </h2>

      <div className="space-y-2 max-w-md mx-auto">
        <p className="text-n-1/50 text-xl font-light leading-relaxed">
          {t("errorSubtitle")}
        </p>
        <p className="text-primary-pink/80 font-mono text-xs uppercase tracking-wider">
          {t(`errors.${finalKey}`)}
        </p>
      </div>

      <button
        onClick={resetForm}
        className="block mx-auto font-mono text-[10px] tracking-widest uppercase text-primary-aqua hover:text-white transition-colors pt-4"
      >
        {t("tryAgain")}
      </button>
    </motion.div>
  );
};
