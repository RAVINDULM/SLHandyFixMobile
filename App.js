import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";
import { StripeProvider } from "@stripe/stripe-react-native";

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51LfmAvKXajDBx48NAj6J5h5jPX6aY7tEX7ODAEkwWzsylk209JJe7Fxmh3xKQBI6LqapfHq2r7Amc3CJJN4a4zu700WWl1CqgQ">
      <PaperProvider>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </PaperProvider>
    </StripeProvider>
  );
};

export default App;
