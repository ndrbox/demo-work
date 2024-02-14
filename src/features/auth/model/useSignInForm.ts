import { ROUTES } from "@/shared/constants/routes";
import router from "@/router";

export function signOut() {
  router.push(ROUTES.SIGN_IN)
}