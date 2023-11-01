let url="https://quote-garden.onrender.com/api/v3/quotes";
 async function getWord(){
    try{
        let res=await axios.get(url);
        //console.log(res.data.data);
        let result=res.data.data;
        let random=Math.floor(Math.random()*10)+1;
        let ans=result[random].quoteText;
        return (ans);
    }catch(e){
        console.log("Error : ",e);
        return "No result";
    }
}
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let q= await getWord();
    console.log(q);
    let p=document.querySelector("#result");
    p.innerText=q;
});