

var myDataRef = new Firebase('https://bencainasd.firebaseio.com/');
var newPushRef = myDataRef.push();
var i = -1;
var otherId = []
      $("#myForm").submit(function() {
        
        var obj = {
        'itemName': $("#itemName").val(),
        'itemCost': $("#itemCost").val(),
        'notes': $("#itemNotes").val(),
        'shop': $("#shop").val(),
        'itemType': $("#itemType").val(),
        'released': $("#releaseDate").val(),
        'retired': $("#retired").val(),
        'id': newPushRef.name()
    };
          newPushRef.set({name: obj.itemName, cost: obj.itemCost, notes: obj.notes, shop: obj.shop, itemType:obj.itemType, released: obj.released, retired: obj.retired});
        
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        otherId.push(snapshot.name())
        i = i + 1;
        console.log(i)
        displayChatMessage(message.name, message.cost, message.notes, message.shop, message.itemType, message.released, message.retired, snapshot.name());
      });
      function displayChatMessage(name, cost, notes, shop, itemType, released, retired, id) {
      var contentCreator = '<li id="' + id + '" data-theme="d" class="ui-li ui-li-static ui-btn-up-d ui-first-child ui-last-child"> <center><h5> ' + name + '</h5> </center> <table border="0" bordercolor="#000000" style="background-color:#FFFFFF; font-weight:normal" width="100%" cellpadding="3" cellspacing="3" ><tr><td>Item Cost</td><td>' + cost + '</td></tr><tr><td>Shop</td><td>' + shop + '</td></tr><tr><td>Item Type</td><td>' + itemType + '</td></tr><tr><td>Released on</td><td>' + released + '</td></tr><tr><td>Retired?</td><td>' + retired + '</td></tr><tr><td>Notes</td><td>' + notes + '</td></tr><tr><td><a id="editClick" href="#new" data-role="button" onClick="editMe(' + i + ')">Edit</button></td><td><a id="deleteMe" data-role="button" href="#" onClick="deleteMe(' + i + ')">Delete</button></td></tr></table> </li>';

$("#browseMe").append(contentCreator);
$("#latest").text(name)
      };
      
//Edit Function

//Clear Button
$("#clearMe").click(function() {
    myDataRef.remove();
    $.mobile.changePage("#home");
});

function deleteMe(id){
console.log(id);
var newref = otherId[id];
console.log(newref);
var toRemove = myDataRef.child(newref);
console.log(toRemove)
toRemove.remove()
location.reload()
}

function editMe(id){
console.log("editMe");
var newref = otherId[id];
var toEdit = myDataRef.child(newref);
console.log(toEdit.child("cost"));
}