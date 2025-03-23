const div = document.getElementById("divTP3");

const p = document.createElement("p");
p.textContent = "Langages basés sur ECMAScript :";

const dl = document.createElement("dl");

const data = {
    "JavaScript": "JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi côté serveur.",
    "JScript": "JScript est le nom générique de plusieurs implémentations d'ECMAScript 3 créées par Microsoft.",
    "ActionScript": "ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash Media Server, JRun, Macromedia Generator).",
    "EX4": "ECMAScript for XML (E4X) est une extension XML au langage ECMAScript."
};

for (const [key, value] of Object.entries(data)) {
    const dt = document.createElement("dt");
    dt.textContent = key;
    
    const dd = document.createElement("dd");
    dd.textContent = value;

    dl.appendChild(dt);
    dl.appendChild(dd);
}

div.appendChild(p);
div.appendChild(dl);
