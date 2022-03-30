function menu() {
  const content = document.createElement('div');
  const header = document.createElement('h2');
  const hr = document.createElement('hr');
  const foodList = createFoodList();

  header.textContent = 'Menu';

  content.setAttribute('class', 'bodyContent');
  content.append(header, hr, foodList);

  return content;
}

function createFoodList() {
  const content = document.createElement('div');
  const foodDatas =
    [{ name: 'Burger3X', describe: 'Cu malorum din omittantur cum, te iusto libris.' },
    { name: 'YummyBurger', describe: 'Te seeda utamur nusquam percipitur.' },
    { name: 'Burger2Z', describe: ' In pri rationibus, at pro iudico populo.' },
    { name: 'CheeseBurger', describe: 'QId mei nisl officiis.' },
    { name: 'GoodBurger', describe: 'Ne sed posse forensibus. Eu sed ferri simul.' },
    { name: 'Burger3Y', describe: 'Quo ei quando possim elaboraret. Id mei nisl officiis.' },];
  content.setAttribute('id', 'food-list');

  foodDatas.forEach(({ name, describe }) => {
    let food = createFoodCard(name, describe);
    content.append(food);
  });

  return content;
}

function createFoodCard(name, describe) {
  const content = document.createElement('div');
  const img = document.createElement('img');
  const text = document.createElement('div');
  const title = document.createElement('h3');

  content.setAttribute('class', 'food-card');
  img.setAttribute('src', `../../assets/${name}.jpeg`);
  title.textContent = name;

  text.append(title, describe);

  content.append(img, text);

  return content;
}





export default menu();

