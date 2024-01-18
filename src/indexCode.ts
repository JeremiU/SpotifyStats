import { beginAnalysis } from './analysisCode';

const pickFileButton: HTMLButtonElement = document.getElementById('pickFileButton') as HTMLButtonElement;
const uploadButton: HTMLButtonElement = document.getElementById('uploadButton') as HTMLButtonElement;
const fileUpload: HTMLInputElement = document.getElementById('fileUpload') as HTMLInputElement;
const uploadText: HTMLHeadingElement = document.getElementById('upload-text') as HTMLHeadingElement;

pickFileButton.addEventListener('click', () => {
    fileUpload.click();
});

fileUpload.addEventListener('change', () => {
    if (fileUpload.files && fileUpload.files.length > 0) {
        pickFileButton.innerText = "File: " +
            fileUpload.files[0].name.substring(0,  fileUpload.files[0].name.indexOf(".json"));
    }
});

uploadButton.addEventListener('click', () => {
    if (fileUpload.files && fileUpload.files.length > 0) {
        uploadFile(fileUpload.files[0]);
    }
});

function uploadFile(file: File): void {
    console.log(`Uploading ${file.name}`);
    uploadText.textContent = "Redirecting to Analysis!"
    setTimeout(() => {
        window.location.href = 'analysis.html';
        beginAnalysis(file);
    }, 2000);
}