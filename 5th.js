// gems calculation for 3 friends and convert to diamond

function gemsToDiamond(friend1Gem,friend2Gem,friend3Gem) {
    const friend1GemTotal = friend1Gem * 21;
    const friend2GemTotal = friend2Gem * 32;
    const friend3GemTotal = friend3Gem * 43;
    const totalGems = friend1GemTotal + friend2GemTotal + friend3GemTotal;
    if (totalGems > 2000) {
        const diamond = totalGems - 2000;
        return diamond;
    }
    else {
        return totalGems;
    }
}

console.log(gemsToDiamond(1,1,1))