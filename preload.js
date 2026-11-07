const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktop", {
  version: () => ipcRenderer.invoke("app-version"),
  onUpdateReady: fn => ipcRenderer.on("update-ready", (_e, version) => fn(version)),
  restartToUpdate: () => ipcRenderer.send("restart-to-update"),
});
