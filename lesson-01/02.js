let usersInfo = [
    ["Petiya ", "Kiev", 28],
    ["Vasiya ", "Kharkov", 90],
    ["Koliya ", "Krim", 18],
];

for (let i = 0; i < usersInfo.length; i++) {
    let user = usersInfo[i];
    document.write("-----------", "<br>")
    for (let j = 0; j < user.length; j++) {
        let product = user[j];
        document.write(j + 1, " - ", product, "<br>")
    }

}