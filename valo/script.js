document.querySelector("button").addEventListener("click",result)

var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result(){
    try {
        row.innerHTML="";
        var ask = document.getElementById("Shows").value; 
        var data1 = await fetch(`https://valorant-api.com/v1/agents`);
        var res = await data1.json();
        var ag = {};
        res.data.forEach(agent => {
            ag[agent.displayName] = agent.uuid;
        });
        var data2=await fetch(`https://valorant-api.com/v1/agents/${ag[ask]}`)
        var res2=await data2.json();
        var col= document.createElement("div");
        col.className='col-lg-4';
        var grad=res2.data.backgroundGradientColors[0];
        col.innerHTML=`<div class="card" style="width: 20rem;background-color:#${grad}">
        <img class="card-img-top" src="${res2.data.fullPortrait}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" style="text-align:center;"><b>${res2.data.displayName}</b></h5>
          <h6 class="card-text" style="text-align:center;">${res2.data.role.displayName}</h6><br>  
          <p class="card-text" style="text-align:justify;">${res2.data.description}</p>
        </div>
        </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);
    } 
    
    catch (error) {
        console.log(error);
    }
}
