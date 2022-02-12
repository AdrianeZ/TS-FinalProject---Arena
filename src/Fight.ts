import {Warrior} from "../models/Warrior";

class Fight {
    private readonly firstWarrior: Warrior;
    private readonly secondWarrior: Warrior;
    private readonly fightLogs: string[] = [];

    constructor(firstWarrior: Warrior, secondWarrior: Warrior) {
        this.firstWarrior = firstWarrior;
        this.secondWarrior = secondWarrior;
    }

    fight(): { log: string[], winner: Warrior } {
        const firstWarriorStats = {
            hp: this.firstWarrior.stamina * 10,
            dp: this.firstWarrior.defense,
            warrior: this.firstWarrior
        };

        const secondWarriorStats = {
            hp: this.secondWarrior.stamina * 10,
            dp: this.secondWarrior.defense,
            warrior: this.secondWarrior
        };

        let attacker = firstWarriorStats;
        let defender = secondWarriorStats;

        do {

            const attackerStrength = attacker.warrior.power;

            this.fightLogs.push(`${attacker.warrior.name} zaatakuje ${defender.warrior.name} z siłą ${attackerStrength}.`);

            if (defender.dp + defender.warrior.agility > attackerStrength) {

                this.fightLogs.push(`${defender.warrior.name} broni się przed ${attacker.warrior.name}.`)
                defender.dp -= attackerStrength;
                if (defender.dp < 0) {
                    this.fightLogs.push(`${attacker.warrior.name} przełamał obronę ${defender.warrior.name} zadając mu ${-defender.dp} obrażeń.`);
                    defender.hp += defender.dp;
                }
            } else {
                this.fightLogs.push(`${attacker.warrior.name} zadał ${attackerStrength} obrażeń ${defender.warrior.name}.`);
                defender.hp -= attackerStrength;
            }

            const temp = attacker;
            attacker = defender;
            defender = temp;

        } while (attacker.hp > 0)

        const winner = defender.warrior;
        this.fightLogs.push(`${winner.name} zwyciężył!`)

        return {
            winner,
            log: this.fightLogs
        };
    }

}


export {Fight};