import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rgb(84, 46, 187)", marginBottom: 0 }}
    >
      <WebView
        style={styles.container}
        source={{ uri: "https://parkplus.io/" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
});
