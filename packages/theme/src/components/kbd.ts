import { mode, styleConfig } from "@chakra-ui/theme-tools"

const baseStyle = function (props: Record<string, any>) {
  return {
    bg: mode("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  }
}

const kbd = styleConfig({
  baseStyle,
})

export const kbdStyles = {
  baseStyle,
}

export default kbd
