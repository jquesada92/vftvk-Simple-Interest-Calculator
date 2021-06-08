function compute() {
    var principal = Number(document.getElementById("principal").value);
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus()
    } else {}
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var ParentNode = document.getElementById("InterestForm")
    if (document.contains(document.getElementById("message"))) {
        document.getElementById("message").remove();
    } else {}
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",at an interest rate of " + rate + "%.<br>You will receive an amount of " + interest + ", in the year " + year;
    var submitbtn = document.getElementById("submitbtn"); // Get the <ul> element to insert a new node
    ParentNode.insertBefore(message, submitbtn)

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}