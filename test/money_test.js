QUnit.module("money", {
//	setup:function(assert){alert("setup money individual QUnit.test");},
//	teardown:function(assert){alert("teardown money individual QUnit.test");}
});

QUnit.test("test construct money", function (assert) {
        var m = new money(1, "EUR");
        assert.ok(m.v == 1, "valeur = 1");
        assert.equal(m.curr, "EUR", "currency = EUR");
    }
);

QUnit.test("test accesseurs", function (assert) {
        assert.expect(2);
        var m = new money(1, "EUR");
        assert.ok(m.getValue() == 1, "valeur = 1");
        assert.equal(m.getCurrency(), "EUR", "currency = EUR");
    }
);


QUnit.test("test equals", function (assert) {
        assert.expect(4);
        var m1EUR = new money(1, "EUR");
        var m1eur = new money(1, "eur");
        var m1CHF = new money(1, "CHF");
        var m10eur = new money(10, "eur");
        assert.ok(m1EUR.equals(m1EUR), "1 EUR égal à 1 EUR");
        assert.ok(m1EUR.equals(m1eur), "1 EUR égal à 1 eur");
        assert.ok(!m1EUR.equals(m1CHF), "1 EUR diff de 1 CHF");
        assert.ok(!m1EUR.equals(m10eur), "1 EUR diff de 10 eur");
    }
);


QUnit.test("test negative value", function (assert) {
        assert.throws(function () {
            var m1EUR = new money(-1, "EUR");
        }, NegativeValueIntroduced, "Negative money value");
    }
);


QUnit.test("test currency size", function (assert) {
        assert.throws(function () {
            var m1EUR = new money(1, "DINAR");
        }, IncorrectCurrencySizeExc, "Currency size too long");
    }
);


QUnit.test("test money factory", function (assert) {
        var factory = new MoneyFactory();
        assert.expect(4);
        var m1EUR = factory.createMoney(1, "EUR");
        var m1eur = factory.createMoney(1, "eur");
        var m1CHF = factory.createMoney(1, "CHF");
        var m10eur = factory.createMoney(10, "eur");
        assert.ok(m1EUR.equals(m1EUR), "1 EUR égal à 1 EUR");
        assert.ok(m1EUR.equals(m1eur), "1 EUR égal à 1 eur");
        assert.ok(!m1EUR.equals(m1CHF), "1 EUR diff de 1 CHF");
        assert.ok(!m1EUR.equals(m10eur), "1 EUR diff de 10 eur");
    }
);


QUnit.test("test money factory fail", function (assert) {
        var factory = new MoneyFactory();
        assert.throws(function () {
            var m1EUR = factory.createMoney(1, "DZD");
        }, UnexistingCurrencyException, "Unknown currency");
    }
);