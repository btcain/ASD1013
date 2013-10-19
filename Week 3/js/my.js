var myDataRef = new Firebase('https://bencainasd.firebaseio.com/');

      $("#myForm").submit(function() {
        
        var obj = {
        'itemName': $("#itemName").val(),
        'itemCost': $("#itemCost").val(),
        'notes': $("#itemNotes").val(),
        'shop': $("#shop").val(),
        'itemType': $("#itemType").val(),
        'released': $("#releaseDate").val(),
        'retired': $("#retired").val()
    };
          myDataRef.push({name: obj.itemName, cost: obj.itemCost, notes: obj.notes, shop: obj.shop, itemType:obj.itemType, released: obj.released, retired: obj.retired});
        
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.cost, message.notes, message.shop, message.itemType, message.released, message.retired);
      });
      function displayChatMessage(name, cost, notes, shop, itemType, released, retired) {
      var contentCreator = '<li data-theme="d" class="ui-li ui-li-static ui-btn-up-d ui-first-child ui-last-child"> <center><h5> ' + name + '</h5> </center> <table border="0" bordercolor="#000000" style="background-color:#FFFFFF; font-weight:normal" width="100%" cellpadding="3" cellspacing="3" ><tr><td>Item Cost</td><td>' + cost + '</td></tr><tr><td>Shop</td><td>' + shop + '</td></tr><tr><td>Item Type</td><td>' + itemType + '</td></tr><tr><td>Released on</td><td>' + released + '</td></tr><tr><td>Retired?</td><td>' + retired + '</td></tr><tr><td>Notes</td><td>' + notes + '</td></tr></table>  </li>';

$("#browseMe").append(contentCreator);
$("#latest").text(name)
      };
      
//Clear Button
$("#clearMe").click(function() {
    myDataRef.remove();
    $.mobile.changePage("#home");
});