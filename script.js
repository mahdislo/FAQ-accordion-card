const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader){
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        currentlyActiveAccordionItemHeader.style.fontWeight = "400";
    }
accordionItemHeader.classList.toggle("active");
   const  accordionItemBody =  accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")){
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        accordionItemHeader.style.fontWeight = "700";
    }
    else {
        accordionItemBody.style.maxHeight = 0;
        accordionItemHeader.style.fontWeight = "400";
        }
    });
});
  
