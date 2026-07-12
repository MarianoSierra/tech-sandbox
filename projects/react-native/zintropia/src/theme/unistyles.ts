import { StyleSheet } from "react-native-unistyles";
import { zintropiaTheme } from "./nativeTheme";

const appThemes = {
	light: zintropiaTheme,
	// Dark theme pending design; reuse light tokens until defined.
	dark: zintropiaTheme,
};

type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
	export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
	themes: appThemes,
	settings: {
		initialTheme: "light",
	},
});
