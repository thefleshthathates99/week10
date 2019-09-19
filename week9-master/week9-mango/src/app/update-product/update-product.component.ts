import {ActivatedRoute,Router} from '@angular/router';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private generalServices: GeneralService,private route:ActivatedRoute, private router:Router) { }

  productidparam;
  productname:string = "";
  productunits:number=0;
  productid:number=0;
  productdescription:string="";
  productprice: string="";

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.productidparam = params.get('id');

    })
    this.generalServices.getitem(this.productidparam).subscribe((data)=>{
      this.productid = data[0]._id;
      this.productname = data[0].Name;
      this.productprice = data[0].Price;
      this.productunits = data[0].Units;
      this.productdescription = data[0].Description
      console.log(data)
    })

  }

  update(){
    var updatedproduct = 
    {
      _id: this.productid,
      Name: this.productname,
      Description: this.productdescription,
      Price: this.productprice,
      Units: this.productunits
    };
    this.generalServices.updateitem(updatedproduct).subscribe((data)=>{
     this.router.navigate(['/']);

    })

    
  }

}
