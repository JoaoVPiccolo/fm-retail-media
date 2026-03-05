import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Automatically scrolls to top on every route change.
 * Must be placed inside a Router context.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try multiple scroll targets to handle different browser/layout scenarios
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
