function avatarClicked(){
	const name = document.getElementById("username");
	const logo = document.getElementById("logo");
	if(logo.src === "https://avatars.githubusercontent.com/u/75887918?v=4") {
		logo.src = "thanksksmall.png";
		name.textContent = "Qwerty.R#9850";
	} else {
		logo.src = "https://avatars.githubusercontent.com/u/75887918?v=4";
		name.textContent = "QwertyR0";
	}
	return;
}

function usernameClicked(){
	const name = document.getElementById("username");
	navigator.clipboard.writeText(name.textContent);
	const nameContent = name.textContent;	
	name.textContent = "Copied to Clipboard!";

	setTimeout(function(){
		name.textContent = nameContent;
	}, 1000);
}