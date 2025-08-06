const coffeeTheme = {
    primary: "#8B593E",
    background: "#FFF8F3",
    text: "#4A3428",
    border: "#E5D3B7",
    white: "#FFFFFF",
    textLight: "#9A8478",
    card: "#FFFFFF",
    shadow: "#000000",
  };

  const gourmetTheme = {
    primary: "#D9480F",         // Rich orange-red for food accents
    background: "#0D0D0D",      
    text: "#4B2E2E",            // Deep brown for elegant food typography
    border: "#FFD6C2",          // Soft peach
    white: "#FFFFFF",
    textLight: "#A68164",       // Muted brown
    card: "#FFEDE3",            // Light peachy card
    shadow: "#E0B699",          // Soft orange-beige shadow
  };
  
  
  const forestTheme = {
    primary: "#2E7D32",
    background: "#E8F5E9",
    text: "#1B5E20",
    border: "#C8E6C9",
    white: "#FFFFFF",
    textLight: "#66BB6A",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const purpleTheme = {
    primary: "#6A1B9A",
    background: "#F3E5F5",
    text: "#4A148C",
    border: "#D1C4E9",
    white: "#FFFFFF",
    textLight: "#BA68C8",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const oceanTheme = {
    primary: "#0277BD",
    background: "#E1F5FE",
    text: "#01579B",
    border: "#B3E5FC",
    white: "#FFFFFF",
    textLight: "#4FC3F7",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const sunsetTheme = {
    primary: "#FF7E67",
    background: "#FFF3F0",
    text: "#2C1810",
    border: "#FFD5CC",
    white: "#FFFFFF",
    textLight: "#FFA494",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const mintTheme = {
    primary: "#00B5B5",
    background: "#E8F6F6",
    text: "#006666",
    border: "#B2E8E8",
    white: "#FFFFFF",
    textLight: "#66D9D9",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const midnightTheme = {
    primary: "#2C3E50",
    background: "#F4F6F7",
    text: "#1A2530",
    border: "#D5D8DC",
    white: "#FFFFFF",
    textLight: "#7F8C8D",
    card: "#FFFFFF",
    shadow: "#000000",
  };
  
  const roseGoldTheme = {
    primary: "#E0BFB8",
    background: "#FDF6F5",
    text: "#4A3B38",
    border: "#F2D9D5",
    white: "#FFFFFF",
    textLight: "#C9A9A6",
    card: "#FFFFFF",
    shadow: "#000000",
  };

  const cyberTheme = {
    primary: "#0FF0FC",         // Neon cyan
    background: "#0D0D0D",      // Near-black background
    text: "#FFFFFF",            // High contrast white
    border: "#2D2D2D",          // Dark gray border
    white: "#FFFFFF",
    textLight: "#A0A0A0",       // Soft gray
    card: "#1A1A1A",            // Dark card background
    shadow: "#00FFFF",          // Glow-style shadow
  };

  const darkpurpleTheme = {
    primary: "#9F00FF",        // Neon violet for buttons or links
    background: "#2A003F",     // Deep purple background
    text: "#EAD6FF",           // Light lavender for readable text
    border: "#3E0E61",         // Dark plum for borders
    white: "#FFFFFF",
    textLight: "#BFA2DB",      // Soft lavender for subtle text
    card: "#3E0E61",           // Darker card background
    shadow: "#A020F0",         // Soft violet shadow/glow
    footer: "#000000",         // Extra dark grape tone for footer
  };
  
  
  
  export const THEMES = {
    coffee: coffeeTheme,
    forest: forestTheme,
    purple: purpleTheme,
    ocean: oceanTheme,
    sunset: sunsetTheme,
    mint: mintTheme,
    midnight: midnightTheme,
    roseGold: roseGoldTheme,
    gourmet: gourmetTheme,
    cyber: cyberTheme,
    darkpurple: darkpurpleTheme
  };

  
  
  // 👇 change this to switch theme
  export const COLORS = THEMES.darkpurple;