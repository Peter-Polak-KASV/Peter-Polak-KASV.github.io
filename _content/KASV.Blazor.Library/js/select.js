function selectQuery(selector, index)
{
    var element = document.querySelector(selector);
    element.selectedIndex = index;
    elemnt.dispatchEvent(new Event("change"));
}

function selectQueryInframe(iframeSelector, selector, index)
{
    var iframe = document.querySelector(iframeSelector);
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    var element = doc.querySelector(selector);
    element.selectedIndex = index;
    element.dispatchEvent(new Event("change"));
}