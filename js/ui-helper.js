// UI Helper: Toast, Loading, Confirm Modal
export function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

export function showLoading(show = true, text = "Memuat...") {
  let overlay = document.getElementById("loading-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.innerHTML = `<div class="spinner"></div><p class="loading-text"></p>`;
    document.body.appendChild(overlay);
  }
  overlay.querySelector(".loading-text").textContent = text;
  overlay.style.display = show ? "flex" : "none";
}

export function confirmDialog(message, title = "Konfirmasi") {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box">
        <h3>${title}</h3>
        <p>${message}</p>
        <div class="modal-actions">
          <button class="btn-cancel">Batal</button>
          <button class="btn-confirm">Ya, Lanjutkan</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector(".btn-cancel").onclick = () => {
      document.body.removeChild(overlay);
      resolve(false);
    };
    overlay.querySelector(".btn-confirm").onclick = () => {
      document.body.removeChild(overlay);
      resolve(true);
    };
  });
}

export function formatTanggal(timestamp) {
  if (!timestamp) return "-";
  const d = new Date(timestamp);
  return d.toLocaleString("id-ID", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });
}
