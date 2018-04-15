// Hook new windows to theme them
browser.windows.onCreated.addListener(themeWindow);

// Theme all currently open windows
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

// Here are the theme options we'll use
const options = {
  dark: {
    images: {
      headerURL: "",
    },
    colors: {
      accentcolor: "#774974",
      textcolor: "white",
  //    toolbar: "#8100DB",
      toolbar_text: "white"
    }
  },

  light: {
    images: {
      headerURL: "",
    },
    colors: {
      accentcolor: "#efdcee",
      textcolor: "black",
      toolbar_text: "black"
   }
  }
};

// Called on new and existing windows to theme them
function themeWindow(window) {
  var gettingItem = browser.storage.local.get("mode");
  gettingItem.then((res) => {
    let mode = res.mode;
    let settings = options[mode || "light"];

    // Check if the window is in private browsing
    if (window.incognito) {
      browser.theme.update(window.id, settings);
    }
  });
}
