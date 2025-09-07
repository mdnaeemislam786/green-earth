fetch("https://openapi.programming-hero.com/api/plants")
.then((response) => response.json())
.then((data) => allPlantsFn(data.plants))


function allPlantsFn(allPlants){
    // console.log(allPlants)

    const cartDiv = document.getElementById("cartDiv")
    cartDiv.innerHTML=''

    allPlants.forEach((plants) => {
        console.log(plants)
        const nweCartDiv = document.createElement('div')
        nweCartDiv.classList.add('bg-[#ffffff]' ,'p-5', 'rounded-xl' ,'shadow-md')

        nweCartDiv.innerHTML= `
        <div><img class="w-full h-48 object-cover rounded-xl" src=${plants.image} alt=""></div>
        <h1 onclick="my_modal_5.showModal()" class="font-bold my-2">${plants.name}</h1>
        <p class="text-sm text-gray-500 min-h-[100px] mb-2">${plants.description}</p>
        <div class="flex justify-between items-center">
            <span class="bg-[#dcfce7] text-[#228747] px-4 py-1 rounded-full">Fruit Tree</span>
            <span class="font-bold">৳500</span>
        </div>
        <button class="bg-[#15803d] w-full p-2 mt-2 text-white rounded-full hover:bg-[#30ef7c]">Add to Cart</button>
        `
        cartDiv.append(nweCartDiv)
        // console.log(cartDiv)
    })
}