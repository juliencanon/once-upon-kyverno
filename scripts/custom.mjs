import {
    Reveal
  } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';
  (() => {
    Reveal.on('ready', event => {
        setTimeout(() => {
          Reveal.configure({
            keyboard: {
              67: 'right',
              68: 'left',
              69: 'up',
              70: 'down'
            }
          });
        }, 1000);
    });
    Reveal.sync();
  })();
