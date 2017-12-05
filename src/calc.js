function calc() {
    this.message = "";
}

calc.prototype.displayResult = function (resultDiv) {
    resultDiv.innerHTML = this.message;
};

calc.prototype.computeResult = function (form) {

try {

    var factory = new MoneyFactory();

    var m1 = factory.createMoney(parseInt(form.elements['v1'].value),
        form.elements['c1'].value);

    var m2 = factory.createMoney(parseInt(form.elements['v2'].value),
        form.elements['c2'].value);

    var ops = form.elements['ops'].value;

        switch (ops) {

            case "ADD":
                var resAdd = MoneyOps.add(m1, m2);
                this.message = "Result : " + (resAdd.toString()) + "";
                break;
            case "SUB":
                var resSub = MoneyOps.sub(m1, m2);
                this.message = "Result : " + (resSub.toString()) + "";
                break;
            default:
                window.alert("Unsupported operation "+ops+ "");
                break;
                }

  } catch (e) {
    this.message = e.toString();
}

};

calc.prototype.doComputation = function(form, resDiv) {
    this.computeResult(form);
    this.displayResult(resDiv);
};
