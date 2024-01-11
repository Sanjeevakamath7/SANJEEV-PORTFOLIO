/*=============== PRELOADER ===============*/
 
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    distance:"60px",
    duration:2000,
    delay:100
});
sr.reveal(' .contact-headline, .projects-headline',{
delay:500,
});
sr.reveal(' .nav, .footer, .footer-social, .skills-item, .projects-item',{
    origin:"top",
    interval:100,
});
sr.reveal('.contact-description, .contact-form',{
    origin:"left",
    interval:100,
});
sr.reveal('.hero-image',{origin:"top"});
sr.reveal('.hero-text');

/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
const contactform=document.getElementById("contact-form"),
contactMessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail=async(e)=>{
    e.preventdefault();
    sendButton.disabled=true;
    sendButton.textContent="sending..."

    try{
        await emailjs.sendForm(
        "service_i842bp3",
        "template_1zpchjg",
        "#contact-form",
        "WvZ_aZ1vsGvwzP7t_"
    
        );
    contactMessage.textContent="message sent successfully";
    setTimeout(()=>{
        contactMessage.textContent="";
    },4000);
    
    contactForm.reset();
}
catch(error){
    contactMessage.textContent="message not sent(service error)";
}
finally{
    sendButton.disabled=false;
    sendButton.textContent="send message";
}
};
contactform.addEventListener("submit",sendEmail);
