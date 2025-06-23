function contactWp(buttonElement) {
    // Find the parent product-card div
    const card = buttonElement.closest('.product-card');
    
    // Get the image source
    const imgSrc = card.querySelector('img').src;
    
    // Get the h3 text
    const h3Text = card.querySelector('h3').textContent;
 
    const message = `I want to order: ${h3Text}, Image: ${imgSrc}`;

    const whatsappLink = `https://wa.me/919810714420?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

  }


function showSection(sectionId) {
  const sections = document.getElementsByClassName('catalogue');
  //hiding the sections
  Array.from(sections).forEach(section => {
    section.style.display = 'none';
  });

  //showing the needed
  document.getElementById(sectionId).style.display = 'grid';
  
}

