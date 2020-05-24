"use strict";

var firstOperand = "";
var secondOperand = "";
var operator = "";
var result = "";

var prevSecondOperand = "";
var prevOperator = "";

var isNewOperation = true;

// refresh display on load
$(function() {
  $("#display").val("");
});

// add digits to first and second operands
$("button[id^='button']").click(function() {
  if (isNewOperation) {
    firstOperand += $(this).val();
    $("#display").val(firstOperand);
  } else {
    secondOperand += $(this).val();
    $("#display").val(secondOperand);
  }
});

// handle operator button clicks
$(".operator").click(function() {
  isNewOperation = false;

  // if there is already a second operand in place, do the caclulation
  // first
  if (secondOperand !== "") {
    calculateResult(firstOperand, secondOperand, operator);
  }

  // register the latest operator
  var currId = $(this).attr("id");
  operator = getOperatorFromId(currId);
});


// calculate the results whenever the equal button is pressed
$("#equalsButton").click(function() {
  if (operator !== "" && secondOperand !== "") {
    calculateResult(firstOperand, secondOperand, operator);
    isNewOperation = true;
  } else if (prevSecondOperand !== "" && prevOperator !== "") {
    calculateResult(firstOperand, prevSecondOperand, prevOperator);
    isNewOperation = true;
  }
});

function calculateResult(firstOp, secondOp, op) {
  if (firstOp === "") {
    firstOp = result;
  }

  var firstNo = Number(firstOp);
  var secondNo = Number(secondOp);

  if (op === "+") {
    result = firstNo + secondNo;
  } else if (op === "-") {
    result = firstNo - secondNo;
  } else if (op === "*") {
    result = firstNo * secondNo;
  } else {
    result = firstNo / secondNo;
  }

  $("#display").val(result);
  prevSecondOperand = secondOp;
  prevOperator = op;

  firstOperand = "";
  secondOperand = "";
  operator = "";
}

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

// handle clear button click
$("#clearButton").click(function() {
  $("#display").val("");
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
  isNewOperation = true;

  prevSecondOperand = "";
  prevOperator = "";
});
