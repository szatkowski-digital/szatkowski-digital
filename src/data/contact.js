export const getContactSteps = (t) => [
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
];

export const getContactData = (t) => ({
  badge: t("badge"),
  title1: t("title_line1"),
  title2: t("title_line2"),
  description: t("description"),
  city: t("city"),
  labels: t.raw("labels"),
});
