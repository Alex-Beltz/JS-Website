// variables to store classes and data attributes of DOM objects, so that they may be changed throughout JS code easier in the future
const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const popupTest = 'popup-modals-cont';
const popupTestContainer = document.querySelector(popupTest);
const pGrid = '.portfolio-grid';
const portfolioGrid = document.querySelector(pGrid);


const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const modalPopup = '[data-animation]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';
const searchInputBox = '#search'

//grabs HTML
const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLinks = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector(searchInputBox);

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
const popupModal = document.querySelectorAll(modalPopup);

const setActive = (elem, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  } else {
    elem.classList.add(active);
  }
};

//sets theme (light / dark)
const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark)
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

//checks for current them (saved to localStorage, and adds saved theme)
if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });
  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
};

//toggle theme tab
toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

//set active state (light / dark)
for (elem of switcher) {
  // console.log(elem);
  elem.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    setActive(elem, switcherBtn);
    setTheme(toggle);
  })
};

// filters and displays portfolio items that are typed into searchbar 
searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();

  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  })
});

for (const link of filterLinks) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    })
  })
};

// Modal/full site modal 'open buttons'
for (const elem of openModal) {
  elem.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
};

// Modal/full site modal 'close buttons' or 'Xs'
for (const elem of closeModal) {
  elem.addEventListener('click', function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  })
};

//Modal from Portfolio Cards
//click outside of modal to close
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove('is-visible')
  }
});

//press escape key to close modal
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-visible').classList.remove('is-visible');
  }
});

// dynamically building portfolio cards
const portfolioCardData = [
  {
    //for initial portfolio card creation
    type: 'web',
    id: 'web-1',
    img: './assets/images/portfolio-1.jpg',
    div: 'Web Development',
    h3: 'Food Website',
    //for popup eventually
    popupH3: 'Web Project 1',
    popupHeader: 'My First Awesome Website',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
  {
    //for initial portfolio card creation
    type: 'web',
    id: 'web-2',
    img: './assets/images/portfolio-3.jpg',
    div: 'Web Development',
    h3: 'E-Commerce Website',
    //for popup eventually
    popupH3: 'Web Project 2',
    popupHeader: 'My Second Awesome Website',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
  {
    //for initial portfolio card creation
    type: 'web',
    id: 'web-3',
    img: './assets/images/portfolio-4.jpg',
    div: 'Web Development',
    h3: 'Social Website',
    //for popup eventually
    popupH3: 'Web Project 3',
    popupHeader: 'My Third Awesome Website',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
  {
    //for initial portfolio card creation
    type: 'app',
    id: 'app-1',
    img: './assets/images/portfolio-2.jpg',
    div: 'App Development',
    h3: 'Messaging App',
    //for popup eventually
    popupH3: 'App Project 1',
    popupHeader: 'My First Awesome App',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
  {
    //for initial portfolio card creation
    type: 'app',
    id: 'app-2',
    img: './assets/images/portfolio-6.jpg',
    div: 'App Development',
    h3: 'Weather App',
    //for popup eventually
    popupH3: 'App Project 2',
    popupHeader: 'My Second Awesome App',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
  {
    //for initial portfolio card creation
    type: 'ui',
    id: 'ui-1',
    img: './assets/images/portfolio-5.jpg',
    div: 'UI Design',
    h3: 'Gallery Website',
    //for popup eventually
    popupH3: 'UI Design 1',
    popupHeader: 'My First Awesome UI Design',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
  {
    //for initial portfolio card creation
    type: 'ui',
    id: 'ui-2',
    img: './assets/images/portfolio-7.jpg',
    div: 'UI Design',
    h3: 'VPN Website',
    //for popup eventually
    popupH3: 'UI Design 2',
    popupHeader: 'My Second Awesome UI Design',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
  {
    //for initial portfolio card creation
    type: 'ui',
    id: 'ui-3',
    img: './assets/images/portfolio-8.jpg',
    div: 'UI Design',
    h3: 'News Website',
    //for popup eventually
    popupH3: 'UI Design 3',
    popupHeader: 'My Third Awesome UI Design',
    popupP_1: 'Lorem',
    popupP_2: 'Lorem',
  },
];

portfolioCardData.forEach(function (item) {
  const dataArr = Object.values(item);
  console.log(dataArr);
  function createCard() {
    const card = document.createElement('div');
    card.classList.add('portfolio-card');
    card.dataset.item = dataArr[0];
    card.dataset.open = dataArr[1];

    const body = document.createElement('div');
    body.classList.add('card-body');
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', dataArr[2]);
    cardImg.setAttribute('alt', 'portfolio img');
    body.appendChild(cardImg);

    const popupBox = document.createElement('div');
    popupBox.classList.add('card-popup-box');
    const popupHeader = document.createElement('div');
    popupHeader.textContent = dataArr[3];
    popupBox.appendChild(popupHeader);
    const popupText = document.createElement('h3');
    popupText.textContent = dataArr[4];
    popupBox.appendChild(popupText);

    body.appendChild(popupBox);
    card.appendChild(body);
    portfolioGrid.appendChild(card);
  // };
  // createCard(dataArr);
  console.log(dataArr);
  card.addEventListener('click', function(e) {
        const newModal = document.createElement('div');
        newModal.id = dataArr[1];
        newModal.classList.add('modal', 'is-visible');
        //add 'data-animation="slideInOutTop">'
        newModal.dataset.animation = 'slideInOutTop';

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog');

        const modalHeader = document.createElement('header');
        modalHeader.classList.add('modal-header');
        const headerText = document.createElement('h3');
        headerText.textContent = dataArr[5];
        const headerIcon = document.createElement('i');
        headerIcon.classList.add('fas', 'fa-times');
        //add data-close to 'X' icon
        headerIcon.dataset = 'data-close';
        modalHeader.appendChild(headerText);
        modalHeader.appendChild(headerIcon);
        modalDialog.appendChild(modalHeader);

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('img-wrapper');
        const img = document.createElement('img');
        img.src = dataArr[2];
        imageWrapper.appendChild(img);
        modalBody.appendChild(imageWrapper);

        const textWrapper = document.createElement('div');
        textWrapper.classList.add('text-wrapper');
        const textHeader = document.createElement('p');
        textHeader.style.fontWeight = 'bold';
        //find out how to do this better
        textHeader.textContent = dataArr[6];
        textWrapper.appendChild(textHeader);

        const p_1 = document.createElement('p');
        p_1.textContent = dataArr[7];
        textWrapper.appendChild(p_1);
        const p_2 = document.createElement('p');
        p_1.textContent = dataArr[8];
        textWrapper.appendChild(p_2);

        modalBody.appendChild(textWrapper);
        modalDialog.appendChild(modalBody);
        newModal.appendChild(modalDialog);
        document.body.appendChild(newModal);

        headerIcon.addEventListener('click', () => {
          newModal.classList.remove('is-visible');
        });
  });
};
createCard(dataArr);
});




















































