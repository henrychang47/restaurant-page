export function createHeader() {
  const header = document.createElement('div');
  const tabsArea = document.createElement('div');

  header.setAttribute('id', 'header');
  header.appendChild(document.createTextNode('BURGERS'));

  tabsArea.setAttribute('id', 'tabs-area');
  header.appendChild(tabsArea);

  return header;
}

export function createBody() {
  const div = document.createElement('div');
  div.setAttribute('id', 'body');

  return div;
}

export function createFooter() {
  const div = document.createElement('div');
  const photoLink = document.createElement('a');
  const unsplashLink = document.createElement('a');

  div.setAttribute('id', 'footer');

  photoLink.textContent = '@amir_v_ali';
  photoLink.setAttribute('href', 'https://unsplash.com/@amir_v_ali');

  unsplashLink.textContent = 'Unsplash.';
  unsplashLink.setAttribute('href', 'https://unsplash.com');

  div.append("Photo by", photoLink, "on", unsplashLink);

  return div;
}