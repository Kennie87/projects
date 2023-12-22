function callModalResponse(value){
    toggleBlur();
    sleep(2000).then(() => { 
        modal.showModal();
        coverLetter(value);
    });
}
function coverLetter(value){
    const token = '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';
    const gptEl = document.getElementById('result_of_gpt');

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "write short cover letter for " + value + " tech career"}]
         })
    }).then(response => {
        return response.json();
    }).then(data => {
        gptEl.innerText = data.choices[0].message.content;
    })
}

function resetModal(){
    toggleBlur();
    const gptEl = document.getElementById('result_of_gpt');
    gptEl.innerText = "Processing please wait... ☕ while you wait 😋"
}

function copyToClip(){
    navigator.clipboard.writeText(document.getElementById('result_of_gpt').innerText);
    sleep(1500).then(() => { 
        alert("Copy was successful, may the odd's ever be in your favor 🏹");
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function assist(){
    toggleBlur();
    sleep(2000).then(() => { 
        modal_assist.showModal();
        const prompt = ["Short random tips when applying for a tech job.",
                        "Quick resume tips to get hired?",
                        "Breif words of affirmation when applying for a new job?",
                        "Quick interview tips when applying for a tech role?"]
        
    
        var choice = Math.floor(Math.random() * prompt.length);
    
        const token = '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';
        const gptEl = document.getElementById('assist_of_gpt');
        const gptEl1 = document.getElementById('question');
    
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": prompt[choice]}]
             })
        }).then(response => {
            return response.json();
        }).then(data => {
            gptEl.innerText = data.choices[0].message.content;
            gptEl1.innerText = prompt[choice];
        }) 
    });
}

function resetModalAssist(){
    toggleBlur();
    const gptEl = document.getElementById('assist_of_gpt');
    const gptEl1 = document.getElementById('question');
    gptEl.innerText = "Processing please wait... ☕ while you wait 😋";
    gptEl1.innerText = "";
}
function toggleBlur(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}

const url = 'https://ayriuexhcqfqtjjjzrnx.supabase.co/rest/v1/jobOpening?select=*%2Ccompany%21inner%28*%29&dateDeleted=is.null&order=isPromoted.desc.nullslast%2Ccreated_at.desc.nullslast&limit=20&offset=0';
           const options = {
            method: 'GET',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5cml1ZXhoY3FmcXRqamp6cm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4Nzg1MjEsImV4cCI6MTk4NDQ1NDUyMX0.4cmxg0cAbSKdaKb-CL6E2SODKcLtKjDfHqYmQfi0Apo',
                'header': 'https://ayriuexhcqfqtjjjzrnx.supabase.co'
                }
            };
           
            (async ()=>{
                try {
                const response = await fetch(url, options)
                .then(res => {
                    return res.json();
                })
               .then(data => {
                data.forEach(id => {
                    const markup = `<li>${"Position Title: "+id.roleTitle}</li>`;
                    const markup1 = `<li>${"Description: " +id.roleDescription +"<br><br>"+ "Requirements:"+id.roleRequirements}</li>`;
                    const markup2 = `<li>${"Company Name: "+id.company.name}</li>`;
                    try{const markup5 = `<li>${id.salaryRange.salaryHumanReadableText}</li>`;}catch{}
                    const markup6 = `<li id="btns">${"Remote Specific to "+id.locationHumanReadableText} 
                    <button class="open_modal" value="${id.roleTitle + " " + id.company.name}"; onclick="callModalResponse(value);">Custom Cover Letter with ChatGPT</button>
                    <input type="button" class="apply_button" onclick="window.location.href='${id.url}';" value="Apply Now"/></li>`;
                    const blank = `<li style="background: rgb(0, 102, 255);"><br></li>`;
                    document.querySelector('ul').insertAdjacentHTML('beforeend', markup2);
                    document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
                    document.querySelector('ul').insertAdjacentHTML('beforeend', markup1);
                    try{document.querySelector('ul').insertAdjacentHTML('beforeend', markup5);}catch{}
                    document.querySelector('ul').insertAdjacentHTML('beforeend', markup6);
                    document.querySelector('ul').insertAdjacentHTML('beforeend', blank);
                })
               })} 
               
               catch (error) {
                    console.error(error);
                }
            })()  

let alien = document.getElementById('alien');
let right = document.getElementById('right');
let left = document.getElementById('left');
let leftT = document.getElementById('leftT1');
let rightT = document.getElementById('rightT');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    
    left.style.right = value * 2.5 + 'px'
    right.style.right = value * -2.5 + 'px'
    leftT.style.left = value * 2.5 + 'px'
    rightT.style.left = value * -2.5 + 'px'
    alien.style.top = value * -.5 + 'px'
    c1.style.top = value * .51 + 'px'
    c2.style.top = value * -.15 + 'px'
    c3.style.top = value * -.2 + 'px'
    c4.style.left = value * -2.5 + 'px'
})