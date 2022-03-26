export function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  header.appendChild(document.createTextNode('I am header'));


  return header;
}

export function createBody() {
  const header = document.createElement('div');
  header.setAttribute('id', 'body');

  header.appendChild(document.createTextNode('I am Body'));


  return header;
}

export function createFooter() {
  const header = document.createElement('div');
  header.setAttribute('id', 'footer');

  header.appendChild(document.createTextNode('I am footer'));


  return header;
}