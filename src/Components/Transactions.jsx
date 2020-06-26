import React from "react";
import { Link, withRouter } from "react-router-dom";

function Transactions(props) {
  return (
      <div>
    <div class="component">
    <h2>
    Transactions
    </h2> 
     <div class="dropdown float">
     <span> <button class="dropbtn">Admin<i class="fa fa-arrow-down" aria-hidden="true"></i></button></span>
      <div class="dropdown-content">
    <ul><li>    Admin</li>
        <li>    User </li>
        <li>    Doctor</li>
        </ul>
     </div>
    </div>
    <h6> All Transactions</h6>
    <div class="component2">
      <h2>
        Transactions
      </h2>
      <span><button class="button2">
      Today
      </button>
      <button class="button2">
        This Week
        </button>
        <button class="button2">
          This Month
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
        <td>Detail 1
          </td>
          
        <td>Detail 2
        </td>
        
        <td>Detail 3
        </td>
        
        <td>Detail 4
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
  </div>
  );
}

export default Transactions;
