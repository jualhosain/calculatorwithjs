let output= document.querySelector("#Output");
let td= document.querySelectorAll("td");
let value ="";

for(let x=1; x<td.length; x++){
    td[x].addEventListener("click",()=>{

        //start -->

        let newOne=td[x].id.toString();

        if(newOne =="cancel" || newOne =="del" || newOne =="="){
           if(newOne=="cancel"){
               value=''
               screen(value);
           }

           if(newOne=="del"){
               if(newOne=''){
                alert("Something Wrong");
               }else{
                value=value.slice(0,-1);
                output.innerText=value;
               }
        }

           if(newOne=="="){
            let one=value.slice(-1);
            if(one=="+" || one=="-"|| one=="/" || one==''){
                    alert("Something Wrong");
            }else{
                value= eval(value).toString();
                output.innerText=value;
            }
        }

        }else{
            if(newOne=='+' || newOne=='+' || newOne=='-' || newOne=='*' || newOne=='/'){
                if(value==''){
                    alert("Something Wrong");
                }else{
                    let checktwo= value.slice(-1);
                    let cutlast;
                    if(checktwo=='+' || checktwo=='+' || checktwo=='-' || checktwo=='*' || checktwo=='/'){
                        if(newOne=='+' ){
                        cutlast= value.slice(0,-1);
                        output.innerText = cutlast+newOne;
                    }else if(newOne=='-'){
                        cutlast= value.slice(0,-1);
                        output.innerText = cutlast+newOne;
                    }else if(newOne=='*' ){
                        cutlast= value.slice(0,-1);
                        output.innerText = cutlast+newOne;
                    }else if(newOne=='/' ){
                        cutlast= value.slice(0,-1);
                        output.innerText = cutlast+newOne;
                    }else{
                        screen(newOne);
                    }
                    }else{
                        screen(newOne);
                    }

                    
                }
            }else if(newOne=="."){
                let testadd= value.lastIndexOf("+");
                let testsub= value.lastIndexOf("-");
                let testmul= value.lastIndexOf("*");
                let testdiv= value.lastIndexOf("/");
                let testdot= value.lastIndexOf(".");
                let highest= Math.max(testadd,testsub,testmul,testdiv);
                let test2ndtime= value.indexOf(".",highest);

        
                let newcheckfordot=value.slice(-1);
                if(value==''){
                    value = "0."
                    output.innerText=value;
                }else if(highest== -1){
                    let checkonce= value.includes(".");
                    if(checkonce==true){
                        alert("something Wrong");
                    }else{
                        screen(newOne);
                    }

                }else if(newcheckfordot=='.'){
                    alert("something Wrong");
                }else{
                    if(test2ndtime !== -1){
                        alert("Something Wrong");
                    }else{
                        screen(newOne);
                    }
                    
                }
            }else{
                screen(newOne);
            }
        }

        //end -->
    })
}

function screen(any){
    value+=any
    output.innerText=value;
}
