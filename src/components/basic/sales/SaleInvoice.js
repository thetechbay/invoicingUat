import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import './dashboard.css';
import { Link } from 'react-router-dom';

const SaleInvoice = () => {
    const [refresh,setRefresh]=useState(true); 
    useEffect( ()=>{
      checkAuthentication();
  },[refresh])
  
  const checkAuthentication = () => {
	console.log(localStorage.getItem("tokk"));
      if(localStorage.getItem('token') === ""){
        //   window.location = '/dashboard';
      }
      else{
          window.location = '/login';
          toast("Please login, Session Expired",{"type":"success"});
      }
  }

    return(
        <div>
            <nav>
		<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
		  
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul class="navbar-nav ml-auto">
				<li class="nav-item active p-2">
				  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item p-2">
					<a class="nav-link" id="addrow" href="javascript:;" title="Add a row">Add a row</a>
				</li>
				<li class="nav-item dropdown p-2">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					  Delete a row
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					  <textarea id="rowID"></textarea> <br/><button type="button" class="btn btn-outline-danger btn-sm" id="delete" onclick="deleteRow();">Delete row</button>
					</div>
				  </li>
				<li class="nav-item p-2">
					<button type="button" onclick="generatePDF()" class="btn btn-outline-success">Download as PDF</button>
				</li>
                </ul>
				
			</div>
		  </nav>
		
		    
		 
	</nav>
	<div id="page-wrap" >

	<div id="invoice">

		{/* <h1 style="text-align: center;;">ESTIMATION</h1> */}
		
		

		{/* <div style="clear:both"></div> */}
		
		<div id="customer">
		
            <table id="meta-1">
					<tr>
						<td class="meta-1-head">Name</td>
						<td><textarea  class="name"></textarea></td>
					</tr>
					<tr>
						<td class="meta-1-head">Place</td>	
						<td><textarea class="place"></textarea></td>
					</tr>
			</table>
			
            <table id="meta">
                <tr>
                    <td class="meta-head">Invoice #</td>
                    <td><textarea class="invoiceNo">000123</textarea></td>
                </tr>
                <tr>

                    <td class="meta-head">Date</td>
                    <td><textarea id="date"></textarea></td>
                </tr>
                <tr>
                    <td class="meta-head">Truck No</td>
                    <td><textarea class="truck"></textarea></td>
                </tr>

            </table>
		
		</div>
		<div class="container">
			<table id="items">
				
					<thead>
						
						<th>S.No</th>
						<th>Mark</th>
						<th>Length</th>
						<th>Pieces</th>
						<th>hieght</th>
						<th>CFT</th>
						<th>SQFT</th>
						<th>Rate</th>
						<th>Amount</th>
					</thead>
					<tbody>
						<tr class="item-row" id="1">
							<td>1</td>
							<td><input type="text" /></td>
							<td><input type="text" columns="2" class="length" /></td>
							<td><input type="text" class="pieces" /></td>
							<td><input type="text" class="hieght" /></td>
							<td><span class="cft"></span></td>
							<td><input type="text" class="sqft" /></td>
							<td><input type="text" class="rate" /></td>
							<td><span class="amount"></span></td>
						</tr>
					</tbody>
			</table>
			<table>
				<tr>
					<td class="total-line">Subtotal</td>
					<td class="total-value" id="subtotal">0</td>
				</tr>
			</table>

			<table class="meta-head" id="othe">
				<thead>
					<th>Other Charges</th>
					<th>Insurance</th>
					<th>GST</th>
					<th>Loading</th>
					<th>Total</th>
				</thead>
	
			  <tbody>
				  <td colspan="1"><input type="text" class="other" onchange="update_other();" /></td>
				  <td colspan="1"><input type="text" class="insurance" onchange="update_other();" /></td>
				  <td colspan="1"><input type="text" class="gst"onchange="update_other();" /></td>
				  <td colspan="1"><input type="text" class="loading" onchange="update_other();" /></td>
				  <td colspan="4"><span class="total"></span></td>
			  </tbody>
			</table><br/>
			<table >
				<tr id="othe">
					
					<td colspan="2" class="total-line">total</td>
					<td colspan="4" class="total-value"><div id="total-3"></div></td>
				</tr>
				<tr id="other">
	
					<td colspan="4" class="total-line">Amount in Words</td>
					<td colspan="2"class="total-value"><div id="words"></div></td>
				</tr>
				<tr class="other">
			
					<td colspan="4" class="total-line">Amount Paid</td>
					<td colspan="2" class="total-value"><input type="text" id="paid" /></td>
				</tr>
				<tr class="other">
			
					<td colspan="4" class="total-line balance">Balance Due</td>
					<td colspan="2" class="total-value balance"><div class="due"></div></td>
				</tr>
				</table>
  
		
		
		{/* </table> */}
		</div>
		
		<div id="terms">
		  <h5>Terms</h5>
		  NET 30 Days. Finance Charge of 1.5% will be made on unpaid balances after 30 days.
		</div>
	
	</div>
	</div>
        </div>
    )
}


export default SaleInvoice;