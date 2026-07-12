import "@/global.css";

import { PortalHost } from "@rn-primitives/portal";
import { ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";
import { NAV_THEME } from "@/lib/theme";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
	const colorScheme = useColorScheme();
	return (
		<ThemeProvider value={NAV_THEME[colorScheme === "dark" ? "dark" : "light"]}>
			<AnimatedSplashOverlay />
			<AppTabs />
			<PortalHost />
		</ThemeProvider>
	);
}
