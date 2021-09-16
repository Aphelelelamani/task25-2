$(document).ready(function(){
    alert("all is set Sir")                                //JQuery for loading process
$(document).ready(function(){
    $("#drpmenu").hide()
})
    // image//
    $(".bpimage").mouseover(function(){
        $("#alater").show()
    })
    $(".bpimage").mouseleave(function(){
        $("#alater").hide()
    })
    $("#alater").mouseover(function(){
        $("#later1").show()
    })
    $("#later1").mouseleave(function(){
        $(this).hide()
    })
    // red portion//
    $(".section2").mouseover(function(){                         //JQuery for the animation of aspects on the site
        $("#slater").show()                                      //as well as the drop menu and save 
    })                                                           // for later click options 
    $(".section2").mouseleave(function(){
        $("#slater").hide()
    })
    $("#slater").mouseover(function(){
        $("#later2").show();
    })
    $("#later2").mouseleave(function(){
        $(this).hide()
    })
    //container
    $(".container").mouseover(function(){
        $("#elater").show()
    })
    $(".container").mouseleave(function(){
        $("#elater").hide()
    })
    $("#elater").mouseover(function(){                         //JQuery for the animation of aspects on the site
        $("#later3").show()                                    //as well as the drop menu and save
    })                                                         // for later click options
    $("#later3").mouseleave(function(){
        $(this).hide()
    })
    //title as well as pragraph
    $(".section3").mouseover(function(){
        $("#blater").show()
    })
    $(".section3").mouseleave(function(){
        $("#blater").hide() 
    })
    $("#blater").mouseover(function(){
        $("#later4").show()
    })
    $("#later4").mouseleave(function(){
        $(this).hide()
    })
    $(".table").mouseover(function(){
        $("#rlater").show()
    })
    $(".table").mouseleave(function(){
        $("#rlater").hide()
    })
    $("#rlater").mouseover(function(){                     //JQuery for the animation of aspects on the site
        $("#later7").show()                                //as well as the drop menu and save
    })                                                     // for later click options
    $("#later7").mouseleave(function(){ 
        $(this).hide()
    })
    $(".logos").mouseover(function(){
        $("#dlater").show()
    })
    $(".logos").mouseleave(function(){
        $("#dlater").hide()
    })
    $("#dlater").mouseover(function(){
        $("#later5").show()
    })
    $("#later5").mouseleave(function(){
        $(this).hide()
    })
    $(".section4").mouseover(function(){
        $("#flater").show()
    })
    $(".section4").mouseleave(function(){
        $("#flater").hide()
    })
    $("#flater").mouseenter(function(){
        $("#later6").show()
    })
    $("#later6").mouseleave(function(){
        $(this).hide()
    })
    $("#services").click(function(){
        $("#drpmenu").show()
    })
    $("#drpmenu").mouseleave(function(){
        $(this).hide()
    })
    $("#like1").click(function(){
        $(this).animate({width:"50px"}).animate({width:"20px"})
    })
    $("#like2").click(function(){
        $(this).animate({width:"50px"}).animate({width:"20px"})
    })
    $("#like3").click(function(){
        $(this).animate({width:"50px"}).animate({width:"20px"})  //jquery chained events
    })
        $("#like4").click(function(){
        $(this).animate({width:"50px"}).animate({width:"20px"})
    })
        $("#like5").click(function(){
        $(this).animate({width:"50px"}).animate({width:"20px"})
    })
        $("#like6").click(function(){
        $(this).animate({width:"80px"}).animate({width:"50px"})
    })
        $("#like7").click(function(){
        $(this).animate({width:"50px"}).animate({width:"20px"})
    })
let bookMark = document.querySelectorAll('.tsend'); //grabbing the '.tsend' class from the HTML page
let bookMarked = "";
    let saved = [
    {   value: "bpimage",
        inCart: 0,
    },

    {   value: "section2",
        inCart: 0,
    },

    {   value: "container",                       //JavaScript object containing information about items added to 
        inCart: 0,
    },                                             // cart

    {   value: "table",
        inCart: 0,
    },

    {   value: "section3",
        inCart: 0,
    },

    {   value: "logos",
        inCart: 0,
    },

    {
        value: "section4",
        inCart: 0,
    }

];

    for (let i = 0; i < bookMark.length; i++) {                         //Interating through '.tsend' adding 
        bookMark[i].addEventListener('click', function() {              //click event listner and function 
            bookMarkNum(saved[i]);
            alert(`Number of items added to saved for later,${(bookMarked)}`)
        })
    }

    function onLoadBookMark() {                                    
        bookMarked = localStorage.getItem('bookMarkNum');
        if (bookMarked) {
            document.querySelector('.bmpage span').textContent = bookMarked; //adding the number to bookmark tab
            
        }
    }
    function bookMarkNum(saved) {
        let bookMarked = localStorage.getItem('bookMarkNum');
        bookMarked = parseInt(bookMarked);
        if (bookMarked) {
            localStorage.setItem('bookMarkNum',bookMarked + 1);
            document.querySelector('.bmpage span').textContent = bookMarked + 1;
        }else {
        localStorage.setItem('bookMarkNum', 1);
        document.querySelector('.bmpage span').textContent =  1;
        }
        setItems(saved);
    }
        
        function setItems(saved) {
            let savedItems = localStorage.getItem('savedInCart');
            savedItems = JSON.parse(savedItems);
            
            if (savedItems !=null) {
                if (savedItems[saved.value] == undefined) {
                    savedItems = {
                        ...savedItems,
                        [saved.value] : saved
                    }
                }
                savedItems[saved.value].inCart += 1;
            }else{
            saved.inCart = 1;
            savedItems = {
            [saved.value] : saved
            }
        console.log(savedItems);
        }
        
        localStorage.setItem("savedInCart", JSON.stringify(savedItems));          
    }


    function displayBM () {                      //display function pulling  values from the objects "saved"
        let savedItems = localStorage.getItem("savedInCart");
        savedItems = JSON.parse(savedItems);
        let container = document.querySelector('.bm-items');
        if (savedItems && container ) {
        container.innerHTML = '';
        Object.values(savedItems).map(item => {   
            container.innerHTML += `
            <div class="bookMark">
                <ion-icon name="add-circle"></ion-icon>
                <span>${item.value}</span>                  
                <span>${item.inCart}</span>
                </div>
            `
        })
        }
    }

function liked (){
    $('.like-bar img').click(function(e){
        var thumbid = $(this).attr('id');
        $(this).toggleClass('liked');

        if (!$(this).hasClass('liked')){
            localStorage.setItem(thumbid,"unliked")
            localStorage.removeItem(($(this.parentNode.parentNode).find))
        }
    })
}
  /*let comment_array = [];

    function add() {
        let name = document.querySelector('.tainer #name'); 
        let comment = document.querySelector('.tainer #comment'); 

        if (name.value !== "" && comment.value != "") { 

            let list = document.querySelector('.list'); 
            let time = new Date();
            let h = time.getHours(); 
            let m = time.getMinutes(); 
            let s = time.getSeconds(); 
            let now = h + " : " + m + " : " + s;
            let list_item = document.createElement ("l1"); 

            list_item.innerHTML = `
            <span>
            <p>${name.value} ${now}</p> 
            </span>
            <p>${comment.value}</p>
            `;
            list.append(list_item); 
}

if (name.value == "" || comment.value == "") {

    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item); 
}
name.value=comment.value = "";
}  */

    displayBM ();
    onLoadBookMark();
}) 