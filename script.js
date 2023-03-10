const downloadSection = document.getElementById("DownloadYoutubeSection");
const form = document.getElementById("downloadForm");
const downloadInput =  document.getElementById("downloadInput");
const setting = document.getElementById("download-setting");
const downloadBtn = document.getElementById("downloadButton");
const submitSettings = document.getElementById("submitSettings");
const cancel = document.querySelector(".fa-xmark");
var offlineNote = document.getElementById("offline-note");

const downloadSection2 = document.getElementById("DownloadYoutubeSection2");
const form2 = document.getElementById("downloadForm2");
const downloadInput2 =  document.getElementById("downloadInput2");

// var num;

var downloadFunc;
var downloadUrl;

form.addEventListener("submit", (e) => {

    e.preventDefault();

    // num = 0;

    downloadFunc = 'downloadSettingsForm()';
    downloadUrl = downloadInput.value;

    createDownloadSetting();

    // createIframeContainer();

});

form2.addEventListener("submit", (e) => {
    
    e.preventDefault();

    // num = 1;

    downloadFunc = 'downloadSettingsForm2()';
    downloadUrl = downloadInput2.value;

    createDownloadSetting();

});

function downloadSettingsForm(){

    // if(num == 0){

        createIframeContainer(downloadSection);

    // }
    // if(num == 1){
    //     createIframeContainer(downloadInput2);
    // }

    setting.style.display = "none";

}

function downloadSettingsForm2(){

    createIframeContainer(downloadSection2);

    // setting.style.display = "none";
}

function createDownloadSetting(){

    const downloadSetting = `
    
    <form id="download-setting" onsubmit="${downloadFunc};this.style.display = 'none';return false" novalidate="true">
    <div class="cancel-setting" >
        <i class="fa-solid fa-xmark" onclick="document.getElementById('download-setting').style.display = 'none' "></i>
    </div>
    <div>
        <div class="formats-setting">
            <label for="formats">Video Formats</label>
            <select title="formats" name="" id="formats">
                <!-- <option value="mp4">mp4</option> -->
                <option value="360">mp4 360p</option>
                <option value="720">mp4 720p</option>
                <option value="1080">mp4 1080p</option>
                <option value="4k">mp4 4k</option>
                <option value="8k">mp4 8k</option>
                <option value="mp3">mp3</option>
                <option value="webm_audio">webm_audio</option>
                <option value="aac">aac</option>
                <option value="flac">flac</option>
                <option value="opus">opus</option>
                <option value="ogg">ogg</option>
                <option value="wav">wav</option>
                <option value="m4a">m4a</option>
            </select>
        </div>
        <!-- <div class="quality-setting">
            <label for="quality">Video Quality</label>
            <select title="quality" name="" id="quality">
                <option value="360">360p</option>
                <option value="720">720p</option>
                <option value="1080">1080p</option>
                <option value="4k">4k</option>
                <option value="8k">8k</option>
            </select>
        </div> -->
        <button type="submit" id="submitSettings">Submit</button>
    </div>
    </form>

    `
    downloadSection.innerHTML = downloadSetting;

}

const iframeEle = document.getElementById("iframe");
const loadingEle = document.getElementById("loadingEle");

// function loadedIframe() {

     // loadingEle.style.display = "none";

     // iframeEle.style.opacity = 1;
     // iframeEle.style.pointerEvents = "auto";


// };

function createIframeContainer(container){
   
    // const iframeDiv = document.createElement("div");

    // iframeDiv.setAttribute('class', 'iframe-container');


    console.log(downloadUrl);

    const format = document.getElementById("formats");
    // const quality = document.getElementById("quality");

    var formatValue = format.value;

    // var qualityValue = quality.value;


    const iframe = `
        <div class="iframe-container">

        <i class="fa-solid fa-xmark" title="close" onclick="document.querySelector('.iframe-container').style.display = 'none'"></i>

        <div id="loadingEle"><img draggable="false" src="images/Gear-0.2s-171px.gif"></div>

        <iframe title="Download" onload="document.getElementById('loadingEle').style.display = 'none';document.getElementById('iframe').style.pointerEvents = 'auto';document.getElementById('iframe').style.display = 'block';" id="iframe" style="width:100%;height:80px;border:0;overflow:hidden;transition:0.5s;" scrolling="no" src="https://loader.to/api/button/?url=${downloadUrl}&f=${formatValue}&color=64c896&linkUrl=https://movieverseapp.netlify.app/">Iframe isn't supported in your browser</iframe>

        </div>
    `

    // iframeDiv.innerHTML = iframe;


    container.innerHTML = iframe;

    // return iframeDiv;
}






// Menu

var menu = document.getElementById("menu");
var mobileMenu = document.getElementById("mobile-menu");

menu.onclick = () =>{
    mobileMenu.classList.toggle("active");
}



// Offline and online

offlineNote.style.display = "none";

window.onoffline = function (){

    const offlineParagraph = `

        <p>You are offline</p>

    `

    offlineNote.style.display = "flex";
    offlineNote.innerHTML = offlineParagraph;
}

window.ononline = function (){
    offlineNote.style.display = "none";
}