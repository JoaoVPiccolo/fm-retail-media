// Responsive utility values for consistent spacing and sizing

export const responsiveValues = {
  // Spacing
  spacing: {
    xs: { xs: "0.5rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
    sm: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
    md: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
    lg: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
    xl: { xs: "3rem", sm: "3.5rem", md: "4rem", lg: "5rem" },
  },

  // Padding
  padding: {
    xs: { xs: "1rem", md: "1.5rem", lg: "2rem" },
    sm: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
    md: { xs: "2rem", md: "3rem", lg: "4rem" },
    lg: { xs: "3rem", md: "4rem", lg: "5rem" },
  },

  // Gap
  gap: {
    xs: { xs: "0.5rem", md: "1rem" },
    sm: { xs: "1rem", md: "1.5rem" },
    md: { xs: "1.5rem", md: "2rem", lg: "3rem" },
    lg: { xs: "2rem", md: "3rem", lg: "4rem" },
  },

  // Heights
  height: {
    mobileSmall: { xs: "200px", md: "300px" },
    mobileMedium: { xs: "250px", md: "400px" },
    mobile: { xs: "300px", md: "500px" },
    tall: { xs: "400px", md: "600px" },
    section: { xs: "50vh", md: "80vh", lg: "100vh" },
  },

  // Font sizes (fallback if not using the theme)
  fontSize: {
    sm: { xs: "0.875rem", md: "1rem" },
    base: { xs: "1rem", md: "1.125rem" },
    lg: { xs: "1.125rem", md: "1.25rem" },
    xl: { xs: "1.25rem", md: "1.5rem" },
    "2xl": { xs: "1.5rem", md: "1.875rem" },
    "3xl": { xs: "1.875rem", md: "2.25rem" },
    "4xl": { xs: "2.25rem", md: "3rem" },
  },

  // Border radius
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },

  // Transitions
  transition: {
    fast: "150ms ease-in-out",
    base: "300ms ease-in-out",
    slow: "500ms ease-in-out",
  },
};

// Breakpoint helper for styled components
export const breakpoints = {
  xs: "@media (max-width: 640px)",
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 1024px)",
  lg: "@media (min-width: 1280px)",
  xl: "@media (min-width: 1536px)",
  // Range queries
  between: {
    xs_sm: "@media (min-width: 0px) and (max-width: 639px)",
    sm_md: "@media (min-width: 640px) and (max-width: 1023px)",
    md_lg: "@media (min-width: 1024px) and (max-width: 1279px)",
  },
};

// Common responsive patterns
export const responsivePatterns = {
  // Flexbox column on mobile, row on desktop
  horizontalStack: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
  },

  // Grid with responsive columns
  gridResponsive: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
  },

  // Centered container
  centeredContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  // Card hover effect
  cardHover: {
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    },
  },
};
