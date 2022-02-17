import input from 'input';

class ItemNotFound extends Error {}

class FundsError extends Error {}

class BankAccount {
    constructor(starting) {
        this.balance = starting;
    }
}
class VendingMachine {
    constructor() {
        this.items = new Map();
        this.items.set('Cheetos', 1.25);
        this.items.set('Pretzels', 1.25);
        this.items.set('Cookies', 1.75);
        this.items.set('Sprees', 1.75);
    }
    buy(account, item) {
        const price = this.items.get(item);
        if (price == undefined) {
            throw new ItemNotFound('Item does not exist');
        }
        
        if (price <= account.balance) {
            const remainder = account.balance -= price;
            console.log(`${item} purchased.  You have ${remainder} left.`);
        } else {
            throw new FundsError('Insufficient funds');
        }
    }
    getPrice() {
        return this.items.get(item)
    }
}

class App {
    static async main() {
        const urBal = await input.text('What is your account balance?')
        const urChoice = await input.text('What would you like?')
        const account = new BankAccount(Number(urBal));
        const machine = new VendingMachine();

        try {
            machine.buy(account, urChoice);
        } catch (err) {
            if (err instanceof ItemNotFound) {
                console.log(`${urChoice} does not exist`);
            }
            if (err instanceof FundsError) {
                console.log('Insufficient funds in your account');
            }
        }
    }
}

App.main();


//const price = machine.getPrice('Cheetos');