    // icon in small Size
        let icon = document.querySelector(".icon")
        let ul = document.querySelector(".listHead")
        let widthWindow = 1080

        function checkScreenSize(){
            if(window.innerWidth  <= widthWindow ){
                icon.style.display = "block"
            }else{
                icon.style.display = "none"
            }
        }
        icon.onclick = function(){
            if(ul.style.display == "block"){
                ul.style.display = "none"
                icon.classList.remove("click")
            }else{
                ul.style.display = "block"
                icon.classList.add("click")
            }
        }
        setInterval(checkScreenSize,100) 
    // END icon
    let header = document.querySelector(".header")
    let about = document.querySelector(".about_page")
    window.onscroll = function(){
        if(window.scrollY  >= about.offsetTop ){
            header.style = "background-color: #3d3d3d;"
        }
        else {
            header.style = "background-color: transparent;"
        }
    }
