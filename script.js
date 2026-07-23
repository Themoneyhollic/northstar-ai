import Form from "https://cdn.jsdelivr.net/npm/formjs-plugin@5.4.0/+esm";
import { runPreSubmitHook } from "./.agents/hooks/pre-submit.js";
import { runPostSubmitHook } from "./.agents/hooks/post-submit.js";

const form = document.querySelector("#enquiry-form");
const successMessage = document.querySelector("#success-message");
const resetButton = document.querySelector("#reset-form");
const statusMessage = form.querySelector(".form-status");
const submitButton = form.querySelector('button[type="submit"]');
const buttonLabel = submitButton.querySelector(".button-label");

document.querySelector("#current-year").textContent = new Date().getFullYear();

const formJs = new Form(form, {
  fieldOptions: {
    trimValue: true,
    validateOnEvents: "input change blur",
  },
  formOptions: {
    handleSubmit: false,
    ajaxSubmit: false,
  },
});

function createEmailBody(data) {
  return [
    "Hello Northstar AI,",
    "",
    "I would like to arrange a complimentary AI strategy call.",
    "",
    `Name: ${data.get("name")}`,
    `Work email: ${data.get("workEmail")}`,
    `Company: ${data.get("company")}`,
    `Team size: ${data.get("teamSize")}`,
    `Priority: ${data.get("priority")}`,
    `Challenge: ${data.get("challenge") || "Not provided"}`,
    "",
    "Please contact me to arrange the session.",
  ].join("\n");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusMessage.hidden = true;

  if (!runPreSubmitHook({ form, statusMessage })) {
    return;
  }

  try {
    await formJs.validateForm();
  } catch {
    if (!form.checkValidity()) {
      statusMessage.textContent = "Please check the highlighted fields.";
      statusMessage.hidden = false;
      form.querySelector(":invalid")?.focus();
      return;
    }
  }

  const data = new FormData(form);
  if (data.get("website")) {
    form.hidden = true;
    successMessage.hidden = false;
    return;
  }

  submitButton.disabled = true;
  buttonLabel.textContent = "Preparing your enquiry…";

  const recipient = form.dataset.recipient;
  const subject = encodeURIComponent("AI Opportunity Map enquiry");
  const body = encodeURIComponent(createEmailBody(data));

  form.hidden = true;
  successMessage.hidden = false;
  runPostSubmitHook({ successMessage });
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

  submitButton.disabled = false;
  buttonLabel.textContent = "Get my free AI Opportunity Map";
});

resetButton.addEventListener("click", () => {
  form.reset();
  form.hidden = false;
  successMessage.hidden = true;
  statusMessage.hidden = true;
  document.querySelector("#enquire").scrollIntoView({ behavior: "smooth" });
});
