import { createHeader, createBody, createFooter, createArea } from './area';
import { createTabs } from './tab';

const content = document.querySelector('#content');

const header = createHeader();
const body = createBody();
const footer = createFooter();

content.appendChild(header);
content.appendChild(body);
content.appendChild(footer);

createTabs();