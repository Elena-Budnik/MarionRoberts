type News = {
    
    id:number
    category: string
    date: string
    article: string
    image:string;
    autor:string;
    tags: string;
    text:string;
    
}

const newsArray: News[] = [
{
    id: 1,
    category:"SHOPPING",
    date:"APRIL 23, 2022",
    article:"How To Make a Memorable Night At Home On Any Budget",
    image:"images/img-newsList/1.jpg",
    autor: "by ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:"LOREM LOREM LOREMMdsg", 
},
{
    id:2,
    category:"BEAUTY",
    date:"APRIL 23, 2022",
    article:"The Embellished Piece Your Closet is Craving",
    image:"images/img-newsList/2.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:"",

},
{
    id:3,
    category:"BEAUTY",
    date:"FEBRUARY 23, 2023",
    article:"Every Single One of My Friends Is Obsessed With These Dresses",
    image:"images/img-newsList/3.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:"",
},
{
    id:4,
    category:"CULTURE",
    date:"APRIL 23, 2022",
    article:"My New Mother`s Day Collection Just Launched!",
    image:"images/img-newsList/4.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:"",
},
{
    id:5,
    category:"EDITORIAL",
    date:"APRIL 23, 2022",
    article:"The Boots Everyone`s Adding to their Wardrobe this Season",
    image:"images/img-newsList/5.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:"",
},
{
    id:6,
    category:"BEAUTY",
    date:"APRIL 22, 2022",
    article:"The Retailer You Didn`t Know You Were Missing",
    image:"images/img-newsList/6.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:"",

},
{
    id:7,
    category:"FASHION",
    date:"APRIL 23, 2022",
    article:"Last Minute Holiday Prep Hacks!",
    image:"images/img-newsList/7.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:"",
}
]

export default newsArray