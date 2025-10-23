import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_PORTFOLIO_HOST = "portfolio.vivekprakash.de";

function normaliseHost(rawHost: string) {
  const [hostWithoutPort] = rawHost.split(":");
  try {
    const asUrl = new URL(hostWithoutPort.includes("//") ? hostWithoutPort : `https://${hostWithoutPort}`);
    return asUrl.hostname.toLowerCase();
  } catch {
    return hostWithoutPort.toLowerCase();
  }
}

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host");
  if (!hostHeader) {
    return NextResponse.next();
  }

  const host = normaliseHost(hostHeader);
  const portfolioHost = normaliseHost(process.env.PORTFOLIO_HOST ?? DEFAULT_PORTFOLIO_HOST);

  if (host === portfolioHost) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;

    const isAlreadyPortfolioPath = pathname.startsWith("/portfolio");
    const isInternalAsset =
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname === "/favicon.ico" ||
      /\.[^/]+$/.test(pathname);

    if (!isAlreadyPortfolioPath && !isInternalAsset) {
      const suffix = pathname === "/" ? "" : pathname;
      url.pathname = `/portfolio${suffix}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"],
};
