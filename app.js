/* ==========================================================================
   GRITZ CAFE - INTERACTIVE ORDERING SYSTEM SCRIPT (OFFICIAL MENU VERSION)
   ========================================================================== */

// Menu Database from the Official Gritz Cafe Menu
const MENU_DATA = {
    'favorites_bowls': [
        // Gritz Favorites
        {
            id: 'fav1',
            name: 'Three Crispy Fried Chicken & Waffle',
            price: 19.98,
            desc: 'Three crispy fried whole chicken wings served with a hot waffle and choice of grits, homestyle potatoes, or two eggs.',
            badge: 'Bestseller',
            image: 'https://assets.bonappetit.com/photos/63d136f17ce1373a96817e1d/3:2/w_4998,h_3332,c_limit/012523-chicken-and-waffles-lede.jpg',
            options: ['favorites_sides']
        },
        {
            id: 'fav2',
            name: 'Three Golden Fried Catfish & Waffle',
            price: 19.98,
            desc: 'Three golden cornmeal-crusted catfish fillets served with a hot waffle and choice of grits, homestyle potatoes, or two eggs.',
            badge: 'Popular',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400',
            options: ['favorites_sides']
        },
        {
            id: 'fav3',
            name: 'Biscuits & Gravy Platter',
            price: 18.98,
            desc: 'Two warm split buttermilk biscuits topped with country sausage gravy, served with two eggs and grits or homestyle potatoes.',
            badge: 'Southern Comfort',
            image: '/images/A. Biscuits Gravy Platter.jpg',
            options: ['favorites_sides']
        },
        {
            id: 'fav4',
            name: 'Mix and Match Platter',
            price: 21.98,
            desc: 'Customize your main! Choice of: 1 Hotlink, 2 Wings, or 2 Catfish. Served with two sides and one choice of bread.',
            badge: 'Custom Feast',
            image: '/images/A. Mix and Match Platter.jpg',
            options: ['plate_options']
        },
        {
            id: 'fav5',
            name: 'Big Gritz Breakfast',
            price: 23.98,
            desc: 'Four whole wings or catfish fillets served with two eggs, signature buttery grits, and a sweet potato waffle.',
            badge: 'Vegas Favorite',
            image: '/images/A. Big Gritz Breakfast.jpg',
            options: ['eggs_choice']
        },
        {
            id: 'fav6',
            name: 'Holy Trinity Feast',
            price: 21.98,
            desc: 'Three whole wings or catfish fillets served with collard greens, sweet candied yams, baked mac & cheese, and cornbread.',
            badge: 'Signature Platter',
            image: '/images/A. Holy Trinity Feast.jpg',
            options: ['meat_choice']
        },
        {
            id: 'fav7',
            name: 'Specialty Waffle Selection',
            price: 8.98,
            desc: 'Choose from Sweet Potato (loaded with fresh candied yams), Butter Pecan, or Peach Cobbler.',
            badge: 'Sweet Treat',
            image: '/images/A. Specialty Waffle Selection.jpg',
            options: ['waffle_selection']
        },
        // Gritz Bowls
        {
            id: 'bowl1',
            name: 'Gritz Bowl - Crispy Bacon',
            price: 15.98,
            desc: 'Three pieces of pork or turkey bacon served over a bowl of grits, homestyle potatoes, or mixed vegetables. Customized with toppings and bread.',
            badge: 'Gritz Bowl',
            image: '/images/A. Gritz Bowl - Crispy Bacon.jpg',
            options: ['bowl_options']
        },
        {
            id: 'bowl2',
            name: 'Gritz Bowl - Pork or Turkey Sausage',
            price: 15.98,
            desc: 'Two sausage patties (pork or turkey) served over grits, potatoes, or mixed vegetables. Customized with toppings and bread.',
            badge: 'Gritz Bowl',
            image: '/images/A. Pork or Turkey Sausage.jpg',
            options: ['bowl_options']
        },
        {
            id: 'bowl3',
            name: 'Gritz Bowl - Sautéed Shrimp',
            price: 18.98,
            desc: 'Eight pieces of fried or grilled shrimp served over grits, potatoes, or mixed vegetables. Customized with toppings and bread.',
            badge: 'Premium Bowl',
            image: '/images/A. Sautéed Shrimp.jpg',
            options: ['bowl_options']
        },
        {
            id: 'bowl4',
            name: 'Gritz Bowl - Juicy Hotlink',
            price: 17.98,
            desc: 'One sliced spicy beef hotlink served over grits, potatoes, or mixed vegetables. Customized with toppings and bread.',
            badge: 'Gritz Bowl',
            image: '/images/A. Juicy Hotlink.jpg',
            options: ['bowl_options']
        },
        {
            id: 'bowl5',
            name: 'Gritz Bowl - Wings or Catfish',
            price: 17.98,
            desc: 'Two chicken wings or catfish fillets (fried or grilled) served over grits, potatoes, or mixed vegetables. Customized with toppings and bread.',
            badge: 'Gritz Bowl',
            image: '/images/A. Wings or Catfish.jpg',
            options: ['bowl_options']
        }
    ],
    'plates_baskets': [
        // Plates
        {
            id: 'plt1',
            name: 'Arkansas Chicken Fried Steak Plate',
            price: 23.98,
            desc: 'Crispy golden chicken fried steak smothered in rich white country gravy. Served with two sides and cornbread or biscuit.',
            badge: 'Plates',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400',
            options: ['plate_options']
        },
        {
            id: 'plt2',
            name: 'Louisiana Hotlinks Plate',
            price: 21.98,
            desc: 'Two juicy beef hotlinks buttered and grilled to perfection. Served with two sides and cornbread or biscuit.',
            badge: 'Spicy',
            image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=400',
            options: ['plate_options']
        },
        {
            id: 'plt3',
            name: 'Kentucky Chicken Wings Plate',
            price: 19.98,
            desc: 'Three whole chicken wings seasoned and fried golden brown. Served with two sides and cornbread or biscuit.',
            badge: 'Plates',
            image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=400',
            options: ['plate_options']
        },
        {
            id: 'plt4',
            name: 'Mississippi Catfish Filets Plate',
            price: 19.98,
            desc: 'Three succulent catfish fillets (fried in cornmeal or grilled). Served with two sides and cornbread or biscuit.',
            badge: 'Highly Rated',
            image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=400',
            options: ['plate_options']
        },
        {
            id: 'plt5',
            name: 'Tennessee Sausage Patties Plate',
            price: 16.98,
            desc: 'Three sausage patties (pork or turkey). Served with two sides and cornbread or biscuit.',
            badge: 'Plates',
            image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80&w=400',
            options: ['plate_options']
        },
        {
            id: 'plt6',
            name: 'Alabama Crispy Bacon Plate',
            price: 16.98,
            desc: 'Four crispy strips of pork or turkey bacon. Served with two sides and cornbread or biscuit.',
            badge: 'Plates',
            image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=400',
            options: ['plate_options']
        },
        {
            id: 'plt7',
            name: 'Georgia Pork Chops Plate',
            price: 24.98,
            desc: 'Two center-cut pork chops (fried golden or grilled). Served with two sides and cornbread or biscuit.',
            badge: 'Plates',
            image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=400',
            options: ['plate_options']
        },
        // Baskets
        {
            id: 'bsk1',
            name: 'Golden Fried Catfish Basket (3)',
            price: 16.98,
            desc: 'Three cornmeal-crusted fried catfish fillets. Served with grits or french fries.',
            badge: 'Baskets',
            image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'bsk2',
            name: 'Fish (2) & Shrimp Basket (8)',
            price: 19.98,
            desc: 'Two fried catfish fillets and eight crispy fried shrimp. Served with grits or french fries.',
            badge: 'Seafood Combo',
            image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'bsk3',
            name: 'Succulent Shrimp Basket (8)',
            price: 16.98,
            desc: 'Eight succulent shrimp (crispy fried or grilled). Served with grits or french fries.',
            badge: 'Baskets',
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'bsk4',
            name: 'Crispy Fried Whole Chicken Wings (3)',
            price: 15.98,
            desc: 'Three seasoned whole wings fried golden brown. Served with grits or french fries.',
            badge: 'Baskets',
            image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'bsk5',
            name: 'Crispy Fried Party Wings (6)',
            price: 15.98,
            desc: 'Six party wings tossed in spices and fried crispy. Served with grits or french fries.',
            badge: 'Baskets',
            image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'bsk6',
            name: 'Crispy Chicken Fingers (4)',
            price: 15.98,
            desc: 'Four hand-breaded crispy white-meat chicken tenders. Served with grits or french fries.',
            badge: 'Baskets',
            image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        }
    ],
    'omelets_sandwiches': [
        // Omelets
        {
            id: 'om1',
            name: 'Chopped Chicken Omelet',
            price: 17.98,
            desc: 'Three-egg omelet loaded with grilled or fried chopped chicken breast. Served with grits or homestyle potatoes and bread choice.',
            badge: 'Omelets',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=400',
            options: ['omelet_options']
        },
        {
            id: 'om2',
            name: 'Succulent Shrimp Omelet',
            price: 18.98,
            desc: 'Three-egg omelet filled with sautéed shrimp (grilled or fried). Served with grits or homestyle potatoes and bread choice.',
            badge: 'Omelets',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=400',
            options: ['omelet_options']
        },
        {
            id: 'om3',
            name: 'Pork or Turkey Sausage Omelet',
            price: 15.98,
            desc: 'Three-egg omelet filled with seasoned pork or turkey sausage. Served with grits or homestyle potatoes and bread choice.',
            badge: 'Omelets',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=400',
            options: ['omelet_options']
        },
        {
            id: 'om4',
            name: 'Pork or Turkey Bacon Omelet',
            price: 15.98,
            desc: 'Three-egg omelet filled with crumbled pork or turkey bacon. Served with grits or homestyle potatoes and bread choice.',
            badge: 'Omelets',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=400',
            options: ['omelet_options']
        },
        {
            id: 'om5',
            name: 'Chopped Hotlink Omelet',
            price: 16.98,
            desc: 'Three-egg omelet loaded with chopped spicy Louisiana hotlinks. Served with grits or homestyle potatoes and bread choice.',
            badge: 'Omelets',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=400',
            options: ['omelet_options']
        },
        {
            id: 'om6',
            name: 'Veggie Omelet',
            price: 15.98,
            desc: 'Three-egg omelet with sautéed mushrooms, onions, bell peppers, fresh spinach, and tomatoes. Served with grits or potatoes and bread choice.',
            badge: 'Vegetarian',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=400',
            options: ['omelet_options']
        },
        // Sandwiches
        {
            id: 'snd1',
            name: 'Croissant Breakfast Sandwich',
            price: 13.98,
            desc: 'Sausage, bacon (pork/turkey), or hotlink with country scrambled egg and cheddar cheese on a fresh croissant. Served with grits or fries.',
            badge: 'Sandwiches',
            image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400',
            options: ['croissant_sandwich_options']
        },
        {
            id: 'snd2',
            name: 'Catfish Po-Boy',
            price: 16.98,
            desc: 'Fried cornmeal catfish fillet, house special sauce, crisp lettuce, and fresh tomato on a grilled hoagie roll. Served with grits or fries.',
            badge: 'Southern Classic',
            image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'snd3',
            name: 'Shrimp Po-Boy',
            price: 17.98,
            desc: 'Succulent fried shrimp, house special sauce, crisp lettuce, and sliced tomato on a grilled hoagie roll. Served with grits or fries.',
            badge: 'Sandwiches',
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'snd4',
            name: 'Bubba Burger',
            price: 16.98,
            desc: 'Handmade juicy beef or turkey patty, house special sauce, lettuce, and tomato on a grilled sesame seed bun. Served with grits or fries.',
            badge: 'Sandwiches',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400',
            options: ['burger_options']
        },
        {
            id: 'snd5',
            name: 'Croissant BLT',
            price: 15.98,
            desc: 'Crispy bacon (pork or turkey), mayo, crisp lettuce, and tomatoes stacked on a warm grilled croissant. Served with grits or fries.',
            badge: 'Sandwiches',
            image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400',
            options: ['meat_choice_bacon']
        },
        {
            id: 'snd6',
            name: 'Florida Chicken Sandwich',
            price: 16.98,
            desc: 'Fried or grilled chicken breast, mayonnaise, lettuce, and tomato on toasted bread. Served with grits or fries.',
            badge: 'Sandwiches',
            image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=400',
            options: ['chicken_cooking_options']
        },
        {
            id: 'snd7',
            name: 'Turkey Club Croissant',
            price: 16.98,
            desc: 'Sliced turkey breast, crispy bacon, house special sauce, lettuce, and tomato on a grilled croissant. Served with grits or fries.',
            badge: 'Sandwiches',
            image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400',
            options: ['basket_options']
        },
        {
            id: 'snd8',
            name: 'Grilled Chicken Breast Salad',
            price: 16.98,
            desc: 'Fresh green Romaine lettuce, tomatoes, cheddar cheese, and boiled eggs topped with grilled chicken breast. Add shrimp option in customizations.',
            badge: 'Salads',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
            options: ['salad_options']
        }
    ],
    'sides_alacarte': [
        {
            id: 'sd1',
            name: 'Garden Salad',
            price: 4.98,
            desc: 'Fresh romaine lettuce, chopped tomatoes, and shredded cheese with your choice of dressing.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd2',
            name: 'Gritz (8 oz)',
            price: 3.98,
            desc: 'Small portion of our slow-simmered, velvety Southern butter grits.',
            badge: 'Gritz Specialty',
            image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd3',
            name: 'Gritz (24 oz)',
            price: 7.98,
            desc: 'Large family-sized portion of our buttery slow-simmered grits.',
            badge: 'Gritz Specialty',
            image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd4',
            name: 'Gritz Bites (4pcs)',
            price: 5.98,
            desc: 'Four crispy, deep-fried breaded grits bites. Crunchy on the outside, creamy inside.',
            badge: 'Popular',
            image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd5',
            name: 'Homestyle Potatoes (8 oz)',
            price: 4.98,
            desc: 'Small portion of red skin skillet potatoes seasoned with garlic and onions.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd6',
            name: 'French Fries (Small)',
            price: 3.98,
            desc: 'Classic golden crinkle-cut french fries seasoned with salt.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd7',
            name: 'French Fries (Large)',
            price: 6.98,
            desc: 'Large sharing portion of seasoned crispy golden french fries.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd8',
            name: 'Two Eggs (Any Style)',
            price: 2.98,
            desc: 'Two fresh eggs prepared scrambled, fried, over-easy, or sunny-side up.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=400',
            options: ['eggs']
        },
        {
            id: 'sd9',
            name: 'Hot waffle',
            price: 5.98,
            desc: 'One fresh golden waffle served with butter and warm maple syrup.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1568234928966-359c35dd8327?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd10',
            name: 'Biscuit, Cornbread, or Grilled Croissant',
            price: 1.98,
            desc: 'One piece of fresh baked bread. Choose biscuit, sweet cornbread, or buttery croissant.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80&w=400',
            options: ['bread_only']
        },
        {
            id: 'sd11',
            name: 'Candied Yams',
            price: 4.98,
            desc: 'Slow-cooked sweet potatoes coated in a brown sugar, butter, and cinnamon glaze.',
            badge: 'Soul Side',
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd12',
            name: 'Baked Mac & Cheese',
            price: 4.98,
            desc: 'Classic Southern baked elbow macaroni coated in a rich cheddar cheese sauce.',
            badge: 'Soul Side',
            image: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd13',
            name: 'Collard Greens',
            price: 4.98,
            desc: 'Savory collard greens simmered slowly with smoked turkey for seasoning.',
            badge: 'Soul Side',
            image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400',
            options: []
        },
        {
            id: 'sd14',
            name: 'Country Gravy',
            price: 1.98,
            desc: 'A small cup of warm, savory country sausage gravy.',
            badge: 'Ala Carte',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400',
            options: []
        }
    ],
    'kids_desserts_drinks': [
        // Kids Meals
        {
            id: 'kd1',
            name: 'Kids Waffle & Wing or Catfish',
            price: 8.98,
            desc: 'Mini waffle with choice of one wing or one catfish fillet. Small juice box or soft drink included.',
            badge: 'Kids Meal',
            image: '/kids1.jpg',
            options: ['kids_meat_choice']
        },
        {
            id: 'kd2',
            name: 'Kids Grilled Cheese & Fries',
            price: 8.98,
            desc: 'Melty American grilled cheese sandwich with french fries. Small drink included.',
            badge: 'Kids Meal',
            image: '/images/Kids Grilled Cheese Fries.jpg',
            options: []
        },
        {
            id: 'kd3',
            name: 'Kids Waffle & Bacon or Sausage',
            price: 8.98,
            desc: 'Mini waffle served with bacon or sausage. Small drink included.',
            badge: 'Kids Meal',
            image: '/images/Kids Waffle & Bacon or Sausage.jpg',
            options: ['kids_bacon_sausage_choice']
        },
        {
            id: 'kd4',
            name: 'Kids Chicken Fingers & Fries',
            price: 8.98,
            desc: 'Two crispy hand-breaded chicken fingers served with fries. Small drink included.',
            badge: 'Kids Meal',
            image: '/images/Chicken Fingers Fries Two crispy.jpg',
            options: []
        },
        // Desserts
        {
            id: 'dst1',
            name: 'Sweet Potato Pie',
            price: 6.98,
            desc: 'Spiced sweet potato filling in a flaky pie crust, topped with whipped cream.',
            badge: 'Desserts',
            image: '/images/Sweet Potato Pie.png',
            options: []
        },
        {
            id: 'dst2',
            name: 'Buttery Peach Cobbler',
            price: 6.98,
            desc: 'Warm, sweet peaches baked with a buttery pie crust crust. Dusted with cinnamon.',
            badge: 'Desserts',
            image: '/images/Buttery Peach Cobbler.jpg',
            options: []
        },
        {
            id: 'dst3',
            name: 'Lemon Cake Slice',
            price: 4.98,
            desc: 'Moist yellow lemon cake slice with a sweet glazed frosting.',
            badge: 'Desserts',
            image: '/images/Lemon Cake Slice.jpg',
            options: []
        },
        // Beverages
        {
            id: 'bev1',
            name: 'Fountain Drink, Sweet Tea, or Coffee',
            price: 4.98,
            desc: 'Choice of Coke, Diet Coke, Sprite, Lemonade, Strawberry Fanta, Sweet Tea, Muddy Water, Hot Tea, or Coffee. Free refills.',
            badge: 'Beverages',
            image: '/images/Fountain Drink Sweet Tea or Coffee.jpg',
            options: ['fountain_selection']
        },
        {
            id: 'bev2',
            name: 'Fruit Juice or Cold Milk',
            price: 4.98,
            desc: 'Premium fruit juice or milk (Apple, Orange, Grape, Cranberry, Grapefruit). Large size, no refills.',
            badge: 'Juice Bar',
            image: '/images/Fruit Juice or Cold Milk.jpg',
            options: ['juice_selection']
        },
        {
            id: 'bev3',
            name: 'Hot Chocolate or Strawberry Lemonade',
            price: 4.98,
            desc: 'Creamy hot chocolate with marshmallows, or sweet freshly brewed strawberry lemonade. No refills.',
            badge: 'Specialty Drinks',
            image: '/images/Hot Chocolate or Strawberry.jpg',
            options: ['specialty_drink_selection']
        }
    ]
};

// Global App State
let cart = [];
let fulfillmentType = 'pickup'; // Default value
let activeItem = null;
let orderCount = 1084; // Dummy order starting count

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('gritz_cart', JSON.stringify(cart));
    localStorage.setItem('gritz_fulfillment', fulfillmentType);
}

// Load Cart from LocalStorage
function loadCart() {
    const storedCart = localStorage.getItem('gritz_cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    const storedFulfillment = localStorage.getItem('gritz_fulfillment');
    if (storedFulfillment) {
        fulfillmentType = storedFulfillment;
    }
    
    const storedOrderCount = localStorage.getItem('gritz_last_order_num');
    if (storedOrderCount) {
        orderCount = parseInt(storedOrderCount);
    }
}

// Check Gritz Cafe Store Status (Live vs Closed)
function checkStoreStatus() {
    const storeStatus = localStorage.getItem('gritz_store_status') || 'live';
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    // Remove any existing closed banner first
    const existingBanner = document.getElementById('storeClosedBanner');
    if (existingBanner) {
        existingBanner.remove();
    }
    
    if (storeStatus === 'closed') {
        // 1. Show banner below header
        const header = document.querySelector('header');
        if (header) {
            const banner = document.createElement('div');
            banner.id = 'storeClosedBanner';
            banner.className = 'store-closed-banner';
            banner.innerHTML = '🔒 <strong>Online Ordering Closed:</strong> We are currently closed for online orders. Feel free to browse our menu!';
            header.parentNode.insertBefore(banner, header.nextSibling);
        }
        
        // 2. Disable checkout button in cart sidebar
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.innerHTML = 'Online Ordering Closed 🔒';
            checkoutBtn.style.opacity = '0.6';
            checkoutBtn.style.cursor = 'not-allowed';
            checkoutBtn.style.background = '#444';
            checkoutBtn.style.pointerEvents = 'none';
        }
    } else {
        // Re-enable checkout button if open
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.innerHTML = `
                Proceed to Checkout
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            `;
            checkoutBtn.style.opacity = '';
            checkoutBtn.style.cursor = '';
            checkoutBtn.style.background = '';
            checkoutBtn.style.pointerEvents = '';
        }
    }
}

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    checkStoreStatus();

    // Storage listener to instantly disable/enable checkout in real-time across tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'gritz_store_status') {
            checkStoreStatus();
            const activeTab = document.querySelector('.tab-btn.active');
            if (activeTab) {
                renderMenu(activeTab.dataset.category);
            }
        }
    });

    // 1. Pickup/Delivery Toggle State (Home page)
    const pickupBtn = document.getElementById('pickupToggle');
    const deliveryBtn = document.getElementById('deliveryToggle');
    const toggleText = document.getElementById('fulfillmentDetailsText');

    function updateFulfillment(type) {
        fulfillmentType = type;
        saveCart();
        if (type === 'pickup') {
            if (pickupBtn) pickupBtn.classList.add('active');
            if (deliveryBtn) deliveryBtn.classList.remove('active');
            if (toggleText) toggleText.innerHTML = '📍 <strong>Pickup Info:</strong> Ready in 15-20 mins at 1911 Stella Lake St, Las Vegas, NV.';
        } else {
            if (pickupBtn) pickupBtn.classList.remove('active');
            if (deliveryBtn) deliveryBtn.classList.add('active');
            if (toggleText) toggleText.innerHTML = '🚗 <strong>Delivery Info:</strong> Standard delivery within 5 miles. Estimated arrival: 30-45 mins. ($3.99 fee)';
        }
        updateCartTotals();
    }

    if (pickupBtn && deliveryBtn) {
        pickupBtn.addEventListener('click', () => updateFulfillment('pickup'));
        deliveryBtn.addEventListener('click', () => updateFulfillment('delivery'));
        updateFulfillment(fulfillmentType);
    }

    // 2. Category Tab Switching (Menu page)
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderMenu(category);
        });
    });

    // 3. Floating Sidebar Cart Controls (All pages)
    const cartSidebar = document.getElementById('cartSidebar');
    const openCartTrigger = document.getElementById('openCartTrigger');
    const closeCartTrigger = document.getElementById('closeCartTrigger');
    const mobileCartTrigger = document.getElementById('mobileCartTrigger');

    function toggleCart(open = true) {
        if (!cartSidebar) return;
        if (open) {
            cartSidebar.classList.add('open');
        } else {
            cartSidebar.classList.remove('open');
        }
    }

    if (openCartTrigger) openCartTrigger.addEventListener('click', (e) => { e.preventDefault(); toggleCart(true); });
    if (closeCartTrigger) closeCartTrigger.addEventListener('click', () => toggleCart(false));
    if (mobileCartTrigger) mobileCartTrigger.addEventListener('click', () => toggleCart(true));

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleCart(false);
            closeModal();
        }
    });

    // 4. Modal Controls
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // 5. Delivery Address Modal Controls
    const addressModal = document.getElementById('addressModal');
    const closeAddressModalBtn = document.getElementById('closeAddressModalBtn');
    const cancelAddressBtn = document.getElementById('cancelAddressBtn');
    const confirmAddressBtn = document.getElementById('confirmAddressBtn');

    if (closeAddressModalBtn) closeAddressModalBtn.addEventListener('click', closeAddressModal);
    if (cancelAddressBtn) cancelAddressBtn.addEventListener('click', closeAddressModal);
    if (confirmAddressBtn) confirmAddressBtn.addEventListener('click', confirmDeliveryCheckout);

    // Close address modal on overlay click
    if (addressModal) {
        addressModal.addEventListener('click', (e) => {
            if (e.target === addressModal) closeAddressModal();
        });
    }

    // Initial render routines
    renderMenu('favorites_bowls');
    renderCart();
    checkActiveTracking();

    if (document.body.classList.contains('admin-body')) {
        initAdminDashboard();
    }
});

// Render Menu Items based on Category
function renderMenu(category) {
    const grid = document.getElementById('menuGrid');
    if (!grid) return; // Not on the menu page
    
    grid.innerHTML = '';
    const items = MENU_DATA[category] || [];
    
    const storeStatus = localStorage.getItem('gritz_store_status') || 'live';
    const isClosed = (storeStatus === 'closed');
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        
        let badgeHtml = item.badge ? `<span class="item-badge">${item.badge}</span>` : '';
        
        let buttonHtml = isClosed
            ? `<button class="add-to-cart-btn disabled" style="opacity: 0.6; cursor: not-allowed; background: #444;" disabled>Cafe Closed</button>`
            : `<button class="add-to-cart-btn" onclick="openCustomizationModal('${category}', '${item.id}')">
                   <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                   Order Now
               </button>`;
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.name}">
                ${badgeHtml}
            </div>
            <div class="card-content">
                <div class="item-title-price">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="item-desc">${item.desc}</p>
                ${buttonHtml}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Open Customization Modal & Generate Dynamic Forms based on physical menu rules
function openCustomizationModal(category, itemId) {
    const item = MENU_DATA[category].find(i => i.id === itemId);
    if (!item) return;
    
    activeItem = item;
    
    document.getElementById('modalItemName').innerText = item.name;
    document.getElementById('modalQty').innerText = '1';
    
    const optionsContainer = document.getElementById('customizationOptionsContainer');
    optionsContainer.innerHTML = '';
    
    if (item.options.length === 0) {
        optionsContainer.innerHTML = '<p style="color: var(--text-dark-muted); font-style: italic;">Ready as described. No options needed!</p>';
    } else {
        item.options.forEach(opt => {
            const group = document.createElement('div');
            group.className = 'custom-option-group';
            
            if (opt === 'favorites_sides') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Choose Waffle Accompaniment</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label">
                            <input type="radio" name="fav_side" value="Creamy Gritz" checked>
                            <span class="choice-details">Creamy Gritz</span>
                        </label>
                        <label class="choice-label">
                            <input type="radio" name="fav_side" value="Skillet Potatoes">
                            <span class="choice-details">Homestyle Potatoes</span>
                        </label>
                        <label class="choice-label">
                            <input type="radio" name="fav_side" value="Two Eggs">
                            <span class="choice-details">Two Eggs</span>
                        </label>
                    </div>
                `;
            } else if (opt === 'plate_options') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Side Choice 1</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices" style="margin-bottom:15px;">
                        <select name="plate_side_1" class="choice-label" style="width:100%; height:42px; padding:0 12px; outline:none; background:#fff; border-radius:8px;">
                            <option value="Buttered Gritz">Buttered Gritz</option>
                            <option value="Skillet Potatoes">Skillet Potatoes</option>
                            <option value="Two Eggs">Two Eggs</option>
                            <option value="French Fries">French Fries</option>
                            <option value="Sweet Potato Fries">Sweet Potato Fries (+$1.98)</option>
                            <option value="Collard Greens">Collard Greens</option>
                            <option value="Mac & Cheese">Mac & Cheese</option>
                            <option value="Candied Yams">Candied Yams</option>
                            <option value="Steamed Mixed Vegetables">Steamed Veggies</option>
                            <option value="Garden Salad">Garden Salad</option>
                        </select>
                    </div>
                    <div class="option-group-title">
                        <span>Side Choice 2</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices" style="margin-bottom:15px;">
                        <select name="plate_side_2" class="choice-label" style="width:100%; height:42px; padding:0 12px; outline:none; background:#fff; border-radius:8px;">
                            <option value="Mac & Cheese" selected>Mac & Cheese</option>
                            <option value="Buttered Gritz">Buttered Gritz</option>
                            <option value="Skillet Potatoes">Skillet Potatoes</option>
                            <option value="Two Eggs">Two Eggs</option>
                            <option value="French Fries">French Fries</option>
                            <option value="Sweet Potato Fries">Sweet Potato Fries (+$1.98)</option>
                            <option value="Collard Greens">Collard Greens</option>
                            <option value="Candied Yams">Candied Yams</option>
                            <option value="Steamed Mixed Vegetables">Steamed Veggies</option>
                            <option value="Garden Salad">Garden Salad</option>
                        </select>
                    </div>
                    <div class="option-group-title">
                        <span>Choice of Bread</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <select name="plate_bread" class="choice-label" style="width:100%; height:42px; padding:0 12px; outline:none; background:#fff; border-radius:8px;">
                            <option value="Biscuit">Fluffy Biscuit</option>
                            <option value="Cornbread">Sweet Cornbread</option>
                            <option value="White Toast">White Toast</option>
                            <option value="Wheat Toast">Wheat Toast</option>
                            <option value="English Muffin">English Muffin</option>
                            <option value="Grilled Croissant">Grilled Croissant (+$1.98)</option>
                            <option value="Regular Waffle">Standard Waffle (+$4.98)</option>
                        </select>
                    </div>
                `;
            } else if (opt === 'basket_options') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Choose Basket Side</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label">
                            <input type="radio" name="basket_side" value="Seasoned French Fries" checked>
                            <span class="choice-details">Seasoned French Fries</span>
                        </label>
                        <label class="choice-label">
                            <input type="radio" name="basket_side" value="Buttered Gritz">
                            <span class="choice-details">Creamy Buttered Gritz</span>
                        </label>
                    </div>
                `;
            } else if (opt === 'omelet_options') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Omelet Side</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices" style="margin-bottom:15px;">
                        <label class="choice-label">
                            <input type="radio" name="omelet_side" value="Buttered Gritz" checked>
                            <span class="choice-details">Buttered Gritz</span>
                        </label>
                        <label class="choice-label">
                            <input type="radio" name="omelet_side" value="Homestyle Potatoes">
                            <span class="choice-details">Homestyle Potatoes</span>
                        </label>
                    </div>
                    <div class="option-group-title">
                        <span>Omelet Bread</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices" style="margin-bottom:15px;">
                        <select name="omelet_bread" class="choice-label" style="width:100%; height:42px; padding:0 12px; outline:none; background:#fff; border-radius:8px;">
                            <option value="Biscuit">Fluffy Biscuit</option>
                            <option value="Cornbread">Sweet Cornbread</option>
                            <option value="White Toast">White Toast</option>
                            <option value="Wheat Toast">Wheat Toast</option>
                            <option value="Grilled Croissant">Grilled Croissant (+$1.98)</option>
                            <option value="Waffle">Plain Waffle (+$4.98)</option>
                        </select>
                    </div>
                    <div class="option-group-title">
                        <span>Add-Ins (First 2 FREE, then $0.98 each)</span>
                        <span class="option-group-badge">Optional</span>
                    </div>
                    <div class="option-choices" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                        <label class="choice-label"><input type="checkbox" name="omelet_addin" value="Mushrooms"><span>Mushrooms</span></label>
                        <label class="choice-label"><input type="checkbox" name="omelet_addin" value="Onions"><span>Grilled Onions</span></label>
                        <label class="choice-label"><input type="checkbox" name="omelet_addin" value="Bell Peppers"><span>Bell Peppers</span></label>
                        <label class="choice-label"><input type="checkbox" name="omelet_addin" value="Spinach"><span>Spinach</span></label>
                        <label class="choice-label"><input type="checkbox" name="omelet_addin" value="Tomatoes"><span>Tomatoes</span></label>
                        <label class="choice-label"><input type="checkbox" name="omelet_addin" value="American Cheese"><span>American Cheese</span></label>
                        <label class="choice-label"><input type="checkbox" name="omelet_addin" value="Cheddar Cheese"><span>Cheddar Cheese</span></label>
                    </div>
                `;
            } else if (opt === 'bowl_options') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Bowl Base Choice</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices" style="margin-bottom:15px;">
                        <label class="choice-label">
                            <input type="radio" name="bowl_base" value="Buttered Gritz" checked>
                            <span class="choice-details">Creamy Gritz Base</span>
                        </label>
                        <label class="choice-label">
                            <input type="radio" name="bowl_base" value="Homestyle Potatoes">
                            <span class="choice-details">Skillet Potatoes Base</span>
                        </label>
                        <label class="choice-label">
                            <input type="radio" name="bowl_base" value="Mixed Vegetables">
                            <span class="choice-details">Mixed Vegetables Base</span>
                        </label>
                    </div>
                    <div class="option-group-title">
                        <span>Bowl Toppings (First 2 FREE, then $0.98 each)</span>
                        <span class="option-group-badge">Optional</span>
                    </div>
                    <div class="option-choices" style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:15px;">
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Scrambled Egg"><span>Fried Egg</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Crumbled Bacon"><span>Crumbled Bacon</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="American Cheese"><span>American Cheese</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Cheddar Cheese"><span>Cheddar Cheese</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Mushrooms"><span>Mushrooms</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Onions"><span>Grilled Onions</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Jalapeno"><span>Jalapenos</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Spinach"><span>Spinach</span></label>
                        <label class="choice-label"><input type="checkbox" name="bowl_topping" value="Shrimp Topping"><span>Add 3pcs Shrimp (+$5.98)</span></label>
                    </div>
                    <div class="option-group-title">
                        <span>Bread Choice</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <select name="bowl_bread" class="choice-label" style="width:100%; height:42px; padding:0 12px; outline:none; background:#fff; border-radius:8px;">
                            <option value="Biscuit">Biscuit</option>
                            <option value="Cornbread">Cornbread</option>
                            <option value="White Toast">White Toast</option>
                            <option value="Wheat Toast">Wheat Toast</option>
                            <option value="Grilled Croissant">Croissant (+$1.98)</option>
                            <option value="Waffle">Plain Waffle (+$4.98)</option>
                            <option value="Specialty Waffle">Specialty Waffle (+$7.98)</option>
                        </select>
                    </div>
                `;
            } else if (opt === 'meat_choice') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Choose Meat Choice</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="main_meat" value="Fried Catfish Filets" checked><span>Fried Catfish Filets</span></label>
                        <label class="choice-label"><input type="radio" name="main_meat" value="Crispy Chicken Wings"><span>Crispy Chicken Wings</span></label>
                    </div>
                `;
            } else if (opt === 'waffle_selection') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Select Waffle Style</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="waffle_style" value="Sweet Potato (Candied Yams)" checked><span>Sweet Potato (Fresh Candied Yams)</span></label>
                        <label class="choice-label"><input type="radio" name="waffle_style" value="Butter Pecan"><span>Butter Pecan</span></label>
                        <label class="choice-label"><input type="radio" name="waffle_style" value="Peach Cobbler"><span>Peach Cobbler</span></label>
                    </div>
                `;
            } else if (opt === 'eggs_choice') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Choose Egg Style</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="egg_style" value="Scrambled" checked><span>Scrambled</span></label>
                        <label class="choice-label"><input type="radio" name="egg_style" value="Fried"><span>Fried</span></label>
                        <label class="choice-label"><input type="radio" name="egg_style" value="Over Easy"><span>Over Easy</span></label>
                    </div>
                `;
            } else if (opt === 'croissant_sandwich_options') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Select Sandwich Meat</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices" style="margin-bottom:15px;">
                        <label class="choice-label"><input type="radio" name="sand_meat" value="Pork Sausage" checked><span>Pork Sausage</span></label>
                        <label class="choice-label"><input type="radio" name="sand_meat" value="Turkey Sausage"><span>Turkey Sausage</span></label>
                        <label class="choice-label"><input type="radio" name="sand_meat" value="Pork Bacon"><span>Pork Bacon</span></label>
                        <label class="choice-label"><input type="radio" name="sand_meat" value="Turkey Bacon"><span>Turkey Bacon</span></label>
                        <label class="choice-label"><input type="radio" name="sand_meat" value="Juicy Hotlink"><span>Beef Hotlink</span></label>
                    </div>
                    <div class="option-group-title">
                        <span>Basket Accompaniment</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="sand_side" value="Seasoned Fries" checked><span>With French Fries</span></label>
                        <label class="choice-label"><input type="radio" name="sand_side" value="Creamy Gritz"><span>With Buttered Gritz</span></label>
                        <label class="choice-label"><input type="radio" name="sand_side" value="No Side (-$4.00)"><span>Without Side (-$4.00)</span></label>
                    </div>
                `;
            } else if (opt === 'burger_options') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Patty Type</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices" style="margin-bottom:15px;">
                        <label class="choice-label"><input type="radio" name="burger_patty" value="Handmade Beef Patty" checked><span>Beef Patty</span></label>
                        <label class="choice-label"><input type="radio" name="burger_patty" value="Handmade Turkey Patty"><span>Turkey Patty</span></label>
                    </div>
                    <div class="option-group-title">
                        <span>Accompaniment Choice</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="burger_side" value="French Fries" checked><span>With French Fries</span></label>
                        <label class="choice-label"><input type="radio" name="burger_side" value="Buttered Gritz"><span>With Buttered Gritz</span></label>
                    </div>
                `;
            } else if (opt === 'kids_meat_choice') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Kids Meat Choice</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="kids_meat" value="Chicken Wing" checked><span>Chicken Wing</span></label>
                        <label class="choice-label"><input type="radio" name="kids_meat" value="Catfish Fillet"><span>Catfish Fillet</span></label>
                    </div>
                `;
            } else if (opt === 'kids_bacon_sausage_choice') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Kids Protein Choice</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="kids_prot" value="Crispy Bacon" checked><span>Crispy Bacon</span></label>
                        <label class="choice-label"><input type="radio" name="kids_prot" value="Sausage Patty"><span>Sausage Patty</span></label>
                    </div>
                `;
            } else if (opt === 'fountain_selection') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Select Beverage (Free Refills)</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <select name="drink_choice" class="choice-label" style="width:100%; height:42px; padding:0 12px; outline:none; background:#fff; border-radius:8px;">
                            <option value="Coca Cola">Coca Cola</option>
                            <option value="Diet Coke">Diet Coke</option>
                            <option value="Sprite">Sprite</option>
                            <option value="Lemonade">Lemonade</option>
                            <option value="Strawberry Fanta">Strawberry Fanta</option>
                            <option value="Sweet Tea">Sweet Tea</option>
                            <option value="Muddy Water">Muddy Water</option>
                            <option value="Regular Coffee">Regular Coffee</option>
                            <option value="Decaf Coffee">Decaf Coffee</option>
                        </select>
                    </div>
                `;
            } else if (opt === 'juice_selection') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Choose Juice / Milk</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <select name="juice_choice" class="choice-label" style="width:100%; height:42px; padding:0 12px; outline:none; background:#fff; border-radius:8px;">
                            <option value="Apple Juice">Apple Juice</option>
                            <option value="Orange Juice">Orange Juice</option>
                            <option value="Grape Juice">Grape Juice</option>
                            <option value="Cranberry Juice">Cranberry Juice</option>
                            <option value="Grapefruit Juice">Grapefruit Juice</option>
                            <option value="Cold Milk">Cold Milk</option>
                        </select>
                    </div>
                `;
            } else if (opt === 'specialty_drink_selection') {
                group.innerHTML = `
                    <div class="option-group-title">
                        <span>Select Specialty Drink</span>
                        <span class="option-group-badge">Required</span>
                    </div>
                    <div class="option-choices">
                        <label class="choice-label"><input type="radio" name="specialty_choice" value="Hot Chocolate" checked><span>Hot Chocolate w/ Marshmallows</span></label>
                        <label class="choice-label"><input type="radio" name="specialty_choice" value="Strawberry Lemonade"><span>Strawberry Lemonade</span></label>
                    </div>
                `;
            }
            optionsContainer.appendChild(group);
        });
    }
    
    const modal = document.getElementById('customizationModal');
    if (modal) modal.classList.add('open');
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('customizationModal');
    if (modal) modal.classList.remove('open');
    activeItem = null;
}

// Adjust Modal Quantity
function adjustModalQuantity(amount) {
    const qtyElem = document.getElementById('modalQty');
    if (!qtyElem) return;
    let currentQty = parseInt(qtyElem.innerText);
    currentQty += amount;
    if (currentQty < 1) currentQty = 1;
    qtyElem.innerText = currentQty.toString();
}

// Submit Modal Customizations & Add to Cart (Applying upcharge rules)
function submitCustomizations() {
    if (!activeItem) return;
    
    const qty = parseInt(document.getElementById('modalQty').innerText);
    const customizations = [];
    let priceAdjust = 0;
    
    // 1. Process Favorite Accompaniments
    const favSide = document.querySelector('input[name="fav_side"]:checked');
    if (favSide) customizations.push(`Side: ${favSide.value}`);

    // 2. Process Plate Options (sides upcharges)
    const plateSide1 = document.querySelector('select[name="plate_side_1"]');
    const plateSide2 = document.querySelector('select[name="plate_side_2"]');
    const plateBread = document.querySelector('select[name="plate_bread"]');
    
    if (plateSide1) {
        customizations.push(`Side 1: ${plateSide1.value}`);
        if (plateSide1.value === "Sweet Potato Fries") priceAdjust += 1.98;
    }
    if (plateSide2) {
        customizations.push(`Side 2: ${plateSide2.value}`);
        if (plateSide2.value === "Sweet Potato Fries") priceAdjust += 1.98;
    }
    if (plateBread) {
        customizations.push(`Bread: ${plateBread.value}`);
        if (plateBread.value === "Grilled Croissant") priceAdjust += 1.98;
        if (plateBread.value === "Regular Waffle") priceAdjust += 4.98;
    }

    // 3. Process Baskets
    const basketSide = document.querySelector('input[name="basket_side"]:checked');
    if (basketSide) customizations.push(`Side: ${basketSide.value}`);

    // 4. Process Omelet Options
    const omeletSide = document.querySelector('input[name="omelet_side"]:checked');
    const omeletBread = document.querySelector('select[name="omelet_bread"]');
    const omeletAddins = document.querySelectorAll('input[name="omelet_addin"]:checked');
    
    if (omeletSide) customizations.push(`Side: ${omeletSide.value}`);
    if (omeletBread) {
        customizations.push(`Bread: ${omeletBread.value}`);
        if (omeletBread.value === "Grilled Croissant") priceAdjust += 1.98;
        if (omeletBread.value === "Waffle") priceAdjust += 4.98;
    }
    if (omeletAddins.length > 0) {
        const checkedList = Array.from(omeletAddins).map(cb => cb.value);
        customizations.push(`Addins: ${checkedList.join(', ')}`);
        // First 2 add-ins are free, each additional is $0.98
        if (checkedList.length > 2) {
            priceAdjust += (checkedList.length - 2) * 0.98;
        }
    }

    // 5. Process Bowl Options
    const bowlBase = document.querySelector('input[name="bowl_base"]:checked');
    const bowlToppings = document.querySelectorAll('input[name="bowl_topping"]:checked');
    const bowlBread = document.querySelector('select[name="bowl_bread"]');
    
    if (bowlBase) customizations.push(`Base: ${bowlBase.value}`);
    if (bowlBread) {
        customizations.push(`Bread: ${bowlBread.value}`);
        if (bowlBread.value === "Grilled Croissant") priceAdjust += 1.98;
        if (bowlBread.value === "Waffle") priceAdjust += 4.98;
        if (bowlBread.value === "Specialty Waffle") priceAdjust += 7.98;
    }
    if (bowlToppings.length > 0) {
        const checkedList = Array.from(bowlToppings).map(cb => cb.value);
        let standardToppingsCount = 0;
        
        checkedList.forEach(topping => {
            if (topping === "Shrimp Topping") {
                priceAdjust += 5.98; // Special fixed upcharge for shrimp topping
                customizations.push(`Topping: Add 3pcs Shrimp`);
            } else {
                standardToppingsCount++;
                customizations.push(`Topping: ${topping}`);
            }
        });
        
        // First 2 standard toppings are free, each additional is $0.98
        if (standardToppingsCount > 2) {
            priceAdjust += (standardToppingsCount - 2) * 0.98;
        }
    }

    // 6. Simple Toggles & Choices
    const mainMeat = document.querySelector('input[name="main_meat"]:checked');
    if (mainMeat) customizations.push(`Meat: ${mainMeat.value}`);
    
    const waffleStyle = document.querySelector('input[name="waffle_style"]:checked');
    if (waffleStyle) customizations.push(`Style: ${waffleStyle.value}`);
    
    const eggStyle = document.querySelector('input[name="egg_style"]:checked');
    if (eggStyle) customizations.push(`Eggs: ${eggStyle.value}`);

    const kidsMeat = document.querySelector('input[name="kids_meat"]:checked');
    if (kidsMeat) customizations.push(`Kids Main: ${kidsMeat.value}`);

    const kidsProt = document.querySelector('input[name="kids_prot"]:checked');
    if (kidsProt) customizations.push(`Kids Meat: ${kidsProt.value}`);
    
    const drinkChoice = document.querySelector('select[name="drink_choice"]');
    if (drinkChoice) customizations.push(`Flav: ${drinkChoice.value}`);

    const juiceChoice = document.querySelector('select[name="juice_choice"]');
    if (juiceChoice) customizations.push(`Juice: ${juiceChoice.value}`);

    const specChoice = document.querySelector('input[name="specialty_choice"]:checked');
    if (specChoice) customizations.push(`Beverage: ${specChoice.value}`);

    // Croissant Sandwich options (side discounts)
    const sandMeat = document.querySelector('input[name="sand_meat"]:checked');
    const sandSide = document.querySelector('input[name="sand_side"]:checked');
    if (sandMeat) customizations.push(`Meat: ${sandMeat.value}`);
    if (sandSide) {
        customizations.push(`Accomp: ${sandSide.value}`);
        if (sandSide.value.includes('No Side')) {
            priceAdjust -= 4.00; // Deduct $4.00 if ordered without a side
        }
    }

    // Burger options
    const burgerPatty = document.querySelector('input[name="burger_patty"]:checked');
    const burgerSide = document.querySelector('input[name="burger_side"]:checked');
    if (burgerPatty) customizations.push(`Patty: ${burgerPatty.value}`);
    if (burgerSide) customizations.push(`Side: ${burgerSide.value}`);

    const cartItemId = Date.now().toString(); // unique ID
    const finalPrice = activeItem.price + priceAdjust;
    
    cart.push({
        cartId: cartItemId,
        id: activeItem.id,
        name: activeItem.name,
        basePrice: activeItem.price,
        finalPrice: finalPrice,
        qty: qty,
        customizations: customizations
    });
    
    closeModal();
    saveCart();
    renderCart();
    
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) cartSidebar.classList.add('open');
}

// Render Cart HTML items & Update state
function renderCart() {
    const wrapper = document.getElementById('cartItemsWrapper');
    const badge = document.getElementById('cartCountBadge');
    if (!wrapper) return;
    
    wrapper.innerHTML = '';
    
    if (cart.length === 0) {
        wrapper.innerHTML = `
            <div class="cart-empty-message">
                <p>Your cart is empty.</p>
                <p style="font-size:12px; margin-top:10px;">Go ahead and add some delicious Southern soul food!</p>
            </div>
        `;
        if (badge) badge.innerText = '0';
        updateCartTotals();
        return;
    }
    
    let totalQty = 0;
    
    cart.forEach(item => {
        totalQty += item.qty;
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        
        let custHtml = item.customizations.length > 0 
            ? `<div class="cart-item-customizations">${item.customizations.join(', ')}</div>` 
            : '';
            
        itemRow.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                ${custHtml}
                <div class="cart-item-price-qty">
                    <span class="cart-item-qty">Qty: ${item.qty}</span>
                    <span class="cart-item-price">$${(item.finalPrice * item.qty).toFixed(2)}</span>
                </div>
            </div>
            <button class="remove-cart-item-btn" onclick="removeFromCart('${item.cartId}')">Remove</button>
        `;
        
        wrapper.appendChild(itemRow);
    });
    
    if (badge) badge.innerText = totalQty;
    updateCartTotals();
}

// Remove from Cart
function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    renderCart();
}

// Calculate & Update Totals
function updateCartTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.finalPrice * item.qty;
    });
    
    const taxRate = 0.08375; // Las Vegas tax
    const tax = subtotal * taxRate;
    
    let deliveryFee = 0;
    if (fulfillmentType === 'delivery' && subtotal > 0) {
        deliveryFee = 3.99;
    }
    
    const grandTotal = subtotal + tax + deliveryFee;
    
    const subElem = document.getElementById('cartSubtotal');
    const taxElem = document.getElementById('cartTax');
    const totalElem = document.getElementById('cartGrandTotal');
    
    if (subElem) subElem.innerText = `$${subtotal.toFixed(2)}`;
    if (taxElem) taxElem.innerText = `$${tax.toFixed(2)}`;
    if (totalElem) totalElem.innerText = `$${grandTotal.toFixed(2)}`;
    
    const deliveryRow = document.getElementById('cartDeliveryRow');
    if (deliveryRow) {
        if (fulfillmentType === 'delivery' && subtotal > 0) {
            deliveryRow.style.display = 'flex';
            document.getElementById('cartDeliveryFee').innerText = `$${deliveryFee.toFixed(2)}`;
        } else {
            deliveryRow.style.display = 'none';
        }
    }
    
    const mobileQtyElem = document.getElementById('mobileCartQtyVal');
    const mobileTotalElem = document.getElementById('mobileCartTotalVal');
    const stickyBar = document.getElementById('stickyMobileBar');
    
    if (mobileQtyElem && mobileTotalElem) {
        let totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
        mobileQtyElem.innerText = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
        mobileTotalElem.innerText = `$${grandTotal.toFixed(2)}`;
    }
    
    if (stickyBar) {
        if (cart.length > 0) {
            stickyBar.style.display = 'flex';
        } else {
            stickyBar.style.display = 'none';
        }
    }
}

// Checkout Redirection
function runCheckout() {
    if (cart.length === 0) {
        alert('Please add some items to your cart first.');
        return;
    }

    // If delivery, collect address first
    if (fulfillmentType === 'delivery') {
        openAddressModal();
        return;
    }

    // Pickup — proceed directly
    finalizeOrder();
}

// Open Address Collection Modal
function openAddressModal() {
    const modal = document.getElementById('addressModal');
    if (modal) modal.classList.add('open');
    // Close the cart sidebar so the modal is fully visible
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) cartSidebar.classList.remove('open');
}

// Close Address Modal
function closeAddressModal() {
    const modal = document.getElementById('addressModal');
    if (modal) modal.classList.remove('open');
}

// Validate & Confirm Delivery Address then finalize
function confirmDeliveryCheckout() {
    const street = document.getElementById('addrStreet');
    const city = document.getElementById('addrCity');
    const zip = document.getElementById('addrZip');
    const phone = document.getElementById('addrPhone');
    const notes = document.getElementById('addrNotes');

    if (!street || !street.value.trim()) {
        street.focus();
        street.style.borderColor = 'var(--accent-red)';
        return;
    }
    if (!city || !city.value.trim()) {
        city.focus();
        city.style.borderColor = 'var(--accent-red)';
        return;
    }
    if (!zip || !zip.value.trim()) {
        zip.focus();
        zip.style.borderColor = 'var(--accent-red)';
        return;
    }
    if (!phone || !phone.value.trim()) {
        phone.focus();
        phone.style.borderColor = 'var(--accent-red)';
        return;
    }

    // Save address to localStorage for tracking page to display
    const deliveryAddress = {
        street: street.value.trim(),
        city: city.value.trim(),
        zip: zip.value.trim(),
        phone: phone.value.trim(),
        notes: notes ? notes.value.trim() : ''
    };
    localStorage.setItem('gritz_delivery_address', JSON.stringify(deliveryAddress));

    closeAddressModal();
    finalizeOrder();
}

// Finalize & redirect to tracking
function finalizeOrder() {
    orderCount++;
    localStorage.setItem('gritz_last_order_num', orderCount.toString());
    
    // Calculate totals
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.finalPrice * item.qty;
    });
    const taxRate = 0.08375;
    const tax = subtotal * taxRate;
    let deliveryFee = 0;
    if (fulfillmentType === 'delivery' && subtotal > 0) {
        deliveryFee = 3.99;
    }
    const grandTotal = subtotal + tax + deliveryFee;
    
    // Get address
    let deliveryAddress = null;
    if (fulfillmentType === 'delivery') {
        const savedAddr = localStorage.getItem('gritz_delivery_address');
        if (savedAddr) {
            try {
                deliveryAddress = JSON.parse(savedAddr);
            } catch(e) {}
        }
    }
    
    // Create new order object
    const newOrder = {
        orderId: orderCount.toString(),
        items: JSON.parse(JSON.stringify(cart)), // deep copy
        fulfillmentType: fulfillmentType,
        address: deliveryAddress,
        subtotal: subtotal,
        tax: tax,
        deliveryFee: deliveryFee,
        total: grandTotal,
        status: 'received',
        timestamp: Date.now(),
        timeFormatted: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Save to gritz_orders array
    let orders = [];
    const storedOrders = localStorage.getItem('gritz_orders');
    if (storedOrders) {
        try {
            orders = JSON.parse(storedOrders);
        } catch(e) {}
    }
    orders.push(newOrder);
    localStorage.setItem('gritz_orders', JSON.stringify(orders));
    
    // Set active tracking details
    localStorage.setItem('gritz_current_tracking_id', orderCount.toString());
    localStorage.setItem('gritz_just_ordered', 'true');
    localStorage.setItem('gritz_order_fulfillment', fulfillmentType);
    
    // Clear cart and redirect
    cart = [];
    saveCart();
    
    window.location.href = 'track.html';
}

// Check Active Tracking on Page Load
function checkActiveTracking() {
    const orderNumElem = document.getElementById('displayOrderNumber');
    const steps = document.querySelectorAll('.step-node');
    const trackerProgressLine = document.getElementById('trackerProgressLine');
    const etaVal = document.getElementById('trackerEtaVal');
    
    if (!orderNumElem || steps.length === 0) return;
    
    const activeId = localStorage.getItem('gritz_current_tracking_id') || localStorage.getItem('gritz_last_order_num') || '1084';
    orderNumElem.innerText = activeId;
    
    function updateTrackerUI() {
        // Read orders
        let orders = [];
        const storedOrders = localStorage.getItem('gritz_orders');
        if (storedOrders) {
            try {
                orders = JSON.parse(storedOrders);
            } catch(e) {}
        }
        
        const order = orders.find(o => o.orderId === activeId);
        
        if (order) {
            const status = order.status || 'received';
            const fType = order.fulfillmentType || 'pickup';
            
            // Set ETA text
            if (etaVal) {
                if (status === 'received' || status === 'cooking') {
                    etaVal.innerText = fType === 'pickup' ? '15-20 Minutes' : '35-45 Minutes';
                } else if (status === 'ready') {
                    etaVal.innerText = fType === 'pickup' ? 'Ready for Pickup!' : 'Out for Delivery!';
                } else if (status === 'completed') {
                    etaVal.innerText = fType === 'pickup' ? 'Picked Up!' : 'Delivered!';
                }
            }
            
            // Update last step label
            const lastStepLabel = document.getElementById('lastStepLabel');
            if (lastStepLabel) {
                lastStepLabel.innerText = fType === 'pickup' ? 'Ready for Pickup' : 'Out for Delivery';
            }
            
            // Update delivery address block if it's a delivery order
            const addrBlock = document.getElementById('deliveryAddressBlock');
            if (addrBlock) {
                if (fType === 'delivery' && order.address) {
                    addrBlock.style.display = 'block';
                    const addrLine = document.getElementById('deliveryAddrLine');
                    const phoneLine = document.getElementById('deliveryPhoneLine');
                    const notesLine = document.getElementById('deliveryNotesLine');
                    
                    if (addrLine) addrLine.innerHTML = `📍 ${order.address.street}, ${order.address.city}, NV ${order.address.zip}`;
                    if (phoneLine) phoneLine.innerHTML = `📞 ${order.address.phone}`;
                    if (order.address.notes && notesLine) {
                        notesLine.style.display = 'block';
                        notesLine.innerHTML = `📝 "${order.address.notes}"`;
                    } else if (notesLine) {
                        notesLine.style.display = 'none';
                    }
                } else {
                    addrBlock.style.display = 'none';
                }
            }
            
            // Highlight steps
            let activeIdx = 0;
            let progressWidth = '0%';
            
            if (status === 'received') {
                activeIdx = 0;
                progressWidth = '0%';
            } else if (status === 'cooking') {
                activeIdx = 1;
                progressWidth = '33%';
            } else if (status === 'ready') {
                activeIdx = 2;
                progressWidth = '66%';
            } else if (status === 'completed') {
                activeIdx = 3;
                progressWidth = '100%';
            }
            
            steps.forEach((node, idx) => {
                node.classList.remove('active', 'completed');
                if (status === 'completed') {
                    node.classList.add('completed');
                } else {
                    if (idx < activeIdx) {
                        node.classList.add('completed');
                    } else if (idx === activeIdx) {
                        node.classList.add('active');
                    }
                }
            });
            
            if (trackerProgressLine) {
                trackerProgressLine.style.width = progressWidth;
            }
            
        } else {
            // Fallback to legacy/timer flow if order not in localStorage yet
            const justOrdered = localStorage.getItem('gritz_just_ordered');
            const fType = localStorage.getItem('gritz_order_fulfillment') || 'pickup';
            
            const lastStepLabel = document.getElementById('lastStepLabel');
            if (lastStepLabel) {
                lastStepLabel.innerText = fType === 'pickup' ? 'Ready for Pickup' : 'Out for Delivery';
            }
            
            if (justOrdered === 'true') {
                // Keep the fake timer for fallback compatibility
                steps.forEach((s, idx) => {
                    s.classList.remove('active', 'completed');
                    if (idx === 0) s.classList.add('active');
                });
                if (trackerProgressLine) trackerProgressLine.style.width = '0%';
                
                const fallbackOrder = {
                    orderId: activeId,
                    items: [],
                    fulfillmentType: fType,
                    status: 'received',
                    timestamp: Date.now()
                };
                let orders = [];
                try {
                    orders = JSON.parse(localStorage.getItem('gritz_orders') || '[]');
                } catch(e) {}
                orders.push(fallbackOrder);
                localStorage.setItem('gritz_orders', JSON.stringify(orders));
                updateTrackerUI();
            } else {
                steps.forEach(s => s.classList.add('completed'));
                if (trackerProgressLine) trackerProgressLine.style.width = '100%';
                if (etaVal) etaVal.innerText = fType === 'pickup' ? 'Picked Up!' : 'Delivered!';
            }
        }
    }
    
    // Initial run
    updateTrackerUI();
    
    // Polling and storage event listener for real-time synchronization
    window.addEventListener('storage', (e) => {
        if (e.key === 'gritz_orders' || e.key === 'gritz_current_tracking_id') {
            updateTrackerUI();
        }
    });
    
    setInterval(updateTrackerUI, 2000);
}

// Owner Admin Dashboard Logic
function initAdminDashboard() {
    const lockOverlay = document.getElementById('adminLockOverlay');
    const pinInput = document.getElementById('adminPinInput');
    const unlockBtn = document.getElementById('adminUnlockBtn');
    const pinError = document.getElementById('adminPinError');
    const logoutBtn = document.getElementById('adminLogoutBtn');
    const ordersGrid = document.getElementById('adminOrdersGrid');
    const liveDotBtn = document.getElementById('adminLiveDot');
    
    // Toggle Store Status (Live vs Closed)
    function updateLiveDotUI() {
        if (!liveDotBtn) return;
        const currentStatus = localStorage.getItem('gritz_store_status') || 'live';
        if (currentStatus === 'live') {
            liveDotBtn.innerText = '● LIVE';
            liveDotBtn.classList.remove('closed');
        } else {
            liveDotBtn.innerText = '● CLOSED';
            liveDotBtn.classList.add('closed');
        }
    }
    
    if (liveDotBtn) {
        liveDotBtn.addEventListener('click', () => {
            const currentStatus = localStorage.getItem('gritz_store_status') || 'live';
            const newStatus = (currentStatus === 'live') ? 'closed' : 'live';
            localStorage.setItem('gritz_store_status', newStatus);
            updateLiveDotUI();
            checkStoreStatus();
        });
        updateLiveDotUI();
    }
    
    // Check PIN Authentication
    function checkAuth() {
        return sessionStorage.getItem('gritz_admin_logged_in') === 'true';
    }
    
    function tryUnlock() {
        if (pinInput.value === '1234') {
            sessionStorage.setItem('gritz_admin_logged_in', 'true');
            if (lockOverlay) lockOverlay.classList.add('hidden');
            if (pinError) pinError.style.display = 'none';
            pinInput.value = '';
            renderAdminDashboard();
        } else {
            if (pinError) pinError.style.display = 'block';
            pinInput.value = '';
            pinInput.focus();
        }
    }
    
    if (unlockBtn) {
        unlockBtn.addEventListener('click', tryUnlock);
    }
    if (pinInput) {
        pinInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') tryUnlock();
        });
    }
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('gritz_admin_logged_in');
            if (lockOverlay) lockOverlay.classList.remove('hidden');
        });
    }
    
    // Auto-login on load if already authenticated
    if (checkAuth()) {
        if (lockOverlay) lockOverlay.classList.add('hidden');
    }
    
    let activeFilter = 'all';
    
    // Wire up filter tabs
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.dataset.filter;
            renderAdminDashboard();
        });
    });
    
    // Wire up Clear Completed button
    const clearBtn = document.getElementById('clearCompletedBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all completed orders from storage?')) {
                let orders = [];
                try {
                    orders = JSON.parse(localStorage.getItem('gritz_orders') || '[]');
                } catch(e) {}
                orders = orders.filter(o => o.status !== 'completed');
                localStorage.setItem('gritz_orders', JSON.stringify(orders));
                renderAdminDashboard();
            }
        });
    }
    
    function renderAdminDashboard() {
        if (!checkAuth() || !ordersGrid) return;
        
        let orders = [];
        try {
            orders = JSON.parse(localStorage.getItem('gritz_orders') || '[]');
        } catch(e) {}
        
        // 1. Calculate Stats
        let receivedCount = 0;
        let cookingCount = 0;
        let readyCount = 0;
        let completedCount = 0;
        
        orders.forEach(o => {
            const status = o.status || 'received';
            if (status === 'received') receivedCount++;
            else if (status === 'cooking') cookingCount++;
            else if (status === 'ready') readyCount++;
            else if (status === 'completed') completedCount++;
        });
        
        const statPending = document.getElementById('statPending');
        const statCooking = document.getElementById('statCooking');
        const statReady = document.getElementById('statReady');
        const statCompleted = document.getElementById('statCompleted');
        
        if (statPending) statPending.innerText = receivedCount;
        if (statCooking) statCooking.innerText = cookingCount;
        if (statReady) statReady.innerText = readyCount;
        if (statCompleted) statCompleted.innerText = completedCount;
        
        // 2. Filter Orders
        let filteredOrders = orders;
        if (activeFilter !== 'all') {
            filteredOrders = orders.filter(o => o.status === activeFilter);
        }
        
        // Sort orders so newer ones appear first, except completed ones which go to the end
        filteredOrders.sort((a, b) => {
            if (a.status === 'completed' && b.status !== 'completed') return 1;
            if (b.status === 'completed' && a.status !== 'completed') return -1;
            return b.timestamp - a.timestamp;
        });
        
        // 3. Render list
        ordersGrid.innerHTML = '';
        
        if (filteredOrders.length === 0) {
            ordersGrid.innerHTML = `
                <div style="text-align:center; color:var(--text-muted); grid-column:1/-1; padding:60px; background:#181816; border:1px dashed #26241e; border-radius:12px; margin-top:20px;">
                    <p style="font-size:16px; margin-bottom:8px;">📋 No orders in this section.</p>
                    <p style="font-size:13px; opacity:0.6;">New orders will automatically appear here in real-time.</p>
                </div>
            `;
            return;
        }
        
        filteredOrders.forEach(order => {
            const card = document.createElement('div');
            card.className = 'admin-order-card';
            
            // Format status badge text
            let statusText = 'New';
            let badgeClass = 'received';
            if (order.status === 'cooking') { statusText = 'Cooking'; badgeClass = 'cooking'; }
            else if (order.status === 'ready') {
                statusText = order.fulfillmentType === 'pickup' ? 'Ready' : 'Out';
                badgeClass = 'ready';
            }
            else if (order.status === 'completed') { statusText = 'Done'; badgeClass = 'completed'; }
            
            // Items formatting
            let itemsHtml = '';
            if (order.items && Array.isArray(order.items)) {
                order.items.forEach(item => {
                    let custLine = item.customizations && item.customizations.length > 0 
                        ? `<div class="admin-card-item-cust">${item.customizations.join(', ')}</div>` 
                        : '';
                    itemsHtml += `
                        <div class="admin-card-item">
                            <div><span class="admin-card-item-qty">${item.qty}x</span><strong>${item.name}</strong></div>
                            ${custLine}
                        </div>
                    `;
                });
            }
            
            // Delivery details formatting
            let deliveryHtml = '';
            if (order.fulfillmentType === 'delivery' && order.address) {
                const notesHtml = order.address.notes 
                    ? `<div class="admin-card-notes">📝 Note: "${order.address.notes}"</div>` 
                    : '';
                deliveryHtml = `
                    <div class="admin-card-address">
                        <div>📍 <strong>Address:</strong> ${order.address.street}, ${order.address.city}</div>
                        <div style="margin-top:4px;">📞 <strong>Phone:</strong> ${order.address.phone}</div>
                        ${notesHtml}
                    </div>
                `;
            } else if (order.fulfillmentType === 'pickup' && order.address && order.address.phone) {
                deliveryHtml = `
                    <div class="admin-card-address" style="border-left-color: var(--primary);">
                        <div>📞 <strong>Phone:</strong> ${order.address.phone}</div>
                    </div>
                `;
            }
            
            // Action button creation
            let actionBtnHtml = '';
            if (order.status === 'received') {
                actionBtnHtml = `
                    <button class="admin-btn admin-btn-cook" onclick="updateOrderStatus('${order.orderId}', 'cooking')">
                        🍳 Start Cooking
                    </button>
                `;
            } else if (order.status === 'cooking') {
                const btnText = order.fulfillmentType === 'pickup' ? '📦 Ready for Pickup' : '🚴 Out for Delivery';
                actionBtnHtml = `
                    <button class="admin-btn admin-btn-ready" onclick="updateOrderStatus('${order.orderId}', 'ready')">
                        ${btnText}
                    </button>
                `;
            } else if (order.status === 'ready') {
                actionBtnHtml = `
                    <button class="admin-btn admin-btn-complete" onclick="updateOrderStatus('${order.orderId}', 'completed')">
                        ✅ Complete Order
                    </button>
                `;
            }
            
            card.innerHTML = `
                <div class="admin-card-header">
                    <div>
                        <div class="admin-card-id">Order <span>#${order.orderId}</span></div>
                        <div class="admin-card-type ${order.fulfillmentType}">${order.fulfillmentType.toUpperCase()}</div>
                    </div>
                    <div style="text-align: right;">
                        <span class="item-badge ${badgeClass}" style="position:static; padding:3px 10px; font-size:11px;">${statusText}</span>
                        <div class="admin-card-time">${order.timeFormatted}</div>
                    </div>
                </div>
                
                <div class="admin-card-items">
                    ${itemsHtml}
                </div>
                
                ${deliveryHtml}
                
                <div class="admin-card-total">
                    <span>Amount Paid</span>
                    <span>$${order.total.toFixed(2)}</span>
                </div>
                
                ${actionBtnHtml ? `<div class="admin-card-actions">${actionBtnHtml}</div>` : ''}
            `;
            
            ordersGrid.appendChild(card);
        });
    }
    
    // Expose updateOrderStatus to global scope so onclick handlers work
    window.updateOrderStatus = function(orderId, newStatus) {
        let orders = [];
        try {
            orders = JSON.parse(localStorage.getItem('gritz_orders') || '[]');
        } catch(e) {}
        
        const idx = orders.findIndex(o => o.orderId === orderId);
        if (idx !== -1) {
            orders[idx].status = newStatus;
            localStorage.setItem('gritz_orders', JSON.stringify(orders));
            renderAdminDashboard();
        }
    };
    
    // Initial draw
    renderAdminDashboard();
    
    // Storage listener & Polling for instant cross-tab sync
    window.addEventListener('storage', (e) => {
        if (e.key === 'gritz_orders') {
            renderAdminDashboard();
        }
    });
    
    setInterval(renderAdminDashboard, 3000);
}
