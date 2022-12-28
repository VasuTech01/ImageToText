function onSubmit(e) {
    e.preventDefault();
    document.querySelector(".msg").textContent = "";
    document.querySelector("#image").src = "";
    const prompt = document.querySelector("#prompt").value;
    const size = document.querySelector("#size").value;
    if (prompt === '') {
       window.alert("pls add some text");
        return;
    }
    console.log(prompt, size);
    generateImageRequest(prompt,size);   
}

async function generateImageRequest(prompt,size) {
    try {
        showSpinner();
        const res = await fetch("/openai/generateimage",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                prompt,
                size
            })
        })
        if (!res.ok) {
            hideSpinner();
            throw new Error("That image could not be gerated");
        }
        console.log(res);
          const r=await res.json();
           console.log(r);
            const imageUrl = r.data;
            document.querySelector("#image").src = imageUrl;
            hideSpinner();
    
    } catch (e) {
        console.log(e);
        document.querySelector('.msg').textContent = e;
        hideSpinner();
    }
}

function showSpinner() {
    document.querySelector(".spinner").classList.add("show");
}
function hideSpinner() {
    document.querySelector(".spinner").classList.remove("show");
}

document.querySelector("#image-form").addEventListener("submit", onSubmit);
