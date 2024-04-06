import inquirer from "inquirer";

let currencies: any = {
    CAD: 1.36,
    INR: 83.28,
    PKR: 278,
    CNY: 7.23,
    TRY: 32.01,
    KWD: 0.31,
    USD: 1
};

let userInput: any = await inquirer.prompt([
    {
        name: "from",
        message: "Please select your from currency",
        type: "list",
        choices: ["CAD", "INR", "PKR", "CNY", "TRY", "KWD", "USD"]
    },
    {
        name: "to",
        message: "Please select your to currency",
        type: "list",
        choices: ["CAD", "INR", "PKR", "CNY", "TRY", "KWD", "USD"]
    },
    {
        name: "amount",
        message: "Please enter your amount",
        type: "number"
    }
]);

let fromCurrency = userInput.from;
let toCurrency = userInput.to;
let amount = userInput.amount;

let fromRate = currencies[fromCurrency];
let toRate = currencies[toCurrency];

let basedAmount = amount / fromRate;

let convertedAmount = basedAmount * toRate;

console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
