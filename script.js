function submitTool() {
  let tool = document.getElementById("tool").value;
  let input = document.getElementById("input").value.trim();
  let result = document.getElementById("result");

  result.innerHTML = "⏳ Loading...";

  // PLAYER INFO
  if (tool === "info") {
    fetchAPI(
      "http://danger-info-alpha.vercel.app/accinfo?uid=" + input + "&key=DANGERxINFO"
    );
  }

  // EVENT INFO
  else if (tool === "event") {
    fetchAPI(
      "https://danger-event-info.vercel.app/event?region=" + input.toUpperCase() + "&key=DANGERxEVENT"
    );
  }

  // BAN CHECK
  else if (tool === "ban") {
    fetchAPI(
      "https://mrc-ban-check.vercel.app/bancheck?uid=" + input + "&key=mrc"
    );
  }

  // OUTFIT IMAGE
  else if (tool === "outfit") {
    result.innerHTML = `
      <h3>🧥 Outfit Result</h3>
      <img src="https://danger-info-alpha.vercel.app/outfit-image?uid=${input}&key=X-DANGER-OUTFIT-X" width="300">
    `;
  }

  // WISHLIST
  else if (tool === "wishlist") {
    fetchAPI(
      "https://danger-wishlist-manager.vercel.app/check-wishlist?uid=" + input
    );
  }
}

// FETCH WITH CORS FIX
function fetchAPI(url) {
  let result = document.getElementById("result");

  let proxy = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);

  fetch(proxy)
    .then(res => res.text())
    .then(data => {
      result.innerText = data;
    })
    .catch(err => {
      result.innerText = "❌ Error loading data";
    });
}