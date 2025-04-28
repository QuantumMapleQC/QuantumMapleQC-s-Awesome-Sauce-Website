document.addEventListener('DOMContentLoaded', function () {
  console.log('JS working');

  alert('Hello!!! you are currently seeing this because this is a Java Popup about the fact that you can navigate this website on older Browsers / Hardwares that supports older browsers IE6/7! have fun :>');

  const backgrounds = [
    'images/photo-1563832528262-15e2bca87584.avif',
    'images/photo-1736109046592-41b51d919758.avif',
    'images/photo-1739045193736-8d0f198e292a.avif',
    'images/photo-1741567348603-0bef4612bea2.avif',
    'images/photo-1742387436246-b432a6bfc623.avif',
    'images/photo-1742593323531-c6c4dcd12351.avif'
  ];

  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url('${randomBackground}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
});
