fetch("https://randomuser.me/api/?results=3")
.then(raw => raw.json())
    .then(data => {
    data.results.forEach(user => {
        console.log(user)
        // Create main article
const article = document.createElement("article");
article.className = "w-full max-w-xs bg-gray-800 rounded-lg shadow-md overflow-hidden";

// Inner div
const div = document.createElement("div");
div.className = "p-6 text-center";

// Image
const img = document.createElement("img");
img.className = "w-20 h-20 mx-auto rounded-full object-cover";
        img.src = user.picture.large;
img.alt = "User avatar";

// Heading
const h2 = document.createElement("h2");
h2.className = "mt-4 text-lg font-semibold";
h2.textContent = user.name.title + " " + user.name.first + " " + user.name.last;

// Subtitle
const pRole = document.createElement("p");
pRole.className = "text-sm text-gray-400";
pRole.textContent = "Product Designer";

// Description
const pDesc = document.createElement("p");
pDesc.className = "mt-3 text-sm text-gray-300";
pDesc.textContent = "Crafting delightful experiences. Coffee lover.";

// Button
const button = document.createElement("button");
button.id = "followBtn";
button.className =
  "mt-4 px-4 py-2 rounded-full bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400";
button.setAttribute("aria-pressed", "false");
button.textContent = "Follow";

// Append elements
div.appendChild(img);
div.appendChild(h2);
div.appendChild(pRole);
div.appendChild(pDesc);
div.appendChild(button);

article.appendChild(div);

// Add to DOM (example: inside body)
document.querySelector(".users").appendChild(article);

    });
})