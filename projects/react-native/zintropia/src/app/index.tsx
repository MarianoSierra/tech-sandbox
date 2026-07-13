import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.container} className="bg-background">
			<Text className="text-primary">Primary</Text>
			<Text className="text-secondary">Secondary</Text>
			<Text className="text-accent">Primary Accent</Text>
			<Text className="text-accent-gold">Primary Accent Gold</Text>
			<Text className="text-accent-cyan">Primary Accent Cyan</Text>
			<Image
				source={require("../../assets/images/react-logo.png")}
				style={styles.image}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 100,
		height: 100,
	},
});
