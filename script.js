function toggleSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === sectionId) {
            sections[i].style.display = 'block'; // Exibe a seção clicada
        } else {
            sections[i].style.display = 'none'; // Oculta as outras seções
        }
    }
}