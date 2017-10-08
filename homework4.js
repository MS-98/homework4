const repeat = function (n, o){
		if(n <= 0){
			return "";
		}
		return o + repeat(n-1, o);
	}; // just a helper function for the rest. I didn't want to repeat the same code over and over... :)

	const triangleStars = function(lines) {
   		const number = function(n) {
       		if (n < lines) {
           		number(n + 1);
       		}
       		console.log(repeat(lines-n, ' ') + repeat(n+n-1, '*'));
   		};
   		number(0);
	};

	const pow = function(b, p){
		return p===0 ? 1 : b * pow(b, p-1);
	};

	const reverse = function(s) {
		return s.length <= 0 ? "" : s[s.length-1] + reverse(s.substring(0, s.length-1));
	};

	const checkerboard = function(lines){
		const rows = function (n){
			if (n > 1){
				rows(n-1);
			}
			console.log(repeat(lines, '*'))
		};
		rows(lines);
	};


	const sailboat = function(h){
		const sail = function(n) {
			if (n <= 0){
				return "";
			}
			return sail(n-1) + console.log(repeat(6 ,' ')+'*' + repeat(n*2 -1, '*'));
		}
		const base = function(lines) {
   			const number = function(n) {
       			if (n < lines) {
           			number(n + 1);
       			}
       			console.log(repeat(lines-n, ' ') + repeat(n*7, '*'));
   			}
   			number(2);
		}
			
		console.log(repeat(6, ' ') + '*');
		sail(2*h/3 -1);
		base(h/3);

	};
	