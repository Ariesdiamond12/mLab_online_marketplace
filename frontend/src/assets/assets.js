import CeraVe from './images/cerave.jpg'
import Toner from './images/toner.jpg'
import Peeling from './images/peeling.jpg'
import Niacinamide from './images/niacinamide.jpg'
import Exfoliating from './images/exfoliating.jpg'
import Face_Mask from './images/face-mask.jpg'
import  Moisturizer from './images/moisturizer.jpg'
import Milk_Toner from './images/milk-toner.jpg'
import Daily from './images/daily.jpg'
import Hyaluronic from './images/hyluaronic.jpg'
import Cleanser from './images/may.jpg'


// export const assets = {
//     logo,
//     hero_img,
//     cart_icon,
//     dropdown_icon,
//     exchange_icon,
//     profile_icon,
//     quality_icon,
//     search_icon,
//     star_dull_icon,
//     star_icon,
//     bin_icon,
//     support_img,
//     menu_icon,
//     about_img,
//     contact_img,
//     razorpay_logo,
//     stripe_logo,
//     cross_icon
// }

export const products = [
    {
        _id: "aaaaa",
        name: "The Ordinary",
        description: "Niacinamide",
        price: 100,
        image: [Niacinamide],
        category: "Serum",
        subCategory: "Skin Care",
        sizes: ["30ml", "100ml", "120ml"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "The Ordinary",
        description: "Peeling Solution",
        price: 200,
        image: [Peeling],
        category: "Exfoliator",
        subCategory: "Skin Care",
        sizes: ["30ml", "50ml"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "The Ordinary",
        description: "Natural Moisturizing Factors",
        price: 120,
        image: [Face_Mask],
        category: "Moisturizer",
        subCategory: "Skin Care",
        sizes: ["30ml", "50ml", "100ml"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "The Ordinary",
        description: "Glycolic Acid",
        price: 240,
        image: [Toner],
        category: "Toner",
        subCategory: "Skin Care",
        sizes: ["120ml"],
        date: 1716621345448,
        bestseller: true
    },

]