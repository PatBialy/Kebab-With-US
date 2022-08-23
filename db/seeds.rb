# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Cleaning database...'
Kebab.destroy_all
User.destroy_all
Review.destroy_all


puts 'Creating kebabs...'
k1 = Kebab.create(
    name: "Şiş Kebab (Shish kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/lamb-sis-kebab.jpg.webp", 
    description:"A traditional and familiar Turkish kebab of meat and vegetables, generally cubed and threaded onto a skewer before being grilled and served with bread and rice with salads. Çöp şiş is a variety of this popular kebab, made with smaller pieces of meat and generally cooked on wooden skewers, as opposed to iron."
)

k2 = Kebab.create(
    name: "Adana Kebab", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2021/08/popular-turkish-kebab-adana-kebab.jpg.webp", 
    description:"Hailing from the South-Eastern Turkish province of the same name, Adana kebab is a spicy (read: hot) kebab made from ground mince formed over a wide skewer and grilled over charcoals. A milder version originates from a nearby town and is known as Urfa kebab. Both kebabs are served with grilled vegetables and bulgur pilaf."
)

k3 = Kebab.create(
    name: "Iskender Kebab", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/turkish-iskender-kebab.jpg.webp", 
    description:"This kebab inspired Iskender Efendi to invent the vertically cooking kebab and originates from his seaside hometown of Bursa. Iskender kebab is essentially döner kebab, served with a slathering of melted butter over a bed of bread, with yogurt on the side."
)

k4 = Kebab.create(
    name: "Cağ Kebab", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2021/07/sehzade-cag-kebap.jpg.webp", 
    description:"This kebab is commonly accepted as the predecessor to the modern döner kebab. It is made from lamb meat cooked on a horizontal rotisserie before being sliced off and grilled on a skewer. This grilled lamb is usually eaten with lavash bread."
)

k5 = Kebab.create(
    name: "Patlican Kebab (Eggplant kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/turkish-eggplant-kebab.jpg.webp", 
    description:"marinated kebab meat, skewered with aubergines, and cooked on a grill or in the oven. It is usually served with a yogurt sauce."
)

k6 = Kebab.create(
    name: "Ciğer Kebab (Liver kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/turkish-liver-kebab-ciger-kebab.jpg.webp", 
    description:"Don't be put off, this Turkish kebab is more delicious than it sounds! This tasty kebab is made from portions of lamb livers, diced and marinated with herbs, and grilled on a skewer before being served with bread and salads. It is commonly enjoyed in Istanbul by both locals and ex-pats alike for its wonderful flavors."
)

k7 = Kebab.create(
    name: "Döner Kebab", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2020/06/doner-kebab-with-vegetables.jpg.webp",
    description:"The world-famous Turkish kebab means rotating kebab in Turkish. It is made from lamb, chicken, or beef, slowly roasted on a vertical spit, and then thinly sliced off. Döner is served on a plate with salad and rice or potatoes; in bread like a sandwich; or in a wrap known as dürüm."
)

k8 = Kebab.create(
    name: "Hünkar Beğendi (Sultan kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2021/08/traditional-ottoman-dish-hunkar-begendi.jpg.webp",
    description:"This is also known as the Sultans kebab because it was the favorite kebab of Ottoman sultans. It is made from sliced lamb meat, served over a bed of creamy pureed eggplant flavored with herbs."
)

k9 = Kebab.create(
    name: "Tandir Kebab (Büryan)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2020/06/kadinlar-pazari-buryan-kebab.jpg.webp", 
    description:"Generally hailing from Central or Eastern Anatolia, this kebab is made from lamb pieces or even a whole lamb baked slowly over many hours in a unique traditional oven called a tandir. The result is a tender and tasty meat that is then served with bread and raw onions."
)

k10 = Kebab.create(
    name: "Testi Kebab (Pottery kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2021/08/national-turkish-dish-pottery-kebab.jpg.webp", 
    description:"This unique Turkish kebab originated in Central Anatolia and the Black Sea region. It consists of meat and vegetables cooked in a clay pot (testi means jug, in Turkish) over the fire. The seal of the pot is generally broken at your table, right before eating."
)

k11 = Kebab.create(
    name: "Beyti", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/popular-turkish-kebab-beyti.jpg.webp", 
    description:"Beyti is a newly invented Turkish kebab that consists of ground beef or lamb, skewered and grilled. It's then wrapped in lavash and served topped with tomato sauce and yogurt- all the while remaining juicy on both ends."
)

k12 = Kebab.create(
    name: "Çökertme Kebab", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/turkish-cokertme-kebab.jpg.webp", 
    description:"Julienne cut fillet meat is served on thin fried potatoes with garlic yogurt and tomato sauce. Ground cumin, chili pepper, onion, and thyme are all great seasonings to use for Çökertme Kebab."
)

k13 = Kebab.create(
    name: "Firin Kebab (Woodfire oven kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/konya-firin-kebabi.jpg.webp", 
    description:"Oven kebab requires only two ingredients: lamb and salt. Only the forearm and ribs of the lamb or sheep are used. The lamb is cooked in the oak wood fire ovens for 4 hours, while the sheep are cooking longer 8 to 10 hours."
)

k14 = Kebab.create(
    name: "Kağit Kebabi (Paper kebab)", 
    image_url:"https://turkishstylecooking.com/wp-content/uploads/2011/12/kagit_kebabi3.jpg", 
    description:"Kağit Kebabi is one of the main dishes of Malatya cuisine. It is prepared by first cutting the lamb meat into manageable pieces before marinating it with spices and wrapping them in oiled paper. Tail fat is placed on these papers to keep the meat juicy."
)

k15 = Kebab.create(
    name: "Kilis Kebabi (Tepsi Kebabi)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/kilis-kebab-turkish-tray-kebab.jpg.webp", 
    description:"The ingredients of this kebab are flavorful but straightforward. It is made of ground lamb meat, red peppers, onion, and garlic. Marinated lamb mince is given a flat shape by kneading in a tray and cooked in ovens with sliced tomatoes and peppers on the side of the tray."
)

k16 = Kebab.create(
    name: "Tavuk Şiş Kebab (Chicken shish kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/chicken-shish-kebab.jpg.webp", 
    description:"One of the most popular kebabs in Turkey is chicken shish kebab. The dish consists of cubes of chicken that are marinated, then skewered and grilled. It is usually made of chicken breasts marinated in yogurt, milk, and tomato paste."
)

k17 = Kebab.create(
    name: " Tokat Kebabi", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/tokat-kebab.jpg.webp", 
    description:"Tokat kebabi is a traditional Turkish kebab originating from the Tokat region in Turkey. It has been prepared locally for hundreds of years and became popular all across the country due to its rich flavor, which comes from a blend that includes fresh lamb meat, potatoes, eggplants, tomatoes, green bell pepper, garlic, olive oil, and other spices all cooked with onions."
)

k18 = Kebab.create(
    name: "Yoğurtlu Kebap (Kebab with yogurt)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/turkish-yogurt-kebab.jpg.webp", 
    description:"Minced meat is kneaded with salt, black pepper, and red pepper flakes (Aleppo pepper). Mincemeat is then placed on skewers and cooked on charcoal grills. The pita bread is soaked with the oils of the cooking meat and softened. The bread is placed on a plate, and freshly whipped yogurt is poured over the bread. Cooked meats are placed on yogurt and served with melted butter on top."
)

k19 = Kebab.create(
    name: "Orman Kebabi (Forest kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/orman-kebabi.jpg.webp", 
    description:"Not all kebabs are prepared on skewers, but sometimes they can be cooked in pots as a stew. One of these pot kebabs is Orman Kebabi, which originated from Ottoman cuisine and is a dish unique to Turkey's Bolu region. This dish is primarily made from lamb and cooked with various vegetables, such as celery, eggplant, peppers, carrots, and peas."
)

k20 = Kebab.create(
    name: "Soğan Kebabi (Onion kebab)", 
    image_url:"https://yummyistanbul.com/wp-content/uploads/2014/02/turkish-onion-kebab.jpg.webp", 
    description:"Onion kebabs are an ingenious Turkish dish made with ground lamb kofte placed inside onion slices and flavored with pomegranate sauce and freshly ground black pepper. This recipe is easy to prepare and cook."
)


us1 = User.create(username: "Patrick", password: "password", image_url:"https://2v7smn27y3922e05obea523d-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war.jpg", bio:"Looking goodddd")
us2 = User.create(username: "John", password: "password1", image_url:"https://2v7smn27y3922e05obea523d-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war.jpg", bio:"yesssss")
us3 = User.create(username: "Tom", password: "password2", image_url:"https://2v7smn27y3922e05obea523d-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war.jpg", bio:"nooooo")

Review.create(rating: 1, comment:"Not to Good!", user_id: us1.id, kebab_id: k1.id)
Review.create(rating: 3, comment:"Good Kebab!", user_id: us2.id, kebab_id: k9.id)
Review.create(rating: 5, comment:"Great Kebab!", user_id: us1.id, kebab_id: k4.id)
Review.create(rating: 2, comment:"It was ok", user_id: us2.id, kebab_id: k18.id)
Review.create(rating: 3, comment:"Not the best but good", user_id: us3.id, kebab_id: k5.id)
Review.create(rating: 4, comment:"Enjoyed!", user_id: us3.id, kebab_id: k7.id)
Review.create(rating: 3, comment:"Good!", user_id: us2.id, kebab_id: k10.id)
Review.create(rating: 2, comment:"Not bad, had better!", user_id: us1.id, kebab_id: k5.id)
