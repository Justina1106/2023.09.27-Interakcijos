// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
 
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)
 
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
 
// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.
 
// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

let h3Element = document.createElement('h3')
h3Element.textContent = '5'
h3Element.id = 'counter'
document.body.append(h3Element)

let button2 = document.createElement('button')
button2.textContent = '-'
button2.id = 'decreaseButton'
document.body.appendChild(button2)

let button1 = document.createElement('button')
button1.textContent = '+'
button1.id = 'increaseButton'
document.body.appendChild(button1)

let counterElement = document.getElementById('counter')
let decreaseButton = document.getElementById('decreaseButton')
let increaseButton = document.getElementById('increaseButton')

    function decreaseNumber() {
      let currentValue = parseInt(counterElement.textContent)
      if (!isNaN(currentValue)) {
        currentValue--
        counterElement.textContent = currentValue
      }
    }
    
    function increaseNumber() {
        let currentValue = parseInt(counterElement.textContent)
        if (!isNaN(currentValue)) {
          currentValue++
          counterElement.textContent = currentValue
        }
      }
  
      decreaseButton.addEventListener('click', decreaseNumber)
      increaseButton.addEventListener('click', increaseNumber)