const shareButtons = document.querySelectorAll(".article-preview__share-button");

for (const shareButton of shareButtons) {

  shareButton.addEventListener("click", function() {
    // Quita la clase que oculta el share section.
    const shareOptionsContainer = this.previousElementSibling;
    shareOptionsContainer.classList.toggle("article-preview__share-options-container--hidden");
    // Oculta la sección del autor.
    const authorContainer = shareOptionsContainer.previousElementSibling;
    authorContainer.classList.toggle("article-preview__author-info-container--hidden");
    // Colorea el share button y el icon.
    this.classList.toggle("article-preview__share-button--colorized");
  });
}