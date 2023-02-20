$(document).ready(function () {
 var altura = $("nav").offset().top;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("efectoScroll");
    } /*si se va a cambiar el color de la barra del menu cada vez que baje
		se recomienda colocar el siguiente else para que a la hora de volver 
		a subir deje el color inial else {
      $("nav").removeClass("efectoScroll");
      $("nav").addClass("top");
    }*/
  });

  /*Titulo */
  $("#titulo").on("click", function () {
    var position = $("#seccionInicio").offset().top;
    $("body,html").animate(
      {
        scrollTop: position + "px",
      },
      1000
    );

      /* estas partes que estan comentadas tenian la funcion de subrayar la seccion donde se le habia dado click con un borde amarillo con la clase btn que esta ubicada en la carpeta css/menu.css liniea aproximadamente 91
    $("#inicio").addClass("btn");
    $("#quienesSomos").removeClass("btn");
    $("#repartidor").removeClass("btn");
    $("#aliado").removeClass("btn");
    $("#contacto").removeClass("btn");*/
  });

  /* Repartidor*/
  $("#repartidor").on("click", function () {
    var position = $("#seccionRepartidor").offset().top;
    $("body,html").animate(
      {
        scrollTop: position + "px",
      },
      1000
    );
    /*
    $("#inicio").removeClass("btn");
    $("#quienesSomos").removeClass("btn");
    $("#repartidor").addClass("btn");
    $("#aliado").removeClass("btn");
    $("#contacto").removeClass("btn");*/
  });

  /*Aliado*/
  $("#aliado").on("click", function () {
    var position = $("#seccionAliado").offset().top;
    $("body,html").animate(
      {
        scrollTop: position + "px",
      },
      1000
    );
    /*
    $("#inicio").removeClass("btn");
    $("#quienesSomos").removeClass("btn");
    $("#repartidor").removeClass("btn");
    $("#aliado").addClass("btn");
    $("#contacto").removeClass("btn");*/
  });

  /*Contacto*/
  $("#contacto").on("click", function () {
    var position = $("#seccionContacto").offset().top;
    $("body,html").animate(
      {
        scrollTop: position + "px",
      },
      1000
    );
    /*
    $("#inicio").removeClass("btn");
    $("#quienesSomos").removeClass("btn");
    $("#repartidor").removeClass("btn");
    $("#aliado").removeClass("btn");
    $("#contacto").addClass("btn");*/
  });

    /*NUESTROS SERVICIOS*/
    $("#nuestrosServicios").on("click", function () {
      var position = $("#seccionNuestrosServicios").offset().top;
      $("body,html").animate(
        {
          scrollTop: position + "px",
        },
        1000
      );/*
      $("#inicio").removeClass("btn");
      $("#quienesSomos").removeClass("btn");
      $("#repartidor").removeClass("btn");
      $("#aliado").removeClass("btn");
      $("#contacto").addClass("btn");*/
    });


  /*Inicio 
  $("#inicio").on("click", function () {
    var position = $("#seccionInicio").offset().top;
    $("body,html").animate(
      {
        scrollTop: position + "px",
      },
      1000
    );
    $("#inicio").addClass("btn");
    $("#quienesSomos").removeClass("btn");
    $("#repartidor").removeClass("btn");
    $("#aliado").removeClass("btn");
    $("#contacto").removeClass("btn");
  });

  /*Quienes Somos
  $("#quienesSomos").on("click", function () {
    var position = $("#seccionQuienesSomos").offset().top;
    $("body,html").animate(
      {
        scrollTop: position + "px",
      },
      1000
    );
    $("#inicio").removeClass("btn");
    $("#quienesSomos").addClass("btn");
    $("#repartidor").removeClass("btn");
    $("#aliado").removeClass("btn");
    $("#contacto").removeClass("btn");
  });
  
*/
  
});


