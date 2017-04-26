
	document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 12 + "px";
	function checboxNum(name, num) {
		var checboxs = document.getElementsByName(name);
		var a = 0;
		for (var index = 0; index < checboxs.length; index++) {
			if (checboxs[index].checked) {
				a = a + 1;
			}
		}
		if (a == num) {
			for (var index = 0; index < checboxs.length; index++) {
				if (!checboxs[index].checked) {
					checboxs[index].disabled = 'disabled';
				}
			}
		} else {
			for (var index = 0; index < checboxs.length; index++)
				checboxs[index].removeAttribute('disabled');
		}
	}
	window.onload = function() {
		$("input[type=checkbox]").click(function(){
			checboxNum("yBox1[]", 2);
			checboxNum("yBox2[]", 3);
			checboxNum("yBox3[]", 3);
			checboxNum("yBox4[]", 3);
			checboxNum("yBox5[]", 3);
			checboxNum("yBox6[]", 3);
			checboxNum("yBox7[]", 3);
			checboxNum("yBox8[]", 3);
		}
		)


		var text=document.getElementsByClassName("text")[0];
		var mytext=document.getElementsByClassName("mytext");
		


	}
