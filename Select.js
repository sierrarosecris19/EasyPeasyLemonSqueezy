let selectedProtein = null;
let selectedCarb = null;
let selectedVegetable = null;

let recipe = document.getElementById("recipe");
let tofu = document.getElementById("tofu");
let chicken = document.getElementById("chicken");
let steak = document.getElementById("steak");
let rice = document.getElementById("rice");
let potato = document.getElementById("potato");
let sweetPotato = document.getElementById("sweetPotato");
let broccoli = document.getElementById("broccoli");
let carrots = document.getElementById("carrots");
let greenBeans = document.getElementById("greenBeans");


tofu.addEventListener("click", selectTofu);
chicken.addEventListener("click", selectChicken);
steak.addEventListener("click", selectSteak);
rice.addEventListener("click", selectRice);
potato.addEventListener("click", selectPotato);
sweetPotato.addEventListener("click", selectSweetPotato);
broccoli.addEventListener("click", selectBroccoli);
carrots.addEventListener("click", selectCarrots);
greenBeans.addEventListener("click", selectGreenBeans);


function selectTofu() {
    alert("You clicked tofu!");
    selectedProtein = "tofu";
    checkIfAllIngredients();
}

function selectChicken() {
    alert("You clicked chicken!");
    selectedProtein = "chicken";
    checkIfAllIngredients();
}

function selectSteak() {
    alert("You clicked steak!");
    selectedProtein = "steak";
    checkIfAllIngredients();
}

function selectRice() {
    alert("You clicked rice!");
    selectedCarb = "rice";
    checkIfAllIngredients();
}

function selectPotato() {
    alert("You clicked potato!");
    selectedCarb = "potato";
    checkIfAllIngredients();
}

function selectSweetPotato() {
    alert("You clicked sweet potato!");
    selectedCarb = "sweetPotato";
    checkIfAllIngredients();
}

function selectBroccoli() {
    alert("You clicked broccoli!");
    selectedVegetable = "broccoli";
    checkIfAllIngredients();
}

function selectCarrots() {
    alert("You clicked carrots!");
    selectedVegetable = "carrots";
    checkIfAllIngredients();
}

function selectGreenBeans() {
    alert("You clicked green beans!");
    selectedVegetable = "greenBeans";
    checkIfAllIngredients();
}

function checkIfAllIngredients() {

    //tofu recipes 

    if (selectedProtein === "tofu" && selectedCarb === "potato" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 1")
        alert("https://plantbasedjane.com/2021/02/sheet-pan-tofu-potatoes-broccoli/")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "potato" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 2")
        alert("https://quickandtastycooking.org.uk/recipes/scrambled-tofu-potatoes-carrots/")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "potato" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 3")
        alert("https://plantifullybasedblog.com/sheet-pan-lemon-rosemary-tofu-with-potatoes/")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "sweetPotato" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 4")
        alert("https://www.kulaskitchen.com/all-recipes/sheet-pan-crispy-tofu-broccoli-sweet-potatoes-peanut-sauce")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "sweetPotato" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 5")
        alert("https://tastespace.wordpress.com/2016/11/19/sassy-sesame-tofu-with-sweet-potato-carrots-and-sugar-snap-peas-vegan-under-pressure-giveaway/")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "sweetPotato" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 6")
        alert("https://www.solin.stream/recipes/253292/crispy-baked-tofu-with-roasted-sweet-potatoes-and-green-beans")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "rice" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 7")
        alert("https://cooking.nytimes.com/recipes/1025167-one-pot-tofu-and-broccoli-rice")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "rice" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 8")
        alert("https://jenneatsgoood.com/sweet-crispy-tofu-carrots-with-wild-rice/")
    }
    else if (selectedProtein === "tofu" && selectedCarb === "rice" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 9")
        alert("https://www.walderwellness.com/tofu-green-bean-stir-fry/")
    }

    //chicken recipes


    else if (selectedProtein === "chicken" && selectedCarb === "potato" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 10")
        alert("https://barefeetinthekitchen.com/baked-potato-chicken-broccoli-recipe/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "potato" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 11")
        alert("https://sweetphi.com/baked-chicken-potatoes-carrots-and-herbs-from-the-farmers-market/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "potato" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 12")
        alert("https://www.julieseatsandtreats.com/green-beans-chicken-potatoes/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "sweetPotato" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 13")
        alert("https://gimmedelicious.com/chicken-broccoli-sweet-potatoes-meal-prep/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "sweetPotato" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 14")
        alert("https://www.ambitiouskitchen.com/sheet-pan-moroccan-chicken/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "sweetPotato" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 15")
        alert("https://www.deliciouslyseasoned.com/green-beans-and-sweet-potato-casserole-with-chicken/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "rice" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 16")
        alert("https://thecozycook.com/broccoli-cheddar-chicken-and-rice-casserole/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "rice" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 17")
        alert("https://iowagirleats.com/one-pot-chicken-and-rice/")
    }
    else if (selectedProtein === "chicken" && selectedCarb === "rice" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 18")
        alert("https://www.melskitchencafe.com/cheesy-skillet-chicken-and-rice-with-green-beans/")
    }


    //steak recipes


    else if (selectedProtein === "steak" && selectedCarb === "potato" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 19")
        alert("https://www.deepfriedhoney.com/steak-and-broccoli-potato-skillet/")
    }
    else if (selectedProtein === "steak" && selectedCarb === "potato" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 20")
        alert("https://onedishkitchen.com/sheet-pan-steak-potatoes/")
    }
    else if (selectedProtein === "steak" && selectedCarb === "potato" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 21")
        alert("https://whatgreatgrandmaate.com/sheet-pan-steak-and-potatoes/")
    }
    else if (selectedProtein === "steak" && selectedCarb === "sweetPotato" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 22")
        alert("https://www.omahasteaks.com/blog/recipes/pan-seared-ribeye-with-roasted-broccoli/?srsltid=AfmBOor2x2Tw84-AW6v-P8rRYbzTI_QgFEpfNgWmEZZSXUdfqZIbIZld")
    }
    else if (selectedProtein === "steak" && selectedCarb === "sweetPotato" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 23")
        alert("https://www.reddit.com/r/recipes/comments/7ewdd9/seared_new_york_strip_steak_served_with_roasted/")
    }
    else if (selectedProtein === "steak" && selectedCarb === "sweetPotato" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 24")
        alert("https://emeals.com/recipes/recipe-47024-305659-OnePan-Steak-with-Sweet-Potatoes-and-Green-Beans")
    }
    else if (selectedProtein === "steak" && selectedCarb === "rice" && selectedVegetable === "broccoli") {
        alert("READY FOR RECIPE 25")
        alert("https://www.saltandlavender.com/beef-and-broccoli/")
    }
    else if (selectedProtein === "steak" && selectedCarb === "rice" && selectedVegetable === "carrots") {
        alert("READY FOR RECIPE 26")
        alert("https://www.homechef.com/meals/korean-style-steak-strip-rice-bowl?srsltid=AfmBOoo4G8ejcPVgusehi9nu8FWjU_Hyrp9mMeWCbyOtC1tGcHu1cO2W")
    }
    else if (selectedProtein === "steak" && selectedCarb === "rice" && selectedVegetable === "greenBeans") {
        alert("READY FOR RECIPE 27")
        alert("https://www.recipetineats.com/beef-steak-fried-rice/")
    }
}

let reset = document.getElementById("reset");
reset.addEventListener("click", resetSelections)

function resetSelections() {
    selectedProtein = null;
    selectedCarb = null;
    selectedVegetable = null;
}
