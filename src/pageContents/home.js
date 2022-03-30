function home() {
  const content = document.createElement('div');
  const header = document.createElement('h2');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const hr = document.createElement('hr');

  header.textContent = 'Burgers';

  paragraph1.textContent = `A hamburger (or burger for short) is a food consisting 
                            of fillings —usually a patty of ground meat, typically 
                            beef — placed inside a sliced bun or bread roll. `
  paragraph2.textContent = `Hamburgers are often served with cheese, lettuce, tomato,
                            onion, pickles, bacon, or chilis.`;


  content.setAttribute('class', 'bodyContent');
  content.append(header, hr, paragraph1, paragraph2);

  return content;
}

export default home();