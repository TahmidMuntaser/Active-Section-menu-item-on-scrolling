const sections = document.querySelectorAll('section'); // replace 'section' with your actual selector
const navLi = document.querySelectorAll('nav .container ul li'); 

// window.addEventListener("scroll", ()=>{
//     let current = '';  //its not fix, actually its a variable
//     section.forEach(section =>{
//         // i need the section top
//         const sectionTop = section.offsetTop;// it takes the section top 
//         const abc = section.offsetTop;
//         console.log(abc);
//     })

// });


window.addEventListener("scroll", ()=>{
    let current = '';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        // const abc = section.offsetTop;
        // console.log(abc);

        const sectionHeight = section.clientHeight;
        // console.log(sectionHeight);

        if(pageYOffset > sectionTop - sectionHeight/3){
           current = section.getAttribute('id');
            // it will pick section id 
            // home contact about 
            //console.log(current);
        }

    })

    navLi.forEach(li =>{
        li.classList.remove('active'); // it will remove the active class from the li
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
        
    })
});


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add('active');   
    }
    else{
        toTop.classList.remove('active');
    }
});