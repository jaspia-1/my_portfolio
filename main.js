
var typed=new Typed(".text",{
    strings: ["Creative Visionary" , "Mern Stack Developer" , "Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
setInterval(function(){
    if(document.getElementsByClassName("slider-items")[0].classList.contains("active")){
document.getElementsByClassName("slider-items")[1].classList.add("active");
document.getElementsByClassName("slider-items")[0].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[1].classList.contains("active")){
        document.getElementsByClassName("slider-items")[2].classList.add("active");
        document.getElementsByClassName("slider-items")[1].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[2].classList.contains("active")){
        document.getElementsByClassName("slider-items")[3].classList.add("active");
        document.getElementsByClassName("slider-items")[2].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[3].classList.contains("active")){
        document.getElementsByClassName("slider-items")[4].classList.add("active");
        document.getElementsByClassName("slider-items")[3].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[4].classList.contains("active")){
        document.getElementsByClassName("slider-items")[5].classList.add("active");
        document.getElementsByClassName("slider-items")[4].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[5].classList.contains("active")){
        document.getElementsByClassName("slider-items")[6].classList.add("active");
        document.getElementsByClassName("slider-items")[5].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[6].classList.contains("active")){
        document.getElementsByClassName("slider-items")[7].classList.add("active");
        document.getElementsByClassName("slider-items")[6].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[7].classList.contains("active")){
        document.getElementsByClassName("slider-items")[8].classList.add("active");
        document.getElementsByClassName("slider-items")[7].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[8].classList.contains("active")){
        document.getElementsByClassName("slider-items")[9].classList.add("active");
        document.getElementsByClassName("slider-items")[8].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[9].classList.contains("active")){
        document.getElementsByClassName("slider-items")[10].classList.add("active");
        document.getElementsByClassName("slider-items")[9].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[10].classList.contains("active")){
        document.getElementsByClassName("slider-items")[11].classList.add("active");
        document.getElementsByClassName("slider-items")[10].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[11].classList.contains("active")){
        document.getElementsByClassName("slider-items")[12].classList.add("active");
        document.getElementsByClassName("slider-items")[11].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[12].classList.contains("active")){
        document.getElementsByClassName("slider-items")[13].classList.add("active");
        document.getElementsByClassName("slider-items")[12].classList.remove("active");
    }
    else if(document.getElementsByClassName("slider-items")[13].classList.contains("active")){
        document.getElementsByClassName("slider-items")[0].classList.add("active");
        document.getElementsByClassName("slider-items")[13].classList.remove("active");
    }
    
},1900)
 

let sections = document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top <offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

};