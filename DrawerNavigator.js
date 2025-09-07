import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "white",
          drawerLabelStyle: {
            color: "auto",
          },
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            // headerTintColor: "white",
            drawerActiveBackgroundColor: "#cba7ea",
            drawerActiveTint: "#7825c1",
            // drawerLabelStyle: {
            //   color: "auto",
            // },

            drawerLabel: "Welcome Screen",
            headerStyle: { backgroundColor: "#7825c1" },
            drawerIcon: ({ color, size, focused }) => (
              <Ionicons
                color={focused ? "#7825c1" : null}
                name="home"
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            // headerTintColor: "white",
            drawerActiveBackgroundColor: "#f1a782",
            drawerActiveTint: "#df672a",
            headerStyle: { backgroundColor: "#df672a" },
            drawerLabel: "User Screen",
            drawerIcon: ({ color, size, focused }) => (
              <Ionicons
                color={focused ? "#df672a" : null}
                name="person"
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
