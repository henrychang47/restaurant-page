export function createTabs(tabName) {
  const header = document.querySelector('#header');
  const body = document.querySelector('#body');
  const tabsArea = document.querySelector('#tabs-area')

  const { homeTab, homeContent } = createHome();
  const { menuTab, menuContent } = createMenu();
  const { contactTab, contactContent } = createContact();

  tabsArea.appendChild(homeTab);
  homeTab.addEventListener('click', () => {
    body.innerHTML = homeContent;
  });

  tabsArea.appendChild(menuTab);
  menuTab.addEventListener('click', () => {
    body.innerHTML = menuContent;
  });

  tabsArea.appendChild(contactTab);
  contactTab.addEventListener('click', () => {
    body.innerHTML = contactContent;
  });
}

function createHome() {
  const homeTab = document.createElement('div');
  homeTab.appendChild(document.createTextNode("Home"));
  homeTab.setAttribute('class', 'tab');

  const homeContent = 'Home';

  return { homeTab, homeContent };
}

function createMenu() {
  const menuTab = document.createElement('div');
  menuTab.appendChild(document.createTextNode("menu"));
  menuTab.setAttribute('class', 'tab');

  const menuContent = 'menu';

  return { menuTab, menuContent };
}

function createContact() {
  const contactTab = document.createElement('div');
  contactTab.appendChild(document.createTextNode("contact"));
  contactTab.setAttribute('class', 'tab');

  const contactContent = 'contact';

  return { contactTab, contactContent };
}