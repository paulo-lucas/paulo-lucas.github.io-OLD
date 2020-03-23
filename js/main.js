$(document).ready(function(){
  //const perfil = "https://api.github.com/users/paulo-lucas";
  const url = "https://api.github.com/users/paulo-lucas/repos";
  const client_id = "3d29b9344df142ce5d29";
  const client_secret = "6f5e3561009098ee603ffe39bb771c593578e741";
  var autenticado = url + "?client_id=" + client_id + "&client_secret=" + client_secret;


  animaTyped();

  $.get(autenticado, function( data ) {
      fotoPerfil(data[0].owner.avatar_url);
      data.forEach(addProjeto);
      estilizaCarrossel();
      $(document).scrollTop(0);
  });
});

