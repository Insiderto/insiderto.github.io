const downloadSection = document.getElementById('download-section');
const navLinks = document.getElementById('links');
function beforePrint() {
    // hide the download button and the nav links
    downloadSection.style.display = 'none';
    navLinks.style.display = 'none';
}

function afterPrint() {
    downloadSection.style.display = 'block';
    navLinks.style.display = 'flex';
}