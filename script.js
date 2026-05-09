// Array of Car Objects
const cars = [

    {
        make: "BMW",
        model: "M5",
        year: 1984,

        images: [
            "images/BMW/bmw_1.jpg",
            "images/BMW/bmw_2.jpg",
            "images/BMW/bmw_3.jpg",
            "images/BMW/bmw_4.jpg",
            "images/BMW/bmw_5.jpg"
        ]
    },

    {
        make: "Ferrari",
        model: "F40",
        year: 1987,

        images: [
            "images/Ferrari/ferrari_1.jpg",
            "images/Ferrari/ferrari_2.jpg",
            "images/Ferrari/ferrari_3.jpg",
            "images/Ferrari/ferrari_4.jpg",
            "images/Ferrari/ferrari_5.jpg"
        ]
    },

    {
        make: "Lamborghini",
        model: "Aventador",
        year: 2022,

        images: [
            "images/Lamborghini/lambo_1.jpg",
            "images/Lamborghini/lambo_2.jpg",
            "images/Lamborghini/lambo_3.jpg",
            "images/Lamborghini/lambo_4.jpg",
            "images/Lamborghini/lambo_5.jpg"
        ]
    },

    {
        make: "Mclaren",
        model: "P1",
        year: 2015,

        images: [
            "images/Mclaren/mclaren_1.jpg",
            "images/Mclaren/mclaren_2.jpg",
            "images/Mclaren/mclaren_3.jpg",
            "images/Mclaren/mclaren_4.jpg",
            "images/Mclaren/mclaren_5.jpg"
        ]
    },

    {
        make: "Nissan",
        model: "R-34",
        year: 2002,

        images: [
            "images/Nissan/nissan_1.jpg",
            "images/Nissan/nissan_2.jpg",
            "images/Nissan/nissan_3.jpg",
            "images/Nissan/nissan_4.jpg",
            "images/Nissan/nissan_5.jpg"
        ]
    },

    {
        make: "Porsche",
        model: "911-Gt3",
        year: 1999,

        images: [
            "images/Porsche/porsche_1.jpg",
            "images/Porsche/porsche_2.jpg",
            "images/Porsche/porsche_3.jpg",
            "images/Porsche/porsche_4.jpg",
            "images/Porsche/porsche_5.jpg"
        ]
    }
];

console.log(cars);

const carContainer = document.getElementById("car-container");

cars.forEach((car, index) => {

    const card = document.createElement("div");
    card.classList.add("car-card");

    let currentImageIndex = 0;

    card.innerHTML = `
    
        <div class="car-details">
            <h2>${car.make} ${car.model}</h2>
            <p><strong>Year:</strong> ${car.year}</p>
        </div>

        <div class="slider">

            <img src="${car.images[currentImageIndex]}" id="image-${index}">

            <div class="button-container">
                <button id="prev-${index}">Previous</button>
                <button id="next-${index}">Next</button>
            </div>

        </div>
    `;

    carContainer.appendChild(card);
    const image = document.getElementById(`image-${index}`);
    const nextButton = document.getElementById(`next-${index}`);
    const prevButton = document.getElementById(`prev-${index}`);

    function updateImage() {
        image.src = car.images[currentImageIndex];
    }

    nextButton.addEventListener("click", () => {

        currentImageIndex++;

        if (currentImageIndex >= car.images.length) {
            currentImageIndex = 0;
        }

        updateImage();
    });

    prevButton.addEventListener("click", () => {

        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = car.images.length - 1;
        }

        updateImage();
    });

    setInterval(() => {

        currentImageIndex++;

        if (currentImageIndex >= car.images.length) {
            currentImageIndex = 0;
        }

        updateImage();

    }, 3000);

});