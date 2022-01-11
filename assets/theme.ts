
export const colorPalette = {
    shopGrey: "#F2F2F2",
    tabsNavigationGrey: "grey",
    savedDealsYellow: "#f9c546",
    shadowGrey: "grey",
    lightestGrey: "#f6f8fa",
    lightGrey: "#eff1f3",
    lightishGrey: "#dfe5eb",
    mediumGrey: "#d4dce2",
    mediumDarkGrey: "#d6d6d6",
    darkishGrey: "#99abb9",
    darkGrey: "#747e86",
    darkerGrey: "#767E85",
    darkestGrey: "#5f6971",
    orange: "#f36e21",
    black: "#000",
    white: "#FFF",
    darkPink: "#E50C62",
    validation: "#D23163",
};

const theme = {
    FONT_FAMILY: "Montserrat_600SemiBold",
    FONT_FAMILY_BOLD: "Montserrat_700Bold",
    FONT_FAMILY_REGULAR: "Montserrat_500Medium",
    FONT_STYLE: "normal",
    FONT_SIZE_REGULAR: 12,
    FONT_SIZE_LARGE: 20,
    LINE_HEIGHT: 15,
    TEXT_TRANSFORM: "uppercase",
    ODO_TEXT_COLOR: "#444444",
    ODO_DARK_BLUE: "#004170",
    ODO_LIGHT_TEXT_COLOR: "#8E8E93",
    ODO_ORANGE_COLOR: "#F36E21",
    ODO_LIGHT_BLUE: "#0093D0",
    ODO_SKY_BLUE: "#E7F3F9",
    ODO_DANGER: "#FF0000",
    ODO_WHITE: "#FFFFFF",
    ODO_ESSENTIALS: "#109A9A",
    ODO_CLEARANCE: "#F4A30F",
    ODO_WINE: "#A51372",
    ODO_FACEBOOK_COLOR: "#365899",
    ODO_GRADIENT_COLOR_RANGE: ["#0093D0", "#245694"],
    ODO_ESSENTIALS_GRADIENT_COLOR_RANGE: ["#11A7A5", "#0E8D8F"],
    ODO_WINE_GRADIENT_COLOR_RANGE: ["#B01E7C", "#9E0C6B"],
    ODO_CLEARANCE_GRADIENT_COLOR_RANGE: ["#FFC301", "#E9821D"],
    ODO_HELP_GRADIENT_COLOR_RANGE: ["#B8D72F", "#82B515"],
    ADO_GRADIENT_COLOR_RANGE: ["#FF4776", "#C3044F"],
    ODO_DARK_PINK: "#C3044F",
    ODO_LIGHT_PINK: "#FDECF3",
    ODO_GRADIENT_COLOR_RANGE_START: { x: 0, y: 0 },
    ODO_GRADIENT_COLOR_RANGE_END: { x: 1.25, y: 0 },
    ODO_HELP_GRADIENT_COLOR_RANGE_END: { x: 1, y: 0 },
    ODO_DISABLED_BUTTON_BACKGROUND: "#B9C3CC",
    ODO_PRODUCT_BUTTON_VALID: "#D5DCE1",
    ODO_PRODUCT_BUTTON_INVALID: "#8ECC2D",
    ...colorPalette,
};



Object.freeze(theme);

export default theme;
export type ThemeType = typeof theme;
