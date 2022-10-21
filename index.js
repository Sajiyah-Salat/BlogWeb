const w = screen.width;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
if (w < 401) {
    const d=document.createElement('div');
    d.classList.add('container');
    const logo = document.querySelector("#logo");
    d.appendChild(logo);
    drop=document.createElement("div");
    drop.classList.add("dropdown-button");
    let bar1=document.createElement("div");
    let bar2=document.createElement("div");
    let bar3=document.createElement("div");
    drop.appendChild(bar1);
    drop.appendChild(bar2);
    drop.appendChild(bar3);
    d.appendChild(drop);
    drop_items=document.createElement("div");
    drop_items.classList.add("dropdown-content");
    drop_items.classList.add("hide");
    const items = document.querySelector("#nav-items");
    const frm = document.querySelector("form");
    drop_items.appendChild(items);
    drop_items.appendChild(frm);
    d.appendChild(drop_items);
    document.querySelector(".navigation").innerHTML="";
    document.querySelector(".navigation").appendChild(d);
        const button = document.querySelector(".dropdown-button");
    button.addEventListener("click", async function(e) {
        const dropData= document.querySelector(".dropdown-content");
        dropData.style.setProperty("--openHeight",dropData.scrollHeight+'px');
        dropData.classList.toggle('show');
        dropData.classList.toggle('hide'); 
        await sleep(101);
        document.querySelector(".home-articles").style.setProperty("margin-top",d.clientHeight+dropData.clientHeight+'px');
    });
}

