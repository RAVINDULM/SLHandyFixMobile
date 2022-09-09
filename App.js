import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

const App = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
