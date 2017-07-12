import { shell } from 'electron';
import pkg from '../../../../package.json';

export default [
  {
    label: 'Visit Our Website',
    click: () => {
      shell.openExternal('https://thomastheunen.eu');
    }
  },
  {
    label: `View Changelog For v${pkg.version}`,
    click: () => {
      shell.openExternal(`https://github.com/taurgis/electron-react-boilerplate`);
    }
  }
];
