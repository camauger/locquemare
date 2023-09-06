function showFullSize(imagePath) {
    // Create a new image element
    var fullSizeImage = new Image();
    fullSizeImage.src = imagePath;

    // Create a new div element to hold the full size image
    var fullSizeContainer = document.createElement('div');
    fullSizeContainer.style.position = 'fixed';
    fullSizeContainer.style.top = '0';
    fullSizeContainer.style.left = '0';
    fullSizeContainer.style.width = '100%';
    fullSizeContainer.style.height = '100%';
    fullSizeContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullSizeContainer.style.display = 'flex';
    fullSizeContainer.style.justifyContent = 'center';
    fullSizeContainer.style.alignItems = 'center';

    // Add the full size image to the container
    fullSizeContainer.appendChild(fullSizeImage);

    // Add the container to the body of the document
    document.body.appendChild(fullSizeContainer);
}