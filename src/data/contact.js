export const getContactData = (t) => ({
  info: {
    badge: t("badge"),
    title1: t("title_line1"),
    title2: t("title_line2"),
    description: t("description"),
    city: t("city"),
    labels: t.raw("labels"),
  },
  steps: [
    {
      id: "name",
      question: t("form.name.question"),
      placeholder: t("form.name.placeholder"),
      type: "text",
      field: "name",
    },
    {
      id: "email",
      question: t("form.email.question"),
      placeholder: t("form.email.placeholder"),
      type: "email",
      field: "email",
    },
    {
      id: "service",
      question: t("form.service.question"),
      options: [
        t("form.service.options.product"),
        t("form.service.options.engineering"),
        t("form.service.options.consulting"),
      ],
      field: "service",
    },
    {
      id: "message",
      question: t("form.message.question"),
      placeholder: t("form.message.placeholder"),
      type: "textarea",
      field: "message",
    },
  ],
  formUi: {
    stepLabel: t("step"),
    back: t("back"),
    continue: t("continue"),
    send: t("send"),
    dispatching: t("dispatch"),
    success: {
      title_1: t("success.title_1"),
      title_2: t("success.title_2"),
      description: (name, service) =>
        t("success.description", { name: name.split(" ")[0], service }),
      resetLabel: t("success.reset"),
    },
  },
});
