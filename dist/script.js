$(document).ready(function(){
    $(".tudo").click(function(){
        $(".salas, .lazer, .dependencias, .diaAgua, .ramos, .izada, .idioma, .incorporacion").show();
    });
  
    $(".so-dependencias").click(function(){
        $(".salas, .lazer, .diaAgua, .ramos, .izada, .idioma, .incorporacion").fadeOut(200);
        $(".dependencias").show();
    });
  
    $(".so-salas").click(function(){
        $(".dependencias, .lazer, .diaAgua, .ramos, .izada, .idioma, .incorporacion").fadeOut(200);
        $(".salas").show();
    });
  
  $(".so-lazer").click(function(){
        $(".dependencias, .salas, .diaAgua, .ramos, .izada, .idioma, .incorporacion").fadeOut(200);
        $(".lazer").show();
    });
    $(".so-diaAgua").click(function(){
        $(".dependencias, .lazer, .salas, .ramos, .izada, .idioma, .incorporacion").fadeOut(200);
        $(".diaAgua").show();
    });
    $(".so-ramos").click(function(){
        $(".dependencias, .lazer, .salas, .diaAgua, .izada, .idioma, .incorporacion").fadeOut(200);
        $(".ramos").show();
    });

    $(".so-izada").click(function(){
        $(".dependencias, .lazer, .salas, .diaAgua, .ramos, .idioma, .incorporacion").fadeOut(200);
        $(".izada").show();
    });
    $(".so-idioma").click(function(){
        $(".dependencias, .lazer, .salas, .diaAgua, .ramos, .izada, .incorporacion").fadeOut(200);
        $(".idioma").show();
    });
     $(".so-incorporacion").click(function(){
        $(".dependencias, .lazer, .salas, .diaAgua, .ramos, .izada, .idioma").fadeOut(200);
        $(".incorporacion").show();
    });
});