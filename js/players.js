function setPlayerStyle(player){
    player.style.border = '3px solid red';
    player.style.margin = '20px';
    player.style.padding = '10px';
    player.style.borderRadius = '15px';
}
const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
}

function addPlayer(){
    const playersContainer = document.getElementById("players");
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Unde deleniti iste dolor culpa repudiandae dicta possimus autem
    ipsa architecto blanditiis voluptate, cupiditate laudantium numquam
    placeat eum adipisci a beatae assumenda exercitationem itaque totam 
    incidunt labore corporis? Voluptates, hic.</p>
    `
    playersContainer.appendChild(player);
    setPlayerStyle(player);
}

document.getElementById('players').addEventListener('click', function (event){
    console.log();
    if(event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'blue'
    }
    else{
        event.target.parentNode.style.backgroundColor = 'blue';
    }
})