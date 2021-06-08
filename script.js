function compute() {
    var principal = Number(document.getElementById("principal").value);

    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var ParentNode = document.getElementById("InterestForm")
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML = ""
    } else {
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>, in the year <mark>" + year + "</mark>";
        var submitbtn = document.getElementById("submitbtn"); // Get the <ul> element to insert a new node
        ParentNode.insertBefore(message, submitbtn)
    }


}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}