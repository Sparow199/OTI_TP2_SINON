function calc() {
    this.message = "";
}

calc.prototype.displayResult = function (resultDiv) {
    resultDiv.innerHTML = this.message;
};

calc.prototype.computeResult = function (form) {
    m1 = new money(parseInt(form.elements['v1'].value),
        form.elements['c1'].value);
    m2 = new money(parseInt(form.elements['v2'].value),
        form.elements['c2'].value);

    ops = form.elements['ops'].value;


    try {
        switch (ops) {
            case "ADD":
                res = MoneyOps.add(m1, m2);
                this.message = "Result : " + (res.toString()) + "";
                break;
            case "SUB":
                res = MoneyOps.sub(m1, m2);
                this.message = "Result : " + (res.toString()) + "";
                break;
                }

    } catch (e) {
        this.message = e.toString();

            }
};

function doComputation(form, resDiv) {
    c = new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}
