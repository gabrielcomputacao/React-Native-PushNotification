import { OneSignal } from "react-native-onesignal";

export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag("user_emailTag", email);
}
export function tagDeleteUserEmailCreate() {
  OneSignal.User.removeEmail("user_emailTag");
}
export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Gabriel",
    user_email: "gabrielcomputacao@outlook.com",
  });
}
