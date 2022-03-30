function contact() {
  const content = document.createElement('div');
  const header = document.createElement('h2');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const hr = document.createElement('hr');

  header.textContent = 'Contact Us';

  paragraph1.textContent = `Phone: 1234-567-890`;
  paragraph2.textContent = `Email:weloveburgers@eat.com`;


  content.setAttribute('class', 'bodyContent');
  content.append(header, hr, paragraph1, paragraph2);

  return content;
}

export default contact();