// Minimal interactivity: nav toggle, hero rotation, basic form handlers
document.addEventListener('DOMContentLoaded', function(){
  // show current year in footers
  var years = document.querySelectorAll('[id^="year"]');
  years.forEach(function(el){ el.textContent = new Date().getFullYear(); });

  // Mobile nav toggle
  function toggleNav(){
    var nav = document.querySelector('.nav');
    if(!nav) return;
    nav.style.display = (nav.style.display === 'flex') ? '' : 'flex';
    nav.style.flexDirection = 'column';
  }
  ['navToggle','navToggle2','navToggle3','navToggle4'].forEach(function(id){
    var btn = document.getElementById(id);
    if(btn) btn.addEventListener('click', toggleNav);
  });

  // Hero slides simple rotation
  var slides = document.querySelectorAll('#heroSlides .slide');
  if(slides && slides.length>1){
    var idx = 0;
    setInterval(function(){
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 4000);
  }

  // Form submit handlers (demo only)
  function handleDemoForm(form, message){
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = new FormData(form);
      // basic client-side validation example
      var email = data.get('email');
      if(email && email.indexOf('@')===-1){
        alert('Please enter a valid email.');
        return;
      }
      alert(message || 'Form submitted — this is a demo (no server).');
      form.reset();
    });
  }

  handleDemoForm(document.getElementById('enquiryForm'), 'Thank you — we will respond soon.');
  handleDemoForm(document.getElementById('contactForm'), 'Thanks for reaching out — we will be in touch.');
  handleDemoForm(document.getElementById('loginForm'), 'Logged in (demo).');
  handleDemoForm(document.getElementById('signupForm'), 'Account created (demo).');
});
