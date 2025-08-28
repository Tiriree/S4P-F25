document.addEventListener('DOMContentLoaded', function() {
    const syllabusLink = document.getElementById('syllabus-link');
    const symposiumLink = document.getElementById('symposium-link');
    
    const syllabusData = links.find(link => link.title === 'Syllabus');
    const symposiumData = links.find(link => link.title === 'Symposium');
    
    if (syllabusData) {
        syllabusLink.addEventListener('click', function() {
            window.open(syllabusData.url, '_blank');
        });
    }
    
    if (symposiumData) {
        symposiumLink.addEventListener('click', function() {
            window.open(symposiumData.url, '_blank');
        });
    }
});