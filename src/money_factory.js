function MoneyFactory() {

    var availableCurrencies = {
        "EUR": 1.,
        "CHF": 1 / 1.2,
        "DZDZ":1/200
    };

    this.createMoney = function (_value, _currency) {

        for (var curr in availableCurrencies) {
            if (curr === _currency.toUpperCase()) {
                return new money(_value, _currency);
            }
        }
        throw new UnexistingCurrencyException(_currency);
    }
}
