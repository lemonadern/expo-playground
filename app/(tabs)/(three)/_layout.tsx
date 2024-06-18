import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="settings"
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{ animation: 'fade_from_bottom' }} />
      <Stack.Screen name="settings" options={{}} />
    </Stack>
  );
}
