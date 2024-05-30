//your JS code here. If required.
function validateInput() {
	event.preventDefault();
	let name = document.getElementById("name").value;
	let age = parseInt(document.getElementById("age").value);
	if(name == "" || age =="")
	{
		document.getElementById("p_id").style.display="block";
	}else {
		document.getElementById("p_id").style.display="none";
		console.log("name: "+name+" "+"age: "+age);
		console.log(typeof age);
		new Promise((resolve,reject) => {
			setTimeout(() => {
				if(age > 18)
				{
					resolve();
				}else {
					reject();
				}
			},4000);
		})
		.then(() => {
			alert("Welcome, "+name+". You can vote.");
		})
		.catch(() => {
			alert("Oh sorry "+name+". You aren't old enough.")
		});
	}
}


document.getElementById("myForm").addEventListener("submit", validateInput);