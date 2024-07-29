function fnmsg()
{
    //alert('Hi')
    //console.log('Anshul Working on HTML')
    var name = prompt('Enter your name');
    alert('Hi,'+ name);
}

function fnSum()
{
    var first= parseInt(prompt('Enter first value'))
    var second= parseInt(prompt('Enter Second value'))

    alert(first+second);
}

function fnclose()
{
    var result= confirm('Ar you sure??');
    if(result==true)
    {
        window.close();
    }
    else
    {
        window.location.href="http://www.google.com";
    }
}

function fnshowmsg()
{
    document.write("Hello, I am learning HTML")
    document.write("<br/>")
    document.write("<h1>Hello, I am learning HTML</h1>")
}

function fndisplaytable()
{
    var n=parseInt(prompt('Enter a value'));
    for (var i=1;i<=10;i++)
    {
        //document.write(n+"X"+i+"="+n*i+"<br/>")
        document.write('${n} X ${i} = ${n*i} <br/>')
    }
}

function fnDisplayElements()
{
    var courselist=['C','C++','JAVA','SQL']
    document.write('<ol>')
    for (var i=0;i<=3;i++)
    {
        //document.write('<li>'+courselist[i]+'</li>')
        document.write('<li>'+courselist[i]+'</li>')
    }
    document.write('</ol>')
}

function fndisplaydata()
{
    var users=[
        {id:1,name:'John',city:'mumbai'},
        {id:2,name:'steve',city:'Guna'}
    ]

    document.write("<table border='1'>")
    document.write('<thead>')
    document.write('<tr><th>ID</th><th>Name</th><th>City</th></tr>')
    document.write('<thead>')
    document.write('<tbody>')
        for(i=0;i<=users.length;i++)
        {
            document.write('<tr>')
                document.write('<td>'+users[i].id+'</td>')
                document.write('<td>'+users[i].name+'</td>')
                document.write('<td>'+users[i].city+'</td>')
            document.write('</tr>')
                //document.write('<td>${users[i].name}</td>')
                //document.write('<td>${users[i].city}</td>')

        }
        document.write('</tbody>')
        document.write('</table>')
}

function fngetvlaue()
{
    var name= document.getElementById("name")
    console.log(name.value)
} 

function fnsetvalue()
{
    var inpname=document.getElementById('name')
    inpname.value='Anshul';
}

function fnautocaps(id)
{
    var input=document.getElementById(id)
    input.value=input.value.toUpperCase();
}

function changebg()
{
    var inp = document.getElementById('col')
    document.body.style.backgroundColor=inp.value
}

function fngetgender() {
    var Gen = document.getElementsByName('Gender');
    var lbl = document.getElementById('lbl');
    for (var i = 0; i < Gen.length; i++) { 
        if (Gen[i].checked) {
            console.log(Gen[i].value + " is selected");
            lbl.innerHTML = Gen[i].value + " is selected";
        }
    }
}


function fngetskill()
{
    var Skill = document.getElementsByName('Skill');
    var result = ""
    for(var i=0;i<Skill.length;i++)
    {
        if (Skill[i].checked)
        result=result+Skill[i].value+",";
    }

console.log(result);

}

function fngetcity()
{
    var city=document.getElementById('city')
    if(city.value=='OTH')
    {
        document.getElementById('othersdiv').style.visibility='visible'
    }
    else
    {
        document.getElementById('othersdiv').style.visibility='hidden'
    }
}

function fntest() {
    fetch('https://reqres.in/api/users?page=2', { method: 'GET' })
        .then(jsonres => {
            return jsonres.json();
        })
        .then(result => {
            console.log(result.data);
        });
}

function fnIntTestpost()
{
    fetch('https://reqres.in/api/users', { 
        method: 'post',
        header:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify({"name":"Anshul", "job": "leader"})
     })

     .then(res =>{
        console.log(res);
        if(res.status == 201){
            console.log('Submitted Successfully')
        }
        else
        {
            console.log('Failure See logs')
        }
     })

}

function fnIntTestput()
{
    fetch('https://reqres.in/api/users/2', { 
        method: 'put',
        header:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify({"name":"Anshul", "job": "leader"})
     })

     .then(res =>{
        console.log(res);
        if(res.status == 200){
            console.log('Data updated Successfully')
        }
        else
        {
            console.log('Failure See logs')
        }
     })

}

function fnIntTestdel()
{
    fetch('https://reqres.in/api/users/2', { 
        method: 'delete'
        
     })

     .then(res =>{
        console.log(res);
        if(res.status == 204){
            console.log('Deleted Successfully')
        }
        else
        {
            console.log('Failure See logs')
        }
     })

}

