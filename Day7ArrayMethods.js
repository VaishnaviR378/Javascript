let company=[
    "Trend tech", //arr[0]
    2025,//arr[1]
    ["Bangalore","Chennai","Coimbatore"],//arr[2]
    {
        department:"QA", //arr[3]
        employees:[//arr[3]
            
               
            {name:"Abinaya",role:"Qa Anaylts",skills:["Playwright","Selenium","ApiTesting"]},
            {name:"abc",role:"Test Eng",skills:["Playwright","Selenium","ApiTesting"]},
             {name:"abc",role:"dvops",skills:["Python","sql","ApiTesting"]}
                
            
        ]
    },
    [ //arr[4]
        {project:"auto",status:"onh"},
        {project:"Quickcart",status:"comple"}
    ]
];
console.log(company[3].employees[2].skills[1])
console.log(company[4][1].project)
console.log(company[2][2])
console.log(company[3].department)

///////////////////////////////////////////////////////////////////
let organization = [
"TechCorp International", //0
1999, //1
true, //2
null,  // 3
["India", "USA", "Bangalore", "New York", ["Koramangala", "Brooklyn"]],
{
department: "Engineering",
teams: [
{
name: "QA",
members: [
{ id: 1, name: "Muthu Kannan", skills: ["Playwright", "Selenium"], available: true },
{ id: 2, name: "Pradeep", skills: ["Java", "Spring Boot", "Docker", "Kubernetes"], available: false }
]
},
{
name: "Development",
members: [
{ id: 3, name: "Sandhiya", skills: ["React", "Node.js"], available: true },
{ id: 4, name: "Vaishnavi", skills: ["Python", "Django"], cloud: ["AWS", "Azure", "GCP"], available: true }
]
}
]
},
{ project: "AutoShop360", status: "Ongoing", tasks: ["UI Testing", "API Automation"] },
{ project: "QuickCart", status: "Completed", tasks: [{ sprint: 1, bugs: 12 }, { sprint: 2, bugs: 5 }] }
];
//console.log(organization[9].members[0].available[0])
// console.log(organization[5].members[0].available[0])
console.log(organization[5].teams[0].members[0].available); // true
