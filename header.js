// header.js - Reusable Header Component with Auto-Path Resolution

document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("global-header");
  if (!headerContainer) return;

  // Determine if we are inside a subfolder or at the root
  const isSubFolder = window.location.pathname.includes("/SiteSubPages/");
  const basePath = isSubFolder ? "../" : "./";

  // Build the Header HTML dynamically
  headerContainer.innerHTML = `
    <header class="topbar">
      <!-- LEFT COLUMN: Portal Title & Primary Navigation Links -->
      <div class="topbar-left">
        <h1 class="site-title">Gaijin, Kudasai / Gaijin, Please</h1>
        <span class="tagline">News • Sports • Weather • Tools • Facts</span>
      </div>

      <!-- CENTER COLUMN: Centered Gaijin Image -->
      <div class="topbar-center">
        <a href="${basePath}index.html">
          <img src="${basePath}site_images/WhatchaThink.png" alt="Logo HERE" class="navy-logo">
        </a>
      </div>

      <!-- RIGHT COLUMN: Mission Statement & Live Date Display -->
      <div class="topbar-right">
        <h2 class="site-title-right">Making life easier for Gaijin visiting Japan</h2>
        <div class="live-date-container">
          <span id="live-date">Loading...</span>
        </div>
      </div>
    </header>
  `;

  // Dynamic Live Date & Time Clock
  function updateLiveDate() {
    const liveDateEl = document.getElementById("live-date");
    if (!liveDateEl) return;

    const now = new Date();
    const day = now.toLocaleDateString("en-US", { day: "2-digit" });
    const month = now.toLocaleDateString("en-US", { month: "long" }).toUpperCase();
    const year = now.getFullYear();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    liveDateEl.textContent = `${day} ${month} ${year} : ${time}`;
  }

  updateLiveDate();
  setInterval(updateLiveDate, 1000);
});
