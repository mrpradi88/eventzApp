(function(){
    angular.module('eventzApp')

        .factory('dataFactory',function($rootScope){
            var birthdayData =  [
            {id:'bday1000',title:'Theme Decoration',disc:"Theme Decoration is theme based decoration which ever you wish we are ready to serve you that theme and prices varies from 3000 to 25000.",price:3000,minprice:3000,maxprice:25000,askfp:false,imageurl:'/images/titleimages/themedecoration.jpg'},
            {id:'bday1001',title:'Balloons Decoration',disc:'Balloons Decoration can be done by using minimum 1000 balloons for price 1000 rs if you want more contact us.',price:-1,minprice:1000,maxprice:-1,askfp:false,imageurl:'/images/titleimages/balloondecoration.jpg'},
            {id:'bday1002',title:'Gas Balloons Decoration',disc:'Gas Balloons decoration minimum 1000 balloons for price 1500 rs if you want more contact us.',price:-1,minprice:1500,maxprice:-1,askfp:false,imageurl:'/images/titleimages/gasballoon.jpg'},
            {id:'bday1003',title:'Jumping Bouncer',disc:'Jumping Bouncer available in 2 variants Small Bouncer  and Big Bouncer from price 2500 and 3500.',price:-1,minprice:2500,maxprice:3200,askfp:false,imageurl:'/images/titleimages/jumpingbounser.jpg'},
            {id:'bday1004',title:'Live Cartoons',disc:'Live Cartoon is available as 2 persons with same or different cartoon characters for price 3500 rs and contact us for different characters.',price:3500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/livecartoon_2.jpg'},
            {id:'bday1005',title:'Amusement Fun',disc:'Amusement Funny equipments are available in many prices please contact us for price.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/amusementfun.jpg'},
            {id:'bday1006',title:'Popcorn and Candy',disc:'Popcorn and Candy is available as per time and piece basis like for 3 hours and 150 pieces.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/candy.jpg'},
            {id:'bday1007',title:'Caricature',disc:'Caricature will be done by our artistic skilled experts for the price of 2000 rs.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/caricature_1.jpg'},
            {id:'bday1008',title:'Tattoo',disc:'Tattoo will be done by our artistic skilled experts for the price of 1500 rs.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/tattoo.jpg'},
            {id:'bday1009',title:'Nail Art',disc:'Nail Art is a very skilled art so it should be done by our Nail Art experts for the price of 2000 rs.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/nailpainting.jpg'},
            {id:'bday1010',title:'Mehndi',disc:'Mahndi is a very skilled art so it should be done by our Mahndi experts for the price of 2000 rs.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/mehandi.jpg'},
            {id:'bday1011',title:'Magic Show',disc:'Mahndi is a very skilled art so it should be done by our Mahndi experts for the price of 2000 rs.',price:3500,minprice:-1,maxprice:7000,askfp:false,imageurl:'/images/titleimages/magic_1.jpg'},
            {id:'bday1012',title:'Emcee',disc:'Mahndi is a very skilled art so it should be done by our Mahndi experts for the price of 2000 rs.',price:3000,minprice:-1,maxprice:7000,askfp:false,imageurl:'/images/titleimages/emcee.jpg'}
        ]
            var weddingData = [
                { id:'wed1000',title:'Wedding Balloon Decoration',disc:'Wedding Balloon Decoration is done in an attractive manner for the minimum price of rs 3000 and if you want more attractive decorations ask for the price.',price:-1,minprice:3000,maxprice:-1,askfp:false,imageurl:'/images/titleimages/weddingballoon.jpg'},
                { id:'wed1001',title:'Wedding Stage Flower Decoration',disc:'Wedding Stage Flower Decoration is done in a pretty cute manner for the minimum price of rs 5000 and if you want more attractive ask for the price.',price:-1,minprice:5000,maxprice:-1,askfp:false,imageurl:'/images/titleimages/weddingflowerdecoration.jpg'},
                { id:'wed1002',title:'Wedding Different Concept Sets',disc:'Wedding Different Concept Sets is done in a many ways that decision is up to the clients so for more information contact us.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/conceptsset.jpg'},
                { id:'wed1003',title:'Tattoo and Caricature',disc:'Tattoo and Caricature both are done by our artistic skilled experts for the price of 4000 rs.',price:4000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/weddingcaricature.jpg'},
                { id:'wed1004',title:'Dance Show',disc:'Dance Show will be performed by the well known dancers around the cities and the price is dependent on the performers popularity so please contact up for more information.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/weddingdance.jpg'},
                { id:'wed1005',title:'Magic Show',disc:'Magic Show will be performed by the well known and tricky Magicians around the cities and the price is 3500 rs',price:3500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/weddingmagic.jpg'},
                { id:'wed1006',title:'Mehndi',disc:'Mehndi will be applied by our skillful artist for the price 2000 rs.',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/weddingmehandi.jpg'},
                { id:'wed1007',title:'Hair Braiding',disc:'Hair Braiding is done by the hair style experts for the price 2500 rs.',price:2500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/hairbraiding.jpg'},
                { id:'wed1008',title:'Nail Art',disc:'Nail Art is the very skillful art and it will be done by our Nail Art experts for the price 2500 rs.',price:2500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/weddingnailart.jpg'},
                { id:'wed1009',title:'Popcorn and Candy',disc:'Popcorn and Candy is available as per time and piece basis like for 3 hours and 150 pieces.',price:2500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/candy.jpg'},
                { id:'wed1010',title:'Amusement Fun',disc:'Amusement Funny equipments are available in many prices please contact us for price.',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/amusementfun.jpg'},
            ]
            var corporateData =[
            { id:'cor1000',title:'Stage Design',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/stagedesign.jpg'},
            { id:'cor1001',title:'Total Event Management',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/totaleventmanagement.jpg'},
            { id:'cor1002',title:'DJ',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/dj.jpg'},
            { id:'cor1003',title:'Sound System',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/soundsystem.jpg'},
            { id:'cor1004',title:'LED Walls',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/ledwalls.jpg'},
            { id:'cor1005',title:'Candid Photo and Video',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/carporatecandid.jpg'},
            { id:'cor1006',title:'Dance Show',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/weddingdance.jpg'},
            { id:'cor1007',title:'Puppet Show',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/puppetshow.jpg'},
            { id:'cor1008',title:'All Activities',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/allactivites.jpg'}
            ]
            var photoAndVideo =[
            { id:'pv1000',title:'Normal Photography(Soft Copies)',price:2000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/normalphotography.jpg'},
            { id:'pv1001',title:'Normal Photography With SoftBox',price:3000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/photographywithsoftbox.jpg'},
            { id:'pv1002',title:'5D Camera Photography',price:3500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/videography.jpg'},
            { id:'pv1003',title:'5D Candid Photography',price:5000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/5dcandid.jpg'},
            { id:'pv1004',title:'Karishma Album',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/karishmaalbum.jpg'},
            { id:'pv1005',title:'Modeling Photography',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/modelingphotography.jpg'},
            { id:'pv1006',title:'Normal Video',price:3500,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/normalphotography.jpg'},
            { id:'pv1007',title:'HD Video',price:5000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/hdvideography.jpg'},
            { id:'pv1008',title:'5D Candid Videography',price:8000,minprice:-1,maxprice:-1,askfp:false,imageurl:'/images/titleimages/5dcandid.jpg'},
            { id:'pv1009',title:'Crane',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/titleimages/crane.jpg'}
            ]
            var craftWorks =[
            { id:'cw1000',title:'Craft Works',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            { id:'cw1001',title:'T Shirt Printing',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            { id:'cw1002',title:'Mug Printing',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            { id:'cw1003',title:'Potraits',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            { id:'cw1004',title:'Wall Paintings(Int & Ext)',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            { id:'cw1005',title:'Thermocol Modeling',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            { id:'cw1006',title:'Caricature',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'},
            { id:'cw1007',title:'Tattoo',price:-1,minprice:-1,maxprice:-1,askfp:true,imageurl:'/images/marriage.jpg'}
            
            ]

           return {
                birthDaydata:birthdayData,
               weddingData : weddingData,
               corporateData : corporateData,
               photoAndVideo : photoAndVideo,
               craftWorks:craftWorks
            }
        })
})();