console.log("test")
async function myFunction(){
    try{

         const myData =  await fetch (`../data/content.json`)  ;
         
         const information = await myData.json();
         console.log(information);
        //  console.log(foobar.siteName);

        //  const heading = document.querySelector('h1');
        //  heading.innerHTML= foobar.siteName;

         //get 'nav ul' in a variable
            // const navHolder = document.querySelector('nav ul');
            // console.log(foobar.mainNav);
            // foobar.mainNav.forEach(menuitem =>{
            //     console.log(menuitem);
            //     var listItem = document.createElement('li');

            //     listItem.innerHTML = `<a href="${menuitem.url}>" ${menuitem.text}</a>`;
            //     navHolder.appendChild(listItem)

            // })



    }catch(error){
        console.warn(  ` Nope: ${error}`)


    }




}

myFunction();