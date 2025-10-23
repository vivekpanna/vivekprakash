import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_PORTFOLIO_HOST = "portfolio.vivekprakash.de";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();
  if (!host) {
    return NextResponse.next();
  }

  const portfolioHost = (process.env.PORTFOLIO_HOST ?? DEFAULT_PORTFOLIO_HOST).toLowerCase();

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
