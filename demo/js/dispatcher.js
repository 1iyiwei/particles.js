
function dispatch(e)
{
    for(const receiver of window.pJSCanvas)
    {
        let eCopy = new MouseEvent(e.type, e);
        receiver.dispatchEvent(eCopy);
    }
}

const dispatcher = document.getElementById('dispatcher');

dispatcher.addEventListener("mousemove", dispatch);
dispatcher.addEventListener("click", dispatch);
