const formulario: HTMLFormElement = document.querySelector("form")!;
const contenedorFoto: HTMLDivElement = document.querySelector("#foto")!;

interface IFoto {
	url: string;
	alt: string;
}

let imagenes: IFoto[] = [
	{
		url: "https://img.freepik.com/vector-gratis/vector-diseno-degradado-colorido-pajaro_343694-2506.jpg",
		alt: "Pájaro 1 colorido",
	},
	{
		url: "https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg?size=626&ext=jpg",
		alt: "pájaro 2 colorido",
	},
	{
		url: "https://img.freepik.com/vetores-premium/ilustracao-colorida-do-passaro-do-inclinacao_84302-458.jpg",
		alt: "Pájaro 3 colorido",
	},
	{
		url: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon.png",
		alt: "Logo de React",
	},
];

const visualizarFoto = () => {
	contenedorFoto.innerHTML = "";
	imagenes.forEach((x) => {
		const img = document.createElement("img");
		img.alt = x.alt;
		img.src = x.url;
		contenedorFoto.appendChild(img);
	});
};

const iniciarElCarrusel = (e: SubmitEvent) => {
	e.preventDefault();
	visualizarFoto();
};

formulario.addEventListener("submit", iniciarElCarrusel);
