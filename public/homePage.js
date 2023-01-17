// const { response } = require("express");

const logoutButton = new LogoutButton;
const ratesBoard = new RatesBoard;
const moneyManager = new MoneyManager;

logoutButton.action = function () {
    let callback = (response) => {
        if (response.success) {
            location.reload();
        } 
    }
    ApiConnector.logout(callback);
}

let callback = (response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
}
ApiConnector.current(callback);

let  requestExchangeRates = () => {
    let callback = (response) => {
        if (response.success) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(response.data);
        }
    }

    ApiConnector.getStocks(callback);
};
requestExchangeRates();
setInterval(requestExchangeRates, 60000);


let replenishBalance = (data) => {
        let callback = (response) => {
            if (response.success) {
                ProfileWidget.showProfile(response.data);
                moneyManager.setMessage(response.success, "Успех!");
            }
            else {
                moneyManager.setMessage(response.success, respons.error, "Ошибка!");
            }
        }
        ApiConnector.addMoney(data, callback);
    }
    moneyManager.addMoneyCallback = replenishBalance;

    let converter = (data) => {
        let callback = (response) => {
            if (response.success) {
                ProfileWidget.showProfile(response.data);
                moneyManager.setMessage(response.success, "Успех!");
            }
            else {
                moneyManager.setMessage(respons.error, "Ошибка!");
            }
        }
        ApiConnector.convertMoney(data, callback);
    }
    moneyManager.conversionMoneyCallback = converter;

    let moneySend = (data) => {
        let callback = (response) => {
            if (response.success) {
                ProfileWidget.showProfile(response.data);
                moneyManager.setMessage(response.success, "Успех!");
            }
            else {
                moneyManager.setMessage(respons.error, "Ошибка!");
            }
        }
        ApiConnector.transferMoney(data,callback); 
    }

    moneyManager.sendMoneyCallback = moneySend;



