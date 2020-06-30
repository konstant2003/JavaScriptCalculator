function insert(num) {
    document.form.result.value+=num
}

function equals() {
    document.form.result.value=eval(document.form.result.value)
}

function clean() {
    document.form.result.value= "";
}

function back() {
    var statement = document.form.result.value;
    document.form.result.value= statement.substring(0, statement.length - 1);
}

