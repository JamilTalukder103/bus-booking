function seatSelect() {
    const totalSeats = getTextElementValueById('total-seats')
    const totalSeatEmty = totalSeats - 1;
    setTextElementValueById('total-seats', totalSeatEmty)
    totalSeatBook();
    totalTicketPrice();
}

function totalSeatBook() {
    const totalSeatBooks = getTextElementValueById('total-seat-book')
    console.log(totalSeatBooks)
    const book = totalSeatBooks + 1;
    setTextElementValueById('total-seat-book', book)
}


function totalTicketPrice() {
    const ticketPrice = getTextElementValueById('total-price')
    const price = ticketPrice + 500;
    setTextElementValueById('total-price', price)
}

// function setBgColor() {
//     const element = document.getElementsByClassName('btn')
//     element.style.backgroundColor = ';
// }
document.getElementById('applay-btn').addEventListener('click', function () {
    const copundfield = document.getElementById('copun-field')
    const copundfieldValue = copundfield.value;

    if (copundfieldValue === 'NEW15') {
        const ticketPrice = getTextElementValueById('total-price')
        const couponDiscount = ticketPrice * 0.15;
        setTextElementValueById('total-price', (ticketPrice - couponDiscount))
    } else if (copundfieldValue === 'Couple 20') {
        const ticketPrice = getTextElementValueById('total-price')
        const couponDiscount = ticketPrice * 0.20;
        setTextElementValueById('total-price', (ticketPrice - couponDiscount))
    }
})