

// loading page
let loadElement = document.querySelector(".loader-section"),
    pageElements = document.querySelector(".page-elements") ,
    home = document.querySelector(".home"),
    sections = [...document.querySelectorAll(".section")] ;

    window.window.addEventListener ("load" , () => {
        loadElement.style.display = "none";
        pageElements.style.display = "flex";
        sections.map(section => {
            section.classList.add("display-none")
            section.classList.remove("flex")
        })
        home.classList.remove("display-none")
        home.classList.add("flex")
    }
    )

    // bar function 
    let barIcon = document.querySelector(".bar"),
    header = document.querySelector(".header");
    barIcon.onclick = () => {
        let scrollHeight = Math.floor(window.pageYOffset ) + "px";
    // header.style.top= scrollHeight
    header.classList.toggle("show")
}

window.addEventListener("scroll" ,   () => { 
    if (header.classList.contains("show")){         
        header.classList.remove("show")
    }
})


// setting function 
let settingIcon = document.querySelector(".seeting-icon"),
    setting = document.querySelector(".setting"),
    themsColors = [...document.querySelectorAll(".them-color-item")],
    lightMood = document.querySelector(".light-mood")
     
    settingIcon.onclick = () => {
        let icon = document.querySelector(" .gear-icon")
        setting.classList.toggle("show");
        icon.classList.toggle("fa-spin");       
}

console.log ("themColor" , document.documentElement.style.getPropertyValue("--them-color'"))
lightMood.onclick = () => {
    lightMood.classList.toggle("light");
    if (lightMood.classList.contains("light")) {
        let themColor = document.documentElement.style.getPropertyValue("--them-color");
        console.log ("themColor" , themColor)
        document.documentElement.style.setProperty("--color-bg", "#f7f6f6") 
        document.documentElement.style.setProperty("--color", "rgb(0, 0, 0)") 
        document.documentElement.style.setProperty("--header-bg", "#f7f4eb" ) 
    }  else{
        document.documentElement.style.setProperty("--color-bg", "rgb(0, 0, 0)") 
        document.documentElement.style.setProperty("--color", "#fff") 
        document.documentElement.style.setProperty("--header-bg", "#333" ) 
    }   
}
themsColors.map(themsColor => {
    themsColor.style.backgroundColor= themsColor.dataset.color
    themsColor.onclick = (e) => {
        let themElement = e.currentTarget ;
        document.documentElement.style.setProperty("--them-color", themElement.dataset.color)
    
        }
})


// HeaderList Item
let headerListItems = [...document.querySelectorAll(".header-list-item")];
 

headerListItems.map(headerListItem => {
    headerListItem.addEventListener("click", function (e){
        let sectionId = e.currentTarget.dataset.section
        //add active class
        headerListItems.map(headerListItem => {
            headerListItem.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        //add show class
        sections.map(section => {
            section.classList.remove("show")

        })
        document.getElementById(sectionId).classList.add("show")
        header.classList.remove("show")
    })
})

// type effect
let homeHeader = document.querySelector(".home-header"),
homeHeaderText =`My name is ` , 
homeHeaderSpanName = document.createElement("span"),
homeHeaderSpanNameText = `t`,
homeHeaderSpan = document.createElement("span"),
homeHeaderSpanText =`oqa`
let jopTitle = document.querySelector(".jop-title") ,
jopTitleTextPartOne = `I'm a `,
jopTitleSpicalSpan = document.createElement("span"),
jopTitleSpicalSpanText = `frontend developer ` ,
jopDescription = document.querySelector(".jop-description") ,
welcomeMessage = document.querySelector(".welcome-msg") ,
welcomeMessageText = `welcome to my  portfolio`,
    i = 0  , j = 0 , k = 0 , w = 0 , f = 0  , l = 0 , y =0 , s = 0 , d =0 ;
let fort
    jopTitleSpicalSpan.classList.add("special-them-color" , "capitalize")
    // workDescriptionSpicalSpan.classList.add("special-them-color" , "capitalize")
    homeHeaderSpanName.classList.add("special-them-color" , "capitalize" ,"special-font")
    homeHeaderSpan.classList.add("special-them-color" , "capitalize")
    
     function homeHeaderTypeEffect(){   
        if (s < homeHeaderText.length ){
            homeHeader.innerHTML += homeHeaderText.charAt(s);
            s ++ ;
            setTimeout( homeHeaderTypeEffect, 75);
        }
      
    }
   
    
    function homeHeaderNameFirstLetterTypeEffect(){     
         homeHeader.append(homeHeaderSpanName) 
         homeHeaderSpanName.innerHTML =`t` ;
    }
 

    function homeHeaderNameTypeEffect(){     
         homeHeader.append(homeHeaderSpan) 
        if (d < homeHeaderSpanText.length ){
            homeHeaderSpan.innerHTML += homeHeaderSpanText.charAt(d);
            d ++ ;
            setTimeout( homeHeaderNameTypeEffect, 75);
        }
       
    }

     function jopTitleTypeEffect(){     
        if (i < jopTitleTextPartOne.length ){
            jopTitle.innerHTML += jopTitleTextPartOne.charAt(i);
            i ++ ;
            setTimeout( jopTitleTypeEffect, 75);
        }
        jopTitle.append(jopTitleSpicalSpan)
    }
     function jopTitleTypeEffect(){     
        if (i < jopTitleTextPartOne.length ){
            jopTitle.innerHTML += jopTitleTextPartOne.charAt(i);
            i ++ ;
            setTimeout( jopTitleTypeEffect, 75);
        }
        jopTitle.append(jopTitleSpicalSpan)
    }


    function jopTitleSpicalTypeEffect(){
        if (j < jopTitleSpicalSpanText.length ){
            jopTitleSpicalSpan.textContent += jopTitleSpicalSpanText.charAt(j);
            j ++ ;
            setTimeout( jopTitleSpicalTypeEffect , 75)
        }
     }

    function welcomeMessageTypeEffect(){
        if (y < welcomeMessageText.length ){
            welcomeMessage.textContent += welcomeMessageText.charAt(y);
            y ++ ;
            setTimeout( welcomeMessageTypeEffect , 75)
        }
     }
 

    setTimeout(homeHeaderTypeEffect, 2000)
     setTimeout(homeHeaderNameFirstLetterTypeEffect, 3500)
     setTimeout(homeHeaderNameTypeEffect, 3600)
     setTimeout( jopTitleTypeEffect , 5500)
     setTimeout( jopTitleSpicalTypeEffect , 6000)
     setTimeout( welcomeMessageTypeEffect , 9000)

  

