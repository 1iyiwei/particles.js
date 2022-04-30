import Particles from "../../particles.js";

function destroy()
{
    console.log('kill');
    Particles.JS.destroy();
}

document.querySelector('#kill-button').addEventListener('click', destroy);