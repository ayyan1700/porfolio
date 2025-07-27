
emailjs.init("t6DBRTQ7IFhzXXAZY"); 

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_jmhn8jq", "template_o0zt08n", this)
    .then(function () {
      alert("✅ Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function (error) {
      alert("❌ Failed to send message: " + error.text);
    });
});


const skillBars = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
          if(entry.isIntersecting){
            const width =entry.target.style.width;
            entry.target.style.width = "0";
            setTimeout(()=>{
                entry.target.style.width = width;
            },100);
          };
    });
},{threshold : 0.5});

skillBars.forEach(bar =>{
   observer.observe(bar);  
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener("click" ,function(e){
       e.preventDefault();
       document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:'smooth'
       })
  });
});