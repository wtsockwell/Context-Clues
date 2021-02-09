$(document).ready(function () {
    //Declaration and assigned variables for the arrays
    var friends = ["Stolas", "Blitzo", "Loona", "Moxie", "Millie"]
    var locations = ["Beach", "Car", "Appartment", "Library", "Den", "Alley", "Ship", "Circus", "Highway", "Rooftop"]
    var weapons = ["Rifle", "Knife", "Noose", "Flower Pot", "Pistol", "Inconvenient Torches", "Axe", "Crossbow", "Fire", "Robotic Theme Park Clown", "Log", "Car", "Dem Hands", "Rock", "Pensle", "Rocket Launcher", "Harpoon", "Grenade", "T-Virus", "Chains"]

    //Core loop for creating h3 elements as well as implimenting i
    for (var i = 0; i < 100; i++) {
        $(`<h3 id=${i}>Acusation ${i+1}</h3>`).appendTo("body")
        //functions for closure and assigning proper values to the postions in the alert
        function crime(){
            var who = friends[i%5]
            var where = locations[i%10]
            var which = weapons[i%20]
            function accuse(){
                alert(`I accuse ${who}, with the ${which}, in the ${where}`)
            }
            return accuse
        }
        $(`#${i}`).click(crime())
    }
})