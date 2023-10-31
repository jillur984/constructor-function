// let arr=[
//   {
//    name:Jillur,
//    age:25
//   },{
//    name:Muktadir,
//    age:26
//   }
// ]

// const res = arr.map((item)=>{
//   return 
// })

function GithubAccount(name, email, username) {
    this.name = name;
    this.email = email;
    this.userName = username;
    this.repo = [];
  
    this.updateAccount = function (fullName, email) {
      if (fullName !== undefined) {
        this.name = fullName;
      }
      if (email !== undefined) {
        this.email = email;
      }
    };
  
    this.getRepos = function () {
      return this.repo;
    };
  
    this.createRepo = function (repoName, creator) {
      const repo = {
        name: repoName,
        creator: creator,
        createAt: new Date(),
      };
  
      this.repo.push(repo);
    };

    this.updateRepo=(index, value)=>{
      this.repo=this.repo.map((item,i)=>{
        if(i===index){
          return {
            ...item,
            name:value,
          }; 
        }
        return item;
      })
    }
  }

  
  
  const user = new GithubAccount("Ariful islam", "me@email.com", "arifulbgt4");