// Main JS for interactivity: menu, dropdowns, modal, form handling, year
document.addEventListener('DOMContentLoaded', function(){
  // year
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // menu toggle
  var menuBtn = document.querySelectorAll('.menu-toggle');
  var mainMenus = document.querySelectorAll('#mainMenu, .main-nav .menu');
  menuBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
      var menu = document.querySelector('.main-nav .menu');
      if(!menu) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('active');
    });
  });

  // dropdowns (keyboard accessible)
  document.querySelectorAll('.dropdown').forEach(function(drop){
    var link = drop.querySelector('a');
    link.addEventListener('click', function(e){ // allow click to toggle on touch
      if(window.getComputedStyle(link).display !== 'none'){
        e.preventDefault();
        drop.classList.toggle('open');
      }
    });
    link.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); drop.classList.toggle('open'); }
    });
  });

  // modal demo
  var modal = document.getElementById('modal');
  if(modal){
    document.querySelectorAll('[data-open-modal]').forEach(function(el){
      el.addEventListener('click', function(){ modal.setAttribute('aria-hidden','false'); });
    });
    modal.querySelector('.modal-close')?.addEventListener('click', function(){ modal.setAttribute('aria-hidden','true'); });
  }

  // form handling progressive enhancement
  var form = document.getElementById('cadastroForm');
  var alertBox = document.getElementById('alert');
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        // let browser show messages
        return;
      }
      e.preventDefault();
      // mock send - show success alert
      if(alertBox){
        alertBox.hidden = false;
        alertBox.className = 'alert alert-success';
        alertBox.textContent = 'Cadastro enviado com sucesso (demo). Obrigado!';
        setTimeout(function(){ alertBox.hidden = true; }, 5000);
      }
      form.reset();
    });
  }
});
