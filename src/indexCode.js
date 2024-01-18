import { beginAnalysis } from './analysisCode';
var pickFileButton = document.getElementById('pickFileButton');
var uploadButton = document.getElementById('uploadButton');
var fileUpload = document.getElementById('fileUpload');
var uploadText = document.getElementById('upload-text');
pickFileButton.addEventListener('click', function () {
    fileUpload.click();
});
fileUpload.addEventListener('change', function () {
    if (fileUpload.files && fileUpload.files.length > 0) {
        pickFileButton.innerText = "File: " +
            fileUpload.files[0].name.substring(0, fileUpload.files[0].name.indexOf(".json"));
    }
});
uploadButton.addEventListener('click', function () {
    if (fileUpload.files && fileUpload.files.length > 0) {
        uploadFile(fileUpload.files[0]);
    }
});
function uploadFile(file) {
    console.log("Uploading ".concat(file.name));
    uploadText.textContent = "Redirecting to Analysis!";
    setTimeout(function () {
        window.location.href = 'analysis.html';
        beginAnalysis(file);
    }, 2000);
}
//# sourceMappingURL=indexCode.js.map