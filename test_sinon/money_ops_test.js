QUnit.module("moneyOps", {
//	setup:function(assert){alert("setup moneyOps individual test");},
//	teardown:function(assert){alert("teardown moneyOps individual test");}
});

QUnit.test("test simple add", function (assert) {
        assert.expect(1);
        var m1 = sinon.createStubInstance(money);
        var m2 = sinon.createStubInstance(money);
        m1.getValue.returns(1);
        m1.getCurrency.returns("EUR");

        m2.getValue.returns(2);
        m2.getCurrency.returns("EUR");

        var m3 = new money(3, "EUR");
        sinon.stub(m3, "getValue").returns(3);
        sinon.stub(m3, "getCurrency").returns("EUR");

        assert.ok(m3.equals(MoneyOps.add(m1, m2)), "3e = 1e+2e");

        m1.getValue.restore();
        m1.getCurrency.restore();
        // m1.toString.restore();

        m2.getValue.restore();
        m2.getCurrency.restore();
        // m2.toString.restore();

        m3.getValue.restore();
        m3.getCurrency.restore();
        // m3.toString.restore();

        // assert.deepEqual(m3, MoneyOps.add(m1, m2), "3e = 1e+2e deepEqual");
    }
);


QUnit.test("test multi devise add", function (assert) {
        var m1EUR = new money(1, "EUR");
        sinon.stub(m1EUR, "getValue").returns(1);
        sinon.stub(m1EUR, "getCurrency").returns("EUR");

        var m2CHF = sinon.createStubInstance(money);
        m2CHF.getValue.returns(2);
        m2CHF.getCurrency.returns("CHF");

        assert.throws(function () {
                var m3 = MoneyOps.add(m1EUR, m2CHF)
            },
            DevisesIncompatibleExc,
            "Can't add two different currencies");
    }
);


QUnit.test("test simple sub", function (assert) {
        assert.expect(1);
        var m1 = sinon.createStubInstance(money);
        var m2 = sinon.createStubInstance(money);
        m1.getValue.returns(1);
        m1.getCurrency.returns("EUR");
        m2.getValue.returns(2);
        m2.getCurrency.returns("EUR");

        var m3 = new money(1, "EUR");
        sinon.stub(m3, "getValue").returns(1);
        sinon.stub(m3, "getCurrency").returns("EUR");

        assert.ok(m3.equals(MoneyOps.sub(m2, m1)), "1e = 2e-1e");

        m1.getValue.restore();
        m1.getCurrency.restore();
        // m1.toString.restore();

        m2.getValue.restore();
        m2.getCurrency.restore();
        // m2.toString.restore();

        m3.getValue.restore();
        m3.getCurrency.restore();
        // m3.toString.restore();

        // assert.deepEqual(m3, MoneyOps.sub(m2, m1), "1e = 2e-1e deepEqual");
    }
);


QUnit.test("test multi devise sub", function (assert) {
        var m1EUR = new money(1, "EUR");
        sinon.stub(m1EUR, "getValue").returns(1);
        sinon.stub(m1EUR, "getCurrency").returns("EUR");

        var m2CHF = sinon.createStubInstance(money);
        m2CHF.getValue.returns(2);
        m2CHF.getCurrency.returns("CHF");

        assert.throws(function () {
                var m3 = MoneyOps.sub(m1EUR, m2CHF)
            },
            DevisesIncompatibleExc,
            "Can't sub two different currencies");
    }
);


QUnit.test("test sub negative result fail", function (assert) {

        var m1EUR = new money(1, "EUR");
        sinon.stub(m1EUR, "getValue").returns(1);
        sinon.stub(m1EUR, "getCurrency").returns("EUR");

        var m2EUR = new money(2, "EUR");
        sinon.stub(m2EUR, "getValue").returns(2);
        sinon.stub(m2EUR, "getCurrency").returns("EUR");

        assert.throws(function (assert) {
            var m3 = MoneyOps.sub(m1EUR, m2EUR)
        }, NonPositiveResultExc, "Negative result");
    }
);
