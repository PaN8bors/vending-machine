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
            account.balance -= price;
            console.log(`${item} purchased`);
        } else {
            throw new FundsError('Insufficient funds');
        }
    }
    getPrice() {
        return this.items.get(item)
    }
}

class App {
    static main() {
        const account = new BankAccount(200);
        const machine = new VendingMachine();

        try {
        machine.buy(account, 'Cheetos');
        } catch (err) {
            if (err instanceof ItemNotFound) {
                console.log('Item does not exist');
            }
            if (err instanceof FundsError) {
                console.log('Insufficient funds in your account');
            }
        }
    }
}

App.main();