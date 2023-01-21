// const { response } = require("express");

const logoutButton = new LogoutButton;
const ratesBoard = new RatesBoard;
const moneyManager = new MoneyManager;
const favoritesWidget = new FavoritesWidget;

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
                ProfileWidget.showProfile (response.data);
                moneyManager.setMessage (true, "Успех!");
            }
            else {
                moneyManager.setMessage(false, response.error);
            }
        }
        ApiConnector.addMoney(data, callback);
    }
    moneyManager.addMoneyCallback = replenishBalance;

    let converter = (data) => {
        let callback = (response) => {
            if (response.success) {
                ProfileWidget.showProfile(response.data);
                moneyManager.setMessage(true, "Успех!");
            }
            else {
                moneyManager.setMessage( false, response.error);
            }
        }
        ApiConnector.convertMoney(data, callback);
    }
    moneyManager.conversionMoneyCallback = converter;

    let moneySend = (data) => {
        let callback = (response) => {
            if (response.success) {
                ProfileWidget.showProfile(response.data);
                moneyManager.setMessage(true, "Успех!");
            }
            else {
                moneyManager.setMessage(false, response.error);
            }
        }
        ApiConnector.transferMoney(data,callback); 
    }

    moneyManager.sendMoneyCallback = moneySend;

    let favListCallback = (response) => {
            favoritesWidget.clearTable();
            favoritesWidget.fillTable(response.data);
            moneyManager.updateUsersList(response.data);
    
        }
        ApiConnector.getFavorites(favListCallback);
    

        let addUser = (data) => {
                let callback = (response) => {
                    if(response.success) {
                        favoritesWidget.clearTable();
                        favoritesWidget.fillTable(response.data);
                        moneyManager.updateUsersList(response.data);
                    }
                    else {
                        favoritesWidget.setMessage(false, response.error);
                    }
                }
                ApiConnector.addUserToFavorites(data, callback);
            }
            favoritesWidget.addUserCallback = addUser;

            let removeUser = (data) => {
                        let callback = (response) => {
                            if (response.success) {
                            favoritesWidget.clearTable();
                            favoritesWidget.fillTable(response.data);
                            moneyManager.updateUsersList(response.data);
                        }
                        else {
                            favoritesWidget.setMessage(false, response.error);
                        }
                    }
                        ApiConnector.removeUserFromFavorites(data, callback);
            }
            favoritesWidget.removeUserCallback = removeUser;
        





