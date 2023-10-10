export interface ProductModel {
    name: string; // zorunlu alan
    price: number; // zorunlu alan
    stock: number; // zorunlu alan
    points?: number[]; // optional alan bos gecilebilir
}