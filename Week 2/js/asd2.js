$(document).ready(function() {
    console.log(localStorage);
    $("#lCount").text(localStorage.length);
    //Displays the latest item in the Index
    var myItem = JSON.parse(localStorage.getItem(localStorage.length - 1));
    if (localStorage.length >= 1) {
        $("#latest").text(myItem.itemName);
    } else {
        $("#latest").text("There are no entries!");
    }
});
//Form Sumbit Function
$("#myForm").submit(function() {
    var itemObject = {
        'itemName': $("#itemName").val(),
        'itemCost': $("#itemCost").val(),
        'notes': $("#itemNotes").val(),
        'shop': $("#shop").val(),
        'itemType': $("#itemType").val(),asd.js
        'released': $("#releaseDate").val(),
        'retired': $("#retired").val()
    };
    localStorage.setItem(localStorage.length, JSON.stringify(itemObject));
});
//Clear Button
$("#clearMe").click(function() {
    localStorage.clear();
    $.mobile.changePage("#home");
});
//Browse Display
$(document).on("pageinit", "#browse", function() {
    for (i = 0; i < localStorage.length; i++) {
        var retrievedObject = localStorage.getItem(i);
        var contentCreator = '<li data-theme="d" class="ui-li ui-li-static ui-btn-up-d ui-first-child ui-last-child"> <div class="ui-grid-a"> <div class="ui-block-a"> <img src="img/ImageNotAvailable.jpg" alt="ImageNotAvailable" width="80%"> </div> <div class="ui-block-b"> <center><h5> ' + JSON.parse(retrievedObject).itemName + '</h5> </center> <table border="0" bordercolor="#000000" style="background-color:#FFFFFF; font-weight:normal" width="100%" cellpadding="3" cellspacing="3" ><tr><td>Item Cost</td><td>' + JSON.parse(retrievedObject).itemCost + '</td></tr><tr><td>Shop</td><td>' + JSON.parse(retrievedObject).shop + '</td></tr><tr><td>Item Type</td><td>' + JSON.parse(retrievedObject).itemType + '</td></tr><tr><td>Released on</td><td>' + JSON.parse(retrievedObject).released + '</td></tr><tr><td>Retired?</td><td>' + JSON.parse(retrievedObject).retired + '</td></tr><tr><td>Notes</td><td>' + JSON.parse(retrievedObject).notes + '</td></tr></table> </div> </div> </li>';
        $("#browseMe").append(contentCreator);
    }
});



