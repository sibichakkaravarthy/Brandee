const hamburger_menu = document.querySelector(".hamburger-menu");
const becontainer = document.querySelector(".becontainer");

hamburger_menu.addEventListener("click", () => {
  becontainer.classList.toggle("active");
});
 $(function() {

                    var deg = 0;
                    var rotate = 1;
                    var club_rotate = setInterval(club_rotate, 25);
                    $('.circle-item > li').not(".circle-item > *:nth-of-type(12)").mouseenter(function() {
                        rotate = 0
                    });
                    $('.circle-item > li').not(".circle-item > *:nth-of-type(12)").mouseleave(function() {
                        rotate = 1
                    });
                    function club_rotate() {
                        if (rotate == 0) {
                            return
                        }
                        deg = get_deg(deg + 1);
                        var deg0 = deg;
                        var $data = $('.circle-item').children().not(".circle-item > *:nth-of-type(12)");
                        var length = 17;
                        if ($(window).width() <= 540) { // inorder to make it responsive, decreases size to 7em if window size is less than 570
                            length = 12
                        }
                        $data.each(function() {
                            $(this).css("-webkit-transform", "rotate(" + deg0 + "deg) translate(" + length + "em) rotate(-" + deg0 + "deg)").css("transform", "rotate(" + deg0 + "deg) translate(" + length + "em) rotate(-" + deg0 + "deg)");
                            deg0 = get_deg(deg0 + 33)
                        })
                    }

                    function get_deg(deg0) {
                        if (deg0 > 360)
                            return (deg0 - 360);
                        else return deg0
                    }
                });
