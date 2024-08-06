const mainHeader = document.querySelector("#main-header");
const mainFooter = document.querySelector("#main-footer");

mainHeader.innerHTML = `
        <div class="header-logo-holder">
            <a href="#"><img src="./img/MainLogo.png" alt="Header main logo"></a>
        </div>
        <nav class="desktop-nav">
            <menu>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">C</a></li>
            </menu>
        </nav>
        <button class="burger">
            <div></div>
            <div></div>
            <div></div>
        </button>
        <nav class="mobile-nav">
            <menu>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">View Checkout</a></li>
            </menu>
        </nav> 
`

mainFooter.innerHTML = `
        <div class="footer-logo-holder">
            <a href="#"><img src="./img/MainLogo.png" alt="Header main logo"></a>
        </div>
        <div class="social-icons">
            <div>
                <a href="index.html"><img src="./img/SocialMediaIcons/5282541_fb_social media_facebook_facebook logo_social network_icon.png" alt="facebook logo"></a>
                <a href="index.html"><img src="./img/SocialMediaIcons/5282544_camera_instagram_social media_social network_instagram logo_icon.png" alt="instagram logo"></a>
            </div>
            <div>
                <a href="index.html"><img src="./img/SocialMediaIcons/5282545_pin_pinterest_inspiration_pinterest logo_icon.png" alt="pintrest logo"></a>
                <a href="index.html"><img src="./img/SocialMediaIcons/5282551_tweet_twitter_twitter logo_icon.png" alt="twitter logo"></a>
            </div>
        </div> 
`