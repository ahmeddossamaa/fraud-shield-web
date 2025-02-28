import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebase";

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);
export {getToken, onMessage};