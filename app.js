$(document).ready(function () {
    //Declaration and assigned variables for the arrays
    var friends = ["Stolas", "Blitzo", "Loona", "Moxie", "Millie"]
    var locations = ["Beach", "Car", "Appartment", "Library", "Den", "Alley", "Ship", "Circus", "Highway", "Rooftop"]
    var weapons = ["Rifle", "Knife", "Noose", "Flower Pot", "Pistol", "Inconvenient Torches", "Axe", "Crossbow", "Fire", "Robotic Theme Park Clown", "Log", "Car", "Dem Hands", "Rock", "Pensle", "Rocket Launcher", "Harpoon", "Grenade", "T-Virus", "Chains"]

    //Core loop for creating h3 elements as well as implimenting i
    for (var i = 1; i < 101; i++) {
        $(`<h3>Acusation ${i}</h3>`).appendTo("body")
        //functions for closure and assigning proper values to the postions in the alert
        function crime(){
            var who
            var where
            var which
            function accuse(who,which,where){
                alert(`I accuse ${who}, wish the ${which}, in the ${where}`)
            }
            return accuse
        }
    }
    $("h3").click(function () {
        alert(`I accuse ${friends[0]}, with the ${weapons[0]}, in the ${locations[0]}`)
    })

})