const d = document;

const $form = d.getElementById("suscribe-form"),
	$inputEmail = d.getElementById("email"),
	$errorText = d.querySelector(".error-text"),
	$section = d.querySelector("section");

d.addEventListener("submit", (e) => {
	e.preventDefault();

	let pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";

	let regex = new RegExp(pattern);

	localStorage.setItem("email", $inputEmail.value);

	localStorage.setItem("success", regex.test($form.email.value));

	if (!regex.test($form.email.value)) {
		$inputEmail.classList.add("email-error");
		$errorText.style.display = "inline";
	} else {
		$inputEmail.classList.remove("email-error");
		$errorText.style.display = "none";

		location.pathname = "/success.html";
	}
});

if (location.pathname.includes("/success.html")) {
	const $successText = d.createElement("p");
	let email = localStorage.getItem("email");

	$successText.innerHTML = `A confirmation email has been sent to
						<b>${email}</b>. Please open it and click the button inside to confirm
						your subscription.`;

	d.querySelector("h1").insertAdjacentElement("afterend", $successText);
}
