function cambiarColor(i) {
  let colorBoton1 = document.getElementById("menu1");
  let colorBoton2 = document.getElementById("menu2");
  let colorBoton3 = document.getElementById("menu3");
  let colorBoton4 = document.getElementById("menu4");
  let colorBoton5 = document.getElementById("menu5");
  switch (i) {
    case 1:
      colorBoton1.style.background = "#292931";
      colorBoton2.style.background = "black";
      colorBoton3.style.background = "black";
      colorBoton4.style.background = "black";
      colorBoton5.style.background = "black";
      break;
    case 2:
      colorBoton1.style.background = "black";
      colorBoton2.style.background = "#292931";
      colorBoton3.style.background = "black";
      colorBoton4.style.background = "black";
      colorBoton5.style.background = "black";

      break;
    case 3:
      colorBoton1.style.background = "black";
      colorBoton2.style.background = "black";
      colorBoton3.style.background = "#292931";
      colorBoton4.style.background = "black";
      colorBoton5.style.background = "black";

      break;
    case 4:
      colorBoton1.style.background = "black";
      colorBoton2.style.background = "black";
      colorBoton3.style.background = "black";
      colorBoton4.style.background = "#292931";
      colorBoton5.style.background = "black";
      break;
    case 5:
      colorBoton1.style.background = "black";
      colorBoton2.style.background = "black";
      colorBoton3.style.background = "black";
      colorBoton4.style.background = "black";
      colorBoton5.style.background = "#292931";
      break;

    default:
      break;
  }
}
