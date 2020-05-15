// setta src da imagem de perfil
function fotoPerfil(image) {
  var foto = $("#foto-perfil");
  foto.attr("src", image);
}

// efeito do titulo do home
function animaTyped() {
  var typed = $(".typed");
  typed.typed({
    strings: ["Paulo Lucas.", "Student.", "Focused.", "Developer."],
    typeSpeed: 100,
    loop: true,
  });
}

// cria carrossel de projetos
function estilizaCarrossel() {
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
function addProjeto(repo) {
  var projetos = $(".projects-carousel");
  var linguagem = repo.language;
  var homepage = repo.homepage;
  var name = repo.name;

  if(name === 'CurriculumVitae') return;

  if (linguagem == null) { linguagem = "outra"; }
  if (name == "paulo-lucas.github.io") { name = "Esta página"; }

  projetos.append(`<div class="repo-block">
                      <h3><span class="repo-name">${name}</span></h3>
                      <div class="description-box shadow p-3"><p class="repo-description">${repo.description}</p></div>
                      <p class="repo-language">Linguagem: <span>${linguagem}</span></p>
                      <a href="${repo.html_url}" target="_blank"><span class="badge badge-github badge-pill">Ver no GitHub</span></a>
                  </div> `);

  
  if(homepage && homepage != ""){
    $('.repo-block:last-child').append(`
      <a href="${homepage}" target="_blank"><span class="badge badge-pill">Ver na página</span></a>
    `)
  }

  if(name == "be-the-hero" 
    || name == 'catalogo-de-passaros' 
    || name == 'drawit'
    || name == 'github-tracker'
    || name == 'Esta página') 
    {
      $('.repo-block:last-child').prepend(`
        <img class="star-emoji" src="https://img.icons8.com/emoji/96/000000/star-emoji.png"/>
      `)
    }
}