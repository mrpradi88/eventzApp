(function(){
    angular.module('myApp')

        .factory('dataFactory',function($rootScope){
            var birthdayData =  [
                {id:'b1000',title:'Theme Decoration',disc:"Theme Decoration is theme based decoration which ever you wish we are ready to serve you that theme and prices varies from 3000 to 25000.",price:3000,minprice:3000,maxprice:25000,askfp:false,imageurl:'/images/birthday.jpg'},
            {id:'b1001',title:'Balloons Decoration',disc:'Balloons Decoration can be done by using minimum 1000 balloons for price 1000 rs if you want more contact us.',price:-1,minprice:1000,maxprice:-1,askfp:false,imageurl:'/images/birthday.jpg'},
            {id:'b1002',title:'Gas Balloons Decoration',disc:'Gas Balloons decoration minimum 1000 balloons for price 1500 rs if you want more contact us.',price:-1,minprice:1500,maxprice:-1,askfp:false,imageurl:'/images/birthday.jpg'},
            {id:'b1003',title:'Jumping Bouncer',disc:'Jumping Bouncer available in 2 variants Small Bouncer  and Big Bouncer from price 2500 and 3500.',price:-1,minprice:2500,maxprice:3200,askfp:false,imageurl:'/images/birthday.jpg'},
            {id:'b1004',title:'Live Cartoons',disc:'Live Cartoon is available as 2 persons with same or different cartoon characters for price 3500 rs and contact us for different characters.',price:3500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/birthday.jpg'},
            {id:'b1005',title:'Amusement Fun',disc:'Amusement Funny equipments are available in many prices please contact us for price.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/birthday.jpg'},
            {id:'b1006',title:'Popcorn and Candy',disc:'Popcorn and Candy is available as per time and piece basis like for 3 hours and 150 pieces.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/birthday.jpg'}
                                ]
            var weddingData = [
                { id:'wed1001',title:'Wedding Balloon Decoration',disc:'Wedding Balloon Decoration is done in an attractive manner for the minimum price of rs 3000 and if you want more attractive decorations ask for the price.',price:-1,minprice:3000,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1002',title:'Wedding Stage Flower Decoration',disc:'Wedding Stage Flower Decoration is done in a pretty cute manner for the minimum price of rs 5000 and if you want more attractive ask for the price.',price:-1,minprice:5000,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1003',title:'Wedding Different Concept Sets',disc:'Wedding Different Concept Sets is done in a many ways that decision is up to the clients so for more information contact us.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
                { id:'wed1004',title:'Tattoo and Caricature',disc:'Tattoo and Caricature both are done by our artistic skilled experts for the price of 4000 rs.',price:4000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1005',title:'Dance Show',disc:'Dance Show will be performed by the well known dancers around the cities and the price is dependent on the performers popularity so please contact up for more information.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
                { id:'wed1006',title:'Magic Show',disc:'Magic Show will be performed by the well known and tricky Magicians around the cities and the price is 3500 rs',price:3500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1007',title:'Mehndi',disc:'Mehndi will be applied by our skillful artist for the price 2000 rs.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1008',title:'Hair Braiding',disc:'Hair Braiding is done by the hair style experts for the price 2500 rs.',price:2500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1009',title:'Nail Art',disc:'Nail Art is the very skillful art and it will be done by our Nail Art experts for the price 2500 rs.',price:2500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1010',title:'Popcorn and Candy',disc:'Popcorn and Candy is available as per time and piece basis like for 3 hours and 150 pieces.',price:2500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/marriage.jpg'},
                { id:'wed1009',title:'Amusement Fun',disc:'Amusement Funny equipments are available in many prices please contact us for price.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            ]

           return {
                birthdatdata:birthdayData,
               weddingdata : weddingData
            }
        })
})();