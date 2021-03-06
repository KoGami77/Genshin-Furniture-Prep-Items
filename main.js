var furniture_name = " ";
var index = -1;

function set_furName(){
	
	var selects = document.getElementById("fur_name");
	furniture_name = selects.value;
}

function Search_fur(){

	for(i=0;i<furnitures.length;i++){
		if(furnitures[i][0] == furniture_name){
			index = i;
		}
	}
	if(index == -1){

		not_found();
	}
	else{
		
		send_Info();
	}
}

function not_found(){

	alert("Furniture Name Wrong!");
}

function send_Info(){

	document.getElementById("name").innerHTML = furnitures[index][0];
	document.getElementById("rarity").innerHTML = furnitures[index][1];
	document.getElementById("adept_energy").innerHTML = furnitures[index][2];
	document.getElementById("mats").innerHTML = furnitures[index][3];
}

var furnitures = [
		["Jade-Eyed Cat","3","100","Iron Chunk x 30"],
		["Northland Hound","3","100","Iron Chunk x 30"],
		["Forest Boar","3","100","Iron Chunk x 30"],
		["Azure Crane","3","100","Iron Chunk x 30"],
		["Forest-Patrol Hound","3","100","None"],
		["Shiba","3","100","None"],
		["Black-Back Hound","3","100","None"],
		["Northland Cat","3","100","None"],
		["Tiger-Striped Cat","3","100","None"],
		["Sheriff Cat","3","100","None"],
		["Timber Wall With Jade Eaves","3","30","Fragrant Cedar Wood x 8 + White Iron Chunk x 4"],
		["Dark Wood Arch Wall","3","30","Fir Wood x 4 + White Iron Chunk x 4 + Red Dye x 4"],
		["Traditional Cedar Flooring","3","30","Fragrant Cedar Wood x 4 + Red Dye x 8"],
		["Colorful Checkered Tile","3","30","White Iron Chunk x 4 + Blue Dye x 4 + Red Dye x 4"],
		["Checkered Cedar Ceiling","3","30","Fragrant Cedar Wood x 4 + Red Dye x 4 + Blue Dye x 4"],
		["Dark Checkered Ceiling","3","30","Fir Wood x 4 + Red Dye x 4 + Blue Dye x 4"],
		["Two-Tier Candle Chandelier","3","60","Birch Wood x 4 + Iron Chunk x 8"],
		["Eight-Sided Lantern: Lucky Day","3","60","Sandbearer Wood x 4 + Fabric x 4 + Red Dye x 4"],
		["Six-Sided Lantern: Harmony in Friendship","3","60","Sandbearer Wood x 8 + Fabric x 4"],
		["Embroidered Lantern: Lofty Grandeur","4","90","Sandbearer Wood x 12 + Fabric x 3 + Red Dye x 3"],
		["Fragrant Cedar Door","3","30","Pine Wood x 20 + Blue Dye x 10"],
		["Favonius Fir Door","3","30","None"],
		["Fragrant Cedar Cornering Stairs","3","30","None"],
		["Fir Wood Cornering Stairs","3","30","None"],
		["Sub-Space Boulder: Craggy Canopy","3","20","Pine Wood x 20"],
		["Sub-Space Boulder: Rocky Bulwark","3","20","Pine Wood x 20"],
		["Sub-Space Boulder: Verdant Peak","3","20","Pine Wood x 20"],
		["Sub-Space Boulder: Slumbering Stratus","3","20","Pine Wood x 20"],
		["Sub-Space Boulder: Palace Steps","3","20","Pine Wood x 20"],
		["Sub-Space Boulder: Refined Beauty","3","20","Pine Wood x 20"],
		["Sturdy Library Table","3","60","Cuihua Wood x 12",],
		["Favonius Office Table","3","60","Cuihua Wood x 12"],
		["Favonius Conference Table","3","60","Cuihua Wood x 12"],
		["Northern Birch Folding Counter","3","60","Birch Wood x 12"],
		["Wide Stone Stove","4","90","White Iron Chunk x 4 + Iron Chunk x 4"],
		["Portable Stove","3","60","Iron Chunk x 12"],
		["Long Table With Tablecloth","3","60","Pine Wood x 8 + Fabric x 4"],
		["Outdoor Pine Round Table","2","30","Pine Wood x 4"],
		["Intricately Carved Calligraphy Table","3","60","Fragrant Cedar Wood x 12"],
		["Square Pine Tea Table","3","60","Pine Wood x 8 + Red Dye x 2 + Yellow Dye x 2"],
		["Pine Reception Counter","3","60","Pine Wood x 12"],
		["Red Cedar Round Table","3","60","Fragrant Cedar Wood x 8 + Red Dye x 4"],
		["Northern Stone Hearth","3","60","White Iron Chunk x 12"],
		["Classical Lyre: Tenor of the Wind","3","60","Cuihua Wood x 12",],
		["Wooden Restaurant Signboard","2","30","Fir Wood x 4 + Blue Dye x 4"],
		["Pine Folding Screen: Billowing Sails","4","90","Pine Wood x 12 + Fabric x 3 + Red Dye x 3"],
		["Hardwood Screen: Morning Mist in Jueyun","4","90","Fragrant Cedar Wood x 12 + Fabric x 6"],
		["Soft Lounge Sofa","4","90","Pine Wood x 12 + Fabric x 6"],
		["Clear Blue Afternoon","3","60","Cuihua Wood x 8 + Blue Dye x 4"],
		["Unwavering Determination","3","60","Birch Wood x 8 + Blue Dye x 4"],
		["Pine Dining Chair","2","30","Pine Wood x 4"],
		["Pine-Backed Tea Chair","3","60","Pine Wood x 8 + Red Dye x 4"],
		["Red Pine Wood Round Stool","3","60","Pine Wood x 8 + Red Dye x 4"],
		["Bright Vase-Shaped Sconce","3","60","Iron Chunk x 8"],
		["Trusty Portable Lamp","3","60","Iron Chunk x 8"],
		["Liuli Pavilion Sandbearer Floor Lamp","3","60","Sandbearer Wood x 4 + Fabric x 4 + Red Dye x 4"],
		["Tianyuan Lantern: Fragrant Brilliance","3","60","Sandbearer Wood x 4 + Fabric x 4 + Red Dye x 4",],
		["Sturdy Birch Vanity","3","60","Birch Wood x 12"],
		["Two-Tier Library Bookshelf","4","90","Cuihua Wood x 16 + Red Dye x 8"],
		["Exquisite Cuihua Bookshelf","4","90","Cuihua Wood x 16 + Red Dye x 8"],
		["Economy Cuihua Bookshelf","4","90","Cuihua Wood x 16 + Red Dye x 8"],
		["Lost Between the Pages of a Book","4","90","Birch Wood x 16 + Blue Dye x 4 + Red Dye x 4"],
		["Archivist's Treasure Trove","4","90","Birch Wood x 16 + Red Dye x 8"],
		["Open-Top Fir Shelf","3","60","Fir Wood x 12"],
		["Fir Case Shelf Combination","3","60","Fir Wood x 12"],
		["Classic Fir Cabinet","3","60","Fir Wood x 12"],
		["Red Cedar Scroll Shelf","3","60","Fragrant Cedar Wood x 12 + Red Dye x 6"],
		["Red Cedar Curio Stand","3","60","Fragrant Cedar Wood x 12 + Red Dye x 6"],
		["Shopkeeper's Cedar Shelf","3","60","Fragrant Cedar Wood x 12"],
		["Mondstadt Rug: Crimson Ardor","3","60","Fabric x 8 + Red Dye x 4"],
		["Mondstadt Rug: Tireless Search","3","60","Fabric x 8 + Blue Dye x 4"],
		["Tavern Rug: Home Away From Home","3","60","Fabric x 8 + Yellow Dye x 2 + Blue Dye x 2"],
		["Entrance Rug: A Warm Welcome","3","60","Fabric x 8 + Red Dye x 2 + Yellow Dye x 2"],
		["Well-Worn Buckler","2","30","Fir Wood x 4 + Iron Chunk x 4"],
		["Well-Worn Shield","2","30","Fir Wood x 4 + Iron Chunk x 4"],
		["Well-Worn Sword","2","30","Fir Wood x 4 + Iron Chunk x 4"],
		["Landscape Painting: Country Home","4","90","Pine Wood x 8 + Blue Dye x 8 + Yellow Dye x 8"],
		["Landscape Painting: Distant Clouds","4","90","Pine Wood x 8 + Blue Dye x 8 + Yellow Dye x 8"],
		["Landscape Painting: Nameless Precipice","4","90","Pine Wood x 8 + Yellow Dye x 8 + Red Dye x 8"],
		["Rally Banner","3","60","Birch Wood x 4 + Fabric x 4 + Red Dye x 4"],
		["Pure Spirit Banner","3","60","Birch Wood x 4 + Fabric x 4 + Yellow Dye x 4"],
		["Favonius Coat of Arms","4","90","White Iron Chunk x 12 + Blue Dye 6 + Yellow Dye x 6"],
		["Mounted Record Board","2","30","Fir Wood x 4 + Blue Dye x 4"],
		["Mounted Noticeboard","2","30","Fir Wood x 4 + Blue Dye x 4"],
		["Fine Brushwork: Peaks of Minlin","4","90","Bamboo Segment x 8 + Blue Dye x 8 + Yellow Dye x 8"],
		["Fine Brushwork: Bowl of Blossoms","4","90","Bamboo Segment x 8 + Blue Dye x 8 + Red Dye x 8"],
		["Fine Brushwork: Mountains Rising From the Mist","4","90","Bamboo Segment x 8 + Blue Dye x 8 + Yellow Dye x 8"],
		["Neat Stack of Books","3","60","Pine Wood x 4 + Red Dye x 4"],
		["Scholar's Weariness","3","60","Pine Wood x 4 + Red Dye x 4"],
		["Etiquette of Correspondence","3","60","Pine Wood x 4"],
		["Exquisite Hourglass Ornament","3","60","White Iron Chunk x 4 + Blue Dye x 4"],
		["Flower Arrangement: Baby Blue Tranquility","3","60","White Iron Chunk x 8"],
		["Potted Plant: Crystalline Breeze","3","60","White Iron Chunk x 4 + Blue Dye x 4"],
		["Flower Arrangement: Sprawling Daybreak","3","60","Pine Wood x 4 + Red Dye x 4"],
		["Potted Flower: Fragrant Facade","3","60","Pine Wood x 4 + Red Dye x 4"],
		["Alchemic Device: Between Fire and Water","3","60","White Iron Chunk x 4 + Red Dye x 4"],
		["Alchemic Component: Burden of Dust","3","60","White Iron Chunk x 4 + Red Dye x 4"],
		["Calligraphy Set: Assiduous Calligraphy","3","60","Bamboo Segment x 4 + Blue Dye x 4 + White Iron Chunk x 4"],
		["Potted Plant: Petite Perrenial","3","60","Pine Wood x 4 + Blue Dye x 4"],
		["Golden Triple-Arm Candelabrum","3","60","Iron Chunk x 4 + Yellow Dye x 4"],
		["Breeze-Blessed Bed","3","60","Fragrant Cedar Wood x 12 + Red Dye x 3 + Blue Dye x 3"],
		["Cloudy Haze Bed","3","60","Sandbearer Wood x 12 + Red Dye x 3 + Yellow Dye x 3"],
		["Large Birch Wardrobe","3","60","Birch Wood x 12"],
		["Birch Double Drawer Nightstand","3","60","Birch Wood x 12"],
		["Gold-Lined Sandbearer Nightstand","3","60","Sandbearer Wood x 8 + Red Dye x 2 + Blue Dye x 2"],
		["Gold-Lined Sandbearer Wardrobe","3","60","Sandbearer Wood x 12 + Blue Dye x 3 + Red Dye x 3"],
		["Embroidered Curtains","4","90","Fabric x 12 + Red Dye x 12"],
		["Silk Curtains: Fetching the Sanguine Sky","4","90","Fabric x 12 + Red Dye x 6 + Yellow Dye x 6"],
		["Floral Screen: Jade and Gold","4","90","Fabric x 12 + Red Dye x 6 + Yellow Dye x 6"],
		["Seashell Table Lamp","3","60","Iron Chunk x 8"],
		["Bustling Sundry Stand","3","60","Fir Wood x 8 + Fabric x 2 + Red Dye x 2"],
		["Profitable Fruit Stand","3","60","Fir Wood x 8 + Red Dye x 2 + Fabric x 2"],
		["Real Deal Fruit Stand","3","60","Fir Wood x 8 + Fabric x 4"],
		["Open-Air Workshop","4","90","Fir Wood x 12 + White Iron Chunk x 6 + Iron Chunk x 6"],
		["Bountiful Harvest Fruit Cart","3","60","Fir Wood x 4 + Fabric x 4 + Red Dye x 4"],
		["Multi-Arched Mondstadt Building","3","60","Fir Wood x 12 + Birch Wood x 6"],
		["Mondstadt House With Overhanging Attic","3","60","Fir Wood x 12 + Birch Wood x 6"],
		["Warm and Dry Mondstadt Apartment","3","60","Fir Wood x 12 + Birch Wood x 6"],
		["Old Wind-Resistant Mondstadt House","3","60","Fir Wood x 12 + Birch Wood x 6"],
		["Bird and Blossom Design Fountain","4","90","White Iron Chunk x 12 + Iron Chunk x 12"],
		["Country Home With Tall Attic","3","60","Fir Wood x 12 + Birch Wood x 6"],
		["Classic Country Home","3","60","Fir Wood x 12 + Birch Wood x 6"],
		["Pocket-Sized Pine Cabin","3","60","Pine Wood x 12"],
		["Traveling Merchant North of the Stone Gate","3","60","Bamboo Segment x 12"],
		["Clouds East of Bishui","3","60","Fir Wood x 8 + Fabric x 2 + Blue Dye x 2"],
		["Roll-Roofed Fruit and Vegetable Cart","3","60","Birch Wood x 12"],
		["Straw Hut","2","30","Fir Wood x 8"],
		["Straw Depot","2","30","Fir Wood x 8"],
		["Straw Shed","2","30","Fir Wood x 8"],
		["Liyue House: Solitary Retreat","3","60","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Liyue House: Of Timber and Stone","3","60","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Liyue Pitstop: Tea Fragrance on the Old Road","3","60","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Liyue House: Moon-Crested Eaves","3","60","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Liyue House: Amity Abounds","3","60","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Liyue Shop: Citywide Favorite","3","60","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Liyue House: Time Waits for No-One","3","60","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Adeptus Gate","4","90","Pine Wood x 6 + Sandbearer Wood x 6 + White Iron Chunk x 6"],
		["Hilichurl Outpost Hut","3","60","Birch Wood x 12"],
		["Hilichurl Spiral Watchtower","3","60","Birch Wood x 12"],
		["Hilichurl Chieftain Hall","4","90","Birch Wood x 30"],
		["Hilichurl Straw Hut","2","30","Birch Wood x 4"],
		["Two-Story Hilichurl Sentry Tower","3","60","Birch Wood x 12"],
		["Lightning Protective Tent","3","60","Birch Wood x 8 + Fabric x 4"],
		["Simple Single-Person Tent","3","60","Birch Wood x 8 + Fabric x 4"],
		["Mondstadt Mansion: Windward Manor","5","750","Cuihua Wood x 50 + Yellow Dye x 20"],
		["Doorless Pine Cupboard","2","30","Pine Wood x 6 + Fabric x 2"],
		["Heavy Fir Forging Table","3","60","Fir Wood x 12 + Fabric x 4"],
		["Long Pine Table","2","30","Pine Wood x 8"],
		["Four-Quadrant Cooking Cauldron","3","60","Birch Wood x 8 + Fabric x 4"],
		["Large Stone Mill","3","60","Fir Wood x 4 + Iron Chunk x 8"],
		["Alchemist's Crafting Bench","4","90","White Iron Chunk x 20"],
		["Fir Shelves","2","30","Fir Wood x 4"],
		["Fir Weapon Rack","2","30","Fir Wood x 4"],
		["Hardwood Weapon Rack","3","60","Fir Wood x 8"],
		["Messy Pile of Fir Crates","2","30","Fir Wood x 4"],
		["Neat Stack of Fir Kegs","2","30","Fir Wood x 4"],
		["Simple Cargo Cart","2","30","Fir Wood x 4"],
		["Heavy Hay Bale","2","30","Fir Wood x 4"],
		["Sturdy Stone Well","3","60","fir Wood x 4 + White Iron Chunk x 8"],
		["Wine Jar With Bamboo Casing: Spirits Awaiting Moonrise","3","60","Bamboo Segment x 12"],
		["Potted Plant: Verdant Vastness","3","60","White Iron Chunk x 4 + Pine Wood x 8"],
		["Toy Stand: Dazzling Delights","3","60","Fir Wood x 4 + Bamboo Segment x 4 + Fabric x 4"],
		["Umbrella Shop: Kaleidoscope of Parasol Colors","3","60","Fir Wood x 4 + Bamboo Segment x 4 + Fabric x 4"],
		["Fruit and Veggie Stall: Harvest Bounties","3","60","Pine Wood x 12"],
		["Wine Shop Display Counter: To Your Heart's Content","3","60","Pine Wood x 12"],
		["Crude Double-Decker Pallet","3","60","Fir Wood x 8 + Fabric x 4 + Blue Dye x 4"],
		["Two-Tier Vendor's Booth: Rising Fortunes","3","60","Pine Wood x 12"],
		["Farmer's Scarecrow","3","60","Fir Wood x 4 + Fabric x 4 + Red Dye x 4"],
		["Storage Sack: Buzz-Off Bag","2","30","Fabric x 4"],
		["Old Well","2","30","White Iron Chunk x 4"],
		["Roofed Well: For Purity","3","60","Fir Wood x 8 + White Iron Chunk x 4"],
		["Stone Lion Statue: The Warding","4","90","White Iron Chunk x 12"],
		["Stone Lion Statue: The Knowing","4","90","White Iron Chunk x 12"],
		["Fruit Seller's Caution","3","60","Fabric x 12"],
		["Fruit Seller's Toil","3","60","Fabric x 12"],
		["Hardened Glazed Vase","2","30","Iron Chunk x 4"],
		["Weathered Bamboo Fence","2","30","Bamboo Segment x 4"],
		["Sturdy Pine Fence","2","30","Pine Wood x 4"],
		["Wooden Hilichurl Fence","2","30","Fir Wood x 4"],
		["Hilichurl Totem Fence","2","30","Fir Wood x 4"],
		["Hilichurl Archery Target","3","60","Fir Wood x 8"],
		["Hilichurl Horned Pot","3","60","Iron Chunk x 12"],
		["Deadwood Road Sign","2","30","Fir Wood x 4"],
		["Smooth Wooden Bench","2","30","Fir Wood x 4"],
		["Smooth Stone Bench","2","30","White Iron x 4"],
		["Bamboo Outdoor Tea Table","3","60","Bamboo Segment x 12"],
		["Wooden Outdoor Tea Table","3","60","Fir Wood x 12"],
		["Water-Retaining Flower Beds","3","60","Fir Wood x 12"],
		["Lush Grapevine","3","60","Fir Wood x 12"],
		["Wrought Iron Carved Street Light","3","60","Iron Chunk x 4 + Fabric x 4 + Blue Dye x 4"],
		["Pine Street Light","2","30","Pine Wood x 4"],
		["Evil-Repelling Lantern: All-Around Lighting","3","60","Pine Wood x 4 + Bamboo Segment x 4"],
		["Four Corners Lantern: Amity From Afar","3","60","Pine Wood x 4 + Bamboo Segment x 4"],
		["Shadow Lamp: Painted Shadow","3","60","Sandbearer Wood x 4 + Bamboo Segment x 4"],
		["Fragrant Cedar Vegetable Rack","3","60","Fragrant Cedar Wood x 10 + Red Dye x 5"],
		["Blooming Hedge","3","20","Fragrant Cedar Wood x 10"],
		["Ordinary Garden Hedge","3","20","Fragrant Cedar Wood x 10"],
		["Concealing Leaves","3","20","Fragrant Cedar Wood x 10"],
		["Green Fountain","3","20","Fragrant Cedar Wood x 10"],
		["Kindletree","3","20","Fragrant Cedar Wood x 10"],
		["Crystalfly's Perch","3","20","Fragrant Cedar Wood x 10"],
		["Southern Sweetleaves","3","20","Fragrant Cedar Wood x 10"],
		["Brightcrown Plumebush","3","20","Fragrant Cedar Wood x 10"],
		["The Color of the Wind","3","20","Fragrant Cedar Wood x 20"],
		["Silversand Coconut Tree","3","20","Fragrant Cedar Wood x 20"],
		["Whitesand Coconut Tree","3","20","Fragrant Cedar Wood x 20"],
		["Tianheng Red Maple: Branches Aflame","3","20","Fragrant Cedar Wood x 20"],
		["Peculiar Knotwood Tree","3","20","Fragrant Cedar Wood x 20"],
		["Yellow Sandbearer Tree","3","20","Fragrant Cedar Wood x 20"],
		["Hiding Grazestone","3","20","White Iron Chunk x 10"],
		["Recreation Stone","3","20","White Iron Chunk x 10"],
		["Unmoving Kingstone","3","20","White Iron Chunk x 10"],
		["The Adventurer's Burdens","3","60","Fabric x 4 + Pine Wood x 4"],
		["Birch Main Courtyard Gate","4","90","Birch Wood x 12 + White Iron Chunk x 6"],
		["Carved Courtyard Fence Ending","4","90","Birch Wood x 8 + White Iron Chunk x 4"],
		["Carved Courtyard Fence","4","90","Birch Wood x 8 + White Iron Chunk x 4"],
		["Thundering Heavens Drum","4","90","Sandbearer Wood x 12 + Fabric x 6 + Yellow Dye x 6"],
		["Wing House: Dawn & Dusk","4","90","Sandbearer Wood x 12 + Pine Wood x 12 + White Iron Chunk x 6"],
		["Pavilion: Stargazer's Shelter","4","90","Sandbearer Wood x 18 + White Iron Chunk x 6"],
		["Scenic Corridor: Sylvan Stroll","4","90","Sandbearer Wood x 12 + White Iron Chunk x 6"],
		["Courtyard Wall: Spring and Autumn Splendor","4","90","Sandbearer Wood x 8 + White Iron Chunk x 4"],
		["Wall Corner: Fragrant Nook","4","90","Sandbearer Wood x 8 + White Iron Chunk x 4"],
		["Courtyard Wall: All in a Row","4","90","Sandbearer Wood x 8 + White Iron Chunk x 4"],
		["Courtyard Wall: Peace Across","4","90","Sandbearer Wood x 8 + White Iron Chunk x 4"],
		["Main Entrance: Gateway to the Clouds","4","90","Sandbearer Wood x 12 + White Iron Chunk x 6"],
		["Perimeter Wall: Scenic Archway","4","90","Sandbearer Wood x 12 + White Iron Chunk x 6"],
		["Ballad-Spinning Windwheel","4","90","Birch Wood x 24 + White Iron Chunk x 6"],
		["Tasseled Lantern: Deck the Streets","4","90","Sandbearer Wood x 6 + Fabric x 6 + Red Dye x 6"],
		["Lantern-Lit Stage: Crescendo","4","90","Fir Wood x 6 + Sandbearer Wood x 6 + Red Dye x 6"],
		["Wall 1","1","1","Fir Wood x 10 + Red Dye x 5"],
		["Wall 2","1","1","Fir Wood x 10 + Yellow Dye x 5"],
		["Floor 1","1","1","Sandbearer Wood x 10 + Blue Dye x 5"],
		["Floor 2","1","1","Sandbearer Wood x 10 + Red Dye x 5"],
		["Ceiling 1","1","1","Fragrant Cedar Wood x 10 + Yellow Dye x 5"],
		["Ceiling 2","1","1","Fragrant Cedar Wood x 10 + Blue Dye x 5"],
		["Ceiling Lamp 1","1","1","Iron Chunk x 20 + Sandbearer Wood x 10 + Red Dye x 15"],
		["Ceiling Lamp 2","1","1","Iron Chunk x 20 + Sandbearer Wood x 10 + Yellow Dye x 15"],
		["Test Grill","1","1","Iron Chunk x 30"]
];