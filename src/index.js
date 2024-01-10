console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function images() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        const images = data.message;
        const imageContainer = document.getElementById('dog-image-container')

        images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            imageContainer.appendChild(img);
        });
    });
}
images();

function challengeTwo() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        const breeds = data.message;
        const breedContainer = document.getElementById('dog-breeds');

        for (const breed in breeds) {
            const dogBreed = document.createElement('li')
            dogBreed.textContent = breed
            breedContainer.appendChild(dogBreed)
        }
    })
    .then(() => {
        const breedFilter = document.getElementById('breed-dropdown');

        breedFilter.addEventListener('change', function() {
            const selectedLetter = breedFilter.value;
            filterBreeds(selectedLetter);
        });

        function filterBreeds(letter) {
            const dogBreeds = document.getElementById('dog-breeds');

            for(let i = 0; i < dogBreeds.length; i++) {
                const  breedName = dogBreeds[i].textContent.toLowerCase();

                if (letter && !breedName.startsWith(letter)) {
                    dogBreeds[i].style.display = 'none';
                } else {
                    dogBreeds[i].style.display = 'block';
                }
            }
        }
    });
}
challengeTwo()

function clickColorChange() {
    console.log('color function called')
    const breedChange = document.getElementById('dog-breeds')

    breedChange.addEventListener('click', function() {
        const clickedElement = event.target;
        if (clickedElement.tagName === 'LI') {
            clickedElement.style.color = 'purple';
        }
    })
}

clickColorChange()
})

