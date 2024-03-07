
          function cal()
          {
              var n1=document.getElementById('first').value;
              var n2=document.getElementById('second').value;
              var operation=document.getElementById('operation').value;
          if(operation=='+')
          {
              var res=parseInt(n1)+parseInt(n2);
          }
          if(operation=='-')
          {
              var res=parseInt(n1)-parseInt(n2);
          }
          if(operation=='*')
          {
              var res=parseInt(n1)*parseInt(n2);
          }
          if(operation=='/')
          {
              var res=parseInt(n1)/parseInt(n2);
          }
          //alert(res);
          document.getElementById('res').value=res;
        }
        //add array
        const sumForm = document.getElementById("sumForm");
    sumForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const num3 = parseFloat(document.getElementById("num3").value);
      const num4 = parseFloat(document.getElementById("num4").value);
      const num5 = parseFloat(document.getElementById("num5").value);

      const arr = [num1, num2, num3, num4, num5];
      const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      const sumResult = document.getElementById("sumResult");
      sumResult.textContent = `The sum is: ${sum}`;
    });
   //parsed value
   const valueForm = document.getElementById("valueForm");
    valueForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = parseFloat(document.getElementById("value").value);

      const parsedResult = document.getElementById("parsedResult");
      if (Number.isInteger(value)) {
        parsedResult.textContent = `The parsed value is: ${value} (integer)`;
      } else {
        parsedResult.textContent = `The parsed value is: ${value} (float)`;
      }
    });
    //tax calculator
    function calculateTax(amount) {
      const taxPercentage = document.getElementById('tax-percentage').value / 100;
      const taxAmount = amount * taxPercentage;
      const totalAmount = parseFloat(amount) + parseFloat(taxAmount);

      document.getElementById('tax-amount').value = taxAmount;
      document.getElementById('total-amount').value = totalAmount;
    }
    //intrest calculator
    function calculateInterest() {
      const principle = document.getElementById('principle').value;
      const period = document.getElementById('period').value;
      const rate = document.getElementById('rate').value / 100;
      const roi = document.getElementById('roi').value;

      let periodValue = 1;
      switch (roi) {
        case 'month':
          periodValue = 12;
          break;
        case 'quarter':
          periodValue = 4;
          break;
        case 'half-year':
          periodValue = 6;
          break;
        case 'week':
          periodValue = 52 / 7;
          break;
        default:
          periodValue = 1;
      }

      const interest = principle * rate * period / periodValue;
      const totalAmount = parseFloat(principle) + parseFloat(interest);

      document.getElementById('interest').value = interest;
      document.getElementById('total-amount').value = totalAmount;
    }
    //cal vertical array
    let products = [];

function addProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = parseInt(document.getElementById("productPrice").value);
    const productQty = parseInt(document.getElementById("productQty").value);
    
    if (productName && !isNaN(productPrice) && !isNaN(productQty)) {
        products.push({ name: productName, price: productPrice, qty: productQty });
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productQty").value = "";
    } else {
        alert("Please enter valid product information.");
    }
}

function calculateVerticalSum() {
    const resultDiv = document.getElementById("result");
    const verticalSum = {
        price: 0,
        qty: 0
    };

    products.forEach(item => {
        verticalSum.price += item.price;
        verticalSum.qty += item.qty;
    });

    let resultHTML = "<h3>Vertical Sum</h3>";
    resultHTML += `<p>Price: ${verticalSum.price}</p>`;
    resultHTML += `<p>Quantity: ${verticalSum.qty}</p>`;

    resultDiv.innerHTML = resultHTML;
}
    //generate random number
    function generateRandomNumber(digits) {
    const min = Math.pow(10, digits - 1); // Minimum value for the given number of digits
    const max = Math.pow(10, digits) - 1; // Maximum value for the given number of digits
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayRandomNumber() {
    const numberOfDigits = parseInt(document.getElementById("digits").value);
    const randomNum = generateRandomNumber(numberOfDigits);
    document.getElementById("result1").innerText = "Random number with " + numberOfDigits + " digits: " + randomNum;
}
//cal compound intrest
function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const period = parseInt(document.getElementById("period").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const times = parseInt(document.getElementById("times").value);

  const amount = principal * Math.pow(1 + (rate / 100) / times, times * period);
  const interest = amount - principal;

  let resultHTML = "<h3>Compound Interest Calculation Result</h3>";
  resultHTML += "<p>Principal: $" + principal.toFixed(2) + "</p>";
  resultHTML += "<p>Period: " + period + " years</p>";
  resultHTML += "<p>Rate of Interest: " + rate + "%</p>";
  resultHTML += "<p>Number of Times Interest is Calculated: " + times + "</p>";
  resultHTML += "<p>Amount: $" + amount.toFixed(2) + "</p>";
  resultHTML += "<p>Interest: $" + interest.toFixed(2) + "</p>";

  if (!isNaN(times) && times > 0) {
      resultHTML += "<h3>Interest Breakdown by Times</h3>";
      resultHTML += "<table>";
      resultHTML += "<tr><th>Time</th><th>Interest</th></tr>";
      for (let i = 1; i <= times; i++) {
          const interestAtTime = principal * Math.pow(1 + (rate / 100) / times, i * period) - principal;
          resultHTML += "<tr><td>" + i + "</td><td>$" + interestAtTime.toFixed(2) + "</td></tr>";
      }
      resultHTML += "</table>";
  }

  document.getElementById("result2").innerHTML = resultHTML;
}