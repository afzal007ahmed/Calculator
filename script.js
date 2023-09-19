var op1 = 0 ;
var op2 = 0 ;
var operator = null ;
var after = "" ;
var display = document.getElementById("display") ;
var i = 0 ;
var flag = 0;
var buttons = document.getElementsByClassName("buttons") ;
//This loop runs when the program initially starts and this attach EvventListeners to Each Buttons .
while( i < buttons.length ){
    buttons[ i ].addEventListener('click' , function() 
	{   
		var value = this.getAttribute('data-value' ) ;
		if( value == "+" || value == "-" || value == "*" || value == "/" ){
			if( flag == 1 ){
              flag = 0 ;
			}
			op1 = display.innerText ;
			operator = value ;
			after = "" ;
			display.innerText = display.innerText + value ;
  		}
 		else if( value == "AC" ){
 			display.innerText = "" ;
 		}
 		else if( value == "per") {
 			display.innerText = display.innerText / 100 ;
 		}
 		else if( value == "con") {
 			display.innerText = (-1 ) * display.innerText ;
 		}
 		else if( value == "rem") {
 			var s = display.innerText ;
 			display.innerText = s.slice(0 , s.length - 1 ) ;
  		}
  		else if( value == "=" ) {
  			op2 = after ;
  			display.innerText = eval( op1 + operator + op2 ) ;
  			flag = 1 ;
  		}
  		else {
  			if( flag != 0 ){
  				display.innerText = "" ;
  				flag = 0 ;
            }
  			display.innerText = display.innerText + value ;
  			after = after + value ;
  			 
  		}

	}) ;
		i++;
}