let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

function addExpense(){

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;

    if(title === "" || amount === ""){
        alert("Enter all fields");
        return;
    }

    expenses.push({
        title,
        amount:Number(amount)
    });

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    document.getElementById("title").value="";
    document.getElementById("amount").value="";

    displayExpenses();
}

function deleteExpense(index){

    expenses.splice(index,1);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    displayExpenses();
}

function displayExpenses(){

    const table =
        document.getElementById("expenseTable");

    table.innerHTML="";

    let total = 0;

    expenses.forEach((expense,index)=>{

        total += expense.amount;

        table.innerHTML += `
        <tr>
            <td>${expense.title}</td>
            <td>₹${expense.amount}</td>
            <td>
            <button onclick=
            "deleteExpense(${index})">
            Delete
            </button>
            </td>
        </tr>`;
    });

    document.getElementById("total")
    .innerText = total;
}