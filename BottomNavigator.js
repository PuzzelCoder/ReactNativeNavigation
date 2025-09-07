import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerTintColor: "white",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: { backgroundColor: "#7825c1" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            tabBarActiveTintColor: "#7825c1",
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            headerStyle: { backgroundColor: "#df672a" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
            tabBarActiveTintColor: "#df672a",
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
