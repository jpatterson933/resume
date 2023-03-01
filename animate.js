const shimmer = () => {
    // I want to switch classes on .contact-details>div
    // this returns an array of the 2nd, and third div children
    let contactDivs = document.querySelectorAll('.contact-details > div:nth-child(n+2):nth-child(-n+3)')
    // console.log(contactDivs, "contactDivs")
    contactDivs.forEach(div => {
        // toggle switches back and forth between classes
        div.classList.toggle('non-shimmer');
        div.classList.toggle('shimmer');
    });

}

setInterval(shimmer, 2000); // Run the function every 2 seconds (2000 milliseconds)
