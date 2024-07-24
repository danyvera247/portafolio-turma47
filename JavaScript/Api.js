const repositorio = document.querySelector('.proyectos');

function getApiGitHub(){
    fetch('https://api.github.com/users/danyvera247/repos').then(async res =>{
        if( !res.ok ){
            throw new Error(res.status);
        }

        let data = await res.json();
        console.log(data)
        data.map(item =>{
            let projectCard = document.createElement('div');
            projectCard.innerHTML = `
            
            <div class="card">
            <img class="card-img" src="/style/img/images.jpeg" alt="">
            <h2 class="card-titulo">${item.name}</h2>
            <p class="card-parrafo">
                 ${item.description}
            </p>
            <div class="botones">
                <a href="${item.html_url}" target="_blank">REPOSITORIO</a>

            </div>
        </div>
            
            
            `

            repositorio.appendChild(projectCard);


        })


    })
}

getApiGitHub();