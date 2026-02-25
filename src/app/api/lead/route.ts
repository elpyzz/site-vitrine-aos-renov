import { NextResponse } from "next/server";
import { leadApiSchema } from "@/lib/validations/lead";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

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
    const leads = await readLeads();
    leads.push(lead);
    await writeLeads(leads);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
