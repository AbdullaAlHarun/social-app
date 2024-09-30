import { authGuard } from "../../utilities/authGuard";
import { setLogoutListener } from '../../ui/global/logout';

authGuard();
document.addEventListener('DOMContentLoaded', () => {
    setLogoutListener();
  });