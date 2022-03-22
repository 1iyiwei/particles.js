
const dispatcher = document.getElementById('dispatcher');

const pJSMouseEvents = ["mousemove", "mouseleave", "click"];
for(const event of pJSMouseEvents)
{
    dispatcher.addEventListener(event, particlesJS.dispatchMouseEvent);
}
