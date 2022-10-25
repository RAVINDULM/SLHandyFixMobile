import "react-native-gesture-handler";
import React from "react";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";
import { Provider as PaperProvider } from "react-native-paper";



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
