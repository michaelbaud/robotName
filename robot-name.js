Robot = function() {


	this.name = function() {  
    
	    var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	    
	    var letter1 =  alpha[Math.floor(Math.random()*alpha.length)];

	    var letter2 = alpha[Math.floor(Math.random()*alpha.length)];
	    var num = Math.floor(Math.random() * 900) + 100;

	    return letter1+letter2+num;
	};

	var robot1 = new Robot();
	robot1();

};



module.exports = Robot;