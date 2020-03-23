$(document).ready(function(){
  const perfil = "https://api.github.com/users/paulo-lucas";
  const repositorios = "https://api.github.com/users/paulo-lucas/repos";

  animaTyped();

  $.get(repositorios, function( data ) {
      data.forEach(addProjeto);
      estilizaCarrossel();
  });

  $.get(perfil, function(data){
      fotoPerfil(data.avatar_url);
      $(document).scrollTop(0);
  });
});