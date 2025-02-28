import { messaging } from "./messaging";
import { getToken, onMessage } from 'firebase/messaging';

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const token = await getToken(messaging, { vapidKey: "BMhp1UVQe4KxKveAWHCuFAsuKr-IupjV9MuA4eGe9ZUZIC01pbfXkDtIpvhzPSsxt004LwXuIGu29ZLa0kLOMno" });
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("Notification permission denied.");
      return null;
    }
  } catch (error) {
    console.error("Error getting notification permission:", error);
    return null;
  }
};

// Listen for incoming messages
onMessage(messaging, (payload) => {
  console.log("Message received:", payload);
  // Customize how you handle incoming notifications
});
