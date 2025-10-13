console.log("I am working rn")
const menuData = {
    Himalayan: [
        { name: "Momo (steam / fried) (Chicken / veg)", desc: "Minced Chicken, Onion, Garlic, Ginger en Momo Kruiden.", price: 10 },
        { name: "Chowmein (Chicken / veg)", desc: "Noodle, Chicken, Ui, Mix veggies, kruiden.", price: 10 },
        { name: "Samosa", desc: "Potato, Onion, Ginger, Garlic en kruiden.", price: 2.50},
        { name: "Pizza Himalayan", desc: "Tomato saus , Cheese, Paprika, Onion, Garlic,Chicken, Spices en Origano", price: 13 },
    ],
    
    Pizza: [
      { 
        name: "Pizza Margarita", 
        desc: "Tomaat saus , Kaas, Origano", 
        price: 10 
      },
      { 
        name: "Pizza porsciutto", 
        desc: "Tomaat saus , Kaas, Ham, Origano", 
        price: 12
      },
    
      { 
        name: "Pizza Romana", 
        desc: "Tomaat saus , Kaas, Ham, Champignon, Origano", 
        price: 12
      },
      
      { 
        name: "Pizza Hawaii", 
        desc: "Tomaat saus , Kaas, Ham, Ananas, Origano", 
        price: 12
      },
      
      { 
        name: "Pizza MamaMia", 
        desc: "Tomaat saus , Kaas, Pepperoni, Origano", 
        price: 12
      },
      
      { 
        name: "Pizza Mozzarela", 
        desc: "Tomaat saus , Kaas, Olive, Fresh Mozzarella, basilico pesto Origano", 
        price: 14 
      },
      
      { 
        name: "Pizza Bolognese", 
        desc: "Tomaat saus , Kaas, Bolognese, Origano", 
        price: 12
      },
      

      { 
        name: "Pizza Tonijn", 
        desc: "Tomaat saus , Kaas, Tonijn, Ui, Origano", 
        price: 12 
      },

      { 
        name: "Pizza Scampi", 
        desc: "Tomaat saus , Kaas, Scampi, Look(garlic), Origano", 
        price: 16 
      },
      { 
        name: "Pizza 4 Fromagio", 
        desc: "Tomaat saus , mozzarella, gorgonzola, parmesano, garana padano , origano", 
        price: 14 
      },
      { 
        name: "Pizza 4 Stagoni", 
        desc: "Tomaat saus , Kaas, Ham, Salami, Champignon, Ui, Origano", 
        price: 14 
      },
      { 
        name: "Pizza Kebab", 
        desc: "Tomaat saus , Kaas, Kebab(Kip / lam), look(garlic) , onion , Origano", 
        price: 13
      },
      { 
        name: "Pizza Spinachi", 
        desc: "Tomaat saus , Kaas, spinachi , garlic en origano", 
        price: 12
      },
      { 
        name: "Pizza Pepperoni", 
        desc: "Tomaat saus , Kaas , Pepperoni en Origano", 
        price: 12
      },
      { 
        name: "Pizza Vegetarisch", 
        desc: "Tomaat saus , Kaas, Spinachi, Broccoli, champignon, Ui, look(garlic) en Origano", 
        price: 13
      },
    ],
    Pastas: [
        { name: "Spaghetti Bolognese", desc: "bolognese sauce and cheese", price: 12 },
        { name: "Spaghetti Carbonara", desc: "creme, bacon , fresh egg yolk and cheese", price: 14 },
        { name: "Pasta Scampi", desc: "scampi, onion, garlic, paprika and rose sauce", price: 16},
        { name: "Penne Tonijn", desc: "garlic, tomato, sauce and tuna", price: 12 },
        { name: "Penne 4 Fromagio", desc: "Creme , mozzarella, gorgonzola, parmesano, garana padana", price: 14 },
        { name: "Penne Arabiata", desc: "garlic, paprika, tomato sauce and spices", price: 12 },
        { name: "Pasta Veg", desc: "garlic, paprika, onion, mushroom, tomato sauce and spices", price: 12 },
    ],
    Salads: [
        { name: "Mix salade", desc: "tomato, lettuce, cucumber, carrot, onion and salade dressing", price: 8 },
        { name: "Mozzarella salade", desc: "tomato, lettuce, cucumber, fresh mozzarella and basilico paste", price: 9 },
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
        { name: "Coca Cola", desc: "", price: 1.75 },
        { name: "Coca Cola (zero)", desc: "", price: 1.75 },
        { name: "Sprite", desc: "", price: 1.75 },
        { name: "Fanta", desc: "", price: 1.75 },
        { name: "RedBull", desc: "", price: 2.75 },
        { name: "RedBull (zero)", desc: "", price: 2.75 },
        { name: "Lipton IceTea", desc: "", price: 1.75 },
        { name: "Water", desc: "", price: 1.50 },
        { name: "Sparkling Water", desc: "", price: 1.50 },
        { name: "Duvel", desc: "", price: 3.50 },
        { name: "Jupiler (klein)", desc: "", price: 1.80 },
        { name: "Jupiler (groot)", desc: "", price: 2.50 },
        { name: "Stella Artois (klein)", desc: "", price: 2.00 },
        { name: "Stella Artois (groot)", desc: "", price: 3.00 },
        { name: "Leffe", desc: "", price: 3.50 },
        { name: "Brugse Zot", desc: "", price: 3.50 },
        { name: "Wijn (rood)", desc: "", price: 5.00 },
        { name: "Wijn (wit)", desc: "", price: 5.00 },
        { name: "Wijn (roze)", desc: "", price: 5.00 },
      ],
      
    Snacks: [
        { name: "Pita (klein)", desc: "kip/lam, salade and sauce", price: 7 },
        { name: "Pita (groot)", desc: "kip/lam, salade and sauce", price: 8 },
        { name: "Pita Mix", desc: "kip and lam, salade and sauce", price: 9 },
        { name: "Durum", desc: "kip/lam, salade and sauce", price: 7 },
        { name: "Durum Mix", desc: "kip and lam, salade and sauce", price: 9 },
        { name: "Kapsalon", desc: "kip/lam, salade, frietjes, kaas and sauce", price: 12 },
        { name: "Kapsalon Mix", desc: "kip and lam, salade, frietjes, kaas and sauce", price: 13 },
        { name: "Schotel", desc: "kip/lam, salade, frietjes and sauce", price: 12 },
        { name: "Schotel Mix", desc: "kip and lam, salade, frietjes and sauce", price: 13 },
        { name: "Friet (Klein)", desc: "", price: 3 },
        { name: "Friet (Groot)", desc: "", price: 5 },
        { name: "Frikandel", desc: "", price: 2 },
        { name: "Mexicano", desc: "", price: 3.50 },
        { name: "Bicky Burger", desc: "", price: 5 },
        { name: "Cheese Burger", desc: "", price: 6 },
        { name: "Vegie Burger", desc: "", price: 5 },
        { name: "Ham Burger", desc: "", price: 5 },
        { name: "Mini Loempis (8stk)", desc: "", price: 5 },
        { name: "Chicken Wings (6stk)", desc: "", price: 8 },
        { name: "Chicken Nuggets (8stk)", desc: "", price: 6 },
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
            <button class="nav-btn" onclick=" window.location.href='https://deliveroo.be/nl-be/menu/Brugge/centrum/brugge-fast-food?day=today&geohash=u14736hqv6gn&time=ASAP'; "> ORDER </button>
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