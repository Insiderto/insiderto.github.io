const downloadSection = document.getElementById('download-section');
const navLinks = document.getElementById('links');
const scrollToTop = document.getElementById('scroll-top-button');
function beforePrint() {
    // hide the download button and the nav links
    downloadSection.style.display = 'none';
    navLinks.style.display = 'none';
}

function afterPrint() {
    downloadSection.style.display = 'block';
    navLinks.style.display = 'flex';
}

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';
    }
}