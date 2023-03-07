const partyHeader = document.getElementById("party");

export const htmlGenerator = (string, htmlElement) => {
  const p = document.createElement("p");
  p.innerText = string;
  if (htmlElement.children.length > 0) {
    htmlElement.children[0].remove();
    htmlElement.append(p);
  } else {
    htmlElement.append(p);
  }
};

htmlGenerator("Party Time.", partyHeader);
