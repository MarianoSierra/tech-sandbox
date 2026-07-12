export const zintropiaTheme = {
	colors: {
		brand: {
			leaf: "#4A7C3F",
			spring: "#6B9E5E",
			forest: "#2D5F2D",
			earth: "#7B5B3A",
			tan: "#A68B6B",
			root: "#3D2B1F",
			gold: "#E8B44D",
			cyan: "#4DC8D9",
			white: "#FAFAF7",
		},

		semantic: {
			primary: "#4A7C3F",
			primaryLight: "#6B9E5E",
			primaryDark: "#2D5F2D",
			secondary: "#7B5B3A",
			secondaryLight: "#A68B6B",
			secondaryDark: "#3D2B1F",
			accentGold: "#E8B44D",
			accentCyan: "#4DC8D9",

			background: "#E8EDDF",
			foreground: "#3D2B1F",
			card: "#F7F9F4",
			cardForeground: "#4A3728",
			muted: "#F0EDE8",
			mutedForeground: "#766E62",
			border: "#DDE3D5",
			input: "#DDE3D5",
			ring: "#4A7C3F",

			headerBg: "#F0F4ED",
			headerBorder: "#D5DBCD",

			terra: "#4A3728",
			error: "#C4533A",
		},

		neutral: {
			50: "#FAFAF7",
			100: "#F0EDE8",
			200: "#E0DCD5",
			300: "#C5BFB5",
			400: "#9E9688",
			500: "#766E62",
			600: "#5A5348",
			700: "#3D3832",
			800: "#2A2520",
			900: "#1A1612",
		},

		strata: {
			cielo: "#FFFBF0",
			alto: "#F7F9F4",
			medio: "#E8EDDF",
			bajo: "#D5CDBB",
			suelo: "#A68B6B",
			raices: "#3D2B1F",
			agua: "#1A1612",
		},
	},

	typography: {
		fontFamily: {
			regular: "Nunito_400Regular",
			medium: "Nunito_600SemiBold",
			bold: "Nunito_700Bold",
		},
		fontSize: {
			xs: 12,
			sm: 14,
			md: 16,
			lg: 18,
			xl: 20,
			"2xl": 24,
			"3xl": 30,
		},
		lineHeight: {
			xs: 16,
			sm: 20,
			md: 24,
			lg: 28,
			xl: 30,
			"2xl": 32,
			"3xl": 38,
		},
	},

	spacing: {
		xs: 4,
		sm: 8,
		md: 12,
		lg: 16,
		xl: 20,
		"2xl": 24,
		"3xl": 32,
		"4xl": 40,
	},

	radius: {
		sm: 8,
		md: 12,
		lg: 16,
		xl: 20,
		full: 999,
	},

	shadow: {
		sm: {
			shadowColor: "#3D2B1F",
			shadowOpacity: 0.05,
			shadowRadius: 2,
			shadowOffset: { width: 0, height: 1 },
			elevation: 1,
		},
		md: {
			shadowColor: "#3D2B1F",
			shadowOpacity: 0.08,
			shadowRadius: 6,
			shadowOffset: { width: 0, height: 2 },
			elevation: 2,
		},
	},
} as const;

export type ZintropiaTheme = typeof zintropiaTheme;
