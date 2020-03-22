const url = "https://api.github.com/users/paulo-lucas/repos"
var xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.addEventListener("load", function () {
  if (xhr.status == 200) {
    var repos = JSON.parse(this.responseText);
    repos.forEach(addProjeto);
    estilizaCarrossel();
  } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
  }
});
xhr.send();

// efeito do titulo do home
var typed = $(".typed");
$(function () {
  typed.typed({
    strings: ["Paulo Lucas.", "Student.", "Focused.", "Developer."],
    typeSpeed: 100,
    loop: true,
  });
});


function estilizaCarrossel(){
  $('.projects-carousel').owlCarousel({
      loop:true,
      nav: false,
      //center:true,
      responsive: { 0: { 
          items: 1, 
        }, 
        768: { 
          items: 2, 
        }, 
        900: { 
          items: 3,
          stagePadding: 50
        } 
      }
  });
}


function addProjeto(repo){
  var projetos = $(".projects-carousel");
  var linguagem = repo.language;

  if(linguagem == null){ linguagem = "outra"; }
  
  projetos.append(`<div class="box">
                      <h3><span class="repo-name">${repo.name}</span></h3>
                      <div class="description-box shadow p-3"><p disabled class="repo-description">${repo.description}</p></div>
                      <p class="repo-language">Linguagem: <span>${linguagem}</span></p>
                      <a href="${repo.html_url}" target="_blank"><img class="icone repo-link" src="ico/github.png" alt="Ver no GitHub"></a>
                  </div> `);
  
}