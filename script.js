function insert(num) {
    blurCurrentActiveElement();
    document.form.result.value+=num
}

function equals() {
    blurCurrentActiveElement();

    let expression = document.form.result.value;
    if (!expression) {
        return;
    }

    expression = expression.replace(/,/g, '.');;
    console.log(expression);

    if (isValidExpression(expression)) {
        document.form.result.value=eval(expression);
    } else {
        alert("Invalid input!");
    }
}

function clean() {
    blurCurrentActiveElement();
    document.form.result.value= "";
}

function back() {
    blurCurrentActiveElement();
    var statement = document.form.result.value;
    document.form.result.value= statement.substring(0, statement.length - 1);
}

function isValidExpression(text) {
    const regex = /^([-]?\d+(\.\d+)?)([+,\-,/,*,%]\d+(\.\d+)?)+/;
    let isValid = regex.test(text);
    return isValid;
}

function blurCurrentActiveElement() {
    document.activeElement.blur();
}
