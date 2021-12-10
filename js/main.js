/** 
 <ul id="top-menu" class="nav navbar-nav navbar-right mu-main-nav">
            <li><a href="index.html">HOME</a></li>
            <li><a href="#mu-about-us">ABOUT US</a></li>                       
            <li><a href="#mu-restaurant-menu">MENU</a></li>                       
            <li><a href="#mu-reservation">RESERVATION</a></li>                       
            <li><a href="#mu-gallery">GALLERY</a></li>
            <li><a href="#mu-chef">OUR CHEFS</a></li> 
            <li><a href="#mu-contact">CONTACT</a></li> 
          </ul>
 */
const hrefLink = ["index.html", "#mu-about-us", "#mu-restaurant-menu", "#mu-reservation", "#mu-gallery", "#mu-chef", "#mu-contact"];
const imeLink = ["HOME", "ABOUT US", "MENU", "RESERVATION", "GALLERY", "OUR CHEFS", "CONTACT"];
let navBar = document.getElementById("navbar");
let navList = `<ul id="top-menu" class="nav navbar-nav navbar-right mu-main-nav">`;
    for (let i = 0; i < hrefLink.length; i++) {      
        navList += `<li><a href="${hrefLink[i]}">${imeLink[i]}</a></li>`;
    }
    navList += `</ul>`;
navBar.innerHTML = navList;
