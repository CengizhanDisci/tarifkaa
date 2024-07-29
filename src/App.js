import React from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./pages/categories/categories";
import DetailMeal from "./pages/detailMeal/detailMeal";
import Detail from "./pages/detail/detail";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Meal" component={DetailMeal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;