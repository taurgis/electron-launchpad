import path from 'path';
import { BrowserWindow, dialog } from 'electron';
import { getWindowManager } from './window-manager';

const windowManager = getWindowManager();
const dialogOptions = {
  filters: [{
    name: 'Log files',
    extensions: ['.log']
  }]
};

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
  if (path.extname(filePath).toLowerCase() !== '.log') {
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
