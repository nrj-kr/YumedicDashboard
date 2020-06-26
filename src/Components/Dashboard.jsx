import React from "react";

function Dashboard() {
  return (
    <div class="component">
    <h2>
    Dashboard
     </h2>
     <div class="dropdown float">
     <span> <button class="dropbtn">Admin<i class="fa fa-arrow-down" aria-hidden="true"></i></button></span>
      <div class="dropdown-content">
       <ul> 
           <li>Admin </li>
        <li>User</li>
        <li>Doctor</li>
        </ul>   
       </div>
    </div>
    <h6>Welcome to Yumedic Dashboard</h6>
    <div class="component2">
      <h2>
        Appointments
      </h2>
      <span><button class="button2">
      Upcoming
      </button>
      <button class="button2">
        Past
        </button>
        <button class="button2">
          Cancelled
          </button>
          <div class="search-container">
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
        <td>Booking Id
          </td>
        <td>Amount
        </td>
        <td>Name
        </td>
        <td>Contact No.
        </td>
        <td>Date
        </td>
        <td>Time
        </td>
        <td>Doctor
        </td>
        <td>Hospital
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
    </td>
    <td>
    </td>
    <td>
    </td>
    <td>
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
    </td>
    <td>
    </td>
    <td>
    </td>
    <td>
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
    </td>
    <td>
    </td>
    <td>
    </td>
    <td>
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
    </td>
    <td>
    </td>
    <td>
    </td>
    <td>
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
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
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
        </td><td>
        </td>
        <td>
        </td>
        <td>
        </td><td>
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
        </td><td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
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
        </td><td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
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
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
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
            </td>
            <td>
            </td>
            <td>
            </td>
            <td>
            </td>
            </tr>    
    </table>
      <ul class="pagination pagination-lg">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>      
      </div>
  </div>
  );
  }

  export default Dashboard;