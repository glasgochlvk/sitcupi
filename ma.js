let interval$1 = null; // or undefined initially

function poke() {
    console.log('Poking...');
}

const pokeDelay = 1000; // 1 second

// Example usage in context
if (!interval$1) {
    clockLast = clock.now();
    interval$1 = setInterval(poke, pokeDelay);
}
