
async function main(){
    let a  = await fetch("http://127.0.0.1:3000/Spotify%20clone/songs/")
    let response = await a.text();
    console.log(response);

}

main()