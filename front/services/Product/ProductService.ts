import Api from "~/services/Api";

class ProductService extends Api {
  constructor() {
    super('/products')
  }
}

export default ProductService
