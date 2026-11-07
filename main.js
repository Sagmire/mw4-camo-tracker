const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 980,
    height: 860,
    minWidth: 380,
    minHeight: 500,
    title: "MW4 Camo Tracker",
    backgroundColor: "#141712",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile(path.join(__dirname, "index.html"));
  // Open outside links in the normal browser instead of inside the app.
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: "deny" }; });
}

// Updates come from this repo's GitHub releases. They download in the background,
// install when the app closes, and the app shows a "Restart to update" button once ready.
function checkForUpdates() {
  if (!app.isPackaged) return;
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on("update-downloaded", info => {
    if (win && !win.isDestroyed()) win.webContents.send("update-ready", info.version);
  });
  autoUpdater.on("error", () => {}); // offline or no release yet: try again next launch
  autoUpdater.checkForUpdates().catch(() => {});
}

ipcMain.handle("app-version", () => app.getVersion());
ipcMain.on("restart-to-update", () => autoUpdater.quitAndInstall());

Menu.setApplicationMenu(null);
app.whenReady().then(() => { createWindow(); checkForUpdates(); });
app.on("window-all-closed", () => app.quit());
