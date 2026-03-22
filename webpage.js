let timerInterval;

const ip_in = document.getElementById('ip_in');
const timer = document.getElementById('timer');
const dfs_gif = document.getElementById('dfs_gif');
const bfs_gif = document.getElementById('bfs_gif');
const searchButton = document.getElementById('search-btn');
const clearButton = document.getElementById('clear-btn');

//add functinoality when search is completed - this is a mock test 

async function mockSearch(targetIP) {
    console.log('Starting search for address:', targetIP);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Search completed for IP: ${targetIP}`);
        }, 3000); // Simulate a 3-second search time
    });
}

async function startSearch() {
    const ip = ip_in.value.trim();
    if (!ip) {
        alert('Please enter an IP address.');
        return;
    }
    dfs_gif.style.display = 'block';
    bfs_gif.style.display = 'block';
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
}

function clearBoard(){
    clearInterval(timerInterval);
    ip_in.value = '';
    timer.textContent = 'Time: 0.00s';
    dfs_gif.style.display = 'none';
    bfs_gif.style.display = 'none';
    searchButton.disabled = false;
}

searchButton.addEventListener('click', startSearch);
clearButton.addEventListener('click', clearBoard);