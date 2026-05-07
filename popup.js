const container = document.getElementById("list");

SITES.forEach((site) => {
  const btn = document.createElement("button");

  // favicon (nice touch)
  const icon = document.createElement("img");
  icon.src = `https://www.google.com/s2/favicons?domain=${site.url}`;

  const text = document.createElement("span");
  text.textContent = site.name;

  btn.appendChild(icon);
  btn.appendChild(text);

  btn.addEventListener("click", () => {
    chrome.tabs.create({ url: site.url });
  });

  container.appendChild(btn);
});
