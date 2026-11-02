import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    const el = document.getElementById("userEmail");
    if (el) el.textContent = user.email;
  }
});

window.logout = async () => {
  if (confirm("Yakin ingin logout?")) {
    await signOut(auth);
    window.location.href = "index.html";
  }
};
