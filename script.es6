const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
    document.getElementById('download-section').style.display = "none";
    print()
});