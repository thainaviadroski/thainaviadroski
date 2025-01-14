const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src/assets");
const output = path.join(__dirname, "src/assets/links.json");

function getMarkdownFiles(dir) {
	let filesList = [];

	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const pathFile = path.join(dir, file);
		const stat = fs.statSync(pathFile);

		if (stat.isDirectory()) {
			filesList = filesList.concat(getMarkdownFiles(pathFile));
		} else if (path.extname(file) === ".md") {
			const relativePath = path.relative(
				path.join(__dirname, "src/assets"),
				pathFile
			);

			const propsFile = getPropsFile(relativePath, file);

			const content = fs.readFileSync(pathFile, "utf-8");
			const lastLine = content.trim().split("\n");
			getTags(content);

			const firstLine = content
				.split("\n")[0]
				.replace(/^#\s*/, "")
				.trim();

			const images = getImages(pathFile);

			const data = {
				title: firstLine,
				images: images,
				...propsFile,
			};

			filesList.push(data);
		}
	});

	return filesList;
}

function getPropsFile(relativePath, file) {
	const fileName = path.dirname(relativePath).split(path.sep);
	const detail = path.basename(file, ".md");
	const type = fileName[fileName.length - 2];
	const dir = `assets/${fileName.join("/")}`;

	return {
		name: fileName.join("/"),
		detail: detail,
		type: type,
		dir: dir,
	};
}

function getImages(pathFile) {
	const imgDir = path.dirname(pathFile);

	return fs
		.readdirSync(imgDir)
		.filter((img) => /\.(jpg|jpeg|png|gif)$/i.test(img))
		.map((img) =>
			path.relative(
				path.join(__dirname, "src/assets"),
				path.join(imgDir, img)
			)
		);
}

function generateJsonFileWithLinks() {
	if (!fs.existsSync(baseDir)) {
		console.error("Diretório base não encontrado:", baseDir);
		return;
	}

	const dirOutput = path.dirname(output);
	if (!fs.existsSync(dirOutput)) {
		fs.mkdirSync(dirOutput, { recursive: true });
	}

	const markdownFiles = getMarkdownFiles(baseDir);
	const jsonContent = JSON.stringify(markdownFiles, null, 2);

	fs.writeFileSync(output, jsonContent, "utf8");
	console.log("Arquivo JSON gerado com sucesso:", output);
}

function getTags(content) {
	return content
		.split("\n")
		.filter((line) => line.startsWith("tags:"))[0]
		.split(":")[1]
		.split(",")
		.map((tag) => tag.trim());
}

generateJsonFileWithLinks();
