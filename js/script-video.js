document.querySelector('.video__media-content-start').onclick = function(){
    document.querySelector('.video__media-item').classList.toggle('video__media-item-active');
    document.querySelector('.video__media-content').classList.toggle('video__media-content-active');
}