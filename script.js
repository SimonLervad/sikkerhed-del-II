const $ = function (foo) {
    return document.getElementById(foo);
}

let hashArr = ["MD5", "SHA1", "SHA3", "SHA256"]
let kryptArr = ["Rabbit", "TripleDES", "AES"]

var krypter = function() {
	var text = $("text").value;		// input text

	hashMetode = hashArr[$("hashing").value];
	if (hashMetode === "MD5") {
		var hash = CryptoJS.MD5(text);	// outputs HASH value
	} else if (hashMetode === "SHA1") {
		var hash = CryptoJS.SHA1(text);	// outputs HASH value
	} else if (hashMetode === "SHA3") {
		var hash = CryptoJS.SHA3(text);	// outputs HASH value
	} else if (hashMetode === "SHA256") {
		var hash = CryptoJS.SHA256(text);	// outputs HASH value
	}
	$("hash").innerHTML = hash;

	kryptMetode = kryptArr[$("crypt").value];
	if (kryptMetode === "Rabbit") {
		var encrypted = CryptoJS.Rabbit.encrypt(text, "Secret Passphrase");			// kryptere og outputs result
		var decrypted = CryptoJS.Rabbit.decrypt(encrypted, "Secret Passphrase");
	} else if (kryptMetode === "TripleDES") {
		var encrypted = CryptoJS.TripleDES.encrypt(text, "Secret Passphrase");			// kryptere og outputs result
		var decrypted = CryptoJS.TripleDES.decrypt(encrypted, "Secret Passphrase");
	} else if (kryptMetode === "AES") {
		var encrypted = CryptoJS.AES.encrypt(text, "Secret Passphrase");			// kryptere og outputs result
		var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
	}

	$("krypteret").innerHTML = encrypted;
	$("dekrypteret").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}

var dekrypter = function() {
	var text = $("text").value;		// input text

	var hash = CryptoJS.MD5(text);	// outputs HASH value
	$("hash").innerHTML = hash;

	var decrypted = CryptoJS.kryptmetode.decrypt(text, "Secret Passphrase");	// dekryptere og fremkalder den indtastede value 
	$("dekrypteret").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}

let init = function () {
    $("krypter").addEventListener("click", krypter);
    $("dekrypter").addEventListener("click", dekrypter);
}

window.addEventListener("load", init);