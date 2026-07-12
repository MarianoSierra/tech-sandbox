import type { Theme } from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { zintropiaTheme } from "@/theme/nativeTheme";

const { semantic } = zintropiaTheme.colors;

// Semantic colors for JS-side usage (props that don't accept className).
// Must stay in sync with the CSS variables in src/global.css.
// Dark mirrors light until a dark design exists.
const palette = {
	background: semantic.background,
	foreground: semantic.foreground,
	card: semantic.card,
	cardForeground: semantic.cardForeground,
	popover: semantic.card,
	popoverForeground: semantic.cardForeground,
	primary: semantic.primary,
	primaryForeground: zintropiaTheme.colors.brand.white,
	secondary: semantic.secondary,
	secondaryForeground: zintropiaTheme.colors.brand.white,
	muted: semantic.muted,
	mutedForeground: semantic.mutedForeground,
	accent: semantic.muted,
	accentForeground: semantic.foreground,
	destructive: semantic.error,
	destructiveForeground: zintropiaTheme.colors.brand.white,
	border: semantic.border,
	input: semantic.input,
	ring: semantic.ring,
	radius: `${zintropiaTheme.radius.md}px`,
} as const;

export const THEME = {
	light: palette,
	dark: palette,
} as const;

export const NAV_THEME: Record<"light" | "dark", Theme> = {
	light: {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: THEME.light.background,
			border: THEME.light.border,
			card: THEME.light.card,
			primary: THEME.light.primary,
			text: THEME.light.foreground,
			notification: THEME.light.destructive,
		},
	},
	dark: {
		...DarkTheme,
		colors: {
			...DarkTheme.colors,
			background: THEME.dark.background,
			border: THEME.dark.border,
			card: THEME.dark.card,
			primary: THEME.dark.primary,
			text: THEME.dark.foreground,
			notification: THEME.dark.destructive,
		},
	},
};
