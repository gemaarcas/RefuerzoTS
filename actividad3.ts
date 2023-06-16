const formulario: HTMLFormElement = document.querySelector("form")!;
const contenedorFoto: HTMLDivElement = document.querySelector("#foto")!;

interface IFoto {
	url: string;
	alt: string;
}

let imagenes: IFoto[] = [];

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
