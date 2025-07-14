export function getRandomBetween1And3(previous: number): number {
    let num: number;
    do {
        num = Math.floor(Math.random() * 3) + 1;
    } while (num === previous);

    previous = num;
    return num;
}
