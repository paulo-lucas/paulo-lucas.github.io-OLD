// setta src da imagem de perfil
function fotoPerfil(image){
  var foto = $("#foto-perfil");
  foto.attr("src", image);
}

// efeito do titulo do home
function animaTyped(){
  var typed = $(".typed");
  typed.typed({
    strings: ["Paulo Lucas.", "Student.", "Focused.", "Developer."],
    typeSpeed: 100,
    loop: true,
  });
}

// cria carrossel de projetos
function estilizaCarrossel(){
  $(".projects-carousel").slick({
    centerMode: true,
    centerPadding: '40px',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
  });
}

// adiciona box com informações do projeto
function addProjeto(repo){
  var projetos = $(".projects-carousel");
  var linguagem = repo.language;
  var homepage = repo.homepage;
  if(linguagem == null){ linguagem = "outra"; }
  
  if(homepage == null || homepage == ""){
    projetos.append(`<div class="repo-block">
                      <h3><span class="repo-name">${repo.name}</span></h3>
                      <div class="description-box shadow p-3"><p disabled class="repo-description">${repo.description}</p></div>
                      <p class="repo-language">Linguagem: <span>${linguagem}</span></p>
                      <a href="${repo.html_url}" target="_blank"><span class="badge badge-github badge-pill">Ver no GitHub</span></a>
                      
                  </div> `);
  }else{
    projetos.append(`<div class="repo-block">
                      <h3><span class="repo-name">${repo.name}</span></h3>
                      <div class="description-box shadow p-3"><p disabled class="repo-description">${repo.description}</p></div>
                      <p class="repo-language">Linguagem: <span>${linguagem}</span></p>
                      <a href="${repo.html_url}" target="_blank"><span class="badge badge-pill">Ver no GitHub</span></a>
                      <a href="${homepage}" target="_blank"><span class="badge badge-pill">Ver na página</span></a>
                  </div> `);
  }
}