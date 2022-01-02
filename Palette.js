/*/////////////
ref. 
210516 de Sayama https://openprocessing.org/sketch/1195392 - 2021
*//////////////

class VolumePalette
{
	constructor(_colArr, _rateArr)
	{
		if(_colArr.length != _rateArr.length) print("VolumePalette param  > different num");
		this.cols = _colArr;
		this.rate = _rateArr;		
		this.SortMax();
		this.RGBPalette=[[188,96,78],
					[215,153,130],
					[69,92,113],
					[162,181,198],
					[106,133,158],
					[219,226,233],
					[56,76,94],
					[199,209,219],
					[155,91,102],
					[219,169,178],
					[183,115,127],
					[129,73,82],
					[113,65,73],
					[223,179,187],
					[120,87,98],
					[183,157,167],
					[149,111,124],
					[215,203,211],
					[237,226,237],
					[209,237,164],
					[208,251,178],
					[252,171,152],
					[254,205,194],
					[255,131,111],
					[255,222,213],
					[80,139,125],
					[71,123,110],
					[111,174,159],
					[144,192,180],
					[99,100,88],
					[242,151,70],
					[250,211,150],
					[242,175,104],
					[247,201,95],
					[114,132,60],
					[66,77,33],
					[98,113,51],
					[216,228,152],
					[76,88,38],
					[49,57,25],
					[148,171,79],
					[174,191,121],
					[147,180,206],
					[90,143,184],
					[184,210,230],
					[115,159,193],
					[205,223,237],
					[44,89,124],
					[238,252,252],
					[53,102,139],
					[217,235,241],
					[255,223,217],
					[255,238,235],
					[135,125,115],
					[188,180,172],
					[176,166,156],
					[72,72,72],
					[110,101,92],
					[230,232,232],
					[103,85,65],
					[182,155,126],
					[154,124,92],
					[242,227,206],
					[89,73,55],
					[209,186,161],
					[164,152,120],
					[231,226,211],
					[221,216,203],
					[127,106,85],
					[133,123,97],
					[0,0,0],
					[30,17,8],
					[71,129,165],
					[120,128,164],
					[199,202,215],
					[153,159,183],
					[91,144,113],
					[57,111,82],
					[178,212,189],
					[123,172,148],
					[4,77,51],
					[196,222,204],
					[161,194,215],
					[107,158,191],
					[219,236,245],
					[57,105,135],
					[189,221,237],
					[119,107,152],
					[183,191,221],
					[173,167,199],
					[152,145,182],
					[163,174,209],
					[92,84,120],
					[211,215,237],
					[80,81,141],
					[77,46,138],
					[125,119,165],
					[227,29,66],
					[98,93,80],
					[177,170,151],
					[142,144,120],
					[79,75,65],
					[235,234,231],
					[152,94,51],
					[122,69,31],
					[184,119,72],
					[255,123,77],
					[253,93,53],
					[209,88,7],
					[235,99,7],
					[255,227,0],
					[255,181,21],
					[255,87,115],
					[252,144,162],
					[255,121,140],
					[255,178,187],
					[101,165,125],
					[71,119,89],
					[153,195,170],
					[77,131,97],
					[44,106,69],
					[123,181,71],
					[158,207,52],
					[201,194,88],
					[125,93,87],
					[98,75,69],
					[166,136,129],
					[85,32,14],
					[101,57,25],
					[54,31,14],
					[73,42,19],
					[198,98,24],
					[226,115,35],
					[172,84,20],
					[233,106,103],
					[210,16,53],
					[253,156,151],
					[224,72,72],
					[187,5,31],
					[96,103,140],
					[85,91,123],
					[143,156,193],
					[112,125,162],
					[76,82,110],
					[70,69,99],
					[187,195,217],
					[255,164,190],
					[209,40,106],
					[255,176,190],
					[226,72,116],
					[205,47,99],
					[255,192,205],
					[255,251,239],
					[243,71,139],
					[224,40,118],
					[255,140,174],
					[148,168,198],
					[70,106,142],
					[116,142,182],
					[192,204,222],
					[196,142,112],
					[182,117,82],
					[238,211,196],
					[187,129,97],
					[135,85,57],
					[160,108,80],
					[243,225,215],
					[150,118,86],
					[121,96,71],
					[188,154,120],
					[220,196,170],
					[143,123,110],
					[106,80,70],
					[227,204,190],
					[220,198,184],
					[232,135,155],
					[207,115,115],
					[228,166,172],
					[230,138,138],
					[255,189,189],
					[188,67,101],
					[171,2,73],
					[255,215,215],
					[218,103,131],
					[240,206,212],
					[240,234,218],
					[103,64,118],
					[144,134,169],
					[20,170,208],
					[38,150,182],
					[48,194,236],
					[24,126,86],
					[27,157,107],
					[24,144,101],
					[17,90,59],
					[21,111,73],
					[150,158,126],
					[102,109,79],
					[171,177,151],
					[196,205,172],
					[141,166,117],
					[88,113,65],
					[200,216,184],
					[115,139,91],
					[64,82,48],
					[156,89,158],
					[125,48,100],
					[70,5,45],
					[151,11,35],
					[123,0,27],
					[135,7,31],
					[130,38,55],
					[255,145,145],
					[253,181,181],
					[173,114,57],
					[145,79,18],
					[220,156,86],
					[194,129,66],
					[247,187,119],
					[189,155,81],
					[141,120,75],
					[200,171,108],
					[170,143,86],
					[126,107,66],
					[219,190,127],
					[253,249,205],
					[114,55,93],
					[186,145,170],
					[148,96,131],
					[87,36,51],
					[101,127,127],
					[189,203,203],
					[152,174,174],
					[221,227,227],
					[86,106,106],
					[5,101,23],
					[7,115,27],
					[55,132,119],
					[73,179,161],
					[61,147,132],
					[156,164,130],
					[95,102,72],
					[136,146,104],
					[63,143,41],
					[183,139,97],
					[160,112,66],
					[198,159,123],
					[131,94,57],
					[64,106,58],
					[27,89,21],
					[27,83,0],
					[51,131,98],
					[143,192,152],
					[83,151,106],
					[185,215,192],
					[167,205,175],
					[71,167,47],
					[137,138,88],
					[185,185,130],
					[166,167,93],
					[92,114,148],
					[176,192,218],
					[123,142,171],
					[163,123,167],
					[227,203,227],
					[195,159,195],
					[215,202,230],
					[108,58,110],
					[218,210,233],
					[131,91,139],
					[253,237,84],
					[255,214,0],
					[255,251,139],
					[143,67,15],
					[207,121,57],
					[179,95,43],
					[255,211,181],
					[111,47,0],
					[247,167,119],
					[201,107,112],
					[171,51,87],
					[251,191,194],
					[231,169,172],
					[136,21,49],
					[255,121,146],
					[255,203,213],
					[255,173,188],
					[231,73,103],
					[138,110,78],
					[203,182,156],
					[164,131,92],
					[107,87,67],
					[210,188,166],
					[179,159,139],
					[250,246,240],
					[75,60,42],
					[227,216,204],
					[167,174,56],
					[136,141,51],
					[224,232,104],
					[192,200,64],
					[239,244,164],
					[191,166,113],
					[204,183,132],
					[184,157,100],
					[37,59,115],
					[33,48,99],
					[27,40,83],
					[136,186,145],
					[162,214,173],
					[109,171,119],
					[191,246,224],
					[252,252,238],
					[188,141,14],
					[229,206,151],
					[208,165,62],
					[245,236,203],
					[169,130,4],
					[148,140,54],
					[147,139,55],
					[199,192,119],
					[188,179,76],
					[130,123,48],
					[250,50,3],
					[229,92,31],
					[247,151,111],
					[242,120,66],
					[98,138,40],
					[199,230,102],
					[127,179,53],
					[85,120,34],
					[254,215,204],
					[247,203,191],
					[254,231,218],
					[100,171,186],
					[61,149,165],
					[153,207,217],
					[52,127,140],
					[229,252,253],
					[211,211,214],
					[236,236,236],
					[108,108,108],
					[86,86,86],
					[66,66,66],
					[132,132,132],
					[209,209,209],
					[131,151,95],
					[94,107,71],
					[114,130,86],
					[252,176,185],
					[97,122,82],
					[166,194,152],
					[105,136,90],
					[215,237,204],
					[23,73,35],
					[32,95,46],
					[156,36,98],
					[130,0,67],
					[197,73,137],
					[155,19,89],
					[244,174,213],
					[234,156,196],
					[246,127,0],
					[247,139,19],
					[253,189,150],
					[179,47,72],
					[234,134,153],
					[219,85,110],
					[145,53,70],
					[199,43,59],
					[166,69,16],
					[130,52,10],
					[167,19,43],
					[183,31,51],
					[238,84,110],
					[86,74,74],
					[251,173,180],
					[242,118,136],
					[179,59,75],
					[104,37,26],
					[186,139,124],
					[150,74,63],
					[248,202,200],
					[19,71,125],
					[17,65,109],
					[14,54,92],
					[245,173,173],
					[227,109,109],
					[255,201,201],
					[241,135,135],
					[191,45,45],
					[255,226,226],
					[62,182,161],
					[169,226,216],
					[89,199,180],
					[47,140,132],
					[145,123,115],
					[215,206,203],
					[192,179,174],
					[161,75,81],
					[204,132,124],
					[188,108,100],
					[226,160,153],
					[255,223,213],
					[136,62,67],
					[235,183,175],
					[247,175,147],
					[126,177,200],
					[172,216,226],
					[197,232,237],
					[255,255,255],
					[140,140,140],
					[171,171,171],
					[243,206,117],
					[223,182,95],
					[246,220,152],
					[205,157,55],
					[203,144,81],
					[228,187,142],
					[248,228,200],
					[236,204,158],
					[255,139,0],
					[255,191,87],
					[255,163,43],
					[251,213,187],
					[255,226,207],
					[255,238,227],
					[52,125,117],
					[82,179,164],
					[85,147,146],
					[205,217,154],
					[226,237,181],
					[237,254,217],
					[185,85,68],
					[152,68,54],
					[217,137,120],
					[197,106,91],
					[244,187,169],
					[134,48,34],
					[238,170,155],
					[215,215,216],
					[174,174,177],
					[184,184,187],
					[228,180,104],
					[174,119,32],
					[253,215,85],
					[206,145,36],
					[255,200,64],
					[148,99,26],
					[162,109,32],
					[255,241,175],
					[91,163,179],
					[18,174,186],
					[6,227,230],
					[4,196,202],
					[72,142,154],
					[144,195,204],
					[54,105,112],
					[188,227,230],
					[63,124,133],
					[163,99,139],
					[99,54,102],
					[219,179,203],
					[128,58,107],
					[92,24,78],
					[230,204,217],
					[59,118,143],
					[79,147,167],
					[62,133,162],
					[28,80,102],
					[50,102,124],
					[252,251,248],
					[224,215,238],
					[227,227,230],
					[240,238,249],
					[249,247,241],
					[188,150,106],
					[231,214,193],
					[216,188,154],
					[167,124,73],
					[204,217,177],
					[113,147,92],
					[228,236,212],
					[254,211,118],
					[255,231,147],
					[255,233,173],
					[217,213,109],
					[229,226,114],
					[255,253,227]];
					
		this.nameColors=["Alizarin ","Alizarin Light ","Antique Blue Dark ","Antique Blue Light ","Antique Blue Medium ","Antique Blue Ultra Very Light ","Antique Blue Very Dark ","Antique Blue Very Light ","Antique Mauve Dark ","Antique Mauve Light ","Antique Mauve Medium ","Antique Mauve Medium Dark ","Antique Mauve Very Darkv ","Antique Mauve Very Light ","Antique Violet Dark ","Antique Violet Light ","Antique Violet Medium ","Antique Violet Very Light ","Apple Blossom ","Apple Green ","Apple Green Pale ","Apricot ","Apricot Light ","Apricot Medium ","Apricot Very Light ","Aquamarine ","Aquamarine Dark ","Aquamarine Light ","Aquamarine Very Light ","Ash Gray Very Light ","Autumn Gold Dark ","Autumn Gold Light ","Autumn Gold Medium ","Autumn Gold medium Light ","Avocado Green ","Avocado Green Dark ","Avocado Green Medium ","Avocado Green Ultra Light ","Avocado Green Very Dark ","Avocado Green Black ","Avocado Green Light ","Avocado Green Very Light ","Baby Blue ","Baby Blue Dark ","Baby Blue Light ","Baby Blue Medium ","Baby Blue Pale ","Baby Blue Ultra Very Dark ","Baby Blue Ultra Very Light ","Baby Blue Very Dark ","Baby Blue Very Light ","Baby Pink ","Baby Pink Light ","Beaver Gray Dark ","Beaver Gray Light ","Beaver Gray Medium ","Beaver Gray Ultra Dark ","Beaver Gray Very Dark ","Beaver Gray Very Light ","Beige Brown Dark ","Beige Brown Light ","Beige Brown Medium ","Beige Brown Ultra Very Light ","Beige Brown Very Dark ","Beige Brown Very Light ","Beige Gray Dark ","Beige Gray Light ","Beige Gray Medium ","Beige Gray Ultra Dark ","Beige Gray Very Dark ","Black ","Black Brown ","Blue Dark ","Blue Gray ","Blue Gray Light ","Blue Gray Medium ","Blue Green ","Blue Green Dark ","Blue Green Light ","Blue Green Medium ","Blue Green Very Dark ","Blue Green Very Light ","Blue Light ","Blue Medium ","Blue Ultra Very Light ","Blue Very Dark ","Blue Very Light ","Blue Violet Dark ","Blue Violet Light ","Blue Violet Medium ","Blue Violet Medium Dark ","Blue Violet Medium Light ","Blue Violet Very Dark ","Blue Violet Very Light ","Blueberry ","Blueberry Dark ","Blueberry Medium Light ","Bright Red ","Brown Gray Dark ","Brown Gray Light ","Brown Gray Medium ","Brown Gray Very Dark ","Brown Gray Very Light ","Brown Light ","Brown Medium ","Brown Very Light ","Burnt Orange ","Burnt Orange Bright ","Burnt Orange Dark ","Burnt Orange Medium ","Canary Bright ","Canary Deep ","Carnation Dark ","Carnation Light ","Carnation Medium ","Carnation Very Light ","Celadon Green ","Celadon Green Dark ","Celadon Green Light ","Celadon Green Medium ","Celadon Green VD ","Chartreuse ","Chartreuse Bright ","Chartreuse Light ","Cocoa ","Cocoa Dark ","Cocoa Light ","Cocoa Very Dark ","Coffee Brown Dark ","Coffee Brown Ultra Dark ","Coffee Brown Very Dark ","Copper ","Copper Light ","Copper Medium ","Coral ","Coral Dark ","Coral Light ","Coral Medium ","Coral Red Very Dark ","Cornflower Blue ","Cornflower Blue Dark ","Cornflower Blue Light ","Cornflower Blue Medium ","Cornflower Blue Very Dark ","Cornflower Blue Very Dark ","Cornflower Blue Very Light ","Cranberry ","Cranberry Dark ","Cranberry Light ","Cranberry Medium ","Cranberry Very Dark ","Cranberry Very Light ","Cream ","Cyclamen Pink ","Cyclamen Pink Dark ","Cyclamen Pink Light ","Delft Blue ","Delft Blue Dark ","Delft Blue Medium ","Delft Blue Pale ","Desert Sand ","Desert Sand Dark ","Desert Sand Light ","Desert Sand Medium ","Desert Sand Ultra Very Dark ","Desert Sand Very Dark ","Desert Sand Very Light ","Drab Brown ","Drab Brown Dark ","Drab Brown Light ","Drab Brown Very Light ","Driftwood ","Driftwood Dark ","Driftwood Light ","Driftwood Medium Light ","Dusty Rose ","Dusty Rose Dark ","Dusty Rose Light ","Dusty Rose Medium ","Dusty Rose Medium Very Light ","Dusty Rose Ultra Dark ","Dusty Rose Ultra Very Dark ","Dusty Rose Ultra Very Light ","Dusty Rose Very Dark ","Dusty Rose Very Light ","Ecru ","Eggplant ","Eggplant Medium Light ","Electric Blue ","Electric Blue Dark ","Electric Blue Medium ","Emerald Green Dark ","Emerald Green Light ","Emerald Green Medium ","Emerald Green Ultra Very Dark ","Emerald Green Very Dark ","Fern Green ","Fern Green Dark ","Fern Green Light ","Fern Green Very Light ","Forest Green ","Forest Green Dark ","Forest Green Light ","Forest Green Medium ","Forest Green Very Dark ","Fuschia ","Fuschia Dark ","Fuschia Very Dark ","Garnet ","Garnet Dark ","Garnet Medium ","Garnet Very Dark ","Geranium ","Geranium Pale ","Golden Brown ","Golden Brown Dark ","Golden Brown Light ","Golden Brown Medium ","Golden Brown Pale ","Golden Olive ","Golden Olive Dark ","Golden Olive Light ","Golden Olive Medium ","Golden Olive Very Dark ","Golden Olive Very Light ","Golden Yellow Very Light ","Grape Dark ","Grape Light ","Grape Medium ","Grape Very Dark ","Gray Green Dark ","Gray Green Light ","Gray Green Medium ","Gray Green Very Light ","Gray Green Vy Dark ","Green ","Green Bright ","Green Bright Dark ","Green Bright Light ","Green Bright Medium ","Green Gray ","Green Gray Dark ","Green Gray Medium ","Green Light ","Hazelnut Brown ","Hazelnut Brown Dark ","Hazelnut Brown Light ","Hazelnut Brown Very Dark ","Hunter Green ","Hunter Green Dark ","Hunter Green Very Dark ","Jade Green ","Jade Light ","Jade Medium ","Jade Ultra Very Light ","Jade Very Light ","Kelly Green ","Khaki Green Dark ","Khaki Green Light ","Khaki Green Medium ","Lavender Blue Dark ","Lavender Blue Light ","Lavender Blue Medium ","Lavender Dark ","Lavender Light ","Lavender Medium ","Lavender Pale ","Lavender Ultra Dark ","Lavender Ultra Light ","Lavender Very Dark ","Lemon ","Lemon Dark ","Lemon Light ","Mahogany Dark ","Mahogany Light ","Mahogany Medium ","Mahogany Ultra Very Light ","Mahogany Very Dark ","Mahogany Very Light ","Mauve ","Mauve Dark ","Mauve Light ","Mauve Medium ","Mauve Very Dark ","Melon Dark ","Melon Light ","Melon Medium ","Melon Very Dark ","Mocha Beige Dark ","Mocha Beige Light ","Mocha Beige Medium ","Mocha Brown Dark ","Mocha Brown Light ","Mocha Brown Medium ","Mocha Brown Ultra Very Light ","Mocha Brown Very Dark ","Mocha Brown Very Light ","Moss Green ","Moss Green Dark ","Moss Green Light ","Moss Green Medium Light ","Moss Green Very Light ","Mustard ","Mustard Light ","Mustard Medium ","Navy Blue ","Navy Blue Dark ","Navy Blue Very Dark ","Nile Green ","Nile Green Light ","Nile Green Medium ","Nile Green Medium Light ","Off White ","Old Gold Dark ","Old Gold Light ","Old Gold Medium ","Old Gold Very Light ","Old Gold Vy Dark ","Olive Green ","Olive Green Dark ","Olive Green Light ","Olive Green Medium ","Olive Green Very Dark ","Orange Red Bright ","Orange Spice Dark ","Orange Spice Light ","Orange Spice Medium ","Parrot Green Dark ","Parrot Green Light ","Parrot Green Medium ","Parrot Green Very Dark ","Peach ","Peach Light ","Peach Very Light ","Peacock Blue ","Peacock Blue Dark ","Peacock Blue Light ","Peacock Blue Very Dark ","Peacock Blue Very Light ","Pearl Gray ","Pearl Gray Very Light ","Pewter Gray ","Pewter Gray Dark ","Pewter Gray Very Dark ","Pewter Light ","Pewter Very Light ","Pine Green ","Pine Green Dark ","Pine Green Medium ","Pink Medium ","Pistachio Green Dark ","Pistachio Green Light ","Pistachio Green Medium ","Pistachio Green Very Light ","Pistachio Green Ultra Very Dark ","Pistachio Green Very Dark ","Plum ","Plum Dark ","Plum Light ","Plum Medium ","Plum Ultra Light ","Plum Very Light ","Pumpkin ","Pumpkin Light ","Pumpkin Pale ","Raspberry Dark ","Raspberry Light ","Raspberry Medium ","Raspberry Very Dark ","Red ","Red Copper ","Red Copper Dark ","Red Dark ","Red Medium ","Rose ","Rose Dark ","Rose Light ","Rose Medium ","Rose Very Dark ","Rosewood Dark ","Rosewood Light ","Rosewood Medium ","Rosewood Ultra Very Light ","Royal Blue ","Royal Blue Dark ","Royal Blue Very Dark ","Salmon ","Salmon Dark ","Salmon Light ","Salmon Medium ","Salmon Very Dark ","Salmon Very Light ","Sea Green Dark ","Sea Green Light ","Sea Green Medium ","Sea Green Very Dark ","Shell Gray Dark ","Shell Gray Light ","Shell Gray Medium ","Shell Pink Dark ","Shell Pink Light ","Shell Pink Medium ","Shell Pink Medium Light ","Shell Pink Ultra Very Light ","Shell Pink Very Dark ","Shell Pink Very Light ","Shrimp ","Sky Blue ","Sky Blue Light ","Sky Blue Very Light ","Snow White ","Steel Gray Dark ","Steel Gray Light ","Straw ","Straw Dark ","Straw Light ","Straw Very Dark ","Tan ","Tan Light ","Tan Ultra Very Light ","Tan Very Light ","Tangerine ","Tangerine Light ","Tangerine Medium ","Tawny ","Tawny Light ","Tawny Vy Light ","Teal Green Dark ","Teal Green Light ","Teal Green Medium ","Tender Green ","Tender Green Light ","Tender Green Very Light ","Terra Cotta ","Terra Cotta Dark ","Terra Cotta Light ","Terra Cotta Medium ","Terra Cotta Ultra Very Light ","Terra Cotta Very Dark ","Terra Cotta Very Light ","Tin ","Tin Dark ","Tin Medium ","Topaz ","Topaz Dark ","Topaz Light ","Topaz Medium ","Topaz Medium Light ","Topaz Ultra Very Dark ","Topaz Very Dark ","Topaz Very Light ","Turquoise ","Turquoise Bright Dark ","Turquoise Bright Light ","Turquoise Bright Medium ","Turquoise Dark ","Turquoise Light ","Turquoise Ultra Very Dark ","Turquoise Very Light ","Turquoise Vy Dark ","Violet ","Violet Dark ","Violet Light ","Violet Medium ","Violet Very Dark ","Violet Very Light ","Wedgewood Dark ","Wedgewood Light ","Wedgewood Medium ","Wedgewood Ultra Very Dark ","Wedgewood Very Dark ","White ","White Lavender ","White Tin ","White Violet ","Winter White ","Yellow Beige Dark ","Yellow Beige Light ","Yellow Beige Medium ","Yellow Beige Very Dark ","Yellow Green Light ","Yellow Green Medium ","Yellow Green Very Light ","Yellow Medium ","Yellow Pale ","Yellow Pale Light ","Yellow Plum ","Yellow Plum Light ","Yellow Ultra Pale"];
			
		this.DMCCodes=["22","21","930","932","931","3753","3750","3752","3726","3727","316","315","3802","778","3740","3042","3041","3743","23","15","14","3341","3824","3340","967","3814","991","992","993","535","3853","3855","3854","19","469","935","937","472","936","934","470","471","3755","322","3325","334","3841","803","3756","312","775","818","819","646","648","647","844","645","3072","839","841","840","543","838","842","642","822","644","3790","640","310","3371","825","161","159","160","502","501","3813","503","500","504","813","826","162","824","827","3746","341","340","155","156","333","3747","31","32","30","666","3787","3023","3022","3021","3024","434","433","435","947","608","900","946","973","972","891","893","892","894","3816","3815","3817","163","561","703","704","16","3860","779","3861","9","801","938","898","921","922","920","351","349","352","350","817","3807","792","794","793","158","791","157","603","601","604","602","600","605","712","3805","3804","3806","809","798","799","800","3064","3773","950","407","632","3772","3774","611","610","612","613","7","8","5","6","3733","961","3354","962","3716","3350","150","963","3731","151","Ecru","29","28","3843","995","996","910","912","911","3818","909","522","520","523","524","989","987","164","988","986","33","34","35","816","814","815","902","956","957","3826","975","977","976","3827","832","830","833","831","829","834","3078","3834","3836","3835","154","3768","927","926","928","924","699","700","3850","3851","943","3053","3051","3052","701","3828","420","422","869","3346","3345","895","505","563","562","966","564","702","3011","3013","3012","3838","3840","3839","209","211","210","26","3837","25","208","307","444","445","400","3776","301","3856","300","402","3687","3803","3689","3688","3685","3705","3708","3706","3801","3862","3864","3863","3781","3782","3032","3866","3031","3033","581","580","3819","166","165","371","372","370","336","823","939","954","955","913","13","746","680","676","729","677","3829","732","731","734","733","730","606","720","722","721","905","907","906","904","353","754","948","807","806","3766","3765","747","415","762","317","413","3799","169","168","3364","3362","3363","776","367","368","320","369","890","319","718","915","3607","917","3609","3608","971","970","3825","3831","3833","3832","777","321","919","918","498","304","335","309","3326","899","326","3857","3859","3858","3779","797","796","820","760","3328","761","3712","347","3713","958","964","959","3812","451","453","452","3721","223","3722","152","225","221","224","20","519","3761","828","B5200","414","318","3821","3820","3822","3852","436","437","739","738","740","742","741","945","951","3770","3847","3849","3848","12","11","10","3830","355","3778","356","3771","3777","758","2","4","3","728","782","726","783","725","780","781","727","597","3844","3846","3845","3810","598","3808","3811","3809","553","327","554","552","550","153","517","518","3760","311","3842","White","24","1","27","3865","3045","3047","3046","167","3348","3347","772","743","744","745","18","17","3823"];
			
		this.anchorCodes=[1027,1013,1035,1033,1034,1031,1036,1032,1018,1016,1017,1019,1019,968,873,870,871,869,342,253,266,328,8,329,23,1074,1076,1072,1070,401,1003,311,313,295,267,861,268,253,846,862,267,266,140,978,129,977,9159,979,1037,979,128,23,271,8581,900,1040,1041,273,397,1086,1082,1084,933,1088,1080,392,390,391,904,393,403,382,162,176,389,175,877,878,875,876,683,1042,161,161,128,164,160,1030,117,118,118,117,119,120,122,100,1030,46,904,899,8581,905,388,310,358,365,330,330,333,332,297,298,35,33,35,27,876,877,875,877,212,238,256,280,379,1050,378,360,359,381,360,1003,1003,1004,10,13,9,11,13,122,941,175,176,941,178,117,33,63,55,57,59,1094,926,62,63,62,130,146,145,144,883,1008,4146,914,936,1007,778,898,889,832,831,233,1050,852,831,75,76,74,75,25,59,89,73,76,73,387,100,118,1089,410,433,230,209,205,923,923,860,862,859,858,242,244,264,243,246,110,99,102,43,45,44,897,40,50,1049,355,1002,1001,311,907,277,907,277,906,874,292,100,90,98,936,779,849,850,274,851,923,228,189,187,189,843,845,844,227,373,374,372,944,267,268,1044,1076,208,210,240,206,226,856,853,855,177,117,176,109,342,108,342,101,342,110,289,291,288,351,1048,1049,1010,352,1047,68,69,49,66,1028,35,31,33,1098,358,376,379,1050,831,898,926,905,387,280,281,278,280,253,887,887,888,150,152,152,203,206,204,185,275,901,891,890,361,901,281,924,279,280,845,334,326,323,925,257,255,256,258,6,1012,1011,168,169,167,170,158,389,234,400,236,236,400,389,260,263,262,24,216,214,215,1043,218,218,88,1029,87,89,85,86,316,925,323,29,26,28,897,9046,340,341,1005,1006,38,42,36,52,59,936,914,1007,868,132,133,134,1022,1024,1021,1023,1025,1020,187,185,186,188,233,231,232,896,895,1027,893,1026,897,893,328,1038,928,9159,1,235,399,305,306,295,890,363,362,387,361,316,303,304,881,1010,1009,1076,1070,1074,253,264,259,5975,1014,1013,1027,868,1015,868,389,399,399,306,308,291,307,305,309,308,293,1064,410,1090,1089,1066,1062,1068,1060,1066,98,100,96,101,102,342,162,1039,162,148,164,2,342,388,342,2,888,852,887,1049,264,266,259,302,301,300,278,278,386];
		this.ids=[];
	}
	
	
	SortMax()
	{
		//The algorithm sorts the clusters according to the rate (number of particles containing). 
		
		let clonelRateArr = this.rate.slice();
		let cloneColArr = this.cols.slice();
		let newRateArr = [];
		let newColArr = [];

		for(let i = 0; i < this.rate.length; i++)
		{
			let max = 0;
			let maxIndex = 0;
			
			for(let ci = 0; ci < clonelRateArr.length; ci++)
			{
				if(clonelRateArr[ci] >= max)
				{
					max = clonelRateArr[ci];
					maxIndex = ci;
				}
			}
			newRateArr.push(clonelRateArr[maxIndex]);
			newColArr.push(cloneColArr[maxIndex]);
			clonelRateArr.splice(maxIndex, 1);
			cloneColArr.splice(maxIndex, 1);
		}
		this.rate =  newRateArr;
		this.cols = newColArr;
	}
		
	
	DrawStripeRect()
	{
		//This assigns the thread color that is closer to the centroid in the RGB color space. 
		for(let i = 0; i < this.cols.length; i++)
		{
			this.NearestNeighbour(red(this.cols[i]),green(this.cols[i]),blue(this.cols[i]), i);
		}
				
		//This avoids to include repeated thread colors		
		let defIds=[];
		
		for(let i=0; i<this.ids.length;i++){
			let rep=false;
			for(let d=0; d<defIds.length; d++){
				if(defIds[d]==this.ids[i])
					rep=true;
			}
			if(!rep)
				append(defIds,this.ids[i]);
		}
		
		
		//Sort ids, trying to make more armonious the palette
		let quan=8;
		if(defIds.length<8)
			quan=defIds.length;
		for(let i = 0; i < quan; i++)
		{
			let aux;		
			for(let j = 0;j < quan; j++)
			{
				if(defIds[j]>defIds[j+1]){
					aux=defIds[j];
					defIds[j]=defIds[j+1];
					defIds[j+1]=aux;
				}
			}
		}
		let colorA=[];			
		let colorN=[];
		let colorRGB=[];
		let colorDMC=[];
		let colorAnchor=[];
		for(let i = 0; i < quan; i++)
		{			
			let colorRect=color(this.RGBPalette[defIds[i]][0],this.RGBPalette[defIds[i]][1],this.RGBPalette[defIds[i]][2]);
			let idColor='#color'+i;
			colorA[i]=select(idColor);
			colorA[i].style('background-color',colorRect);
			
			let idNombre='#nombre'+i;
			colorN[i]=select(idNombre);
			colorN[i].html(this.nameColors[defIds[i]]);
			
			let idDMC='#dmc'+i;
			colorDMC[i]=select(idDMC);
			colorDMC[i].html("<b>DCM: </b>"+this.DMCCodes[defIds[i]]);
			
			let idAnchor='#anchor'+i;
			colorAnchor[i]=select(idAnchor);
			colorAnchor[i].html("<b>Anchor: </b>"+this.anchorCodes[defIds[i]]);
			
			let idRGB='#rgb'+i;
			colorRGB[i]=select(idRGB);
			let hexC="#"+hex(this.RGBPalette[defIds[i]][0],2)+""+hex(this.RGBPalette[defIds[i]][1],2)+""+hex(this.RGBPalette[defIds[i]][2],2);
			let textoHex="<b>RGB: "+"</b>"+hexC + '<br>'+colorRect;
			colorRGB[i].html(textoHex);
		}	
	}
	
	NearestNeighbour(r,g,b,id)
	{		
			//Finds the closest thread color neighbour to the color "r,g,b". 
			let distance;
			let shorterD=50000;
			let shorterID=-1;
			for(let i = 0; i < 489; i++)
			{
				distance=sqrt(pow((r-this.RGBPalette[i][0]),2)+pow((g-this.RGBPalette[i][1]),2)+pow((b-this.RGBPalette[i][2]),2));
				if(distance<shorterD){
					shorterD=distance;
					shorterID=i;
				}
			}
			this.ids[id]=shorterID;
			
	}
}

