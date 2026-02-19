let filterToggle = 0;

// Shows the checkboxes for the filter
function showFilter(){
    // Was interested to see if this type of toggle would work so I tried it
    if (filterToggle == 0){
        document.getElementById("filterContent").style.display = "block";
        filterToggle = 1;
    } else { 
        document.getElementById("filterContent").style.display = "none";
        filterToggle = 0;
    }
}

// Handles the checkboxes for the filter
// AI-GENERATED FUNCTION
function filterArticles(){

    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if(article.classList.contains("opinion")){
            article.style.display = showOpinion ? "block" : "none";
        }

        if(article.classList.contains("recipe")){
            article.style.display = showRecipe ? "block" : "none";
        }

        if(article.classList.contains("update")){
            article.style.display = showUpdate ? "block" : "none";
        }

    });
}


// Shows the form to add a new article
function showAddNew(){
    document.getElementById("newContent").style.display = "flex";
}

// Adds the new article to the list with the given input and properties
// AI-GENERATED FUNCTION
function addNewArticle(){

    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();

    // Determine selected radio manually (since no value attributes)
    let type = null;

    if(document.getElementById("opinionRadio").checked){
        type = "opinion";
    }
    else if(document.getElementById("recipeRadio").checked){
        type = "recipe";
    }
    else if(document.getElementById("lifeRadio").checked){
        type = "update";   // matches your existing article class
    }

    // Create article element
    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    // Create marker span
    const marker = document.createElement("span");
    marker.classList.add("marker");

    // Capitalize label
    if(type === "opinion") marker.textContent = "Opinion";
    if(type === "recipe") marker.textContent = "Recipe";
    if(type === "update") marker.textContent = "Update";

    // Create title
    const heading = document.createElement("h2");
    heading.textContent = title;

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    // Optional: add "Read more..." link to match existing structure
    const readMoreP = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    readMoreP.appendChild(link);

    // Assemble article
    newArticle.appendChild(marker);
    newArticle.appendChild(heading);
    newArticle.appendChild(paragraph);
    newArticle.appendChild(readMoreP);

    // Append to list
    document.getElementById("articleList").appendChild(newArticle);

    // Clear form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;
}