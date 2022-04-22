import * as Dispatcher from './dispatcher.js';
export default Dispatcher;

import Particles from '../../particles.js';

const dispatcher = document.getElementById('dispatcher');

const pJSMouseEvents = ["mousemove", "mouseleave", "click"];
for(const event of pJSMouseEvents)
{
    dispatcher.addEventListener(event, Particles.JS.dispatchMouseEvent);
}
