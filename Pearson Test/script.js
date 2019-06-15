// define the array
var myFriendsList = ["Tayyeb", "Ashfaque", "Riyaz", "Amit", "Amarjeet", "Anthony"];
var container = document.getElementById("friends");

function createMyList() {
    var listLength = myFriendsList.length;
    if (listLength > 0) {
        var myList = document.createElement("ul");
        myList.className = "list";
        for (var i = 0; i < listLength; i++) {
            var listItem = document.createElement("li");
            var listValue = document.createTextNode(myFriendsList[i]);
            listItem.appendChild(listValue);
            myList.appendChild(listItem);
        }
        container.appendChild(myList);
    } else {
        container.appendChild(message);