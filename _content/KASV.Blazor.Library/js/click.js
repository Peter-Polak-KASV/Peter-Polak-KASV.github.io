function clickQuery(selector)
{
    var element = document.querySelector(selector);
    clickElement(element);
}

function clickElement(element)
{
    element.click();
}