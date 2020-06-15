export default function formatDate(date) {
    const currentDate = new Date();
       
    // date example: 2020-06-03T14:18:05.362+0000

     const kudoFirstSplit = date.split('-');
    
     const kudoYear = kudoFirstSplit[0];
     const kudoMonth = kudoFirstSplit[1];

     const kudoSecondSplit = kudoFirstSplit[2].split('T');
     
     const kudoDay = kudoSecondSplit[0];

     const kudoThirdSplit = kudoSecondSplit[1].split(':');

     const kudoHours = kudoThirdSplit[0] - 3; //-3 to adjust to Brasilia hour (GMT -3h)
     const kudoMinutes = kudoThirdSplit[1];
     const kudoSeconds = kudoThirdSplit[2].split('.')[0];
     

     if(currentDate.getFullYear() - kudoYear > 0)
     {
         if(currentDate.getFullYear() - kudoYear === 1)
         {
             const result = currentDate.getMonth() + 1 + 12 - kudoMonth;

             if(result >= 12)
             {
                 return "1 year ago";
             }

             return result + " months ago";
         }

         else {
             const result = currentDate.getFullYear() - kudoYear;
             return result + " years ago";
         }    
     }

     else{
        
         if(currentDate.getMonth() + 1 - kudoMonth > 0)// + 1 because getMonth returns between 0 and 11
         {
             if(currentDate.getMonth() + 1 - kudoMonth === 1)
             {
                 const result = currentDate.getDate() + 30 - kudoDay;

                 if(result >= 30)
                 {
                     return "1 month ago";
                 }

                 return result + " days ago";
             }

             else {
                 const result = currentDate.getMonth() + 1 - kudoMonth;
                 return result + " months ago";
             } 
         }

         else{
            
             if(currentDate.getDate() - kudoDay > 0)
             {
                 if(currentDate.getDate() - kudoDay === 1)
                     {
                         const result = currentDate.getHours() + 24 - kudoHours;

                         if(result >= 24)
                         {
                             return "1 day ago";
                         }

                         return result + " hours ago";
                     }

                 else {
                     const result = currentDate.getDate() - kudoDay;
                     return result + " days ago";
                 } 
                 
             }
             
             else{
                
                 if(currentDate.getHours() - kudoHours > 0)
                 {
                     if(currentDate.getHours() - kudoHours === 1)
                     {
                         const result = currentDate.getMinutes() + 60 - kudoMinutes;// if result > 60 show '1 hour', otherwise show 'x minutes'

                         if(result >= 60)
                         {
                             return "1 hour ago";
                         }

                         return result + " minutes ago";
                     }

                     else {
                         const result = currentDate.getHours() - kudoHours;
                         return result + " hours ago";  
                     } 
                 }

                 else{
                    
                     if(currentDate.getMinutes() - kudoMinutes > 0)
                     {
                         if(currentDate.getMinutes() - kudoMinutes === 1)
                         {
                             const result = currentDate.getSeconds() + 60 - kudoSeconds;

                             if(result >= 60)
                             {
                                 return "1 minute ago";
                             }

                             return result + " seconds ago";
                         }

                         else {
                             const result = currentDate.getMinutes() - kudoMinutes;
                             return result + " minutes ago";   
                         }

                        
                         
                     }

                     else{
                         const result = currentDate.getSeconds() - kudoSeconds;
                         return result + " seconds ago";
                     }
                 }
             }
 
         }
     }
}