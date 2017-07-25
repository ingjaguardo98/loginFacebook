'use strict';

// set initial data
(function setInitialData(){
	let initialExist = window.localStorage.getItem('data');

	if(initialExist){
		console.log("localStorage exists");
		window.myData = JSON.parse(initialExist);

	} else {
		console.log("set localStorage");
		let initData = {
			users:[
        {
					name:"Jorge",
					lastname:"Gomez",
					mail:"jorge@facebook.com",
          psw: "jorge123",
					dateborn: "11/04/1985",
					gender:"M",
				},

				{
					name:"Laura",
					lastname:"Perez",
					mail:"laura@facebook.com",
          psw: "laura123",
					dateborn: "15/08/1981",
					gender:"F",
				},

				{
          name:"Juan",
          lastname:"Tamayo",
          mail:"juan@facebook.com",
          psw: "juan123",
          dateborn: "28/02/1987",
          gender:"M",
				},

				{
          name:"Emilia",
          lastname:"Ramirez",
          mail:"emilia@facebook.com",
          psw: "emilia123",
          dateborn: "28/06/1990",
          gender:"F",
        },
			],
		};
		window.localStorage.setItem('data',JSON.stringify(initData));
		window.myData = JSON.parse(window.localStorage.getItem('data'));
	}

	window.saveLocalStorage = function saveLocalStorage(){
		window.localStorage.setItem('data',JSON.stringify(window.myData));
	};

})(window,document);

// Autentificacion
function autentificar(username, password) {
  console.log(username + password);
  const data = window.myData;
	for(let i in data.users){
    let currentUsers = data.users[i];
    if (currentUsers.mail === username && currentUsers.psw===password) {
      alert("BIENVENIDO A FACEBOOK");
      return true;
    }
	}

  alert("DATOS NO VALIDOS");
  return false;
}

function limpiar(control,texto){
  if (control.value === texto) {
    control.value = "";
    if (control.id==="txtnewpsw"){
      control.type = "password";
    }
  }
}

function reestablecer(control,texto){
  if (control.value===""){
    control.value = texto;
    if (control.id==="txtnewpsw"){
      control.type = "text";
    }
  } else {
    if (control.id==="txtmail") {
      let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      let validador = document.getElementById('validaemail');

      if (emailRegex.test(control.value)) {
        validador.style.display = "none";
      } else {
        validador.style.display = "inline";
      }
    }
    if (control.id==="txtnewpsw") {
      let validador = document.getElementById('validapsw');
      if (control.value.length === 8) {
        validador.style.display = "none";
      } else {
        validador.style.display = "inline";
      }
    }
  }
}

function adduser(name,lastname, mail, psw, dateborn, gender) {
  let genero = "";
  if (gender[0].checked) {
    genero = "F";
  } else {
    genero = "M";
  }
  let oldItems = JSON.parse(localStorage.getItem('data')) || [];

  let newItem = {
          'name': name,
          'lastname': lastname,
          'mail': mail,
          'psw': psw,
          'dateborn': dateborn,
          'gender': genero
  };

  oldItems.users.push(newItem);
  localStorage.setItem('data', JSON.stringify(oldItems));
  alert("USUARIO REGISTRADO");
}
