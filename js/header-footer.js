// get a reference to header and footer by id
const mainHeader = document.querySelector("#main-header");
const mainFooter = document.querySelector("#main-footer");

// insert all of the elements i want inside them
mainHeader.innerHTML = `
        <div class="header-logo-holder">
            <a href="index.html"><img src="./img/MainLogo.png" alt="Header main logo"></a>
        </div>
        <nav class="desktop-nav">
            <menu>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="contact-us.html">Contact</a></li>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="#"><img src="./img/shopping-cart.png" alt="shopping cart"></a></li>
            </menu>
        </nav>
        <a href="#">
            <button class="burger">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </a>
        <a href="#" class="mobile-cart"><img src="./img/shopping-cart.png" alt="shopping cart"></a>
        <nav class="mobile-nav">
            <menu>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="contact-us.html">Contact</a></li>
              <li><a href="about-us.html">About Us</a></li>
            </menu>
        </nav> 
`

mainFooter.innerHTML = `
        <div class="footer-logo-holder">
            <a href="#"><img src="./img/MainLogo.png" alt="Header main logo"></a>
        </div>
        <div class="social-icons">
            <div>
                <a href="contact-us.html"><img src="./img/SocialMediaIcons/5282541_fb_social media_facebook_facebook logo_social network_icon.png" alt="facebook logo"></a>
                <a href="contact-us.html"><img src="./img/SocialMediaIcons/5282544_camera_instagram_social media_social network_instagram logo_icon.png" alt="instagram logo"></a>
            </div>
            <div>
                <a href="contact-us.html"><img src="./img/SocialMediaIcons/5282545_pin_pinterest_inspiration_pinterest logo_icon.png" alt="pintrest logo"></a>
                <a href="contact-us.html"><img src="./img/SocialMediaIcons/5282551_tweet_twitter_twitter logo_icon.png" alt="twitter logo"></a>
            </div>
        </div> 
`
// get a reference to the burger and mobile nav
// if the burger button gets clicked display the mobile nav
var burger = document.getElementsByClassName("burger")[0];
var mobileNav = document.getElementsByClassName("mobile-nav")[0];

burger.onclick = function() {
    if(mobileNav.style.display == "none"){
        mobileNav.style.display = "block"
    }else {
        mobileNav.style.display = "none"
    }
}