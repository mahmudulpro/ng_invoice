import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	currencyies = [
	{id:1, symbol:'$', value:'USD', code:'USD'},
	{id:2, symbol:'৳', value:'BDT', code:'BDT'},
	{id:3, symbol:'€', value:'EUR', code:'EUR'}
	];

	currency = 1;

	// check
	uCurrency = false;


	discounts = [
		{id:1, key:'% Discount', value:'percentage'},
		{id:2, key:'Flat Discount', value:'flat'},
		{id:3, key:'Off', value:'off'}
	];

	discount = 1;

	shippings = [
	{id:1, key: "On", value: "flat"},
	{id:2, key: "Off", value: "off"}

	];

	shipping = 1;

	taxs = [
	{id:1, key: "VAT", value: "vat"},
	{id:2, key: "Flat Tax", value: "flat"},
	{id:3, key: "% Tax", value: "percentage"},
	{id:4, key: "Off", value: "off"}
	];

	tax = 1;
	FormData: any;

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
	this.FormData=new FormGroup({
		uCurrency:new FormControl(),
		labels:new FormGroup({
		  title:new FormControl(),
		  from:new FormControl(),
		  to:new FormControl(),
		  number:new FormControl(),
		  date:new FormControl(),
		  dueDate:new FormControl(),
		  description:new FormControl(),
		  quantity:new FormControl(),
		  rate:new FormControl(),
		  vat:new FormControl(),
		  amount:new FormControl(),
		  subTotal:new FormControl(),
		  discount:new FormControl(),
		  tax:new FormControl(),
		  shipping:new FormControl(),
		  total:new FormControl()
		}),
		from:new FormControl(),
		to:new FormControl(),
		number:new FormControl(),
		notes:new FormControl(),
		currencys:new FormGroup({
			id:new FormControl(),
			symbol:new FormControl(),
			code:new FormControl(),
		  value:new FormControl()
		}),
		discountFormat:new FormGroup({
		  key:new FormControl(),
		  value:new FormControl()
		}),
		  taxFormat:new FormGroup({
			key:new FormControl(),
			value:new FormControl()
		  }),
		  shippingFormat:new FormGroup({
			key:new FormControl(),
			value:new FormControl()
		  })
		});
	}
	onSubmit() {
		localStorage.setItem('data', JSON.stringify(this.FormData.value));
		console.log(this.FormData);
	}

}
