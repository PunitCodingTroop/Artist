const observer = new IntersectionObserver(e => {
    console.log(e);

    const types = document.getElementById("types");
    
    e.forEach(item => {
        console.log(item);

        if (item.isIntersecting) {
            
            types.classList.add("animate__fadeInLeft");
            return;
        } 
        
        types.classList.remove("animate__fadeInLeft")
        

    })
})

observer.observe(document.getElementById("intro"));
// console.log(document.querySelector("#types"));

function demo(){
    alert("This is a demo created by Punit")
}