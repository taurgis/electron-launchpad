import { shell } from 'electron';
import pkg from '../../../../package.json';

export default [
  {
    label: 'Visit Our Website',
    click: () => {
      shell.openExternal('https://fenego.eu');
    }
  },
  {
    label: `View Changelog For v${pkg.version}`,
    click: () => {
      shell.openExternal(`https://bitbucket.org/theunth/fenego-logviewer`);
    }
  }
];
