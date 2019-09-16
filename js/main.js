// $('#exampleModal').on('show.bs.modal', function (event) {
//   // var button = $(event.relatedTarget)
//   // var recipient = button.data('title')
//   // var recipient2 = button.data('whatever')
//   // // var recipient3 = button.data('src')
//   // var modal = $(this)
//   // modal.find('.modal-title').text(recipient)
//   // // modal.find('.modal-body img').attr('src', recipient3)
//   // modal.find('.modal-body p').text(recipient2)
  
// })


$('.clickok').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la').text()));

//show as confirm
alertify.confirm("Uanzishaji wa Ofisi ya Kata",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});


$('.clickok2').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la2').text()));

//show as confirm
alertify.confirm("Kamati ya Wachimbaji wadogo wadogo",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});

$('.clickok3').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la3').text()));

//show as confirm
alertify.confirm("Kamati ya Wachimbaji wadogo wadogo",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});

$('.clickok4').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la4').text()));

//show as confirm
alertify.confirm("Muda wa idhini",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});

$('.clickok5').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la5').text()));

//show as confirm
alertify.confirm("Kufutwa kwa idhini",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});

$('.clickok6').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la6').text()));

//show as confirm
alertify.confirm("Shughuli za wachimbaji wadogo wadogo",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});

$('.clickok7').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la7').text()));

//show as confirm
alertify.confirm("Fidia ya matumizi ya ardhi",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});

$('.clickok8').click(function(event){
    var pre = document.createElement('pre');
//custom style.
pre.style.maxHeight = "400px";
pre.style.margin = "0";
pre.style.padding = "24px";
pre.style.whiteSpace = "pre-wrap";
pre.style.textAlign = "justify";
pre.appendChild(document.createTextNode($('#la8').text()));

//show as confirm
alertify.confirm("Uuzaji wa madini",pre, function(){
        alertify.success('Sawa');
    },function(){
        alertify.error('Funga');
    }).set({labels:{ok:'Sawa', cancel: 'Funga'}, padding: false});
});


// .append($("<p></p>").text($("#myButton").data("info").text1));

var tx = document.getElementsByTagName('textarea');
for (var i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

 function addNumbers()
                {
                        var val1 = parseInt(document.getElementById("weight").value);
                        // var val2 = parseInt(document.getElementById("value2").value);
                        var ansD = document.getElementById("uPrice");
                        var ansD2 = document.getElementById("kPrice");
                        var list1 = document.getElementById("MineralList");
                        var select = list1.value;
                        var ans = select * val1;
                        var ans2 = ans * 102.24;
                        ansD.value = ans.toLocaleString();
                        ansD2.value = ans2.toLocaleString();
                };

$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-works-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin: 100,
        dots: true
    });
    $('.active-banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true
    });
    // Add smooth scrolling to Menu links

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax


     // $(document).ready(function() {
     //    var form = $('#myForm'); // contact form
     //    var submit = $('.submit-btn'); // submit button
     //    var alert = $('.alert-msg'); // alert div for show alert message

     //    //Add the selection minerals in an Array
     //    var minerals= new Array();
     //        minerals["Gold"]= 49.68;
     //        minerals["Silver"]=0.54;
     //        minerals["Platinum"]=28.48;
     //        minerals["Iridium"]=51.50;
     //        minerals["Rhodium"]=3165.00;
     //        minerals["Palladium"]=111.64;

     //        function getFillingPrice()
     //        {
     //            var MineralPrice=0;
     //            //Get a reference to the form id="cakeform"
                
     //            //Get a reference to the select id="filling"
     //             var selectedMineral = document.getElementById("MineralList");
             
     //            //set cakeFilling Price equal to value user chose
     //            //For example filling_prices["Lemon".value] would be equal to 5
     //            MineralPrice = minerals[selectedMineral.value];
             
     //            //finally we return cakeFillingPrice
     //            return MineralPrice;

     //        }

     //        function getQuantity()
     //        {
     //            //Assume form with id="theform"
               
     //            //Get a reference to the TextBox
     //            var quantity = document.getElementById("weight").value;
     //            var howmany =0;
     //            //If the textbox is not blank
     //            if(quantity.value!="")
     //            {
     //                howmany = parseInt(quantity.value);
     //            }
     //        return howmany;
     //        console.log(howmany);
     //        }

     //        function getTotal()
     //        {
     //            //Here we get the total price by calling our function
     //            //Each function returns a number so by calling them we add the values they return together
     //            var usdPrice = getFillingPrice() * getQuantity();
     //            var kshPrice = usdPrice * 102.24;
             
     //            //display the result
     //            var t1 = document.getElementById('uPrice');
     //            t1.value = "$" + usdPrice.toString();

     //            var t2 = document.getElementById('kPrice');
     //            t2.value = "$" + kshPrice.toString();
             
     //         console.log(getFillingPrice());
     //         console.log(document.getElementById("weight").values);
     //         console.log(usdPrice);
     //         console.log(kshPrice);
     //        }




     //    // form submit event
     //    form.on('submit',getTotal() );
    });
 // });
