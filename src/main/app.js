/* eslint strict: 0 */
'use strict';

import {
  app,
  Menu,
  BrowserWindow
} from 'electron';

import {
  getWindowManager
} from './lib/window-manager';

import {
  setupWindows
} from './windows';

import {
  loadFile
} from './lib/files';

import menuTemplate from './config/menu';

const windowManager = getWindowManager();
let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  // Create standard windows in the background, but not show them yet.
  setupWindows();

  windowManager.buildWindowOfType('splash', win => {
    // Since don't really do anything here set a timeout to actually show the splash.
    setTimeout(function() {
      windowManager.buildWindowOfType('main', winMain => {
        win.close();
      });
    }, 2000);

  });

  // set the application menu
  Menu.setApplicationMenu(
    Menu.buildFromTemplate(menuTemplate)
  );
})
