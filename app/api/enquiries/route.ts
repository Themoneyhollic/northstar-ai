import { getDb } from "../../../db";
import { enquiries } from "../../../db/schema";

type EnquiryPayload = {
  name?: string;
  workEmail?: string;
  company?: string;
  teamSize?: string;
  priority?: string;
  challenge?: string;
  consent?: boolean;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedTeamSizes = new Set(["1-10", "11-50", "51-200", "201-500", "500+"]);
const allowedPriorities = new Set([
  "customer-experience",
  "operations",
  "sales-marketing",
  "data-decisions",
  "not-sure",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as EnquiryPayload;

    if (clean(payload.website, 200)) {
      return Response.json({ success: true }, { status: 201 });
    }

    const name = clean(payload.name, 120);
    const workEmail = clean(payload.workEmail, 254).toLowerCase();
    const company = clean(payload.company, 180);
    const teamSize = clean(payload.teamSize, 40);
    const priority = clean(payload.priority, 80);
    const challenge = clean(payload.challenge, 700);
    const consent = payload.consent === true;

    if (
      name.length < 2 ||
      !emailPattern.test(workEmail) ||
      !company ||
      !allowedTeamSizes.has(teamSize) ||
      !allowedPriorities.has(priority) ||
      !consent
    ) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const db = getDb();
    await db.insert(enquiries).values({
      name,
      workEmail,
      company,
      teamSize,
      priority,
      challenge,
      consent,
    });

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Unable to save enquiry", error);
    return Response.json(
      { error: "We could not save your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
