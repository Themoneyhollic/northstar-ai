"use client";

import { useEffect, useRef, useState } from "react";

const outcomes = [
  {
    number: "01",
    title: "Spot the right use case",
    copy: "Separate practical AI opportunities from expensive distractions.",
  },
  {
    number: "02",
    title: "Build the business case",
    copy: "Frame the expected value, effort, risk, and owner for each priority.",
  },
  {
    number: "03",
    title: "Move with confidence",
    copy: "Leave with a focused 90-day path your team can actually execute.",
  },
];

const mapIncludes = [
  "Top 3 AI opportunities for your business",
  "Impact, effort, and risk scorecard",
  "Recommended first pilot",
  "Practical 90-day action plan",
];

type SubmitState = "idle" | "sending" | "success" | "error";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    let formInstance: { destroy(): void } | undefined;
    let disposed = false;

    const handleSubmission = (event: Event) => {
      const submission = (event as CustomEvent<Promise<{ success?: boolean }>>)
        .detail;

      setSubmitState("sending");
      submission
        .then(() => {
          setSubmitState("success");
          form.reset();
        })
        .catch(() => setSubmitState("error"));
    };

    void import("formjs-plugin").then(({ default: Form }) => {
      if (disposed) return;

      formInstance = new Form(form, {
        fieldOptions: {
          trimValue: true,
          validateOnEvents: "input change blur",
        },
      });
      form.addEventListener("fjs.form:submit", handleSubmission);
    });

    return () => {
      disposed = true;
      form.removeEventListener("fjs.form:submit", handleSubmission);
      formInstance?.destroy();
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Northstar AI home">
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          <span>Northstar AI</span>
        </a>
        <a className="header-cta" href="#enquire">
          Get your free map <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI business consultancy for ambitious teams</p>
          <h1>
            Find your highest-ROI AI use case{" "}
            <span className="accent-text">in 30 minutes.</span>
          </h1>
          <p className="hero-lede">
            Turn AI uncertainty into a clear, practical action plan. Book a
            complimentary strategy call and receive your personalised
            one-page AI Opportunity Map.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#enquire">
              Get my free AI Opportunity Map
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#how-it-works">
              See what&apos;s included
            </a>
          </div>
          <div className="trust-line" aria-label="Consultation benefits">
            <span>No obligation</span>
            <span>30-minute working session</span>
            <span>Actionable takeaways</span>
          </div>
        </div>

        <aside className="map-preview" aria-label="AI Opportunity Map preview">
          <div className="map-topline">
            <span>Complimentary strategy resource</span>
            <span className="map-badge">1 page</span>
          </div>
          <div className="map-title-row">
            <div>
              <p>Your personalised</p>
              <h2>AI Opportunity Map</h2>
            </div>
            <div className="compass" aria-hidden="true">
              <span>✦</span>
            </div>
          </div>
          <div className="scorecard">
            <div className="score-row">
              <span>Customer response</span>
              <span className="score-bars" aria-label="High opportunity score">
                <i />
                <i />
                <i />
                <i />
                <i className="muted" />
              </span>
            </div>
            <div className="score-row">
              <span>Document workflows</span>
              <span className="score-bars" aria-label="Very high opportunity score">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="score-row">
              <span>Sales enablement</span>
              <span className="score-bars" aria-label="Medium opportunity score">
                <i />
                <i />
                <i />
                <i className="muted" />
                <i className="muted" />
              </span>
            </div>
          </div>
          <div className="map-footer">
            <span>Priority pilot</span>
            <strong>Automate the work around the work.</strong>
          </div>
        </aside>
      </section>

      <section className="outcomes" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">Clarity before technology</p>
          <h2>A smarter first step into AI.</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome) => (
            <article className="outcome-card" key={outcome.number}>
              <span className="outcome-number">{outcome.number}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="quote-mark" aria-hidden="true">
          “
        </div>
        <blockquote>
          <p>
            We moved from a long list of AI ideas to one clear pilot the team
            could support. The session gave us the confidence to start small
            and build the right way.
          </p>
          <footer>
            <div className="avatar" aria-hidden="true">
              JL
            </div>
            <div>
              <strong>Jamie Lee</strong>
              <span>Operations Director, regional services firm</span>
            </div>
          </footer>
        </blockquote>
        <p className="sample-note">
          Sample testimonial copy — replace with a verified client quote before
          public promotion.
        </p>
      </section>

      <section className="enquiry-section" id="enquire">
        <div className="enquiry-intro">
          <p className="eyebrow">Your complimentary strategy session</p>
          <h2>Let&apos;s find where AI can create real value.</h2>
          <p className="enquiry-copy">
            Tell us a little about your business. We&apos;ll review your
            priorities before the call, so every minute is useful.
          </p>
          <div className="includes-card">
            <p>Your free map includes</p>
            <ul>
              {mapIncludes.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="form-shell">
          {submitState === "success" ? (
            <div className="success-message" role="status">
              <div className="success-icon" aria-hidden="true">
                ✓
              </div>
              <p className="eyebrow">Enquiry received</p>
              <h3>Your AI Opportunity Map starts here.</h3>
              <p>
                Thanks for reaching out. We&apos;ll review your details and get
                in touch shortly to arrange your strategy session.
              </p>
              <button
                className="text-link reset-button"
                type="button"
                onClick={() => setSubmitState("idle")}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              action="/api/enquiries"
              method="POST"
              name="ai-consultancy-enquiry"
              noValidate
            >
              <div className="form-heading">
                <span>Free strategy call</span>
                <strong>Usually replies within 1 business day</strong>
              </div>

              <div className="field-row">
                <div className="field" data-formjs-question>
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Alex Tan"
                    autoComplete="name"
                    required
                    minLength={2}
                  />
                  <span className="field-error">Please enter your name.</span>
                </div>
                <div className="field" data-formjs-question>
                  <label htmlFor="workEmail">Work email</label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    placeholder="alex@company.com"
                    autoComplete="email"
                    required
                  />
                  <span className="field-error">
                    Please enter a valid work email.
                  </span>
                </div>
              </div>

              <div className="field-row">
                <div className="field" data-formjs-question>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    required
                  />
                  <span className="field-error">
                    Please enter your company name.
                  </span>
                </div>
                <div className="field" data-formjs-question>
                  <label htmlFor="teamSize">Team size</label>
                  <select id="teamSize" name="teamSize" required defaultValue="">
                    <option value="" disabled>
                      Select team size
                    </option>
                    <option value="1-10">1–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="201-500">201–500</option>
                    <option value="500+">500+</option>
                  </select>
                  <span className="field-error">Please select a team size.</span>
                </div>
              </div>

              <div className="field" data-formjs-question>
                <label htmlFor="priority">Where could AI help most?</label>
                <select id="priority" name="priority" required defaultValue="">
                  <option value="" disabled>
                    Choose your biggest opportunity
                  </option>
                  <option value="customer-experience">
                    Customer experience &amp; support
                  </option>
                  <option value="operations">
                    Operations &amp; process automation
                  </option>
                  <option value="sales-marketing">
                    Sales &amp; marketing effectiveness
                  </option>
                  <option value="data-decisions">
                    Data analysis &amp; decision-making
                  </option>
                  <option value="not-sure">Not sure yet</option>
                </select>
                <span className="field-error">Please choose one option.</span>
              </div>

              <div className="field" data-formjs-question>
                <label htmlFor="challenge">
                  What would you like to improve?
                  <span>Optional</span>
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  maxLength={700}
                  placeholder="A sentence or two about the bottleneck, goal, or idea you have in mind…"
                />
              </div>

              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="consent-field" data-formjs-question>
                <input id="consent" name="consent" type="checkbox" required />
                <label htmlFor="consent">
                  I agree to be contacted about this enquiry. My details
                  won&apos;t be sold or shared.
                </label>
              </div>

              <button className="button button-submit" type="submit">
                {submitState === "sending"
                  ? "Sending your enquiry…"
                  : "Get my free AI Opportunity Map"}
                <span aria-hidden="true">→</span>
              </button>

              {submitState === "error" && (
                <p className="form-status form-status-error" role="alert">
                  Something went wrong. Please try again in a moment.
                </p>
              )}
              <p className="form-footnote">
                No spam. No hard sell. Just a useful first conversation.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span>Northstar AI</span>
          </a>
          <p>Practical AI strategy for growing businesses.</p>
        </div>
        <div className="footer-links">
          <a href="#how-it-works">How it works</a>
          <a href="#enquire">Free strategy call</a>
          <a href="mailto:hello@northstar-ai.example">Email us</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Northstar AI. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
