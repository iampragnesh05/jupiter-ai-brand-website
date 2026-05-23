"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Global scroll restoration component for Next.js App Router.
 * Ensures every page navigation starts from the top (window.scrollTo(0, 0))
 * while preserving natural browser back/forward behavior.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastNavigationRef = useRef<string>("");

  useEffect(() => {
    const currentUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
    
    // Check if this is a new navigation (not back/forward)
    const isNewNavigation = lastNavigationRef.current !== currentUrl && 
                           !window.history.state?.scroll;
    
    if (isNewNavigation) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        // Instant scroll to top for immediate feedback
        window.scrollTo(0, 0);
        
        // Fallback: also scroll documentElement and body for compatibility
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
    
    lastNavigationRef.current = currentUrl;
  }, [pathname, searchParams]);

  return null;
}

/**
 * Smooth scroll variant for pages that want animated scroll restoration.
 * Use this for routes that need a premium feel with smooth transitions.
 */
export function ScrollToTopSmooth({
  behavior = "smooth",
  delay = 0,
}: {
  behavior?: ScrollBehavior;
  delay?: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastNavigationRef = useRef<string>("");

  useEffect(() => {
    const currentUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
    
    const isNewNavigation = lastNavigationRef.current !== currentUrl && 
                           !window.history.state?.scroll;
    
    if (isNewNavigation) {
      const scroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      
      if (delay > 0) {
        setTimeout(scroll, delay);
      } else {
        requestAnimationFrame(scroll);
      }
    }
    
    lastNavigationRef.current = currentUrl;
  }, [pathname, searchParams, behavior, delay]);

  return null;
}

export default ScrollToTop;
