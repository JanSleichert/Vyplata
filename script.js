//Toto je pracovní část k vytvoření a ověření funkcí v prohlížeči:
const salary = (wage, hours, days) => {
    return (wage*hours)*days
}

document.body.innerHTML +=`<p>Vysněná hrubá mzda: ${salary(2000, 8, 20)} Kč</p>`

const taxed = (ammount, tax) => {
    return ammount - (ammount * (tax/100))
}

document.body.innerHTML +=`<p>Vysněná mzda po zdanění: ${taxed(320000, 15)} Kč</p>`

//Toto je splnění zadaného úkolu

const MojeVyplata = salary(400, 8, 20)

document.body.innerHTML +=`<p>Moje reálná mzda po zdanění: ${taxed(MojeVyplata, 15)} Kč</p>`