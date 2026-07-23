/**
 * Pre-submit hook for the Northstar AI enquiry form.
 * Blocks submission until every visible enquiry field is complete and valid.
 */
export function runPreSubmitHook({ form, statusMessage }) {
  const fields = [
    ...form.querySelectorAll("input:not([type='hidden']), select, textarea"),
  ].filter(
    (field) =>
      !field.disabled &&
      !field.closest(".honeypot") &&
      field.type !== "submit" &&
      field.type !== "button",
  );

  const incompleteField = fields.find((field) => {
    if (field.type === "checkbox" || field.type === "radio") {
      return !field.checked;
    }

    return !String(field.value).trim();
  });

  if (incompleteField) {
    statusMessage.textContent = "Please complete every field before submitting.";
    statusMessage.hidden = false;
    incompleteField.focus();
    incompleteField.reportValidity?.();
    return false;
  }

  if (!form.checkValidity()) {
    statusMessage.textContent = "Please check the highlighted fields.";
    statusMessage.hidden = false;
    form.querySelector(":invalid")?.focus();
    form.querySelector(":invalid")?.reportValidity?.();
    return false;
  }

  statusMessage.hidden = true;
  return true;
}
