import homeContent from './pageContents/home'
import menuContent from './pageContents/menu';
import contactContent from './pageContents/contact';

export function createTabs(tabName) {
  const body = document.querySelector('#body');
  const tabsArea = document.querySelector('#tabs-area')

  const homeTab = createHomeTab();
  const menuTab = createMenuTab();
  const contactTab = createContactTab();

  let lastContent = menuContent;// init page
  body.appendChild(lastContent);

  tabsArea.appendChild(homeTab);
  tabsArea.appendChild(menuTab);
  tabsArea.appendChild(contactTab);

  homeTab.addEventListener('click', () => {
    body.replaceChild(homeContent, lastContent);
    lastContent = homeContent;
  });

  menuTab.addEventListener('click', () => {
    body.replaceChild(menuContent, lastContent);
    lastContent = menuContent;
  });

  contactTab.addEventListener('click', () => {
    body.replaceChild(contactContent, lastContent);
    lastContent = contactContent;
  });
}

function createHomeTab() {
  const homeTab = document.createElement('div');
  homeTab.appendChild(document.createTextNode("Home"));
  homeTab.setAttribute('class', 'tab');

  return homeTab;
}

function createMenuTab() {
  const menuTab = document.createElement('div');
  menuTab.appendChild(document.createTextNode("Menu"));
  menuTab.setAttribute('class', 'tab');

  return menuTab;
}

function createContactTab() {
  const contactTab = document.createElement('div');
  contactTab.appendChild(document.createTextNode("Contact"));
  contactTab.setAttribute('class', 'tab');

  return contactTab;
}