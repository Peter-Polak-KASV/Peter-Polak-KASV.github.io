function startScrollBy(selector, timeout, x, y)
{
    var element = document.querySelector(selector);
    window.setInterval(scrollByElement, timeout, element, x, y);
}

function scrollByElement(element, x, y)
{
    element.scrollBy(x, y);
}

function scrollByQuery(selector, x, y)
{
    var element = document.querySelector(selector);
    element.scrollBy(x, y);
}