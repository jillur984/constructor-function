const allRepo = user.getRepos();

const aRepo = allRepo[0];

const urepo = user.updateRepo(2, "mamun")
console.log("urepo", urepo)

const element = document.getElementById("repoDetails");







// const repoName = document.createElement("h2");
// repoName.innerText = `Repo Name: ${aRepo.name}`;

// const creator = document.createElement("p");
// creator.innerText = `Creator: ${aRepo.creator}`;
// creator.style.color = "red";

// element.appendChild(repoName);
// element.appendChild(creator);


const updateRepoByIndex=()=>{
   return `<div>
    <h2 class="bg-nav" >Repo name: ${urepo.name}</h2>
    <p>creator: ${urepo.creator}</p>    
    </div>`
}


element.innerHTML = `<div>
<h2 class="bg-nav" >Repo name: ${aRepo.name}</h2>
<p>creator: ${aRepo.creator}</p>
<button type="button" onclick="updateRepoByIndex()">Update repo by Index</button>
</div>`;

console.log("all repo: ", allRepo);