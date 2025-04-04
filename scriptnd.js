
        function generateReceiptNumber() {
            const datePart = new Date().getTime().toString();
            const randomPart = Math.floor(1000 + Math.random() * 9000).toString();
            return "REC-" + datePart + "-" + randomPart;
        }

        function processPayment() {
            const cardNumber = document.getElementById('cardNumber').value;
            const cardHolder = document.getElementById('cardHolder').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;

            if (cardNumber && cardHolder && expiryDate && cvv) {
                const receiptNumber = generateReceiptNumber();
                document.getElementById('receipt').innerHTML = 
                    `<h3>Payment Successful!</h3>
                    <p>Receipt Number: <strong>${receiptNumber}</strong></p>
                    <p>Thank you for your payment.</p>`;
                document.getElementById('receipt').style.display = 'block';
                document.getElementById('paymentForm').reset();
            } else {
                alert('Please fill in all payment details.');
            }
        }
