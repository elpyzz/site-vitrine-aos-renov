import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEBUG_ENDPOINT = "http://127.0.0.1:7481/ingest/155b9555-22a3-4566-a5b1-dcd194f1aadd";
const SESSION_ID = "4b9e50";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isChunk = pathname.includes("/_next/static/chunks/");
  // #region agent log
  fetch(DEBUG_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": SESSION_ID },
    body: JSON.stringify({
      sessionId: SESSION_ID,
      runId: "chunk-debug",
      hypothesisId: "A",
      location: "middleware.ts",
      message: isChunk ? "request chunk" : "request page",
      data: { pathname, isChunk },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  return NextResponse.next();
}
