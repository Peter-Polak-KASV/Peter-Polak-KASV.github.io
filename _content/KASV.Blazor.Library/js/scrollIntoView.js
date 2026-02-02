function scrollIntoView(selector)
{
    var scrollIntoViewOptions = { behavior: "smooth", block: "center", container: "nearest", inline: "center"};
    var element = document.querySelector(selector);
    element.scrollIntoView(scrollIntoViewOptions);
}

//document.body.addEventListener("mouseover",
//    (event) =>
//    {
//        var target = event.target;
//        var tooltip = taget.getAttribute("data-tooltip")
//        if (tooltip)
//        {
//            var after = tooltip.querySelector("::after");
//            var boundingBox = tooltip.getBoundingClientRect();
//        }
//    }
//);