const progressbar = document.querySelector('.progressbar');
let progress = 0;
let interval = null;

function enableProgressBar (){
    progressbar.setAttribute('role', 'progressbar');
    progressbar.setAttribute('aria-valuenow', progress);
    progressbar.setAttribute('aria-live', 'polite');

}

enableProgressBar();

progressbar.addEventListener('click', (e)=>{
    progress = e.target.dataset.progress;
    simulatedProgress(progress);
});

function updateProgress(progress){
    progressbar.setAttribute("aria-valuenow", progress);
    progressbar.style.setProperty("--progess", progress + "%");
}

function simulatedProgress(){

    progressbar.setAttribute("aria-busy", "true");
    let progress = 0;
    updateProgress(progress);

    intervalTimer = setInterval(()=>{
        progress += 5;
        updateProgress(progress);
        if(progress === 100){
            progressbar.setAttribute("aria-busy", "false");
            clearInterval(intervalTimer);
        }
    }, 500);
}