var name = process.argv[2],
		lowercaseName = name.toLowerCase(),
		message = `Hello, ${name}!\nYour name lowercased is "${lowercaseName}".`;

console.log(message);
