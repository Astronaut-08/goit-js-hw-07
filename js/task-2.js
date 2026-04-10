const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

// my code below
const listGalery = document.querySelector('.gallery');

images.forEach(item => {
  const tempLi = document.createElement('li');
  const tempImg = document.createElement('img');

  tempImg.src = item.url;
  tempImg.alt = item.alt;

  tempImg.style.width = '100%';
  tempImg.style.height = '250px';
  tempImg.style.objectFit = 'contain';

  tempLi.style.maxWidth = '350px';

  tempLi.append(tempImg);
  listGalery.append(tempLi);
});

listGalery.style.cssText = `
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;
`;