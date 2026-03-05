import { Container, Box, Typography } from "@mui/material";
import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    hbspt: any;
  }
}

function LetsTalk() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const hasScrolledRef = useRef(false);

  /**
   * Scroll to the top of the page.
   * Uses multiple strategies for maximum compatibility.
   */
  const scrollToTop = useCallback(() => {
    if (hasScrolledRef.current) {
      console.log(
        "[LetsTalk] scrollToTop: already scrolled, skipping duplicate",
      );
      return;
    }
    hasScrolledRef.current = true;
    console.log("[LetsTalk] scrollToTop: executing scroll to top");

    // Strategy 1: window.scrollTo with smooth behavior
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("[LetsTalk] scrollToTop: window.scrollTo executed");
    } catch (e) {
      console.warn("[LetsTalk] scrollToTop: window.scrollTo failed", e);
    }

    // Strategy 2: document.documentElement.scrollTop as fallback
    try {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      console.log("[LetsTalk] scrollToTop: scrollTop fallback executed");
    } catch (e) {
      console.warn("[LetsTalk] scrollToTop: scrollTop fallback failed", e);
    }

    // Reset the guard after a delay so future submissions can also scroll
    setTimeout(() => {
      hasScrolledRef.current = false;
      console.log("[LetsTalk] scrollToTop: reset scroll guard");
    }, 3000);
  }, []);

  useEffect(() => {
    console.log(
      "[LetsTalk] Component mounted, setting up HubSpot form listeners",
    );

    /**
     * APPROACH 1: Listen for HubSpot postMessage events.
     * HubSpot iframes send cross-origin messages to the parent window
     * with type "hsFormCallback" and eventName "onFormSubmitted" / "onFormSubmit".
     * This is the most reliable way to detect form submission in a cross-origin iframe.
     */
    const handleMessage = (event: MessageEvent) => {
      // HubSpot messages can come as JSON strings or objects
      let data = event.data;

      // Log ALL messages from HubSpot-related origins for debugging
      const isHubSpotOrigin =
        typeof event.origin === "string" &&
        (event.origin.includes("hubspot") ||
          event.origin.includes("hsforms") ||
          event.origin.includes("hs-scripts"));

      if (typeof data === "string") {
        // Log HubSpot-origin string messages before parsing
        if (isHubSpotOrigin) {
          console.log(
            "[LetsTalk] HubSpot string message from",
            event.origin,
            ":",
            data.substring(0, 200),
          );
        }
        try {
          data = JSON.parse(data);
        } catch {
          // Not JSON — but could still be a HubSpot signal
          if (isHubSpotOrigin) {
            console.log("[LetsTalk] Non-JSON HubSpot message:", data);
          }
          return;
        }
      }

      // Only log messages that have meaningful data (skip noise from Vite HMR etc.)
      if (data?.type || data?.eventName || isHubSpotOrigin) {
        console.log("[LetsTalk] postMessage received:", {
          type: data?.type,
          eventName: data?.eventName,
          origin: event.origin,
          data: data,
        });
      }

      // HubSpot form callback events (type: "hsFormCallback")
      if (data?.type === "hsFormCallback") {
        console.log(
          "[LetsTalk] HubSpot form callback detected:",
          data.eventName,
        );

        if (
          data.eventName === "onFormSubmitted" ||
          data.eventName === "onFormSubmit"
        ) {
          console.log(
            "[LetsTalk] Form submitted via postMessage (hsFormCallback)! Scrolling to top...",
          );
          alert("✅ Funcionou! Formulário enviado com sucesso!");
          scrollToTop();
        }
      }

      // Alternative: some HubSpot versions use "hsFormCallback" as eventName directly
      if (
        data?.eventName === "onFormSubmitted" ||
        data?.eventName === "onFormSubmit"
      ) {
        console.log(
          "[LetsTalk] Form submitted via postMessage (eventName match)! Scrolling to top...",
        );
        alert("✅ Funcionou! Formulário enviado com sucesso!");
        scrollToTop();
      }

      // Alternative: detect via HubSpot form redirect or submission data patterns
      if (
        isHubSpotOrigin &&
        (data?.type === "form-submit" ||
          data?.action === "submission" ||
          data?.submissionId ||
          data?.redirectUrl)
      ) {
        console.log(
          "[LetsTalk] Form submitted via postMessage (HubSpot origin pattern)! Scrolling to top...",
          data,
        );
        alert("✅ Funcionou! Formulário enviado com sucesso!");
        scrollToTop();
      }
    };

    window.addEventListener("message", handleMessage);
    console.log("[LetsTalk] postMessage listener registered");

    /**
     * APPROACH 2: MutationObserver as a fallback.
     * Watch the form container for DOM changes that indicate a submission
     * (e.g., the form being replaced by a thank-you message).
     */
    let observer: MutationObserver | null = null;
    const setupMutationObserver = () => {
      const container = formContainerRef.current;
      if (!container) {
        console.log(
          "[LetsTalk] MutationObserver: container not found, retrying...",
        );
        setTimeout(setupMutationObserver, 1000);
        return;
      }

      observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          // Check for added nodes that might be a thank-you message
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const text = node.textContent?.toLowerCase() || "";
              const className = node.className?.toLowerCase?.() || "";
              const innerHTML = node.innerHTML?.toLowerCase() || "";

              console.log("[LetsTalk] MutationObserver: node added:", {
                tag: node.tagName,
                className: node.className,
                textPreview: text.substring(0, 80),
              });

              const hasThankYou =
                text.includes("thank") ||
                text.includes("obrigado") ||
                text.includes("obrigada") ||
                text.includes("submitted") ||
                text.includes("enviado") ||
                text.includes("sucesso") ||
                className.includes("submitted") ||
                className.includes("success") ||
                className.includes("thank-you") ||
                innerHTML.includes("submitted-message") ||
                innerHTML.includes("thank-you");

              if (hasThankYou) {
                console.log(
                  "[LetsTalk] MutationObserver: detected thank-you/submission message in DOM:",
                  text.substring(0, 100),
                );
                alert("✅ Funcionou! Formulário enviado com sucesso!");
                scrollToTop();
              }
            }
          });

          // Also check attribute changes on iframes (src changes on submission)
          if (
            mutation.type === "attributes" &&
            mutation.target instanceof HTMLIFrameElement
          ) {
            const iframe = mutation.target;
            console.log(
              "[LetsTalk] MutationObserver: iframe attribute changed:",
              {
                attributeName: mutation.attributeName,
                src: iframe.src?.substring(0, 100),
              },
            );
          }
        }
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["src", "class", "style"],
      });
      console.log("[LetsTalk] MutationObserver registered on form container");
    };

    setupMutationObserver();

    // Cleanup
    return () => {
      window.removeEventListener("message", handleMessage);
      if (observer) {
        observer.disconnect();
      }
      console.log(
        "[LetsTalk] Cleanup: removed message listener and MutationObserver",
      );
    };
  }, [scrollToTop]);

  return (
    <Container
      maxWidth={false}
      sx={{
        color: "white",
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, md: 4, lg: 5 },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Vamos conversar
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#A2FFA8",
          }}
        >
          Projetos novos e desafiadores são com a gente!
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          borderBottom: { xs: "4px solid #76A86F", md: "6px solid #76A86F" },
          width: { xs: "60px", md: "80px" },
          mb: { xs: 1, md: 2 },
        }}
      ></Box>

      {/* Form and Contact Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          maxWidth: { xs: "100%", sm: "500px", md: "600px" },
          "& .hs-form": {
            color: "white",
            "& .hs-form-field": {
              marginBottom: { xs: "1rem", md: "1.5rem" },
            },
            "& .hs-form-field label": {
              color: "white",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              fontFamily: "'Montserrat', sans-serif",
            },
            "& .hs-input": {
              backgroundColor: "transparent",
              borderColor: "#76A86F",
              borderRadius: "6px",
              color: "white",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              padding: "0.75rem",
              fontFamily: "'Inter', sans-serif",
              transition: "all 300ms ease-in-out",
              "&:focus": {
                borderColor: "#A2FFA8",
                boxShadow: "0 0 0 3px rgba(162, 255, 168, 0.1)",
              },
            },
            "& input::placeholder": {
              color: "rgba(255, 255, 255, 0.5)",
            },
            "& textarea": {
              backgroundColor: "transparent",
              borderColor: "#76A86F",
              borderRadius: "6px",
              color: "white",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              padding: "0.75rem",
              fontFamily: "'Inter', sans-serif",
              transition: "all 300ms ease-in-out",
              "&:focus": {
                borderColor: "#A2FFA8",
                boxShadow: "0 0 0 3px rgba(162, 255, 168, 0.1)",
              },
            },
            "& textarea::placeholder": {
              color: "rgba(255, 255, 255, 0.5)",
            },
            "& .hs-button": {
              backgroundColor: "#76A86F",
              borderColor: "#76A86F",
              borderRadius: "6px",
              color: "white",
              fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              padding: "0.75rem 2rem",
              transition: "all 300ms ease-in-out",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#A2FFA8",
                borderColor: "#A2FFA8",
                color: "#0a0a0a",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(118, 168, 111, 0.3)",
              },
            },
          },
        }}
      >
        <div
          id="hs-form-container"
          ref={formContainerRef}
          className="hs-form-frame"
          data-region="na1"
          data-form-id="4072a956-e5c1-46ff-87fa-04467ad369ff"
          data-portal-id="43643994"
        ></div>
      </Box>
    </Container>
  );
}

export default LetsTalk;
