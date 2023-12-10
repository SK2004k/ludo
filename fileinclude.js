async function start_game() {
    if (no_of_player === 4) {
        const module = await import('./4pl.js');
        // Do something with the imported module
    } else if (no_of_player == 3) {
        const module = await import('./3pl.js');
        // Do something with the imported module
    } else {
        const module = await import('./2pl.js');
        // Do something with the imported module
    }
}


