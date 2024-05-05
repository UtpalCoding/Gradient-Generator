const colorInput = document.querySelectorAll(".colors input");
const selectMenu = document.querySelector(".select-box select");
const gradientBox = document.querySelector(".gradient-box");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");


const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}


const generateGradient = (isRandom) => {

    if (isRandom) {
        colorInput[0].value = getRandomColor();
        colorInput[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${selectMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`
    gradientBox.style.background = gradient;
    textarea.value = `${gradient};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerHTML = "Code Copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600);
}


colorInput.forEach(input => {
    input.addEventListener("input", generateGradient);
})

selectMenu.addEventListener("change", generateGradient);
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);

