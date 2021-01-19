	const li = document.querySelectorAll('li')
	const input = document.querySelector('#input')

	const clearDisplay = () => {
		li.forEach( li => {
			li.style.display = 'none'
		})
	}

	const planFilter = e => {
		//const strings = e.target.value.split(' ')
		const searchString = e.target.value.toLowerCase()
		
		li.forEach(li => {
			let spanDescription = li.children[0].children[3].innerText.toLowerCase()

			if (spanDescription.includes(searchString)) li.style.display = 'grid'
			else li.style.display = 'none'
		})

		if (searchString === '') clearDisplay()

	}

	input.addEventListener('input', planFilter)

	clearDisplay()
	/*
	const li = document.querySelectorAll('li .description')

	if (li[0].innerText !== '') li[0].parentElement.style.display = 'none'





	const li = document.querySelectorAll('li')
	li.forEach( li =>{
		if (!li.children[0].children[3].innerText.includes('Amil')) li.style.display = 'none'
	})
	*/

	//Styles
	document.querySelector("body").style.backgroundColor = '#d31313'