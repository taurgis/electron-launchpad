import {
  getWindowManager
} from '../../lib/window-manager';
import {
  openFile
} from '../../lib/files';

const windowManager = getWindowManager();

export default [{
  label: 'Open Log File',
  accelerator: 'CmdOrCtrl+O',
  click: (item, focusedWindow) => openFile(focusedWindow)
},
{
  type: 'separator'
},
{
  type: 'separator'
},
{
  label: 'Open New Window',
  accelerator: 'CmdOrCtrl+Shift+N',
  click: () => {
    windowManager.buildWindowOfType('main');
  }
},
{
  type: 'separator'
},
{
  label: 'Close Window',
  accelerator: 'CmdOrCtrl+W',
  role: 'close'
}
];
