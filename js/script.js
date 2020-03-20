function add_node() {
  var element = document.getElementById('dom');
  var link = document.createElement('a');
  var br = document.createElement('br');

  link.innerHTML = 'Тестова Ссилка DOM';
  link.href = 'http://beemo.space';

  element.appendChild(br);
  element.appendChild(link);
}

function delete_node() {
  var elemnt = document.getElementById('dom');
  document.body.removeChild(elemnt);
}

function initMap() {
  var opt = {center: {lat:48.7911368 , lng:31.8717982},zoom: 6}
  var maaap = document.getElementById("map")
  var myMap = new google.maps.Map(maaap, opt);
  // console.log(maaap);

  var marker_lviv = new google.maps.Marker({
    position: {lat:49.834463, lng:24.044568},
    map: myMap
  })
  var marker_kyiv = new google.maps.Marker({
    position: {lat:50.445262, lng:30.527266},
    map: myMap
  })
  var marker_kharkiv = new google.maps.Marker({
    position: {lat:49.974198, lng:36.245394},
    map: myMap
  })
  var marker_dnipro = new google.maps.Marker({
    position: {lat:48.447989, lng:35.077940},
    map: myMap
  })
  var marker_odessa = new google.maps.Marker({
    position: {lat:46.455748, lng:30.736874},
    map: myMap
  })
}

$(document).ready(function(){
  $("nav a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
  $("body,html").animate({scrollTop: destination }, 1000);
  });
});
$(document).ready(function(){
  $(".navig_text").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
  $("body,html").animate({scrollTop: destination }, 1000);
  });
});

function f_login_up(form) {
  var fail = false;

  var hidden_node = form.hidden.value;
  hidden_node = Date();

  var username = form.username.value;
  var pass = form.pass.value;
  var re_pass = form.re_pass.value;
    if (username == ""){
      fail = "Ви не заповнили поле - Username";
      event.preventDefault();
    }
    if (pass == ""){
      fail = "Ви не заповнили поле - Password";
      event.preventDefault();
    }
    if(re_pass == ""){
      fail = "Ви не заповнили поле - Re-Password";
      event.preventDefault();
    }
    if (pass != re_pass){
      fail = "Паролі не Співпадають";
      event.preventDefault();
    }

  var email = form.email.value;
    if (email == ""){
      fail = "Ви не заповнили поле - Email";
      event.preventDefault();
    }

  var sex = form.sex.value;
    if (sex == ""){
      fail = "Виберіть Стать"
      event.preventDefault();
    }




  var city = form.city.value;

  var about = form.about.value;
    if (about == ""){
      fail = "Розкажіть про Себе";
      event.preventDefault();
    }


    if(fail)
      alert(fail);
    else
      alert("Login - " + username + "\nPassword - " + pass + "\nEmail - " + email + "\nSex - " + sex + "\nCity - " + city + "\nAbout - " + about + "\nDate - " + hidden_node);
}


function f_login(form) {
  var fail = false;

  var hidden_node = form.hidden.value;
  hidden_node = Date();

  var username = form.username.value;
  var pass = form.pass.value;
  var re_pass = form.re_pass.value;
    if (username == ""){
      fail = "Ви не заповнили поле - Username";
      event.preventDefault();
    }
    if (pass == ""){
      fail = "Ви не заповнили поле - Password";
      event.preventDefault();
    }
    if(re_pass == ""){
      fail = "Ви не заповнили поле - Re-Password";
      event.preventDefault();
    }
    if (pass != re_pass){
      fail = "Паролі не Співпадають";
      event.preventDefault();
    }

    if(fail)
      alert(fail);
    else
      alert("Login - " + username + "\nPassword - " + pass + "\nDate - " + hidden_node);
}

function changetheme(){
  if(document.getElementById('logo_theme').className == "far fa-moon"){
    document.getElementById('logo_theme').className = "fas fa-sun";
    document.body.style = "background-color: #262626";
    document.getElementById('btn_theme').className = "btn_theme_dark";
  }
  else {
    document.getElementById('logo_theme').className = "far fa-moon";
    document.body.style = "background-color: #ffffff";
    document.getElementById('btn_theme').className = "btn_theme_light";
  }
}
