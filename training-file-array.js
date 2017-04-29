$(document).ready(function() {
	
	function Answer_1() {
		var arr = [1,12131,123,333,'ad','sihff','23434','a','tol',99,56,89,'rose'];

		// 1---------------------------------------------
		/*function sort1() {
			var repl, i, j;
				
			for (i = 0; i < arr.length; i++) {
				for (j = 0; j < arr.length ; j++) {
					if (typeof arr[j] && typeof arr[j+1] === 'number') {	
						repl = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = repl;
					};
					if(arr[j] > arr[j+1]) {
						repl = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = repl;
					}
				} 
			}
			return arr;
		};
		var task1 = sort1();
		console.log(task1);*/
		// ---------------------------------------------
		// 2---------------------------------------------
		/*function sort2() {
			var repl2, 
				repl,
				i,
				j;

			for (i = 0; i < arr.length; i++) {
				for (j = 0; j < arr.length; j++) {
					if(arr[j] < arr[j+1]) {
						repl2 = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = repl2;
					};
					if (typeof arr[j] && typeof arr[j+1] === 'string') {	
						repl = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = repl;
					};
				} 
				
			}
			return arr;
		};
		var task2 = sort2();
		console.log(task2);*/
		// ---------------------------------------------
		// 3---------------------------------------------
		/*function sort3() {
			var i, j, repl2, repl;

			for (i = 0; i < arr.length; i++) {
				for (j = 0; j < arr.length; j++) {
					if(arr[j] > arr[j+1]) {
						repl2 = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = repl2;
					};
					if (typeof arr[j] && typeof arr[j+1] === 'number') {	
						repl = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = repl;
					};
				} 
			}
			return arr;
		};
		var task3 = sort3();
		console.log(task3);*/
		// ---------------------------------------------
		// 4---------------------------------------------
		/*function sort4() {
			for (var i = 0; i < arr.length; i++) {
				if (typeof arr[i] === 'number') {
					if (arr[i] % 3 === 0) { 
						arr[i] = Math.pow(arr[i],3);
					};	
				};
			} 
			return arr;
		};
		var task4 = sort4();
		console.log(task4);*/
		// ---------------------------------------------
		// 5---------------------------------------------
		/*function sort5() {
			for (var i = 0; i < arr.length-1; i++) {
				if (i > 0 && i % 4 === 0) {
					arr[i+1] = '**';
					arr[i+2] = '**';
				};
			} 
			return arr;
		};
		var task5 = sort5();
		console.log(task5);*/
		// ---------------------------------------------
		// 6---------------------------------------------
		/*function sort6() {
			for (var i = 0; i < arr.length; i++) {
				if (typeof arr[i] === 'number') {
					arr[i] += 5;
				};
				if (typeof arr[i] === 'string') {
					arr[i] = '';
				};
			} 
			return arr;
		};
		var task6 = sort6();
		console.log(task6);*/
		// ---------------------------------------------
		// 7---------------------------------------------
		/*function sort7() {
			var copy = [];
			for (var i = 0; i < arr.length; i++) {
				if (typeof arr[i] === 'string') {
					+function() {
						var indx = copy.length ? copy.length++ : 0;
						copy[indx] = arr[i];
					}();
				};
			}
			return copy;
		};
		var task7 = sort7();
		console.log(task7);*/
		// ---------------------------------------------

		
	// 1---------------------------------------------
		/*function compareNumeric(a, b) {
		  if (a > b) return 1;
		  if (a < b) return -1;
		};
		arr.sort(compareNumeric)
		console.log(arr);*/
	// ---------------------------------------------
	// 2---------------------------------------------
		/*function compareNum(a, b) {
			if (a > b) return 1;
		  	if (a < b) return -1;
		  	if (a == b) return 0;
		};
		arr.sort(compareNum);
		console.log(arr);*/
	// ---------------------------------------------
	// 3---------------------------------------------
		/*function compareNum(a, b) {
			if (a > b) return -1;
		  	if (a < b) return 1;
		};
		arr.sort(compareNum)
		console.log(arr);*/
	// ---------------------------------------------
	// 4---------------------------------------------
		/*arr = arr.map(function(element) { 
			return element % 3 === 0 ? Math.pow(element, 3) : element;
		});
		console.log(arr);*/
	// ---------------------------------------------
	// 5---------------------------------------------
		/*arr.reduce(function(previousValue, element, i, array) {
			(i > 0) && (i % 4 === 0) && (i < array.length-1) ? (array[i+1] = '**') && (array[i+2] = '**') : array[i] = element;
			return array;
		}, []);
		console.log(arr);*/
	// ---------------------------------------------
	// 6---------------------------------------------
		/*arr.reduce(function(previousValue,element,i,array) {
			typeof element === 'number' ? array[i] = element + 5 : typeof element === 'string' ? array[i] = '': array[i] = element;
			return array;
		},[]);
		console.log(arr);*/
	// ---------------------------------------------
	// 7---------------------------------------------
		/*var copyArr = arr.filter(function(element) {
			if (typeof element === 'string') {return element}
		})
		console.log(copyArr);*/
	// ---------------------------------------------
		

			/*Отсортировать массив
			1) сначала числа в порядке возрастания
			2) сортировка текста в алфавитном порядке потом числа
			3) сортировка чисел по убыванию, текст в алфавитном порядке
			4) числа кратные 3 возвести в третью степень
			5) если индекс массива кратен 4 следующие два елемента 
			заменяем на '**'
			6) если елемент массива число - прибавить 5, 
			если строка - заменить пустой строкой
			7) сформировать новый массив состоящий из строк массива arr
			
			Все задания выполнить двумя способами
			Сначала перебором for
			Потом за счет методов прототипа массива*/

		var Answer_1 = $('#answer_1').html('<p> ЗАДАНИЕ 1 </p>' +
											'<p> В training-file.js </p>' +
											'<p> ответы закоментированы и разделены </p>');
	};

	function Answer_2() {
		Array.prototype.duplicator = function() {
			return this.concat(this.slice())
		};
		
		var arr = [1,2,3];
		var x = arr.duplicator();
		
		var arr2 = ['a',2,11314];
		var y = ['a',2,11314].duplicator();
	
		/*console.log(x);
		console.log(y);*/

				//написать метод .duplicator, который будет делать следующее : 
				//arr.duplicator()   --- > arr = [1,2,3,1,2,3]
				//или так ['a',2,11314].duplicator() --- > ['a',2,11314,'a',2,11314]
		
		var Answer_2 = $('#answer_2').html('<p> ЗАДАНИЕ 2 </p>' + 
									'<p> Array.prototype.duplicator = function() {' +
									'<p> return this.concat(this.slice()) </p>' +
									'<p> }; </p>');
	};	

	function Answer_3 () {
		var a = [1];
		a[20] = 2;
		a['b'] = 3;
		a.push(4);
		delete a[20];
		a.slice(1,15,3,-2)
		a.splice(1,15,3,-2)
				
		/*console.log(a);
		console.log(a.length);*/

		//a.length = ?
		//чему равна длинна массива 
		//последний пример надо уметь обьяснить что происходит шаг за шагом 

		var Answer_3 = $('#answer_3').html('<p> ЗАДАНИЕ 3 </p>' +
					'<p> 1. 	- создается новый массив длинна = 1; </p>' +   
				  	'<p> 2.     - в массив "a" под индексом 20 присваивается число 2; </p>' + 
					'<p> 3.    - в массив "a" под индексом b присваивается число 3; </p>' +
					'<p> 4.  - в конец массива "a" добавляется число 4; </p>' +
					'<p> 5.  - из массива "a" удаляется значение под индексом 20; </p>' +
					'<p> 6.  - Метод slice : (начало, конец) копирует участок массива от "начало" до "конец",  ' +
								'не включая "конец". Исходный массив при этом не меняется. <br>' + 
								'Считает только первые 2 передаваемых параметра функции. Т.к указано 4 параметра в параметрах, ' +
								' остальные 2 проигнорируются. <br>' +
								'(Можно занести результат в переменную, что бы вывести её) <br>' +
								'она покажет скопированную часть массива от 1го индекса по 15тый не включая его,' +
								 'тоесть 14 индексов  = undefined.' + 
								 ' остальные 2 параметра не считает </p>' +
					'<p> 7. - Метод splice :  ([1) начиная с индекса], [2) удалить сколько-то елементов], ' + 
								'затем вставить на их место [3) заменить на elem1, ...], [4) elemN и этот] елементы)' +
						 		'(Возвращает массив из удалённых элементов.)</p>' + 
					'<p> После всех процедур </p>' + 
					'<p> a.length = 9 </p>' + 
					'<p> но, по мимо числовых индексов, там остается индекс "b" с присвоенным числом 3,' + 
					'но его не считает при проверке длинны массива через length </p>');
	};

	function Answer_4() {
		var arr = [1,12131,123,333,'Ad','sihff','23434','a','tol',99,56,89,'rose'];

		// 1---------------------------------------------
		/*function transformToObj() {
			var arrObj = {};
			for (var i = 0; i < arr.length; i++) {
				var ins = arr[i];
				arrObj[ins] = ins;
				(ins % 3 === 0) ? arrObj[ins] = ins*2 : 
				(ins.length > 2) ? arrObj[ins] = ins + '*****' : 
				(typeof arr[i] === 'string') ? arrObj[ins] = ins.toLowerCase().replace('a', 'myFavStartSymbol') : arrObj[ins] = ins;
			};
			return arrObj;
		};
		
		var arrObj = transformToObj()
		console.log(arrObj);*/
		// ---------------------------------------------
		
	
		// 2---------------------------------------------
		/*var arrObj = arr.reduce(function(previousValue, currentValue, index, array) { 
				
			(currentValue % 3 === 0) ? previousValue[currentValue] = currentValue * 2 : 
			(currentValue.length > 2) ? previousValue[currentValue] = currentValue + '*****' : 
			(typeof currentValue === 'string') ? previousValue[currentValue] = currentValue.toLowerCase().replace('a', 'myFavStartSymbol') : 
			previousValue[currentValue] = currentValue;
			
			return previousValue;
		}, {})

		console.log(arrObj);*/
		// ---------------------------------------------

		var Answer_4 = $('#answer_4').html('<p> ЗАДАНИЕ 4 </p>' +
											'<p> В training-file.js </p>' +
											'<p> ответы закоментированы и разделены </p>');
	};
	
	$('.container_Answer').val(Answer_1);
	$('.container_Answer').val(Answer_2);
	$('.container_Answer').val(Answer_3);
	$('.container_Answer').val(Answer_4);
});