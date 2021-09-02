import {Soket} from './modules/soket.js';
import {Username} from "./modules/username.js";

document.addEventListener('DOMContentLoaded', () => {
  const soket = new Soket();
  const username = new Username('#username');

  // soket.onSetUsername(name => username.render(name));
  soket.onSetUsername(username.render); // сокращенная запись строки выше
});
