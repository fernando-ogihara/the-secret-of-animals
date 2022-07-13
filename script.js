function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
      tabContent[0].classList.add('active');

      function activeTab(index) {
          tabContent.forEach((section) => {
              section.classList.remove('active');
          });
          tabContent[index].classList.add('active');
      }

      tabMenu.forEach((itemMenu, index) => {
          itemMenu.addEventListener('click', () => {
              activeTab(index);
          });
      });
  }
}

function initAccordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    const activeClass = 'active';

    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
        item.addEventListener('click',activeAccordion);
    })
  }
}

function smoothScrool() {
    const menuLinks = document.querySelectorAll('.js-menu a[href^="#"]');
    if (menuLinks.length) {
      function scrollToSection(event) {
          event.preventDefault(); //anula o comportamento padrao
          const href = event.currentTarget.getAttribute('href');
          const section = document.querySelector(href);
          // const sectionTop = section.offsetTop; //define por padrao o topo de determinada section

          section.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      }

      //alternativo
      //     window.scrollTo({
      //         top: sectionTop,
      //         behavior: 'smooth',
      //     })
      // }

      menuLinks.forEach((link) => {
          link.addEventListener('click', scrollToSection);
      });
    }
}

function scroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
      const halfWindow = window.innerHeight * 0.6;

      function animatedScroll() {
          sections.forEach((section) => {
              const sectionTop = section.getBoundingClientRect().top;
              const isSctVisible = (sectionTop - halfWindow) < 0;
              if (isSctVisible)
                  section.classList.add('active');
              else
                  section.classList.remove('active');
          })
      }
      animatedScroll();
      window.addEventListener('scroll', animatedScroll);
  }
}


function init() {
    initTabNav();
    initAccordionList();
    smoothScrool();
    scroll();
}
init();