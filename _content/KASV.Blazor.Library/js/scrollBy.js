

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

function focusElement(selector, timeout)
{
    
    setTimeout(() => {
        var element = document.querySelector(selector);
        element.focus();
    }, timeout);
}

function clickQuery(selector)
{
    var element = document.querySelector(selector);
    clickElement(element);
}

function clickElement(element)
{
    element.click();
}