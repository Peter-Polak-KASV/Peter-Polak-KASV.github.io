function scrollIntoView(selector)
{
    var scrollIntoViewOptions = { behavior: "smooth", block: "center", container: "nearest", inline: "center"};
    var element = document.querySelector(selector);
    element.scrollIntoView(scrollIntoViewOptions);
}