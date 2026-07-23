export const SUBMISSION_VOICE_MESSAGE =
  "Thank you for your submission. We will get back to you within three business days.";

/**
 * Post-submit hook for the Northstar AI enquiry form.
 * Announces the confirmation visually and through the browser's speech engine.
 */
export function runPostSubmitHook({ successMessage }) {
  const confirmation = successMessage.querySelector("#voice-confirmation");

  if (confirmation) {
    confirmation.textContent = SUBMISSION_VOICE_MESSAGE;
  }

  successMessage.dataset.voiceMessage = SUBMISSION_VOICE_MESSAGE;

  if (
    "speechSynthesis" in window &&
    typeof window.SpeechSynthesisUtterance === "function"
  ) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(SUBMISSION_VOICE_MESSAGE);
    utterance.lang = "en-SG";
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }

  return SUBMISSION_VOICE_MESSAGE;
}
