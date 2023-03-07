
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const dogsArray = [];
  for (let key in dogs) {
    let a = document.createElement("a");
    a.innerHTML = key;
    a.href = dogs[key];
    let li = document.createElement("li");
    li.classList.add("dog-link");
    li.append(a);
    dogsArray.push(li);
  }
  return dogsArray;
}

const dropDownDogList = document.querySelector(".drop-down-dog-list")

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  dogLinks.forEach((link) => {
    dropDownDogList.append(link);
  })
}

attachDogLinks();

const dropDownDogNav = document.querySelector(".drop-down-dog-nav");

dropDownDogNav.addEventListener('mouseover', handleEnter)
dropDownDogNav.addEventListener('mouseout', handleLeave)


function handleEnter() {
  dropDownDogList.classList.toggle("hidden")
}

function handleLeave() {
  dropDownDogList.classList.toggle("hidden")
}

export * from "./drop_down"