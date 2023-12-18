document.addEventListener('DOMContentLoaded', function () {
	const toTopButton = document.getElementById('toTopBtn');
	window.onscroll = function () {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			toTopButton.style.display = 'block';
		} else {
			toTopButton.style.display = 'none';
		}
	};

	toTopButton.addEventListener('click', function () {
		document.body.scrollIntoView({ behavior: 'smooth' });
	});
});
