import {store} from "../data/store.js"
//console.log(store)

//grab the HTML references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

//nav items
store.forEach(item => {
    console.log(item)
    const myButton = document.createElement('button')
    myButton.textContent = `${item.name}`
    myButton.addEventListener('click', () => showItem(item))
    myNav.appendChild(myButton)
})


function showItem(item) {
    // Create elements
    const itemSection = document.createElement("section");
    const itemName = document.createElement("h2");
    const itemPrice = document.createElement("h3");
    const itemPhoto = document.createElement("img");
    const itemManufacturer = document.createElement("p");
    const itemReleaseDate = document.createElement('p');
    const itemFeatures = document.createElement('ul');

    // Set content and attributes
    itemName.textContent = item.name;
    itemPhoto.src = `images/${item.photo}`;
    itemPhoto.alt = item.name;
    itemPrice.textContent = item.price;
    itemManufacturer.textContent = `MANUFACTURER: ${item.manufacturer}`;
    itemReleaseDate.textContent = `RELEASE DATE: ${item.releaseDate}`;
    item.features.forEach(feature => {
        //console.log(feature)
        let theFeature = document.createElement('li')
        theFeature.textContent = feature
        itemFeatures.appendChild(theFeature)
    })
    
    //assemble the card

    // Append elements to itemSection
    itemSection.appendChild(itemName);
    itemSection.appendChild(itemPhoto);
    itemSection.appendChild(itemPrice);
    itemSection.appendChild(itemManufacturer);
    itemSection.appendChild(itemReleaseDate);
    itemSection.appendChild(itemFeatures);

    // Append itemSection to myViewer
    myViewer.textContent = "" // Clear myViewer before appending new content
    myViewer.appendChild(itemSection);
}