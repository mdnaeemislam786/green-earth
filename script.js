fetch("https://openapi.programming-hero.com/api/plants")
.then((response) => response.json())
.then((data) => allPlantsFn(data.plants))


function allPlantsFn(allPlants){
    // console.log(allPlants)

    const cartDiv = document.getElementById("cartDiv")
    cartDiv.innerHTML=''

    allPlants.forEach((plants) => {
        // console.log(plants)
        const nweCartDiv = document.createElement('div')
        nweCartDiv.classList.add('bg-[#ffffff]' ,'p-5', 'rounded-xl' ,'shadow-md')

        nweCartDiv.innerHTML= `
        <div><img class="w-full h-48 object-cover rounded-xl" src=${plants.image} alt=""></div>
        <h1 onclick="ShowModal(${plants.id})" class="font-bold my-2">${plants.name}</h1>
        <p class="text-sm text-gray-500 min-h-[100px] mb-2">${plants.description}</p>
        <div class="flex justify-between items-center">
            <span class="bg-[#dcfce7] text-[#228747] px-4 py-1 rounded-full">${plants.category}</span>
            <span class="font-bold">৳${plants.price}</span>
        </div>
        <button class="bg-[#15803d] w-full p-2 mt-2 text-white rounded-full hover:bg-[#30ef7c]">Add to Cart</button>
        `
        cartDiv.append(nweCartDiv)
        // console.log(cartDiv)
    })
}

fetch("https://openapi.programming-hero.com/api/categories")
.then((response) => response.json())
.then((data) => categoryFn(data.categories))


function categoryFn(category){
    // console.log(category)

    const categorieDiv = document.getElementById("categorieDiv")
    categorieDiv.innerHTML=''

    category.forEach((category) => {
        // console.log(category)
        const nweCatLi = document.createElement('div')

        nweCatLi.innerHTML= `
            <button class="hover:text-white activeID  hover:bg-[#15803d] w-full font-semibold sm:text-left p-1 rounded-md" id="Categories_${category.id}" onclick="callCategory(${category.id})" href="">${category.category_name}</button><i id="CatArrwD_${category.id}" class="categoriesArrowDown fa-solid fa-angle-down"></i>
        `
        categorieDiv.append(nweCatLi)
        // console.log(category.id)
    })
}






function callCategory(id){
    // alert(typeof(id))
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => categorieFN(data.plants))

    function categorieFN(categories){
        // console.log(categories)
        
            const cartDiv = document.getElementById("cartDiv")
            cartDiv.innerHTML=''

            categories.forEach((plant) => {
                // console.log(plant)
                const nweCartDiv = document.createElement('div')
                nweCartDiv.classList.add('bg-[#ffffff]' ,'p-5', 'rounded-xl' ,'shadow-md')

                nweCartDiv.innerHTML= `
                <div><img class="w-full h-48 object-cover rounded-xl" src=${plant.image} alt=""></div>
                <h1 id="nameID_${plant.id}" onclick="ShowModal(${plant.id})" class="font-bold my-2">${plant.name}</h1>
                <p class="text-sm text-gray-500 min-h-[100px] mb-2">${plant.description}</p>
                <div class="flex justify-between items-center">
                    <span class="bg-[#dcfce7] text-[#228747] px-4 py-1 rounded-full">${plant.category}</span>
                    <span class="font-bold">৳${plant.price}</span>
                </div>
                <button  class="bg-[#15803d] w-full p-2 mt-2 text-white rounded-full hover:bg-[#30ef7c]">Add to Cart</button>
                `
                cartDiv.append(nweCartDiv)

                // console.log(cartDiv)
            })
            
        }
        const allCBtn = document.querySelectorAll(".activeID");
        allCBtn.forEach((btn) => {
            btn.classList.remove("active");
            document.getElementById(`Categories_${id}`).classList.add('active')
        })
} 

// onclick="callCategory(${category.id})"
// onclick="showModal(${plant.id})"
// onclick="my_modal_5.showModal()"

function ShowModal(id){
    // alert(id)
    
    const url = "https://openapi.programming-hero.com/api/plant/" + id
    fetch(url)
    .then((rec) => rec.json())
    .then((deta) => modalFn(deta.plants))
    
    const modaldiv = document.getElementById("modalDiv")
    modaldiv.innerHTML=''
    function modalFn(info){
        // console.log(info)
        const newDiv =document.createElement("div")
        newDiv.innerHTML =`
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <h1 class="text-3xl font-bold">${info.name}</h1>
        <img class="h-full w-full rounded-2xl" src=${info.image} alt="">
        <h2 class="font-bold text-xl my-3">Categories: <span class="font-normal">${info.category}</span></h2>
        <h2 class="font-bold text-xl my-3">Price: <Span class="font-normal"v>${info.price}$</Span></h2>
        <p class="font-bold text-xl my-3">Description: <span class="font-normal">${info.description}</span></p>
        
        <div class="modal-action">
        <form method="dialog">
        <button class="btn">Close</button>
        </form>
        </div>
        </div>
        </dialog>
        
        `
        modaldiv.appendChild(newDiv)
        // console.log(modaldiv)
        document.getElementById('my_modal_5').showModal()
    }
    
//   console.log(hi)
}