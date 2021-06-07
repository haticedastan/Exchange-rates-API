class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency=firstCurrency;
        this.secondCurrency=secondCurrency;
        this.url = "http://api.exchangeratesapi.io/v1/latest?access_key=YOUkey&format=1";
        this.amount = null ; 
    }

    exchange(){
        fetch(this.url + this.firstCurrency)

        .then(response => response.json())

        .then(data => {

            const parity = data.rates[this.secondCurrency];
            const amount2=Number(this.amount);
            let total= parity*amount2;
            console.log(total);

          })

          .catch((err) => {
              console.err(err);
          });

        }

        changeAmount(amount){
            this.amount=amount;
        }
        changeFirstCurrency(newFirstCurrency){
            this.firstCurrency=newFirstCurrency
        }
        
        changeSecondCurrency(newSecondCurrency){
            this.secondCurrency=newSecondCurrency
        }

}
 