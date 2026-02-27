import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadApiSchema } from "@/lib/validations/lead";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

const resend = new Resend(process.env.RESEND_API_KEY);

async function ensureDataDir() {
  const dir = path.dirname(LEADS_FILE);
  await fs.mkdir(dir, { recursive: true });
}

async function readLeads(): Promise<Array<Record<string, unknown>>> {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeLeads(leads: Array<Record<string, unknown>>) {
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

async function sendLeadEmail(lead: {
  name: string;
  email: string;
  phone: string;
  message?: string;
  source?: string;
  createdAt: string;
}) {
  const to = process.env.EMAIL_TO || "aosrenovbtp@gmail.com";
  const from = process.env.EMAIL_FROM || "onboarding@resend.dev";

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject: `[Aos Renov] Nouvelle demande de contact / démo — ${lead.name}`,
    html: `
      <p><strong>Nom / Entreprise :</strong> ${lead.name}</p>
      <p><strong>Email :</strong> ${lead.email}</p>
      <p><strong>Téléphone :</strong> ${lead.phone}</p>
      <p><strong>Message :</strong> ${lead.message || "(aucun)"}</p>
      <p><strong>Source :</strong> ${lead.source || "—"}</p>
      <p><strong>Date :</strong> ${new Date(lead.createdAt).toLocaleString("fr-FR")}</p>
    `,
  });

  if (error) {
    console.error("[Resend] Erreur envoi email:", error);
    throw new Error(`Resend: ${JSON.stringify(error)}`);
  }
  console.log("[Resend] Email envoyé, id:", data?.id);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadApiSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const lead = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
    };

    try {
      const leads = await readLeads();
      leads.push(lead);
      await writeLeads(leads);
    } catch (fileErr) {
      console.warn("[Lead API] Persistance fichier impossible (normal sur Vercel):", fileErr);
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("[Lead API] RESEND_API_KEY absente : aucun email envoyé. Vérifiez .env.local et redémarrez le serveur.");
    } else {
      await sendLeadEmail(lead);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
