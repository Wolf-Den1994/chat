import {Soket} from './modules/soket.js';
import {Messages} from "./modules/messages.js";
import {Username} from "./modules/username.js";

document.addEventListener('DOMContentLoaded', () => {
  const soket = new Soket();
  const username = new Username('#username');
  const messages = new Messages('#messages');

  soket.onSetUsername(name => {
    username.render(name);
    messages.renderSystemMessage(`${name} assigned to you.`);
  });
  soket.onUserJoined(name => {
    messages.renderSystemMessage(`${name} joined.`);
  })
});
