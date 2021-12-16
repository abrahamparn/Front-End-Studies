import "./style/style.css";

let number = 1;
const komik_kontainer = document.getElementById("rekomendasikomik");
const the_button = document.getElementById("the_button");

the_button.addEventListener("click", () =>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://raw.githubusercontent.com/abrahamparn/front-end-studies/main/ThirdCourseSubmission/CourseData/Komik-${number}.json`);
    xhr.onload = () =>{
        const the_data = JSON.parse(xhr.responseText);
        renderHTML(the_data);
    }
    xhr.send();
    number++;

    if(number > 3){
        the_button.classList.add("StopList");
        alert("Enough Recommendation for Today");
        alert("Made by Abraham")
        alert("Please Refresh the Page")
    }
});

const renderHTML = data => {
    let htmlelement = "";
    for(let i = 0; i < data.length; i++){
        htmlelement += `<h2>${data[i].name}</h2> <p>it is an ${data[i].genre} comic with ${data[i].rating} that could be read on ${data[i].placeread}. <br><br><h3> SUMMARY </h3> ${data[i].summary}</p><br><br>`;
    }
    komik_kontainer.insertAdjacentHTML('beforeend', htmlelement);
}

/*WEB COMPONENTS CHECKLIST*/
class ImageFigure extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){  
        this.innerHTML = `  <img src="https://user-images.githubusercontent.com/87258755/142727184-d863058f-e60d-46b2-a323-f1512c3449ac.jpg" alt="Gambar representasi perwibuan">
                            <h2 id="title2">Dapatkan Rekomendasi komik kesukaanku</h2>`;
    }   
}
customElements.define("selain-button", ImageFigure);


class AppBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<h1 id = "title"> Rekomendasi komik kesukaanku </h1>`;
    }
}
customElements.define("app-bar", AppBar);

class footerin extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <h1>Abraham Naiborhu</h1>
        <h2>Just For Learning</h2>
        <h3>Susah euy ini dicoding</h3>
        <p>Copytright &copy; 2021 Abraham. All Right Reserved</p>`;
    }
}
customElements.define("footer-aja", footerin);
