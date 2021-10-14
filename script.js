let fountainImage = 'https://i.imgur.com/pBXnh.jpg?fb';

const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = fountainImage;
}
