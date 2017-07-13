import path from 'path';
import { BrowserWindow, dialog } from 'electron';
import { isWindows } from './platform';
import { getWindowManager } from './window-manager';

const windowManager = getWindowManager();
const dialogOptions = {
  filters: [{
    name: 'Log files',
    extensions: ['.log']
  }]
};

function normalizePath(filePath) {
  filePath = decodeURI(filePath.replace(isWindows() ? /^file:[/]{2,3}/ : 'file://', ''));
  filePath = path.normalize(filePath);
  return filePath;
}

/**
 * Present an open dialog box
 * and return the filename if selected
 *
 * @param {BrowserWindow} focusedWindow
 * @returns {void}
 */
function showOpenDialog(focusedWindow) {
  const filename = dialog.showOpenDialog(focusedWindow, {
    ...dialogOptions,
    title: 'Load a file'
  });

  if (filename && filename.length > 0) {
    loadFile(filename[0], focusedWindow);
  }
}

/**
 * Open File helper.
 *
 * @param {String} filePath
 * @param {BrowserWindow} win
 */
export function loadFile(filePath, win, isNew = false) {
  const payload = {
    type: 'LogFile',
    path: normalizePath(filePath),
    isNew
  };
  if (path.extname(filePath).toLowerCase() !== '.bcup') {
    return;
  }
  if (!win) {
    win = BrowserWindow.getFocusedWindow();
  }
}

/**
 * Open a file in current window or a new window
 * if the current window is already a loaded archive
 *
 * @param {BrowserWindow} focusedWindow
 * @returns {void}
 */
export function openFile(focusedWindow) {
  if (!focusedWindow) {
    focusedWindow = BrowserWindow.getFocusedWindow();
  }
  if (!focusedWindow) {
    windowManager.buildWindowOfType('main', win => {
      showOpenDialog(win);
    });
    return;
  }
  showOpenDialog(focusedWindow);
}

/**
 * Create a new file and open it.
 * then ask the user for a password
 *
 * @param {BrowserWindow} focusedWindow
 * @returns {void}
 */
export function newFile(focusedWindow) {
  if (!focusedWindow) {
    focusedWindow = BrowserWindow.getFocusedWindow();
  }
  if (!focusedWindow) {
    windowManager.buildWindowOfType('main', win => showSaveDialog(win));
    return;
  }
  showSaveDialog(focusedWindow);
}
