import { HeaderTitle } from "@react-navigation/elements";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title:"Formulário Nome Completo"}}/>
  </Stack>;
}
