import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  productForm!: FormGroup;
  productDetails: any;
  fileName: any;

  constructor(private fb: FormBuilder, private ps: GlobalService, private router: Router) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.ps.FormValue.subscribe(data => {
      this.productDetails = data;
      if (data != null && data > 0) {
        this.ps.getProductId(data).subscribe(product => {
          this.productDetails = product;
          this.productForm.patchValue({
            productName: this.productDetails.name,
            price: this.productDetails.price,
            description: this.productDetails.description,
            image: this.productDetails.image
          })
        })
      }
    })
  }

  // onFileSelected(event: any) {
  //   const image = this.productForm.get('image');
  //   const file: File = event.target.files[0];
  //   image?.setValue(file.name)
  // }

  // back() {
  //   this.productForm.reset();
  //   this.router.navigateByUrl('/product-list')
  // }

  submit() {
    console.log(this.productForm.value);
    const data = {
      id: this.productDetails.id != null ? this.productDetails.id : 0,
      name: this.productForm.value.productName,
      price: this.productForm.value.price,
      description: this.productForm.value.description,
      image: this.productForm.value.image,
    }
    if (data.id === 0) {
      this.ps.addProduct(data).subscribe({
        next: () => {
          alert("product added Successfully.")
          this.productForm.reset();
          this.router.navigateByUrl('/products-list');
        },
        error: () => {
          alert("Something went Wrong.")
        }
      })
    } else if (data.id != null) {
      this.ps.editProduct(data).subscribe({
        next: () => {
          alert("product updated Successfully.")
          this.productForm.reset();
          this.router.navigateByUrl('/products-detail');
        },
        error: () => {
          alert("Something went Wrong.")
        }
      })
    }
  }

}
