const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

 
const createGallery = image => { 
    const superscriptionRef = document.createElement('li');
    superscriptionRef.marker = 'none';

const imgRef = document.createElement('img');
    imgRef.src = image.url;
    imgRef.alt = image.alt;
    imgRef.style.width = '300px';   

    superscriptionRef.appendChild(imgRef)

return superscriptionRef
} 

const gallery = images.map(img => createGallery(img))

const galleryRef = document.getElementById("gallery");
galleryRef.style.display = 'flex';
console.log(galleryRef);

galleryRef.append(...gallery);



