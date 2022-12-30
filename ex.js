const container = document.querySelector('#container')
const GetRes = async(url) => {
    const res  = await fetch(url);
    if(!res.ok){
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

GetRes('ex.json')
    .then(data=> {
        console.log(data);
        for(let key in data) {
            const project = document.createElement("div");
            const type = data[key].type;
            const image = data[key].image;

            project.innerHTML = `<div class="project">
            <img src=${image} width = '200'> 
            <p>проект: ${type}</p>
            </div>`
            container.append(project)
        
        }
    })

let sendBut = document.querySelector('#send');
let postsBlock = document.querySelector('.posts');
let checkname = document.querySelector('#name')
    
sendBut.addEventListener('click', createPost)
    
function createPost(){
    let text = document.querySelector('#textPost').value;
    let name = document.querySelector('#name').value;
    if(name.length < 3){
        alert("вы не ввели имя")
    }else{
        let newPost = document.createElement('span')
        let newwPost = document.createElement('h1')
        newPost.textContent = text;
        newwPost.textContent = name;
        postsBlock.append(newwPost)
        postsBlock.append(newPost);
    }
}