// get data from local storge upon initialization
for( i=0; i < localStorage.length; i++ ) {

    // for each key in local storage return the value associated with that key, and place in its corresponding div container
    $("#"+localStorage.key(i)+" .description").val(localStorage.getItem(localStorage.key(i)));

}

// on click event listener for each save button (icon) 
$(".saveBtn").on("click", function() {

    // get text from corresponding div and save it to global var "value" 
    var value = $(this).siblings(".description").val();

    // get id attribute associated with the div containing the text and save it to global var "time" 
    var time = $(this).parent().attr("id");

    // save the text in "value" to localStorage using "time" as the key
    localStorage.setItem(time, value)
});
