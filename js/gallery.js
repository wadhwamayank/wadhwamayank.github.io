function createGallery(foldername, n){
    var htmlText = ''
    for (let index = 1; index <= n; index++) {
        
        htmlText += ` <div class="col-md-4">
        <a href="img/gallery/${foldername}/image (${index}).jpg" class="img-pop-up">
          <div class="single-gallery-image" style="background: url('img/gallery/${foldername}/image (${index}).jpg');"></div>
        </a>
      </div>`
    }

    return '<div class="row gallery-item">' + htmlText + '</div>'
}

document.getElementById('covidGallery').innerHTML = createGallery('covid', 18)
document.getElementById('drawingcompGallery').innerHTML = createGallery('drawingcomp', 18)
document.getElementById('educationGallery').innerHTML = createGallery('education', 18)
document.getElementById('holiGallery').innerHTML = createGallery('holi', 18)
document.getElementById('lohriGallery').innerHTML = createGallery('lohri', 18)
document.getElementById('sanitationGallery').innerHTML = createGallery('sanitation', 18)