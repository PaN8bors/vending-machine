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
            throw new Error('Item does not exist');
        }
        
        if (price <= account.balance) {
            account.balance -= price;
            console.log(`${item} purchased`);
        } else {
            throw new Error('Insufficient funds')
        }
    }
}

class App {
    static main() {
        const account = new BankAccount(200);
        const machine = new VendingMachine();

        machine.buy(account, 'Cheetos');
    }
}

App.main();