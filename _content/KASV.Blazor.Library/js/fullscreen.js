function toggleFullscreen()
{
    var isFullScreen = isFullscreen();

    if (!isFullScreen)
    {
        fullscreenOn();
    } else
    {
        fullscreenOff();
    }
}

function isFullscreen()
{
    var isFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    return isFullScreen !== undefined;
}

function fullscreenOn()
{
    var docElm = document.documentElement;
    if (docElm.requestFullscreen)
    {
        docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen)
    {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen)
    {
        docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen)
    {
        docElm.msRequestFullscreen();
    }
}

function fullscreenOff()
{
    if (document.exitFullscreen)
    {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen)
    {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen)
    {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen)
    {
        document.msExitFullscreen();
    }
}