<html>

<head>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='icon' href='assets/img/logo-white.png' width="700" height="275">

    <title>SECRET NUMBER | Vine Entertainment - Profiles</title>

    <!-- ROOT CSS -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/nav.css">
    <link rel="stylesheet" href="assets/css/footer.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

    <!-- PAGE CSS -->
    <link rel="stylesheet" href="assets/css/page/profile.css">
</head>

<body>
    <?php include('assets/sections/nav.php') ?>

    <main>
        <section class="left">
            <img id="member-img" src="assets/img/member/sc_02.jpg">
            <h1 id="member-name"></h1>
            <h6 id="member-position"></h6>
            <p id="member-shortdesc"></p>
        </section>
        <section class="right">
            <div onclick="profile('denise')">
                <img src="assets/img/member/sc_01.jpg">
                <span>Denise</span>
            </div>
            <div onclick="profile('dita')">
                <img src="assets/img/member/sc_02.jpg">
                <span>Dita</span>
            </div>
            <div onclick="profile('jinny')">
                <img src="assets/img/member/sc_03.jpg">
                <span>Jinny</span>
            </div>
            <div onclick="profile('lea')">
                <img src="assets/img/member/sc_04.jpg">
                <span>Lea</span>
            </div>
            <div onclick="profile('soodam')">
                <img src="assets/img/member/sc_05.jpg">
                <span>Soodam</span>
            </div>
        </section>
        <img class="member" src="assets/img/member.png">
    </main>

    <?php include('assets/sections/footer.php') ?>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="config.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/nav.js"></script>
</body>

</html>