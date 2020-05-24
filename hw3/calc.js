"use strict";

var firstOperand = "";
var secondOperand = "";
var operator = "";
var result = "";

var isNewOperation = true;

$(function() {
  $("#display").val("");
});

$("button[id^='button']").click(function() {
  if (isNewOperation) {
    firstOperand += $(this).val();
    $("#display").val(firstOperand);
  } else {
    secondOperand += $(this).val();
    $("#display").val(secondOperand);
  }
});

function getOperatorFromId(currId) {
  var operator = "";

  if (currId === "addButton") {
    operator = "+";
  } else if (currId === "subtractButton") {
    operator = "-";
  } else if (currId === "multiplyButton") {
    operator = "*";
  } else {
    operator = "/";
  }

  return operator;
}

$(".operator").click(function() {
  isNewOperation = false;

  var currId = $(this).attr("id");
  operator = getOperatorFromId(currId);
});

$("#equalsButton").click(function() {
  if (firstOperand === "") {
    firstOperand = result;
  }

  var firstNo = Number(firstOperand);
  var secondNo = Number(secondOperand);

  if (operator === "+") {
    result = firstNo + secondNo;
  } else if (operator === "-") {
    result = firstNo - secondNo;
  } else if (operator === "*") {
    result = firstNo * secondNo;
  } else {
    result = firstNo / secondNo;
  }

  $("#display").val(result);
  firstOperand = "";
  secondOperand = "";
  operator = "";

  isNewOperation = true;
});
