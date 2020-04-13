function Sort(){
                txt1 = document.getElementById("txt01").value;
                txt2 = document.getElementById("txt02").value;
                txt3 = document.getElementById("txt03").value;
                txt4 = document.getElementById("txt04").value;
                txt5 = document.getElementById("txt05").value; 
                if (txt1=="" || txt2=="" || txt3=="" || txt4=="" || txt5=="" ){
                    alert("Please Fill All Textboxes To Sort");
                }
                else{
                txt1=parseInt(txt1);
				txt2=parseInt(txt2);
				txt3=parseInt(txt3);
				txt4=parseInt(txt4);
				txt5=parseInt(txt5);
				var array=[txt1,txt2,txt3,txt4,txt5];
                document.getElementById("resulttxt1").textContent="The Unsorted Array is - "+array; 
                var arrayLength = array.length;
                var i;
                var j;
                var k;
                for(i=0;i<arrayLength;i++)
                {
                    for(j=i+1;j<arrayLength;j++)
                    {
                      if(array[i]>array[j])
                      {
                                k=array[i];
                                array[i]=array[j];
                                array[j]=k;
                      }
                    }   
                }
				document.getElementById("resulttxt").textContent="The Sorted Array is - "+array; 
                }
            }	
		function sot(){
			var ab=[];
			var bc=[];
			ab=document.getElementById("txt010").value;
			if (ab==""){
			alert("PLease Enter Your Value In TextBox");
			}
			else{
			ab= ab.split(",");
			len=ab.length;
			for (i=0;i<len;i++){
				bc.push (parseInt(ab[i]));
			}
			document.getElementById("resulttxt2").textContent="The Unsorted Array is - "+bc; 
			var arrayLength = bc.length;
                var i;
                var j;
                var k;
                for(i=0;i<arrayLength;i++)
                {
                    for(j=i+1;j<arrayLength;j++)
                    {
                      if(bc[i]>bc[j])
                      {
                                k=bc[i];
                                bc[i]=bc[j];
                                bc[j]=k;
                      }
                    }   
                }
			document.getElementById("resulttxt21").textContent="The Sorted Array is - "+bc; 	
			}
		}
		function reset1(){
			document.getElementById("txt01").value="";
			document.getElementById("txt02").value="";
			document.getElementById("txt03").value="";
			document.getElementById("txt04").value="";
			document.getElementById("txt05").value="";
		}
		function reset2(){
			document.getElementById("txt010").value="";
		}

        function login(){
            var user="admin";
            var pass="login123";
            var username;
            var userpass;
            username=document.getElementById("username").value;
            userpass=document.getElementById("password").value;
            if (username==user && userpass==pass){
                window.location="algorithm.html";
            }
            else{
                document.getElementById("error").textContent="Your Username Or Password Incorrect"; 	
            }
        }