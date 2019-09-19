import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import {Router} from '@angular/router';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productname:string = "";
  productunits:number=0;
  productid: number;
  productdescription:string="";
  productprice: string="";

  products;
  constructor(private generalServices: GeneralService, private router: Router) { }

  ngOnInit() {
    this.generalServices.getlist().subscribe((data)=>{
      this.products = data;
      console.log(data)
      var lastArray = this.products.length-1
      this.productid = this.products[lastArray]._id + 1;
      console.log(this.productid)
   });
  }

  addNew(){

    var newproduct = 
    {
      _id: this.productid,
      Name: this.productname,
      Description: this.productdescription,
      Price: this.productprice,
      Units: this.productunits
    };
    console.log(newproduct);
    this.generalServices.add(newproduct).subscribe((data)=>{
     this.router.navigate(['/']);

    })

    
  }

}
