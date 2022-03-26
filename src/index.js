import { createHeader, createBody, createFooter } from './area';

const content = document.querySelector('#content');

const header = createHeader();
content.appendChild(header);

const body = createBody();
content.appendChild(body);

const footer = createFooter();
content.appendChild(footer);
