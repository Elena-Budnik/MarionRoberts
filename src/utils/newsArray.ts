 export type News = {
    
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
    text:" Instagram didn't exist when I was in high school, but I imagine I'd be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D'Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional. At Coachella in 2015, pictures of D'Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival's official Twitter and The Cobra Snake's Instagram, among others. BuzzFeed spoke to D'Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D'Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D'Alessio's stake in the California modeling pantheon will only deepen.", 
},
{
    id:2,
    category:"BEAUTY",
    date:"APRIL 23, 2022",
    article:"The Embellished Piece Your Closet is Craving",
    image:"images/img-newsList/2.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:" Instagram didn't exist when I was in high school, but I imagine I'd be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D'Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional. At Coachella in 2015, pictures of D'Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival's official Twitter and The Cobra Snake's Instagram, among others. BuzzFeed spoke to D'Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D'Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D'Alessio's stake in the California modeling pantheon will only deepen.", 

},
{
    id:3,
    category:"BEAUTY",
    date:"FEBRUARY 23, 2023",
    article:"Every Single One of My Friends Is Obsessed With These Dresses",
    image:"images/img-newsList/3.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:" Instagram didn't exist when I was in high school, but I imagine I'd be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D'Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional. At Coachella in 2015, pictures of D'Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival's official Twitter and The Cobra Snake's Instagram, among others. BuzzFeed spoke to D'Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D'Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D'Alessio's stake in the California modeling pantheon will only deepen.", 
},
{
    id:4,
    category:"CULTURE",
    date:"APRIL 23, 2022",
    article:"My New Mother`s Day Collection Just Launched!",
    image:"images/img-newsList/4.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:" Instagram didn't exist when I was in high school, but I imagine I'd be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D'Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional. At Coachella in 2015, pictures of D'Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival's official Twitter and The Cobra Snake's Instagram, among others. BuzzFeed spoke to D'Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D'Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D'Alessio's stake in the California modeling pantheon will only deepen.", 
},
{
    id:5,
    category:"EDITORIAL",
    date:"APRIL 23, 2022",
    article:"The Boots Everyone`s Adding to their Wardrobe this Season",
    image:"images/img-newsList/5.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:" Instagram didn't exist when I was in high school, but I imagine I'd be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D'Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional. At Coachella in 2015, pictures of D'Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival's official Twitter and The Cobra Snake's Instagram, among others. BuzzFeed spoke to D'Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D'Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D'Alessio's stake in the California modeling pantheon will only deepen.", 
},
{
    id:6,
    category:"BEAUTY",
    date:"APRIL 22, 2022",
    article:"The Retailer You Didn`t Know You Were Missing",
    image:"images/img-newsList/6.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:" Instagram didn't exist when I was in high school, but I imagine I'd be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D'Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional. At Coachella in 2015, pictures of D'Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival's official Twitter and The Cobra Snake's Instagram, among others. BuzzFeed spoke to D'Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D'Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D'Alessio's stake in the California modeling pantheon will only deepen.", 

},
{
    id:7,
    category:"FASHION",
    date:"APRIL 23, 2022",
    article:"Last Minute Holiday Prep Hacks!",
    image:"images/img-newsList/7.jpg",
    autor: "ANT EKSILER",
    tags: "#EMERALD, #INSTAGRAM, #LIFESTYLE, AWESOME",
    text:" Instagram didn't exist when I was in high school, but I imagine I'd be pretty fascinated by the beautiful, leggy 17-year-old with more than 174,000 followers and a Wilhelmina Models contract, too. For the legions of aspiring Cool Teens™, D'Alessio, who has been modeling full-time for the last year, is living the dream — though her Cinderella story has been anything but conventional. At Coachella in 2015, pictures of D'Alessio (above, right) and her friend, 18-year-old model Josie Canseco (left), flooded the Internet, winding up on places like the festival's official Twitter and The Cobra Snake's Instagram, among others. BuzzFeed spoke to D'Alessio soon after, resulting in a viral article that has since garnered 1,479,600 views. Wilhelmina reached out to D’Alessio from there, and the rest is history. In the 12 months since D'Alessio was discovered, the Canada native has landed a slew of commercial campaigns, left Beverly Hills High School to pursue homeschooling and launched a YouTube channel with her friend and fellow model, Abby Champion. And with a secret project in the works for this summer, I imagine that D'Alessio's stake in the California modeling pantheon will only deepen.", 
}
]

export default newsArray