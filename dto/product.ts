export interface ProductDto {
    name: string;
    storeId: number;
    image: string;
    size: string;
    variant:string;
    description:string;
    price: number;
    priceDiscount: number;
    isPromo: boolean;
    stock: number; 
    imageDefault:any;
    permalink:any;
    image2:any;
    image3:any;
    categoryProduct: string;   
}

export interface ProductCreateDto {
    name: string;
    size: any;
    description:any;
    price: number;
    priceDiscount: any;
    isPromo: any;
    stock: any;
    imageDefault:any;
}

export interface CustomerUpdateDto {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber:string;
    address:string;
    password: string;
}

export interface RegisResponse {
    id:number;
    fullName: null;
    userName: string;
    email: string;
    phoneNumber:string;
    address:string;
    password: string;
    token:string;
}

export interface ProductParamsDto {
    id:string;
}

export interface CustomerIdDto {
    customerId:number;
}

export interface ProductIdDto {
    productId: number
}

export interface ProductFilter {
    categoryProductId:string;
    page : number;
    limit: number;
}

export interface ProductFilterName {
    name:string;
    storeId:number;
    page : number;
    limit: number;
}

export interface ProductFilterCategory {
    categoryProductId:number;
    storeId:number;
    page : number;
    limit: number;
}