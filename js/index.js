

$(document).ready(function() {
    // Seleciona o elemento do header
    var header = $("header");
  
    // Função para atualizar o estilo do header
    function updateHeaderStyle() {
      if ($(window).scrollTop() > 0) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }
  
    // Chama a função ao carregar a página
    updateHeaderStyle();
  
    // Adiciona um evento de scroll
    $(window).scroll(function() {
      updateHeaderStyle();
    });
  });
  