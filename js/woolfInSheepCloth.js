function warnTheSheep(queue) {
    let position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
    }

warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]); //"Oi! Sheep number 5! You are about to be eaten by a wolf!"
warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]);// "Oi! Sheep number 6! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "wolf", "sheep"]); //"Oi! Sheep number 1! You are about to be eaten by a wolf!"