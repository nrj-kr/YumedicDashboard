import React from "react";

function ApprovalRequests() {
  return (
<div class="component">
        <h2>
        Approval Requests
         </h2>
         <div class="dropdown float">
         <span> <button class="dropbtn">Admin<i class="fa fa-arrow-down" aria-hidden="true"></i></button></span>
          <div class="dropdown-content">
            <ul><li>Admin</li>
            <li>User</li>
            <li>Doctor</li>
            </ul>
          </div>
        </div>
        <h6> Approve doctors to join the platform.</h6>
        <div class="component2">
          <h2>
            Approval Requests
          </h2>
          <span>
              <div class="float-left">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search"/>
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
              </div>
              <p class="p2">Showing <span id="entries">10<i class="fa fa-arrow-down" aria-hidden="true"></i></span>Entries
                </p>
          </span>
          <table class="table2">
          <tr>
            <td>Name
              </td>
              
            <td>MCI number
            </td>
            
            <td>Speciality
            </td>
            
            <td>Location
            </td>
            <td>
                </td>
            
            </tr>  
            <tr>
              
            <td>Dr. Vikas Hazra
            </td>
            <td>9876543210
            </td>
            <td>Ranchi
            </td>
            <td>Dentist
            </td>
        <td>
            <i class="fa fa-check" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i>
            </td>      
        </tr>
             
             
              <tr> 
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
            <i class="fa fa-check" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i>
            </td>  
          </tr>

          <tr>    
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
            <i class="fa fa-check" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i>
            </td>  
          </tr>

          <tr>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
            <i class="fa fa-check" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i>
            </td>  
          </tr>
                          
          <tr>
          <td>
           </td>
           <td>
            </td>
            <td>
            </td>
             <td>
            </td>
            <td>
                <i class="fa fa-check" aria-hidden="true"></i>
                <i class="fa fa-times" aria-hidden="true"></i>
                </td>  
            </tr>
            
            <tr>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
               <i class="fa fa-check" aria-hidden="true"></i>
               <i class="fa fa-times" aria-hidden="true"></i>
            </td>      
        </tr>

            
            <tr>                  
             <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            <i class="fa fa-check" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i>
                </td>  
            </tr>
            
            <tr>                             
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
                <i class="fa fa-check" aria-hidden="true"></i>
                <i class="fa fa-times" aria-hidden="true"></i>
                </td>  
            </tr>
             
          
            <tr>                             
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
                <i class="fa fa-check" aria-hidden="true"></i>
                <i class="fa fa-times" aria-hidden="true"></i>
                </td>    
            </tr>

          
              <tr>                             
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <i class="fa fa-times" aria-hidden="true"></i>
                    </td>  
                </tr>    
        </table>
          <ul class="pagination pagination-lg">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>      
          </div>
      </div>
      );
      }

      export default  ApprovalRequests;