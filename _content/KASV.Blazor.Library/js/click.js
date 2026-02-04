function clickQuery(selector)
{
    var element = document.querySelector(selector);
    clickElement(element);
}

function clickElement(element)
{
    element.click();
}

function clickQueryInframe(iframeSelector, selector)
{
    var iframe = document.querySelector(iframeSelector);
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    var element = doc.querySelector(selector);
    element.click();
}