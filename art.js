// modified from: https://techfunda.com/howto/444/changing-of-images

<h1>Alternate Art</h1>
    <img src="https://64.media.tumblr.com/924e08b7284645bbc577028cf654125d/6a94cd038c850981-a3/s1280x1920/97fbb462d9d041c14d8351537f39cfd47d564758.png" id="blindhawks" width="200" height="150">
    <input type="button" onclick="changeImage()" value="More Art" />


    <script>
        function changeImage() {
            var image = document.getElementById('blindhawks');
            if (image.src.match("https://64.media.tumblr.com/91ced157261d1d110877e573ca03f1a0/51ff5a291d08263f-f6/s1280x1920/e43149a2d021dba142439b8bf350159c86e5294f.png"")) {
                image.src = "https://64.media.tumblr.com/924e08b7284645bbc577028cf654125d/6a94cd038c850981-a3/s1280x1920/97fbb462d9d041c14d8351537f39cfd47d564758.png";
            }
            else {
                image.src = "https://64.media.tumblr.com/91ced157261d1d110877e573ca03f1a0/51ff5a291d08263f-f6/s1280x1920/e43149a2d021dba142439b8bf350159c86e5294f.png";
            }
        }
    </script>