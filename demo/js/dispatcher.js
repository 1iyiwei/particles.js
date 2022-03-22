
function dispatch(e)
{
    console.log(window.pJSDomID);
    const receivers = document.getElementsByClassName('particles');

    for(const receiver of receivers)
    {
        let eCopy = new MouseEvent(e.type, e);
        receiver.dispatchEvent(eCopy);
    }
}

const dispatcher = document.getElementById('dispatcher');

dispatcher.addEventListener("mousemove", dispatch);
dispatcher.addEventListener("click", dispatch);
