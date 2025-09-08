//toaster
function createToaster(config) {
    return function (str) {
        let div = document.createElement("div")

        div.className = `inline-block ${
          config.theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-black"
        } px-6 py-3 rounded shadow-lg pointer-events-none`;

        div.textContent = str;

        let parent = document.querySelector(".parent")

        parent.className += `
        if(config.positionX !== 'left' || config.positionY !== 'top'){
        ${config.positionX === 'right' ? "right-5" : "left-5"} ${config.positionY === 'top' ? 'top-5' : "bottom-5"}
        }
        `

        parent.appendChild(div)

        setTimeout(() => {
            parent.removeChild(div)
        }, config.duration * 1000)
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration : 3
})

toaster("Download Now")

setTimeout(() => {
    toaster("I am Puneet Verma")
}, 2000)

setTimeout(() => {
    toaster("Software Engineer")
}, 4000)