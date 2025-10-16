console.log("I am working rn")
const menuData = {
    Himalayan: [
        { name: "Momo (steam / fried) (Chicken / veg)", desc: "Minced Chicken, Onion, Garlic, Ginger and Nepalese Spices.", price: 10 },
        { name: "Chowmein (Chicken / veg)", desc: "Noodles, Chicken, Onion, Mix veggies, Spices.", price: 12 },
        { name: "Samosa", desc: "Potato, Onion, Ginger, Garlic and Spices.", price: 2.50},
        { name: "Pizza Himalayan", desc: "Tomato sauce, Cheese, Paprika, Onion, Garlic, Chicken, Spices en Oregano", price: 13 },
    ],
    
    Pizza: [
      { 
        name: "Pizza Margarita", 
        desc: "Tomato sauce, Cheese, Oregano", 
        price: 12
      },
      { 
        name: "Pizza porsciutto", 
        desc: "Tomato sauce , Cheese, Ham, Oregano", 
        price: 14
      },
    
      { 
        name: "Pizza Romana", 
        desc: "Tomato sauce , Cheese, Ham, Mushroom, Oregano", 
        price: 14
      },
      
      { 
        name: "Pizza Hawaii", 
        desc: "Tomato sauce , Cheese, Ham, Pineapple, Oregano", 
        price: 14
      },
      
      { 
        name: "Pizza MamaMia", 
        desc: "Tomato sauce , Cheese, Pepperoni, Oregano", 
        price: 14
      },
      
      { 
        name: "Pizza Mozzarela", 
        desc: "Tomato sauce , Cheese, Olive, Fresh Mozzarella, Basil, Pesto, Oregano", 
        price: 15
      },
      
      { 
        name: "Pizza Bolognese", 
        desc: "Tomato sauce , Cheese, Bolognese, Oregano", 
        price: 14
      },
      

      { 
        name: "Pizza Tonijn", 
        desc: "Tomato sauce , Cheese, Tonijn, Onion, Oregano", 
        price: 14
      },

      { 
        name: "Pizza Shrimp", 
        desc: "Tomato sauce , Cheese, Shrimp, Garlic, Oregano", 
        price: 16
      },
      { 
        name: "Pizza 4 Fromagio", 
        desc: "Tomato sauce , Mozzarella, Gorgonzola, Parmesano, Garana Padano , Oregano", 
        price: 16
      },
      { 
        name: "Pizza 4 Stagoni", 
        desc: "Tomato sauce , Cheese, Ham, Salami, Mushroom, Onion, Oregano", 
        price: 15
      },
      { 
        name: "Pizza Kebab", 
        desc: "Tomato sauce , Cheese, Kebab(Chicken / Lamb), Garlic , Onion , Oregano", 
        price: 15
      },
      { 
        name: "Pizza Spinachi", 
        desc: "Tomato sauce , Cheese, Spinach , Garlic en Oregano", 
        price: 14
      },
      { 
        name: "Pizza Pepperoni", 
        desc: "Tomato sauce , Cheese , Pepperoni and Oregano", 
        price: 14
      },
      { 
        name: "Pizza Vegetarisch", 
        desc: "Tomato sauce , Cheese, Spinachi, Broccoli, Mushroom, Onion, Garlic and Oregano", 
        price: 14
      },
    ],
    Pastas: [
        { name: "Spaghetti Bolognese", desc: "Bolognese sauce and Cheese", price: 14 },
        { name: "Spaghetti Carbonara", desc: "Cream, bacon , fresh egg yolk and cheese", price: 16 },
        { name: "Pasta Shrimp", desc: "Shrimp, onion, garlic, paprika and pink sauce", price: 16},
        { name: "Penne Tonijn", desc: "Garlic, tomato, sauce and tuna", price: 14},
        { name: "Penne 4 Fromagio", desc: "Cream , mozzarella, gorgonzola, parmesano, garana padana", price: 16 },
        { name: "Penne Arabiata", desc: "Garlic, paprika, tomato sauce and spices", price: 14 },
        { name: "Pasta Veg", desc: "Garlic, paprika, onion, mushroom, tomato sauce and spices", price: 14},
    ],
    Salads: [
        { name: "Mix salade", desc: "tomato, lettuce, cucumber, carrot, onion and saldad dressing", price: 8 },
        { name: "Mozzarella salade", desc: "tomato, lettuce, cucumber, fresh mozzarella and basil paste", price: 9 },
        { name: "Tuna salade", desc: "tomato, lettuce, cucumber, red onion, tuna and olive oil", price: 10 },
        { name: "Chicken salade", desc: "tomato, lettuce, cucumber, carrot, onion, chicken and salad dressing", price: 10 },
        { name: "Mayonnaise", desc: "", price: 0.50 },
        { name: "Ketchup", desc: "", price: 0.50 },
        { name: "Samourai", desc: "", price: 1 },
        { name: "Andalouse", desc: "", price: 1 },
        { name: "Look", desc: "", price: 1 },
        { name: "Curry Ketchup", desc: "", price: 1 },
        { name: "Cocktail", desc: "", price: 1 },
      ],
      
    Drinks: [
        { name: "Coca Cola", desc: "", price: 2.50 },
        { name: "Coca Cola (zero)", desc: "", price: 2.50 },
        { name: "Sprite", desc: "", price: 2.50 },
        { name: "Fanta", desc: "", price: 2.50 },
        { name: "RedBull", desc: "", price: 3.50 },
        { name: "RedBull (zero)", desc: "", price: 3.50 },
        { name: "Lipton IceTea", desc: "", price: 2.50 },
        { name: "Sparkling Water", desc: "", price: 2.50 },
      ],
      
    Snacks: [
        { name: "Pita ", desc: "chicken/lamb, saldad and sauce", price: 8 },
        
        { name: "Pita Mix", desc: "chicken and lamb, saldad and sauce", price: 9 },
        { name: "Durum", desc: "chicken/lamb, saldad and sauce", price: 8 },
        { name: "Durum Mix", desc: "chicken and lamb, saldad and sauce", price: 9 },
        { name: "Kapsalon", desc: "chicken/lamb, salad, fries, cheese and sauce", price: 12 },
        { name: "Kapsalon Mix", desc: "chicken and lamb, salad, fries, cheese and sauce", price: 13 },
        { name: "Schotel", desc: "chicken/lamb, salad, fries and sauce", price: 12 },
        { name: "Schotel Mix", desc: "chicken and lamb, salad, fries and sauce", price: 13 },
        { name: "Fries (Klein)", desc: "", price: 4},
        { name: "Fries (Groot)", desc: "", price: 6 },
        { name: "Frikandel", desc: "", price: 2 },
        { name: "Mexicano", desc: "", price: 3.50 },
        { name: "Bicky Burger", desc: "", price: 5 },
        { name: "Cheese Burger", desc: "", price: 6 },
        { name: "Vegie Burger", desc: "", price: 5 },
        { name: "Ham Burger", desc: "", price: 5 },
        { name: "Mini Loempis (8stk)", desc: "", price: 5 },
        { name: "Chicken Wings (6stk)", desc: "", price: 8 },
        { name: "Chicken Nuggets (8stk)", desc: "", price: 7 },
      ],
  };
  console.log(menuData.snacks);
  

document.querySelectorAll(".options button").forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        console.log("I am getting clicked here:" + category);
        console.log(menuData[category]);
        updateCurrent(category);
        showMenu(category);

    })
})

function updateCurrent(category){
    const container = document.getElementById("menu-current");
    container.innerHTML = `
          
          <h3 class="cat"> ${category} </h3>
          
          <div class="cat-buttons">
            <button class="cat-buttons-back" onclick="location.href='#menu'"> BACK </button>
            <button class="nav-btn-menu" onclick=" window.location.href='https://deliveroo.be/nl-be/menu/Brugge/centrum/brugge-fast-food?day=today&geohash=u14736hqv6gn&time=ASAP'; "> ORDER </button>
          </div>
      
        
        
    `
    
}

function showMenu(category){
    const container = document.getElementById("menu-content");
    const items = menuData[category];
  
    container.innerHTML = items
      .map(
        (item) => `
        <div class="menu-item">
          <div class="menu-item-info">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
          </div>
          <div class="menu-item-price">€${item.price.toFixed(2)}</div>
        </div>
      `
      )
      .join("");
  }


  document.addEventListener("DOMContentLoaded", () => {
    updateCurrent("Himalayan")
    showMenu("Himalayan");
  });