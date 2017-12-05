QUnit.module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_computeresults_add", function (assert) {
        var fixture = "";
        fixture += ("<form id='form0'>");
        fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
        fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
        fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture += ("</form>");


        var fixtureNode = document.getElementById("qunit-fixture");
        fixtureNode.innerHTML = fixture;


        var c = new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message, "Result : 4 (EUR)");
    }
);


QUnit.test("test_computeresults_sub", function (assert) {
        var fixture = "";
        fixture += ("<div id='res'></div>");
        fixture += ("<form id='form0'>");
        fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
        fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
        fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture += ("</form>");


        var fixtureNode = document.getElementById("qunit-fixture");
        fixtureNode.innerHTML = fixture;

        var c = new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message, "Result : 0 (EUR)");
    }
);

QUnit.test("test_displayResult", function (assert) {
        var fixture = "";
        fixture += ("<div id='res'></div>");

        var fixtureNode = document.getElementById("qunit-fixture");
        fixtureNode.innerHTML = fixture;

        var c = new calc();
        c.message = "Result : 4 (EUR)";
        c.displayResult(document.getElementById('res'));
        assert.equal(document.getElementById('res').innerHTML, "Result : 4 (EUR)");
    }
);


QUnit.test("test_money_incompatible", function (assert) {
        var fixture = "";
        fixture += ("<form id='form0'>");
        fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
        fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
        fixture += ("<input type='text' id='c2' name='c2' value='CHF'/>");
        fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture += ("</form>");

        var fixtureNode = document.getElementById("qunit-fixture");
        fixtureNode.innerHTML = fixture;
        var c = new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message, "Devises incompatibles : EUR vs CHF");

    }
);


QUnit.test("test_operations_incompatible", function (assert) {
        window.alert=function(s){
          document.getElementById("res").innerHTML=s;
        }

        var fixture = "";
        fixture += ("<form id='form0'>");
        fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
        fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
        fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture += ("<input type='text' id='ops' name='ops' value='BIA'/>");
        fixture += ("</form>");
        fixture += ("<div id='res'></div>");

        var fixtureNode = document.getElementById("qunit-fixture");
        fixtureNode.innerHTML = fixture;

        var c = new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(document.getElementById("res").innerHTML, "Unsupported operation BIA");
    }
);

QUnit.test("test_money_unexiting_currency", function (assert) {

        var fixture = "";
        fixture += ("<div id='res'></div>");
        fixture += ("<form id='form0'>");
        fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
        fixture += ("<input type='text' id='c1' name='c1' value='DZD'/>");
        fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
        fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture += ("</form>");
        fixture += ("<div id='res'></div>");

        var fixtureNode = document.getElementById("qunit-fixture");
        fixtureNode.innerHTML = fixture;

        var c = new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message, "currency DZD is unknown !");
    }
);
