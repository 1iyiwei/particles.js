import Particles from "../../particles.js";

function destroy(event)
{
    Particles.JS.destroy();
}

document.querySelector('#kill-button').addEventListener('click', destroy);