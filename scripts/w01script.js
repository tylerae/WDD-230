
function dates()
{
    const date = new Date();
    return date;
};

let returnDate = `Last edit made on ${dates()}`

document.getElementById("dating").innerHTML = returnDate;
