const text = "Hello, I'm Roshani Kumari, a passionate web developer with a love for creating beautiful and functional websites. I specialize in front-end technologies like HTML, CSS, JavaScript, and Java. I enjoy turning ideas into real, user-friendly digital experiences.";
  let i = 0;
  const speed = 40;
  const para = document.querySelector("#About p");

  para.innerHTML = "";

  function typeWriter() {
    if (i < text.length) {
      para.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
  // Fade + Slide animation on load
  window.addEventListener("load", () => {
    const aboutSection = document.getElementById("About");
    aboutSection.style.opacity = "0";
    aboutSection.style.transform = "translateY(40px)";

    setTimeout(() => {
      aboutSection.style.transition = "all 1s ease";
      aboutSection.style.opacity = "1";
      aboutSection.style.transform = "translateY(0)";
    }, 300);
  });

  // Image hover zoom effect
  const profileImg = document.querySelector("#About img");
  profileImg.addEventListener("mouseover", () => {
    profileImg.style.transform = "scale(1.08)";
    profileImg.style.transition = "0.3s";
  });

  profileImg.addEventListener("mouseout", () => {
    profileImg.style.transform = "scale(1)";
  });

window.addEventListener("load", () => {
  const img = document.getElementById("aboutImg");
  setTimeout(() => {
    img.classList.add("show");
  }, 300);
});
const skillSection = document.getElementById("Skills");
const bars = document.querySelectorAll(".progress div");

let animated = false;

window.addEventListener("scroll", () => {
  const sectionTop = skillSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100 && !animated) {
    bars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent + "%";
    });
    animated = true;
  }
});
const skillText = document.querySelector('.fade-up');

window.addEventListener('scroll', () => {
  const position = skillText.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(position < screenHeight - 150){
    skillText.classList.add('show');
  }
});
const projectSection = document.querySelector('.project-search');
const tabSection = document.querySelector('.animate-tabs');

window.addEventListener('scroll', () => {
  const screenHeight = window.innerHeight;

  if (projectSection && projectSection.getBoundingClientRect().top < screenHeight - 60) {
    projectSection.classList.add('show');
  }

  if (tabSection && tabSection.getBoundingClientRect().top < screenHeight - 50) {
    tabSection.classList.add('show');
  }
});
const projectCards = document.querySelectorAll('.animate-project');

function revealProjects(){
  const screenHeight = window.innerHeight;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < screenHeight - 60){
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealProjects);
window.addEventListener('load', revealProjects);
const animatedItems = document.querySelectorAll(
  '.animate-title, .animate-text, .animate-container'
);

function revealFintech(){
  const screenHeight = window.innerHeight;

  animatedItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if(itemTop < screenHeight - 60){
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealFintech);
window.addEventListener('load', revealFintech);
document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(
    ".contact-info, .contact-form, .footer, .social-icons a"
  );

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px) scale(0.98)";
    el.style.transition = "all 0.6s ease";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) scale(1)";
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function() {
  status.innerHTML = "Sending your message...";
  status.style.color = "#00ffcc";
});
// Replace your current script.js with this robust version
(function () {
  // Run after DOM is ready
  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () {
    // Elements
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    var sideMenu = document.getElementById('sideMenu'); // optional

    // --- NAV TOGGLE (mobile hamburger) ---
    if (toggle && nav) {
      // Accessibility attributes
      toggle.setAttribute('aria-controls', nav.id || 'site-nav');
      toggle.setAttribute('aria-expanded', 'false');
      nav.setAttribute('role', 'navigation');

      // Helper fns
      function openNav() {
        nav.classList.add('open');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        // allow smooth expand using scrollHeight
        nav.style.maxHeight = nav.scrollHeight + 'px';
      }

      function closeNav() {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        nav.style.maxHeight = null;
      }

      // Toggle click
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        if (nav.classList.contains('open')) closeNav();
        else openNav();
      });

      // keyboard accessible (Enter / Space to open, Esc to close)
      toggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle.click();
        } else if (e.key === 'Escape') {
          closeNav();
        }
      });

      // Close if user clicks any nav link (mobile)
      nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          if (window.matchMedia('(max-width: 900px)').matches) closeNav();
        });
      });

      // Click outside to close (mobile)
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target) && window.matchMedia('(max-width:900px)').matches) {
          closeNav();
        }
      });

      // On resize restore state for desktop
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
          closeNav();
        }
      });

      console.log('[nav] toggle initialized');
    } else {
      console.warn('[nav] toggle NOT initialized — missing #nav-toggle or #site-nav', { toggle: !!toggle, nav: !!nav });
    }

    // --- Optional sideMenu toggle (only if sideMenu exists) ---
    window.toggleMenu = function () {
      if (!sideMenu) {
        console.warn('toggleMenu called but #sideMenu not found');
        return;
      }
      if (getComputedStyle(sideMenu).left === '0px') {
        sideMenu.style.left = '-300px';
      } else {
        sideMenu.style.left = '0px';
      }
    };

    // --- Scroll to top button (safe guards) ---
    if (scrollTopBtn) {
      // Initialize hidden
      scrollTopBtn.style.display = 'none';

      window.addEventListener('scroll', function () {
        var scrolled = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
        scrollTopBtn.style.display = scrolled ? 'block' : 'none';
      });

      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      console.log('[scrollTopBtn] initialized');
    } else {
      console.warn('[scrollTopBtn] not found in DOM');
    }
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Fields
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      status.style.color = "red";
      status.textContent = "Please fill all fields!";
      return;
    }

    // Optional: simple email check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.style.color = "red";
      status.textContent = "Please enter a valid email!";
      return;
    }

    status.style.color = "black";
    status.textContent = "Sending...";

    var data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      if (result.status === "success") {
        status.style.color = "green";
        status.textContent = result.message || "Message sent successfully!";
        form.reset();
      } else {
        status.style.color = "red";
        status.textContent = result.message || "Something went wrong!";
      }
    })
    .catch(function (error) {
      status.style.color = "red";
      status.textContent = "Something went wrong!";
    });
  });
});
