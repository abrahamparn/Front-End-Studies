let STORAGE_KEY = "BOOK_APPS";
let book = [];
let index = 0;

function check_storage(){
    if(typeof(Storage) !== "undefined" && localStorage.getItem(STORAGE_KEY) === null){
        book = [];
    }else if(typeof(Storage) !== "undefined" && localStorage.getItem(STORAGE_KEY) !== null){
        book = JSON.parse(localStorage.getItem(STORAGE_KEY));
    }else if(typeof(Storage) === "undefined"){
        console.log("Browser is not supported");
    }else{
        console.log("There is an error in this laptop, please kindly buy a better one");
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(book));   
    window.onload = display_book(book);
}check_storage();

function book_complete(i){
    book[i].isComplete = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(book));
    display_book(book);
}

function book_uncomplete(i){
    book[i].isComplete = false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(book));
    display_book(book);
}

function remove_book(i){
    book.splice(i, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(book));
    display_book(book);
}

function the_edit_button(i){
    document.querySelector(".popup").style.display = "flex";
    document.getElementById("inputBookTitleSearch").value = book[i].title;
    document.getElementById("inputBookAuthorSearch").value = book[i].author;
    document.getElementById("inputBookYearSearch").value = book[i].year;
    document.getElementById("inputBookIsCompleteSearch").checked = book[i].isComplete;
    index = i;    
}

function display_book(book){
    let book_completed = document.getElementById("completeBookshelfList");
    let book_on_progress = document.getElementById("incompleteBookshelfList");

    book_completed.innerHTML = "";
    book_on_progress.innerHTML = "";

    for(let i = 0; i < book.length; i++){
        let the_book = document.createElement("article");
        the_book.classList.add("book_item");

        let text_title = document.createElement("h3");
        text_title.innerHTML = book[i].title;

        let text_author = document.createElement("p");
        text_author.innerHTML = "Author: " + book[i].author;

        let text_year = document.createElement("p");
        text_year.innerHTML = "Released Date: " + book[i].year;

        let edit_button = document.createElement("button");
        edit_button.classList.add("edit");
        edit_button.addEventListener("click", function(){the_edit_button(i);});
        edit_button.innerHTML = "Edit";

        the_book.append(text_title, text_author, text_year, edit_button);

        let button = document.createElement("div");
        button.classList.add("action");

        if(book[i].isComplete == false){
            let green_button = document.createElement("button");
            green_button.classList.add("green");
            green_button.addEventListener("click", function(){book_complete(i);});
            green_button.innerHTML = "Complete";

            let red_button = document.createElement("button");
            red_button.classList.add("red");
            red_button.addEventListener("click", function(){remove_book(i);});
            red_button.innerHTML = "Remove Book";

            button.append(green_button, red_button);
            the_book.append(button);
            
            book_on_progress.append(the_book);

        }else{
            let green_button = document.createElement("button");
            green_button.classList.add("green");
            green_button.addEventListener("click", function(){book_uncomplete(i);});
            green_button.innerHTML = "Incomplete";

            let red_button = document.createElement("button");
            red_button.classList.add("red");
            red_button.addEventListener("click", function(){remove_book(i);});
            red_button.innerHTML = "Remove Book";

            button.append(green_button, red_button);
            the_book.append(button);
            
            book_completed.append(the_book);
        }
    }
}

document.getElementById("bookSubmit").addEventListener("click", function(event){
    event.preventDefault();
    
    book.push({
        id: +new Date(), 
        title: document.getElementById("inputBookTitle").value, 
        author: document.getElementById("inputBookAuthor").value,
        year: document.getElementById("inputBookYear").value,
        isComplete: document.getElementById("inputBookIsComplete").checked
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(book));
    display_book(book);
    let inputs = document.querySelectorAll("input");
    for(let the_input of inputs){
        the_input.value = "";
    }
});

function the_edit_button_logic(){
    book[index].title = document.getElementById("inputBookTitleSearch").value;
    book[index].author = document.getElementById("inputBookAuthorSearch").value;
    book[index].year = document.getElementById("inputBookYearSearch").value; 
    book[index].isComplete = document.getElementById("inputBookIsCompleteSearch").checked;

    document.querySelector(".popup").style.display = "none";
    localStorage.setItem(STORAGE_KEY, JSON.stringify(book));
    display_book(book);
}
document.getElementById("bookChange").addEventListener("click", function(){the_edit_button_logic();});

document.getElementById("searchSubmit").addEventListener("click", function(event){
    event.preventDefault();
	
    if(document.getElementById("Title").value == null || document.getElementById("Title").value == ""){
        display_book(book);
    }else{
	    for(let article of document.querySelectorAll("article")) {
		    if(article != ""){
                let number = article.childNodes[0].innerText;
	    		if( number.includes( document.getElementById("Title").value))
                    article.removeAttribute("hidden");
	    		else {
                article.setAttribute("hidden", "hidden");
                }
            }
	    }
    }
});

