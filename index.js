 

 async function getData( ) {
        
        const response = await fetch("https://protechacademy.in/api/ration-cards/all")

        // console.log(response)

        const data = await response.json()
        console.log(data)
 }

//  getData()




 const data = {
        
    "id": "1",
    "rationCardNumber": "KA-APL-100001",
    "rationCardType": "APL",
    "district": "Bengaluru Urban",
    "taluk": "Bengaluru South",
    "village": "BTM Layout",
    "address": "12, 2nd Stage, BTM Layout",
    "headOfFamily": "Ramesh Kumar",
    "fairPriceShop": "FPS-101",
    "status": "Active",
    "issueDate": "2019-04-10",
        
 }

 console.log(data)