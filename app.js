const shareButtons = document.querySelectorAll(".tile-share-button");

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  // copy link to clipboard
  try {
    navigator.clipboard.writeText(link);
  } catch (err) {
    console.error(err);
  }
}

shareButtons.forEach((button) => button.addEventListener("click", copyText));
