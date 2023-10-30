import { Text, View } from "react-native";
import AppNavigation from "./src/navigation";
import { CartProvider } from "./src/Context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <AppNavigation />
    </CartProvider>
  );
}
