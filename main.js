
    function toggle() {
      var trailer = document.querySelector(".trailer");
      var video = document.querySelector("video");
      trailer.classList.toggle("active");
      video.currentTime = 0;
    }


    function toggle2() {
      var trailer = document.querySelector(".trailer");
      var video = document.querySelector("video");
      trailer.classList.toggle("active");
      video.pause()
    }






    function slideToggler() {
      let $slideTogle = document.querySelector('.slide')
      $slideTogle.classList.toggle("clicked")
    }





    function toggler() {
      let $togglebutton = document.querySelector('.menu-items');
      $togglebutton.classList.toggle("clicked");
    }




    function toggleli() {
      let $toggleli = document.querySelector('#li1');
      $toggleli.classList.toggle("clicked");
    }




    function toggleli2() {
      let $toggleli2 = document.querySelector('#li2');
      $toggleli2.classList.toggle("clicked");
    }




    function toggleli3() {
      let $toggleli3 = document.querySelector('#li3');
      $toggleli3.classList.toggle("clicked");
    }

