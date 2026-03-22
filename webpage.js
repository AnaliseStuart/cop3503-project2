let timerInterval;

const ip_in = document.getElementById('ip_in');
const timer = document.getElementById('timer');
const dfs_gif = document.getElementById('dfs_gif');
const bfs_gif = document.getElementById('bfs_gif');
const searchButton = document.getElementById('search-btn');
const clearButton = document.getElementById('clear-btn');
const dfs_canvas = document.getElementById('dfs_canvas');
const bfs_canvas = document.getElementById('bfs_canvas');

window.addEventListener("load", () => {
    if(dfs_gif.complete && bfs_gif.complete) {
        freezeCanvas(dfs_gif, dfs_canvas);
        freezeCanvas(bfs_gif, bfs_canvas);
    } else {
        dfs_gif.onload = () => freezeCanvas(dfs_gif, dfs_canvas);
        bfs_gif.onload = () => freezeCanvas(bfs_gif, bfs_canvas);
    }
});

function freezeCanvas(img, canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
    canvas.style.display = 'block';
    canvas.classList.add('paused');
}

function unfreezeCanvas(img, canvas) {
    canvas.style.display = 'none';
    img.style.display = 'block';
    img.classList.remove('paused');
}

//add functinoality when search is completed - this is a mock test 

async function mockSearch(targetIP) {
    console.log('Starting search for address:', targetIP);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Search completed for IP: ${targetIP}`);
        }, 9000); // Simulate a 9-second search time
    });
}

window.addEventListener("load", () => {
    dfs_gif.classList.add("paused");
    bfs_gif.classList.add("paused");
});

async function startSearch() {
    const ip = ip_in.value.trim();
    if (!ip) {
        alert('Please enter an IP address.');
        return;
    }
    unfreezeCanvas(dfs_gif, dfs_canvas);
    unfreezeCanvas(bfs_gif, bfs_canvas);
    const time_t = new Date().getTime();
    dfs_gif.src = `animations/dfs_animation.gif?v=${time_t}`;
    bfs_gif.src = `animations/bfs_animation.gif?v=${time_t}`;
    let start_time = performance.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const elapsed = (performance.now() - start_time) / 1000;
        timer.textContent = `Time: ${elapsed.toFixed(4)}seconds`;
    }, 10);
    await mockSearch(ip.value);
    clearInterval(timerInterval);
    freezeCanvas(dfs_gif, dfs_canvas);
    freezeCanvas(bfs_gif, bfs_canvas);
}

function clearBoard(){
    clearInterval(timerInterval);
    ip_in.value = '';
    timer.textContent = 'Time: 0.00s';
    freezeCanvas(dfs_gif, dfs_canvas);
    freezeCanvas(bfs_gif, bfs_canvas);
    searchButton.disabled = false;
}

searchButton.addEventListener('click', startSearch);
clearButton.addEventListener('click', clearBoard);