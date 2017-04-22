//公益计算器
$('.main-box input').blur(function(){
	var saVal=$('.salary-01').val();
	var doVal=$('.donation-01').val();
	if( saVal != '' || doVal != '' ){
		
		//利用click事件让复选框失去焦点，触发事件
		$('input.cbox:checkbox').click(function () { 
		   this.blur(); 
		}); 
		$('input.cbox01:checkbox').click(function () { 
		   this.blur(); 
		}); 
		
		//是否劳务人员、是否缴公积金
		if( $('.main-box input.cbox').is(':checked') ){
			$('.main-box input.cbox01').prop("disabled","disabled");
		}else{
			$('.main-box input.cbox01').prop("disabled","");
		}
		if( $('.main-box input.cbox01').is(':checked') ){
			$('.main-box input.cbox').prop("disabled","disabled");
		}else{
			$('.main-box input.cbox').prop("disabled","");
		}
		
		//不需缴公积金
		if( $('.main-box input.cbox').is(':checked') ){
			$('.num-bf-01').text(0);
			$('.num-af-01').text(0);
			
			
			//扣保险费
			if( saVal > 15654 ){
				$('.num-bf-02').text(1582.58);
				$('.num-af-02').text(1582.58);
			} else if( saVal > 0 && saVal < 15654 || saVal == 15654 ) {
				var saVal01=saVal*0.1 + 18.08;
				$('.num-bf-02').text(saVal01.toFixed(2));
				$('.num-af-02').text(saVal01.toFixed(2));	
			}
			
			//税前金额
			var numb02=$('.num-bf-02').text();
			var numa02=$('.num-af-02').text();
			$('.num-bf-03').text((saVal - numb02).toFixed(2));
			$('.num-af-03').text((saVal - doVal - numa02).toFixed(2));
			
			//税金基数
			var numb03=$('.num-bf-03').text();
			var numa03=$('.num-af-03').text();
			if( (numb03-4800) > 0 ){
				$('.num-bf-04').text( (numb03-4800).toFixed(2) );
			}else{
				$('.num-bf-04').text(0);	
			}
			if( (numa03-4800) > 0 ){
				$('.num-af-04').text( (numa03-4800).toFixed(2) );
			}else{
				$('.num-af-04').text(0);	
			}
			
			//应扣缴所得税
			var numb04=$('.num-bf-04').text();
			var numa04=$('.num-af-04').text();
			if( numb04 > 0 && numb04 < 1500 || numb04 == 1500 ){
				$('.num-bf-05').text( (numb04*0.03).toFixed(2) );
			} else if( numb04 > 1500 && numb04 < 4500 || numb04 == 4500 ){
				$('.num-bf-05').text( (numb04*0.1-105).toFixed(2) );
			} else if( numb04 > 4500 && numb04 < 9000 || numb04 == 9000 ){
				$('.num-bf-05').text( (numb04*0.2-555).toFixed(2) );
			} else if( numb04 > 9000 && numb04 < 35000 || numb04 == 35000 ){
				$('.num-bf-05').text( (numb04*0.25-1005).toFixed(2) );
			} else if( numb04 > 35000 && numb04 < 55000 || numb04 == 55000 ){
				$('.num-bf-05').text( (numb04*0.3-2755).toFixed(2) );
			} else if( numb04 > 55000 && numb04 < 80000 || numb04 == 80000 ){
				$('.num-bf-05').text( (numb04*0.35-5505).toFixed(2) );
			} else if( numb04 > 80000 ){
				$('.num-bf-05').text( (numb04*0.45-13505).toFixed(2) );
			}
			
			if( numa04 > 0 && numa04 < 1500 || numa04 == 1500 ){
				$('.num-af-05').text( (numa04*0.03).toFixed(2) );
			} else if( numa04 > 1500 && numa04 < 4500 || numa04 == 4500 ){
				$('.num-af-05').text( (numa04*0.1-105).toFixed(2) );
			} else if( numa04 > 4500 && numa04 < 9000 || numa04 == 9000 ){
				$('.num-af-05').text( (numa04*0.2-555).toFixed(2) );
			} else if( numa04 > 9000 && numa04 < 35000 || numa04 == 35000 ){
				$('.num-af-05').text( (numa04*0.25-1005).toFixed(2) );
			} else if( numa04 > 35000 && numa04 < 55000 || numa04 == 55000 ){
				$('.num-af-05').text( (numa04*0.3-2755).toFixed(2) );
			} else if( numa04 > 55000 && numa04 < 80000 || numa04 == 80000 ){
				$('.num-af-05').text( (numa04*0.35-5505).toFixed(2) );
			} else if( numa04 > 80000 ){
				$('.num-af-05').text( (numa04*0.45-13505).toFixed(2) );
			}else{
				$('.num-af-05').text(0);
			}
			
			//实发合计
			var numb05=$('.num-bf-05').text();
			var numa05=$('.num-af-05').text();
			$('.num-bf-06').text( (saVal - numb02 - numb05).toFixed(2) );
			$('.num-af-06').text( (saVal - numa02 - numa05).toFixed(2) );
			
			//个税节约额
			var numb06=$('.num-bf-06').text();
			var numa06=$('.num-af-06').text();
			$('.num-bf-07').text( (numb06 - numa06).toFixed(2) );
			
			
		} else if ( $('.main-box input.cbox01').is(':checked') ){
			$('.num-bf-01').text(0);
			$('.num-af-01').text(0);
			$('.num-bf-02').text(0);
			$('.num-af-02').text(0);
			
			//税前金额
			var numb02=$('.num-bf-02').text();
			var numa02=$('.num-af-02').text();
			$('.num-bf-03').text(saVal);
			$('.num-af-03').text((saVal - doVal).toFixed(2));
			
			//税金基数
			var numb03=$('.num-bf-03').text();
			var numa03=$('.num-af-03').text();
			if( (numb03-4000) > 0 ){
				$('.num-bf-04').text( (numb03*0.8).toFixed(2) );
			}else{
				$('.num-bf-04').text( (numb03 - 800).toFixed(2) );
			}
			if( (numa03-4000) > 0 ){
				$('.num-af-04').text( (numa03*0.8).toFixed(2) );
			}else{
				$('.num-af-04').text( (numa03 - 800).toFixed(2) );
			}
			
			//应扣缴所得税
			var numb04=$('.num-bf-04').text();
			var numa04=$('.num-af-04').text();
			if( numb04 < 20000 ){
				$('.num-bf-05').text( (numb04*0.2).toFixed(2) );
			} else if( numb04 < 50000 && numb04 > 20000 || numb04 == 20000 ){
				$('.num-bf-05').text( (numb04*0.3-2000).toFixed(2) );
			} else if( numb04 > 50000 || numb04 == 50000 ){
				$('.num-bf-05').text( (numb04*0.4-7000).toFixed(2) );
			}
			
			if( numb04 < 20000 ){
				$('.num-af-05').text( (numa04*0.2).toFixed(2) );
			} else if( numa04 < 50000 && numa04 > 20000 || numa04 == 20000 ){
				$('.num-af-05').text( (numa04*0.3-2000).toFixed(2) );
			} else if( numa04 > 50000 || numa04 == 50000 ){
				$('.num-af-05').text( (numa04*0.4-7000).toFixed(2) );
			}
			
			//实发合计
			var numb05=$('.num-bf-05').text();
			var numa05=$('.num-af-05').text();
			$('.num-bf-06').text( (saVal - numb02 - numb05).toFixed(2) );
			$('.num-af-06').text( (saVal - numa02 - numa05).toFixed(2) );
			
			//个税节约额
			var numb06=$('.num-bf-06').text();
			var numa06=$('.num-af-06').text();
			$('.num-bf-07').text( (numb06 - numa06).toFixed(2) );
			
			
		} else {
		
			//扣除住房公积金
			if( saVal > 26091 ){
				$('.num-bf-01').text(1304.55);
				$('.num-af-01').text(1304.55);
			} else if( saVal > 0 && saVal < 26091 || saVal == 26091 ) {
				var saVal01=saVal*0.05;
				$('.num-bf-01').text(saVal01.toFixed(2));
				$('.num-af-01').text(saVal01.toFixed(2));	
			}
			
			//扣保险费
			if( saVal > 15654 ){
				$('.num-bf-02').text(1582.58);
				$('.num-af-02').text(1582.58);
			} else if( saVal > 0 && saVal < 15654 || saVal == 15654 ) {
				var saVal01=saVal*0.1 + 18.08;
				$('.num-bf-02').text(saVal01.toFixed(2));
				$('.num-af-02').text(saVal01.toFixed(2));	
			}
			
			//税前金额
			var numb01=$('.num-bf-01').text();
			var numa01=$('.num-af-01').text();
			var numb02=$('.num-bf-02').text();
			var numa02=$('.num-af-02').text();
			$('.num-bf-03').text((saVal - numb01 - numb02).toFixed(2));
			$('.num-af-03').text((saVal - doVal - numa01 - numa02).toFixed(2));
			
			//税金基数
			var numb03=$('.num-bf-03').text();
			var numa03=$('.num-af-03').text();
			if( (numb03-3500) > 0 ){
				$('.num-bf-04').text( (numb03-3500).toFixed(2) );
			}else{
				$('.num-bf-04').text(0);
			}
			if( (numa03-3500) > 0 ){
				$('.num-af-04').text( (numa03-3500).toFixed(2) );
			}else{
				$('.num-af-04').text(0);
			}
			
			//应扣缴所得税
			var numb04=$('.num-bf-04').text();
			var numa04=$('.num-af-04').text();
			if( numb04 > 0 && numb04 < 1500 || numb04 == 1500 ){
				$('.num-bf-05').text( (numb04*0.03).toFixed(2) );
			} else if( numb04 > 1500 && numb04 < 4500 || numb04 == 4500 ){
				$('.num-bf-05').text( (numb04*0.1-105).toFixed(2) );
			} else if( numb04 > 4500 && numb04 < 9000 || numb04 == 9000 ){
				$('.num-bf-05').text( (numb04*0.2-555).toFixed(2) );
			} else if( numb04 > 9000 && numb04 < 35000 || numb04 == 35000 ){
				$('.num-bf-05').text( (numb04*0.25-1005).toFixed(2) );
			} else if( numb04 > 35000 && numb04 < 55000 || numb04 == 55000 ){
				$('.num-bf-05').text( (numb04*0.3-2755).toFixed(2) );
			} else if( numb04 > 55000 && numb04 < 80000 || numb04 == 80000 ){
				$('.num-bf-05').text( (numb04*0.35-5505).toFixed(2) );
			} else if( numb04 > 80000 ){
				$('.num-bf-05').text( (numb04*0.45-13505).toFixed(2) );
			}
			
			if( numa04 > 0 && numa04 < 1500 || numa04 == 1500 ){
				$('.num-af-05').text( (numa04*0.03).toFixed(2) );
			} else if( numa04 > 1500 && numa04 < 4500 || numa04 == 4500 ){
				$('.num-af-05').text( (numa04*0.1-105).toFixed(2) );
			} else if( numa04 > 4500 && numa04 < 9000 || numa04 == 9000 ){
				$('.num-af-05').text( (numa04*0.2-555).toFixed(2) );
			} else if( numa04 > 9000 && numa04 < 35000 || numa04 == 35000 ){
				$('.num-af-05').text( (numa04*0.25-1005).toFixed(2) );
			} else if( numa04 > 35000 && numa04 < 55000 || numa04 == 55000 ){
				$('.num-af-05').text( (numa04*0.3-2755).toFixed(2) );
			} else if( numa04 > 55000 && numa04 < 80000 || numa04 == 80000 ){
				$('.num-af-05').text( (numa04*0.35-5505).toFixed(2) );
			} else if( numa04 > 80000 ){
				$('.num-af-05').text( (numa04*0.45-13505).toFixed(2) );
			} else {
				$('.num-af-05').text(0);
			}
			
			//实发合计
			var numb05=$('.num-bf-05').text();
			var numa05=$('.num-af-05').text();
			$('.num-bf-06').text( (saVal - numb01 - numb02 - numb05).toFixed(2) );
			$('.num-af-06').text( (saVal - numa01 - numa02 - numa05).toFixed(2) );
			
			//个税节约额
			var numb06=$('.num-bf-06').text();
			var numa06=$('.num-af-06').text();
			$('.num-bf-07').text( (numb06 - numa06).toFixed(2) );
		
		}
		
	}
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).triggerHandler("blur");
});
