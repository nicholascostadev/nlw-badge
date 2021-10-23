const links = {
	github: "nicholascostadev",
	youtube: "channel/UC15CVXw43pSAePs_ZMV4vyg",
	facebook: "",
	instagram: "nicholas_m_costa",
	twitter: "NicholasCosta04",
};

function changeSocialMediaLinks() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute("class");
		li.children[0].href = `https://www.${social}.com/${links[social]}`;
	}
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
	const url = `https://api.github.com/users/${links.github}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			userName.textContent = data.name;
			userBio.textContent = data.bio;
			userLink.href = data.html_url;
			userImage.src = data.avatar_url;
			userLogin.textContent = data.login;
		});

	//fetch -> Go to URL, save the informations
	//then ->
}

getGitHubProfileInfos();
