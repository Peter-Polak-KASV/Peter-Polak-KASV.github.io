function focusQuery(selector)
{
    var element = document.querySelector(selector);
    focusElement(element)
}

function focusElement(element)
{
    setTimeout(() =>
    {
        element.focus();
    }, 1);
}