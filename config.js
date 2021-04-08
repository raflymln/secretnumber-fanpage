var config = {
    social: {
        instagram: "https://www.instagram.com/secretnumber.official/",
        twitter: "https://twitter.com/5ecretNumber",
        youtube: "https://www.youtube.com/channel/UCIhPBu7gVRi1tnre0ZfXadg",
        facebook: "https://www.facebook.com/Secret-Number_Official-111124247261278/",
        wikipedia: "https://en.wikipedia.org/wiki/Secret_Number"
    },
    newsong: {
        title: "Who Dis?",
        type: "Album",
        stream: {
            youtube: "https://www.youtube.com/watch?v=mkYwq_CKpyw",
            spotify: "https://open.spotify.com/album/38QTDwD7IM2EZuiUMII6uA",
            applemusic: "https://music.apple.com/us/album/who-dis-single/1514101193?at=1l3vwYf",
            amazonmusic: "https://www.amazon.co.uk/Who-Dis-SECRET-NUMBER/dp/B088TR22CT"
        }
    },
    biograph: {
        denise: {
            name: "Denise",
            img: 'sc_01.jpg',
            position: "Main Vocalist, Maknae",
            shortdesc: "Denise is a Korean-American singer under Vine Entertainment. She is the maknae of the girl group SECRET NUMBER."

        },
        dita: {
            name: "Dita Karang",
            img: 'sc_02.jpg',
            position: "Main Dancer, Lead Vocalist",
            shortdesc: "On February 4, she was revealed as the fourth member of Vine Entertainment's new girl group SECRET NUMBER.[1] The group made their debut on May 19, 2020 with the single \"Who Dis ? \"."
        },
        jinny: {
            name: "Jinny",
            img: 'sc_03.jpg',
            position: "Main Rapper, Lead Dancer, Vocalist",
            shortdesc: "On December 17, 2019, she was revealed as the first member of Vine Entertainment's new girl group SECRET NUMBER."

        },
        lea: {
            name: "Léa",
            img: 'sc_04.jpg',
            position: "Lead Vocalist",
            shortdesc: "On February 27, she was revealed as the fifth and final member of SECRET NUMBER.[3] On May 11, her concept photo was released on social medias."

        },
        soodam: {
            name: "Soodam",
            img: 'sc_05.jpg',
            position: "Lead Dancer, Vocalist, Visual, Center",
            shortdesc: "On January 25, she was revealed as the third member of Vine Entertainment's new girl group SECRET NUMBER."

        }
    }
}

$(document).ready(function() {
    // NEWSONG
    $("#newsong-type").html('New ' + config.newsong.type);

    // MEMBER PROFILES
    $("#member-img").attr('src', 'assets/img/member/' + config.biograph['dita'].img);
    $("#member-name").html(config.biograph['dita'].name);
    $("#member-position").html(config.biograph['dita'].position);
    $("#member-shortdesc").html(config.biograph['dita'].shortdesc);

    Object.entries(config.newsong.stream).forEach(entry => {
        const [key, value] = entry;
        console.log(value)
        if (value !== "") {

            if (key == 'youtube') {
                $("#newsong").append(`<button data-title='Youtube' class='youtube' onclick='goto("${value}")'><i class='fab fa-youtube'></i> Youtube</button>`);
            }

            if (key == 'spotify') {
                $("#newsong").append(`<button data-title='Spotify' class='spotify' onclick='goto("${value}")'><i class='fab fa-spotify'></i> Spotify</button>`);
            }

            if (key == 'applemusic') {
                $("#newsong").append(`<button data-title='Apple Music' class='apple' onclick='goto("${value}")'><i class='fab fa-apple'></i> Apple Music</button>`);
            }

            if (key == 'amazonmusic') {
                $("#newsong").append(`<button data-title='Amazon Music' class='amazon' onclick='goto("${value}")'><i class='fab fa-amazon'></i> Amazon Music</button>`);
            }

        }
    });
});

function profile(member) {
    $("#member-img").attr('src', 'assets/img/member/' + config.biograph[member].img);
    $("#member-name").html(config.biograph[member].name);
    $("#member-position").html(config.biograph[member].position);
    $("#member-shortdesc").html(config.biograph[member].shortdesc);
}

function goto(link) {
    window.location.href = link;
}

function social(page) {
    window.location.href = config.social[page];
    return config.social[page];
}