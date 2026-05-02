// ========== Singapore Calories Excel ==========
const foodDatabase = [
  // Noodles
  { name: "Abalone Noodles, soup", calories: 244, category: "Noodles" },
  { name: "Ban Mian Soup", calories: 475, category: "Noodles" },
  { name: "Bee Hoon Soto", calories: 359, category: "Noodles" },
  { name: "Bee Hoon Soup", calories: 580, category: "Noodles" },
  { name: "Beef Stomach Noodles", calories: 398, category: "Noodles" },
  { name: "Beef Udon, soup", calories: 459, category: "Noodles" },
  { name: "Braised Beef Tendon Noodles", calories: 462, category: "Noodles" },
  { name: "Braised Pork Rib Noodles", calories: 637, category: "Noodles" },
  { name: "Char Kway Teow", calories: 745, category: "Noodles" },
  { name: "Chicken Feet Noodles, Soup", calories: 452, category: "Noodles" },
  {
    name: "Claypot Noodles, mixed vegetables",
    calories: 341,
    category: "Noodles",
  },
  { name: "Crayfish Hor Fun", calories: 514, category: "Noodles" },
  { name: "Dan Dan Mian", calories: 578, category: "Noodles" },
  {
    name: "Dry Chicken and Mushroom Noodles",
    calories: 441,
    category: "Noodles",
  },
  { name: "Dry Duck Noodles", calories: 500, category: "Noodles" },
  {
    name: "Dry Minced Pork and Mushroom Noodles",
    calories: 511,
    category: "Noodles",
  },
  { name: "Fish Ball Mee Pok, dry", calories: 482, category: "Noodles" },
  { name: "Fish Ball Tang Hoon Soup", calories: 218, category: "Noodles" },
  { name: "Fish Bee Hoon without milk", calories: 331, category: "Noodles" },
  { name: "Fried Seafood Hor Fun", calories: 784, category: "Noodles" },
  { name: "Fried Tang Hoon", calories: 498, category: "Noodles" },
  { name: "Hokkien Mee", calories: 522, category: "Noodles" },
  { name: "Indian style Bee Hoon Goreng", calories: 501, category: "Noodles" },
  {
    name: "Instant noodles with vegetables",
    calories: 398,
    category: "Noodles",
  },
  { name: "Japanese Black Pepper Noodles", calories: 485, category: "Noodles" },
  { name: "Japanese Mushroom Noodles", calories: 470, category: "Noodles" },
  {
    name: "Japchae (Korean glass noodles)",
    calories: 504,
    category: "Noodles",
  },
  { name: "Kway Chap", calories: 650, category: "Noodles" },
  { name: "Laksa", calories: 600, category: "Noodles" },
  { name: "Lontong Goreng", calories: 219, category: "Noodles" },
  { name: "Lor Mee", calories: 383, category: "Noodles" },
  { name: "Macaroni Soup", calories: 411, category: "Noodles" },
  { name: "Macaroni, fried, Malay", calories: 428, category: "Noodles" },
  { name: "Mee Bandung", calories: 327, category: "Noodles" },
  { name: "Mee Rebus", calories: 559, category: "Noodles" },
  { name: "Mee Siam", calories: 521, category: "Noodles" },
  { name: "Prawn Noodles Soup", calories: 294, category: "Noodles" },
  { name: "Wanton Noodles Dry", calories: 441, category: "Noodles" },
  // Rice
  { name: "Ayam Penyet with Rice", calories: 936, category: "Rice" },
  { name: "Bibimbap", calories: 499, category: "Rice" },
  { name: "Braised Duck Rice", calories: 748, category: "Rice" },
  { name: "Chicken Biryani", calories: 756, category: "Rice" },
  { name: "Chicken Rice, steamed chicken", calories: 558, category: "Rice" },
  { name: "Chirashi Don", calories: 528, category: "Rice" },
  { name: "Curry Rice Bowl", calories: 515, category: "Rice" },
  { name: "Duck Rice, skin removed", calories: 564, category: "Rice" },
  { name: "Fried Rice with Egg", calories: 430, category: "Rice" },
  {
    name: "Fried Rice with Ham and Vegetables",
    calories: 396,
    category: "Rice",
  },
  { name: "Mutton Biryani", calories: 752, category: "Rice" },
  { name: "Nasi Goreng Sayur", calories: 920, category: "Rice" },
  { name: "Nasi Lemak with Fried Egg only", calories: 494, category: "Rice" },
  // Porridge
  { name: "Beef and Egg Porridge", calories: 285, category: "Porridge" },
  { name: "Beef Porridge", calories: 218, category: "Porridge" },
  { name: "Century Egg Porridge", calories: 225, category: "Porridge" },
  { name: "Chicken Porridge", calories: 181, category: "Porridge" },
  { name: "Duck Porridge", calories: 596, category: "Porridge" },
  { name: "Minced Pork Porridge", calories: 320, category: "Porridge" },
  { name: "Sliced Fish Porridge", calories: 455, category: "Porridge" },
  // Burgers & Fast Food
  { name: "Angus BLT", calories: 712, category: "Burgers & Fast Food" },
  { name: "BBQ Cheese Zinger", calories: 521, category: "Burgers & Fast Food" },
  {
    name: "BBQ Tenders Burger",
    calories: 496,
    category: "Burgers & Fast Food",
  },
  { name: "Big Mac", calories: 522, category: "Burgers & Fast Food" },
  {
    name: "Buttermilk Crispy Chicken",
    calories: 894,
    category: "Burgers & Fast Food",
  },
  { name: "Cheeseburger", calories: 302, category: "Burgers & Fast Food" },
  {
    name: "Cheesy Zinger Stacker",
    calories: 1106,
    category: "Burgers & Fast Food",
  },
  {
    name: "Chicken McCrispy (2pc)",
    calories: 689,
    category: "Burgers & Fast Food",
  },
  {
    name: "Chicken McNuggets (6pc)",
    calories: 303,
    category: "Burgers & Fast Food",
  },
  {
    name: "Chicken McNuggets (9pc)",
    calories: 524,
    category: "Burgers & Fast Food",
  },
  {
    name: "Double Cheeseburger",
    calories: 433,
    category: "Burgers & Fast Food",
  },
  {
    name: "Double Filet-O-Fish",
    calories: 474,
    category: "Burgers & Fast Food",
  },
  { name: "Double McSpicy", calories: 800, category: "Burgers & Fast Food" },
  { name: "Famous Bowl", calories: 356, category: "Burgers & Fast Food" },
  { name: "Filet-O-Fish", calories: 333, category: "Burgers & Fast Food" },
  {
    name: "Grilled Chicken McWrap",
    calories: 345,
    category: "Burgers & Fast Food",
  },
  { name: "Hamburger", calories: 252, category: "Burgers & Fast Food" },
  { name: "McChicken", calories: 429, category: "Burgers & Fast Food" },
  { name: "McSpicy", calories: 522, category: "Burgers & Fast Food" },
  { name: "McWings (2pc)", calories: 296, category: "Burgers & Fast Food" },
  {
    name: "Original Angus Cheeseburger",
    calories: 668,
    category: "Burgers & Fast Food",
  },
  { name: "Zinger", calories: 633, category: "Burgers & Fast Food" },
  // Breakfast
  { name: "Big Breakfast", calories: 516, category: "Breakfast" },
  { name: "Big Breakfast Deluxe", calories: 826, category: "Breakfast" },
  { name: "Breakfast Wrap Chicken Ham", calories: 427, category: "Breakfast" },
  {
    name: "Breakfast Wrap Chicken Sausage",
    calories: 491,
    category: "Breakfast",
  },
  {
    name: "Char Siew Bao (Barbeque Pork Bun)",
    calories: 180,
    category: "Breakfast",
  },
  { name: "Chicken Muffin", calories: 447, category: "Breakfast" },
  { name: "Chicken Muffin with Egg", calories: 521, category: "Breakfast" },
  { name: "Egg McMuffin", calories: 289, category: "Breakfast" },
  { name: "French Toast", calories: 221, category: "Breakfast" },
  { name: "Hotcakes", calories: 557, category: "Breakfast" },
  { name: "Hotcakes with Sausage", calories: 640, category: "Breakfast" },
  {
    name: "Liu Sha Bao (Custard Bun)",
    calories: 142,
    category: "Breakfast",
  },
  { name: "Sausage McMuffin", calories: 279, category: "Breakfast" },
  { name: "Sausage McMuffin with Egg", calories: 358, category: "Breakfast" },
  // Snacks & Sides
  { name: "Bhatura", calories: 418, category: "Snacks & Sides" },
  { name: "Chicken & Mushroom Bun", calories: 246, category: "Snacks & Sides" },
  { name: "Chicken Macaroni Soup", calories: 199, category: "Snacks & Sides" },
  {
    name: "Egg Mayonnaise Sandwich",
    calories: 260,
    category: "Snacks & Sides",
  },
  { name: "Fried Mock Duck", calories: 143, category: "Snacks & Sides" },
  { name: "Garden Side Salad", calories: 21, category: "Snacks & Sides" },
  { name: "Gluten Ball, fried", calories: 32, category: "Snacks & Sides" },
  { name: "Ham and Cheese Toast", calories: 304, category: "Snacks & Sides" },
  { name: "Ketupat", calories: 88, category: "Snacks & Sides" },
  {
    name: "Ku Chai Kueh (Chives Dumpling)",
    calories: 148,
    category: "Snacks & Sides",
  },
  { name: "Salmon Mayo Onigiri", calories: 200, category: "Snacks & Sides" },
  {
    name: "Kwap Chap, noodles only",
    calories: 150,
    category: "Snacks & Sides",
  },
];
const foodCategories = [...new Set(foodDatabase.map((f) => f.category))];

// ========== Deploying data to caculator and planner page ==========
function navigate(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  document.querySelectorAll(".site-header nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === page);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".site-header nav a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(a.dataset.page);
    });
  });
  document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    navigate("home");
  });
  initHome();
  initCalculator();
  initPlanner();
  initReviews();
});

// ========== Home Page ==========
const dietTypes = [
  {
    name: "Balanced Diet",
    description:
      "A balanced diet includes a variety of foods in the right proportions: vegetables, fruits, grains, protein, and dairy.",
    portions: { vegetables: 40, protein: 25, carbohydrates: 30, fats: 5 },
  },
  {
    name: "Low-Carb Diet",
    description:
      "Focuses on reducing carbohydrate intake and increasing protein and healthy fats for weight management.",
    portions: { vegetables: 35, protein: 35, carbohydrates: 10, fats: 20 },
  },
  {
    name: "Mediterranean Diet",
    description:
      "Emphasizes fruits, vegetables, whole grains, olive oil, and lean proteins like fish and poultry.",
    portions: { vegetables: 45, protein: 20, carbohydrates: 25, fats: 10 },
  },
  {
    name: "High-Protein Diet",
    description:
      "Prioritizes protein-rich foods to support muscle growth, recovery, and satiety.",
    portions: { vegetables: 25, protein: 45, carbohydrates: 20, fats: 10 },
  },
];
const portionColors = {
  vegetables: "#4caf50",
  protein: "#e65100",
  carbohydrates: "#ffc029",
  fats: "#8d6e63",
};

let selectedDiet = 0;
function initHome() {
  renderDietCards();
  renderPortions();
  document.getElementById("btn-bmi").addEventListener("click", calculateBMI);
}
function renderDietCards() {
  const grid = document.getElementById("diet-grid");
  grid.innerHTML = dietTypes
    .map(
      (d, i) =>
        `<div class="card ${i === selectedDiet ? "selected" : ""}" onclick="selectDiet(${i})">
      <h3>${d.name}</h3><p>${d.description}</p>
    </div>`,
    )
    .join("");
}
function selectDiet(i) {
  selectedDiet = i;
  renderDietCards();
  renderPortions();
}
function renderPortions() {
  const diet = dietTypes[selectedDiet];
  document.getElementById("portion-title").textContent =
    "Recommended Portions: " + diet.name;
  const bar = document.getElementById("portion-bar");
  const legend = document.getElementById("portion-legend");
  bar.innerHTML = Object.entries(diet.portions)
    .map(
      ([k, v]) =>
        `<div style="width:${v}%;background:${portionColors[k]}">${v}%</div>`,
    )
    .join("");
  legend.innerHTML = Object.entries(diet.portions)
    .map(
      ([k, v]) =>
        `<div class="item"><span class="swatch" style="background:${portionColors[k]}"></span><span style="text-transform:capitalize">${k}: ${v}%</span></div>`,
    )
    .join("");
}

// ========== BMI calculator and categories ==========
function calculateBMI() {
  const h = parseFloat(document.getElementById("bmi-height").value) / 100;
  const w = parseFloat(document.getElementById("bmi-weight").value);
  if (!h || !w || h <= 0 || w <= 0) return;
  const bmi = Math.round((w / (h * h)) * 10) / 10;
  let cat, cls;
  if (bmi < 18.5) {
    cat = "Underweight";
    cls = "c-blue";
  } else if (bmi < 25) {
    cat = "Normal weight";
    cls = "c-green";
  } else if (bmi < 30) {
    cat = "Overweight";
    cls = "c-yellow";
  } else {
    cat = "Obese";
    cls = "c-red";
  }
  // print bmi after calculating
  document.getElementById("bmi-output").innerHTML = `<div class="bmi-result">
      <div class="value ${cls}">${bmi}</div>
      <div class="category ${cls}">${cat}</div>
      <div class="bmi-legend">
        <span class="c-blue">&lt;18.5 Underweight</span>
        <span class="c-green">18.5–24.9 Normal</span>
        <span class="c-yellow">25–29.9 Overweight</span>
        <span class="c-red">≥30 Obese</span>
      </div>
    </div>`;
}

// ========== calorie calculator ==========
let selectedFoods = []; // { food, qty }
function initCalculator() {
  renderCategoryFilter();
  renderFoodGrid();
  document
    .getElementById("calc-search")
    .addEventListener("input", renderFoodGrid);
  document
    .getElementById("calc-category")
    .addEventListener("change", renderFoodGrid);
}
function renderCategoryFilter() {
  const sel = document.getElementById("calc-category");
  sel.innerHTML =
    '<option value="All">All Categories</option>' +
    foodCategories.map((c) => `<option value="${c}">${c}</option>`).join("");
}
// search function
function renderFoodGrid() {
  const search = document.getElementById("calc-search").value.toLowerCase();
  const cat = document.getElementById("calc-category").value;
  const filtered = foodDatabase.filter(
    (f) =>
      f.name.toLowerCase().includes(search) &&
      (cat === "All" || f.category === cat),
  );
  document.getElementById("food-grid").innerHTML =
    filtered.length === 0
      ? '<p style="grid-column:1/-1;color:var(--muted-foreground);font-size:0.875rem">No dishes found.</p>'
      : filtered
          .map(
            (f) =>
              `<button class="food-btn" onclick="addFood('${f.name.replace(/'/g, "\\'")}')">
        <span class="fname">${f.name}</span>
        <span class="fmeta">${f.calories} kcal · ${f.category}</span>
      </button>`,
          )
          .join("");
}

// add food
function addFood(name) {
  const existing = selectedFoods.find((s) => s.food.name === name);
  if (existing) {
    existing.qty++;
  } else {
    const food = foodDatabase.find((f) => f.name === name);
    selectedFoods.push({ food, qty: 1 });
  }
  renderMealTable();
}

// remove food
function removeFood(name) {
  selectedFoods = selectedFoods.filter((s) => s.food.name !== name);
  renderMealTable();
}

//update food qty
function updateQty(name, qty) {
  if (qty <= 0) {
    removeFood(name);
    return;
  }
  const item = selectedFoods.find((s) => s.food.name === name);
  if (item) item.qty = qty;
  renderMealTable();
}
function renderMealTable() {
  const container = document.getElementById("meal-table");
  const total = selectedFoods.reduce((s, i) => s + i.food.calories * i.qty, 0);
  if (selectedFoods.length === 0) {
    container.innerHTML =
      '<p style="color:var(--muted-foreground);font-size:0.875rem">No food selected yet. Click items above to add.</p>';
    document.getElementById("calc-total").textContent = "0";
    return;
  }
  container.innerHTML = `<table>
      <thead><tr><th>Food</th><th class="text-center">Qty</th><th class="text-right">Calories</th><th class="text-center">Action</th></tr></thead>
      <tbody>${selectedFoods
        .map(
          (s) =>
            `<tr>
          <td>${s.food.name}</td>
          <td class="text-center"><input type="number" min="1" value="${s.qty}" onchange="updateQty('${s.food.name.replace(/'/g, "\\'")}', parseInt(this.value)||0)" style="width:64px;text-align:center;padding:4px;border:1px solid var(--border);border-radius:var(--radius);background:var(--background)"></td>
          <td class="text-right" style="font-weight:bold">${s.food.calories * s.qty} kcal</td>
          <td class="text-center"><button class="btn-link" onclick="removeFood('${s.food.name.replace(/'/g, "\\'")}')">Remove</button></td>
        </tr>`,
        )
        .join("")}</tbody>
    </table>`;
  document.getElementById("calc-total").textContent = total;
}
// ========== weekly meal planner ==========
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const mealSlots = ["Breakfast", "Lunch", "Dinner"];
let plan = {};
let targetCalories = 2000;
function initPlanner() {
  const slider = document.getElementById("cal-slider");
  const label = document.getElementById("cal-label");
  slider.addEventListener("input", () => {
    targetCalories = parseInt(slider.value);
    label.textContent = targetCalories + " kcal";
  });
  document
    .getElementById("btn-randomise-all")
    .addEventListener("click", randomiseAll);
  renderPlannerTable();
}
function pickRandomMeal(targetCal) {
  const sorted = [...foodDatabase].sort(
    (a, b) =>
      Math.abs(a.calories - targetCal) - Math.abs(b.calories - targetCal),
  );
  const candidates = sorted.slice(0, Math.min(10, sorted.length));
  return candidates[Math.floor(Math.random() * candidates.length)];
}
function randomiseDay(day) {
  plan[day] = {};
  let remaining = targetCalories;
  for (let i = 0; i < mealSlots.length; i++) {
    const mealsLeft = mealSlots.length - i;
    const target = Math.round(remaining / mealsLeft);
    const picked = pickRandomMeal(target);
    plan[day][mealSlots[i]] = picked.name;
    remaining -= picked.calories;
  }
  renderPlannerTable();
}

// random all days function
function randomiseAll() {
  days.forEach((day) => {
    plan[day] = {};
    let remaining = targetCalories;
    for (let i = 0; i < mealSlots.length; i++) {
      const mealsLeft = mealSlots.length - i;
      const target = Math.round(remaining / mealsLeft);
      const picked = pickRandomMeal(target);
      plan[day][mealSlots[i]] = picked.name;
      remaining -= picked.calories;
    }
  });
  renderPlannerTable();
}
function setMeal(day, slot, name) {
  if (!plan[day]) plan[day] = {};
  plan[day][slot] = name;
  renderPlannerTable();
}
function getMealCal(name) {
  return foodDatabase.find((f) => f.name === name)?.calories || 0;
}
function renderPlannerTable() {
  const tbody = document.getElementById("planner-tbody");
  const options = foodDatabase
    .map(
      (f) =>
        `<option value="${f.name}">${f.name} (${f.calories} kcal)</option>`,
    )
    .join("");
  let weekTotal = 0;
  tbody.innerHTML = days
    .map((day) => {
      const dayCal = mealSlots.reduce(
        (s, slot) => s + getMealCal(plan[day]?.[slot] || ""),
        0,
      );
      weekTotal += dayCal;
      const diff = dayCal - targetCalories;
      const diffClass =
        dayCal === 0
          ? ""
          : Math.abs(diff) <= 100
            ? "c-green"
            : diff > 0
              ? "c-red"
              : "";
      return `<tr>
      <td style="font-weight:bold">${day}</td>
      ${mealSlots
        .map(
          (slot) =>
            `<td><select onchange="setMeal('${day}','${slot}',this.value)" style="width:100%;padding:4px;font-size:0.75rem;border:1px solid var(--border);border-radius:var(--radius);background:var(--background)">
          <option value="">-- Select --</option>
          ${options.replace(`value="${plan[day]?.[slot] || ""}"`, `value="${plan[day]?.[slot] || ""}" selected`)}
        </select></td>`,
        )
        .join("")}
      <td class="text-right" style="font-weight:bold">${dayCal} kcal${dayCal > 0 ? `<br><span class="${diffClass}" style="font-size:0.75rem">${diff > 0 ? "+" : ""}${diff}</span>` : ""}</td>
      <td class="text-center"><button class="btn btn-primary btn-sm" onclick="randomiseDay('${day}')">🎲 Randomise</button></td>
    </tr>`;
    })
    .join("");
  document.getElementById("weekly-avg").textContent =
    Math.round(weekTotal / 7) + " kcal/day";
}

// ========== review page ==========
let reviews = [];
let selectedRating = 0;
function initReviews() {
  const starsBox = document.getElementById("stars");
  const form = document.getElementById("reviewForm");
  starsBox.addEventListener("click", function (e) {
    if (!e.target.classList.contains("star")) return;
    selectedRating = Number(e.target.dataset.value);
    updateStarsUI(selectedRating);
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("reviewName").value.trim();
    const text = document.getElementById("reviewText").value.trim();
    const msg = document.getElementById("formMsg");
    if (!name || !text || selectedRating === 0) {
      msg.textContent =
        "Please enter your name, write a review and choose a star rating.";
      return;
    }
    reviews.unshift({ name, text, rating: selectedRating });
    msg.textContent = `Thanks ${name}! Your review was submitted with ${selectedRating} star(s).`;
    form.reset();
    selectedRating = 0;
    updateStarsUI(0);
    renderReviews();
  });
  updateStarsUI(0);
  renderReviews();
}
function updateStarsUI(rating) {
  document.querySelectorAll(".star").forEach((btn) => {
    btn.classList.toggle("is-on", Number(btn.dataset.value) <= rating);
  });
  document.getElementById("starsMeta").textContent =
    `Selected: ${rating} star(s)`;
}
function renderReviews() {
  const list = document.getElementById("reviews-list");
  if (reviews.length === 0) {
    list.innerHTML =
      '<p class="no-reviews">No reviews yet. Be the first to share your thoughts!</p>';
    return;
  }
  list.innerHTML = reviews
    .map(
      (r) =>
        `<div class="review-card">
      <div class="review-header">
        <span class="review-name">${r.name}</span>
        <span class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
      </div>
      <p class="review-body">${r.text}</p>
    </div>`,
    )
    .join("");
}
