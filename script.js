const URL = "https://northwind.vercel.app/api/suppliers"
fetch(URL)

let NewTable = document.querySelector(".table")
let NewTr = document.querySelector(".table_tr")
let body = document.querySelector("body")



fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            let newData = NewElement(element)
        });
    })


function NewElement(supplier) {
    let div = document.createElement('div')

    let thead = document.createElement("thead")
    thead.classList.add("thead")

    let table = document.createElement('table')
    table.classList.add("table")

    let table_tr = document.createElement("tr")
    table_tr.classList.add('table_tr')


    let table_th = document.createElement("th")
    table_th.classList.add('id')
    table_th.innerText = `${supplier.id},${supplier.companyName},${supplier.contactTitle},${supplier.country}`

    div.append(table, thead, table_tr, table_th, );
    body.append(div);

    // let i=document.createElement("i")
    // i.classList.add("fa-solid fa-trash-can")

    let buttonTd = document.createElement("td")
    let buttonPost = document.createElement("button")
    let buttonRight = document.createElement("button")

    buttonRight.innerText = "Delete"
    buttonRight.classList.add("btn-secondary")
    buttonRight.style.borderRadius = "3px"
    buttonRight.style.marginRight = "15px"
    buttonRight.style.backgroundColor = "green"



    buttonPost.innerText = "post"
    buttonPost.classList.add("btn-dangery")
    buttonPost.style.borderRadius = "3px"
    buttonPost.style.marginRight = "15px"
    buttonPost.style.backgroundColor = "blue"
    buttonPost.style.color = "white"

    // buttonRight.addEventListener("click",(e)=>{
    // fetch(`${URL}/suppliers/${id},{
    //     method :'DELETE'
    // })
    // .then(NewElement=>NewElement.id())
    // .then(NewElement => console.log(NewElement()));
    // })

    buttonRight.addEventListener("click", (e) => {
      fetch("https://northwind.vercel.app/api/suppliers/"+supplier.id,{
        method:'DELETE',
      })
      .then(res=>res.text())
      .then(res=>console.log(res))
      
    })

    div.append(buttonRight, buttonPost)

    
    buttonPost.addEventListener("click", (e) => {
        fetch(`${URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category),

        })
    })

}