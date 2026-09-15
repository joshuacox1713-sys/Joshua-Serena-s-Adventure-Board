
// Joshua & Serena Adventure Board
// Version 1.0

const adventures = [
{
    title: "Galena",
    category: "Weekend",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    description: "Historic town with shopping, wineries, and Root Beer Revelry."
},
{
    title: "Treehouses at Starved Rock",
    category: "Cabins",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    description: "Luxury treehouses near Starved Rock State Park."
},
{
    title: "Wildflower Farm",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80",
    description: "Sunflowers, food trucks, and seasonal events."
},
{
    title: "Tortoise Supper Club",
    category: "Food",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    description: "Prime rib, cocktails, and live jazz in Chicago."
}
];

const container = document.getElementById("cardContainer");

function loadCards() {

    container.innerHTML = "";

    adventures.forEach(place => {

        container.innerHTML += `
        <div class="card">

            <img src="${place.image}" alt="${place.title}">

            <div class="card-content">

                <h3>${place.title}</h3>

                <p>${place.description}</p>

                <div class="tags">
                    <span class="tag">${place.category}</span>
                </div>

            </div>

        </div>
        `;

    });

    document.getElementById("totalTrips").textContent = adventures.length;
    document.getElementById("bucketList").textContent = adventures.length;
}

loadCards();
