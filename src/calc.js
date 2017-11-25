function calc() {
    this.message = "";
}

calc.prototype.displayResult = function (resultDiv) {
    resultDiv.innerHTML = this.message;
};

calc.prototype.computeResult = function (form) {
    var m1 = new money(parseInt(form.elements['v1'].value),
        form.elements['c1'].value);
    var m2 = new money(parseInt(form.elements['v2'].value),
        form.elements['c2'].value);

    var ops = form.elements['ops'].value;


    try {
        switch (ops) {

            case "ADD":
                var resAdd = MoneyOps.add(m1, m2);
                this.message = "Result : " + (resAdd.toString()) + "";
                break;
            case "SUB":
                var resSub = MoneyOps.sub(m1, m2);
                this.message = "Result : " + (resSub.toString()) + "";
                break;
                }

    } catch (e) {
        this.message = e.toString();

            }
};

function doComputation(form, resDiv) {
    var c = new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}
