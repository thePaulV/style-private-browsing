const DEFAULT_MODE = "light";

function saveOptions(e) {
  //  let mode = document.getElementById("#mode").value;
  let mode = document.querySelector('input[name="mode"]:checked').value;
  browser.storage.local.set({
    "mode": mode
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.local.get("mode");
  gettingItem.then((res) => {
    let mode = res.mode;
    if (mode) {
      document.querySelector('input[name="mode"][value="' + mode + '"]').checked = true;
    }
    else {
      document.querySelector('input[name="mode"][value="' + DEFAULT_MODE + '"]').checked = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.querySelector("form").addEventListener("change", saveOptions);
