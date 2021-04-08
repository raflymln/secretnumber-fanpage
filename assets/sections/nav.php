<header>
    <section class="logo">
        <img src="assets/img/logo.png" onclick="goto('/')" height="40">
    </section>
    <section class="nav">
        <span onclick="openNav()">&#9776;</span>
    </section>
</header>

<nav id="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <section class="menu">
        <a><img class="logo" src="assets/img/logo-white.png" height="100" onclick="goto('/')"></a>
        <br>
        <a href="/">Home</a>
        <a href="profiles">Profile</a>
        <a href="https://kprofiles.com/sn-members-profile/">KPOP Wiki</a>
    </section>
    <section class="social">
        <p>Social</p>
        <section>
            <i class="fab fa-instagram" onclick="social('instagram')"></i>
            <i class="fab fa-twitter" onclick="social('twitter')"></i>
            <i class="fab fa-facebook" onclick="social('facebook')"></i>
            <i class="fab fa-youtube" onclick="social('youtube')"></i>
            <i class="fab fa-wikipedia-w" onclick="social('wikipedia')"></i>
        </section>
    </section>
</nav>