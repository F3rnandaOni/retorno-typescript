"use strict";
var enterprise;
(function (enterprise) {
    var p = new enterprise.People("Paulo Felix", "000.000.000-00");
    p.setAge(30);
    document.getElementById("name").textContent = p.getName();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("age").textContent = p.getAge().toString();
})(enterprise || (enterprise = {}));
