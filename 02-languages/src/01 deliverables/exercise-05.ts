console.log("************** DELIVERABLE 05 *********************");
console.log("*     SLOT MACHINE     *");

class SlotMachine {
    private coins: number;
    private reels: [boolean, boolean, boolean];

    constructor() {
        this.coins = 0;
        this.reels = [false, false, false];
    };

    private randomReel() {
        return Math.round(Math.random()) === 0 ? false : true;
    };

    public play() {
        this.coins += 1;
        for (let i = 0; i < this.reels.length; i++) {
            this.reels[i] = this.randomReel();
        }
        if ((this.reels[0] === this.reels[1]) && (this.reels[1] === this.reels[2])) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log(`Good luck next time!! Now the jackpot is ${this.coins} coins!!`);
        }
    };
};

const machine1 = new SlotMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();