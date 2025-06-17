let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector('button');

btn.addEventListener('click',async ()=>{
    let country=document.querySelector('#country').value;
        let state=document.querySelector('#state').value;

    console.log(country);
    console.log(state);

    let colarr=await getcolleges(country,state);
    show(colarr);
   
})

function show(colarr){
    let ul=document.querySelector('ul');
    ul.innerText='';
    for(col of colarr){
        console.log(col.name);
     let li=document.createElement('li');
        li.innerText=col.name;
ul.appendChild(li);    
    }
}

async function getcolleges(country,state) {
    try{
        let res=await axios.get(url+country+'&state-province='+state);
        return res.data;
    }
    catch(e){
        console.log(e);
        return [];
    }
}