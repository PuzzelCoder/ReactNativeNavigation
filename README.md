Navigation library, which is the most common and robust solution for handling navigation in React Native applications. 
Why React Navigation?
Official and standard: It is the go-to library for React Native navigation and is supported by major industry players like Expo and Software Mansion.
Native performance: It uses native components to create the navigation experience, ensuring smooth animations and gestures on both iOS and Android.
Extensible: The library is completely customizable and can be extended to fit your app's specific needs. 
Common navigation types
React Navigation provides several built-in navigators that cover the most common use cases: 
1. Stack Navigator
How it works: Manages a stack of screens, pushing new screens on top and popping them off when the user goes back. This is the standard for navigating between different screens in a mobile app.
Best for: Moving from a list of items to a detail screen, or for a sign-up flow. 
2. Tab Navigator
How it works: Displays a tab bar at the bottom of the screen, allowing users to switch between different high-level sections of your app.
Best for: Apps with distinct sections, like a social media app with "Home," "Profile," and "Notifications" tabs. 
3. Drawer Navigator
How it works: Provides a drawer that slides in from the side of the screen (typically the left), containing navigation links. The user can open and close the drawer with a gesture.
Best for: Providing access to a comprehensive menu or secondary navigation options. 
How to get started
The general process for setting up React Navigation is as follows:
Installation: Install the core library and the specific navigators you need (e.g., @react-navigation/native-stack).
Container setup: Wrap your top-level component with a NavigationContainer to manage your app's navigation state.
Navigator configuration: Define your navigator using create...Navigator() and add Screen components for each screen in your app.

Here in this app we are going to see 2 main types of Navigation :
1) Drawer Navigation
   
<img width="200" height="440" alt="Screenshot 2025-10-02 at 12 07 25 PM" src="https://github.com/user-attachments/assets/3b07bd8f-eec4-41d8-b61f-77e7028bd57e" />
<img width="200" height="440" alt="Screenshot 2025-10-02 at 12 07 30 PM" src="https://github.com/user-attachments/assets/fad7925a-9e28-47a1-a077-562fe03e8cec" />
<img width="200" height="440" alt="Screenshot 2025-10-02 at 12 11 43 PM" src="https://github.com/user-attachments/assets/29c1ca59-0b4d-410d-b4c5-03c55383c33f" />
<br><br>

2) Bottom Navigation
<img width="200" height="440" alt="Screenshot 2025-10-02 at 12 06 15 PM" src="https://github.com/user-attachments/assets/db998d80-835a-4038-bfec-d1444388f45a" />
<img width="200" height="440" alt="Screenshot 2025-10-02 at 12 06 24 PM" src="https://github.com/user-attachments/assets/eb95cb31-de1b-4319-ba00-e5aed7ee6c98" />

