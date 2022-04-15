let booklist = [
    {id:0, price: 2.89, title:'1984',src:'src/img/1984.jpg'},
    {id:1, price: 2.29, title:'A Storm of Swords', src:'src/img/a_storm_of_swords.jpg'},
    {id:2, price: 1.99, title:'Harry Potter and the Chamber of Secrets', src:'src/img/harry_potter_and_the_chamber_of_secrets.jpg'},
    {id:3, price: 3.00, title:'Harry Potter and the Goblet of Fire', src:'src/img/harry_potter_and_the_goblet_of_fire.jpg'},
    {id:4, price: 2.30, title:'Harry Potter and the Half-Blood Prince', src:'src/img/harry_potter_and_the_half_blood_prince.jpg'},
    {id:5, price: 2.00, title:'Harry Potter and the Prisoner of Azkaban', src:'src/img/harry_potter_and_the_prisoner_of_azkaban.jpg'},
    {id:6, price: 2.00, title:'Harry Potter and the Sorcerer\'s stone', src:'src/img/harry_potter_and_the_sorcerers_stone.jpg'},
    {id:7, price: 1.99, title:'Queen of the Conquered', src:'src/img/queen_of_the_conquered.jpg'},
    {id:8, price: 1.89, title:'Six of Crows', src:'src/img/six_of_crows.jpg'},
    {id:9, price: 1.01, title:'The Bone Clocks', src:'src/img/the_bone_clocks.jpg'},
    {id:10, price: 1.85, title:'The Hundred Thousand Kingdoms', src:'src/img/the_hundred_thousand_kingdoms.jpg'},
    {id:11, price: 2.50, title:'The Name of the Wind', src:'src/img/the_name_of_the_wind.jpg'},
    {id:12, price: 1.85, title:'The rage of Dragons',src:'src/img/the_rage_of_dragons.jpg'},
    {id:13, price: 2.03, title:'The Stone Sky',src:'src/img/the_stone_sky.jpg'},
    {id:14, price: 1.98, title:'Who Fears Death',src:'src/img/who_fears_death.jpg'},
    {id:15, price: 1.64, title:'Song of Blood and Stone', src:'src/img/song_of_blood_and_stone.jpg'},
    {id:16, price:2.02, title:'We Hunt the Flame', src:'src/img/we_hunt_the_flame.jpg'},
    {id:17, price: 2.89, title:'Harry Potter and the Order of the Phoenix', src:'src/img/harry_potter_and_the_order_of_the_phoenix.jpg'},
    {id:18, price: 2.55, title:'Educated: A Memoir', src:'src/img/educated_a_memoir.jpg'},
    {id:19, price: 3.80, title:'Little Fires Everywhere', src:'src/img/little_fires_everywhere.jpg'},
    {id:20, price: 1.98, title:'The Outsider', src:'src/img/the_outsider.jpg'},
    {id:21, price: 2.21, title:'Becoming', src:'src/img/becoming.jpg'},
    {id:22, price:2.15, title:'All the Light We Cannot See', src:'src/img/all_the_light_we_cannot_see.jpg'},
    {id:23, price:1.99, title:'Where the Crawdads Sing', src:'src/img/where_the_crawdads_sing.jpg'},
    {id:24, price:1.57, title:'Midnight Sun', src:'src/img/midnight_sun.jpg'},
    {id:25, price:1.49, title:'The Deep End', src:'src/img/the_deep_end.jpg'},
    {id:26, price:2.19, title:'The Fault in Our Stars', src:'src/img/the_fault_in_our_starts.jpg'},
    {id:27, price:2.01, title:'The House Girl', src:'src/img/the_house_girl.jpg'},
    {id:28, price:2.86, title:'Wonder', src:'src/img/wonder.jpg'}
]

//Create a shopping cart list in sessionStorage
const createShopingCart = () =>{
    if(JSON.parse(sessionStorage.getItem('shoppingCart')) == null) {
        sessionStorage.setItem('shoppingCart', JSON.stringify([]))
    }
}
createShopingCart()
let shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart'))

//item class for storing data in shopping cart list
function item (id, price){
    this.id = id;
    this.price = price;
    this.count = 1;
}