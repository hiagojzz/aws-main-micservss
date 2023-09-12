import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { IFunction } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

interface SwnApiGatewayProps {
    productMicroservice: IFunction,
    basketMicroservice: IFunction,
    orderingMicroservices: IFunction
}

export class SwnApiGateway extends Construct {    

    constructor(scope: Construct, id: string, props: SwnApiGatewayProps) {
        super(scope, id);

        // Produto api gateway
        this.createProductApi(props.productMicroservice);
        // Basket api gateway
        this.createBasketApi(props.basketMicroservice);
        // Ordering api gateway
        this.createOrderApi(props.orderingMicroservices);
    }

    private createProductApi(productMicroservice: IFunction) {
      // api de microservices do produto gateway
      // root name = product

      // GET /product
      // POST /product

      // produto com id único e singular
      // GET /product/{id}
      // PUT /product/{id}
      // DELETE /product/{id}

      const apigw = new LambdaRestApi(this, 'productApi', {
        restApiName: 'Product Service',
        handler: productMicroservice,
        proxy: false
      });
  
      const product = apigw.root.addResource('product');
      product.addMethod('GET'); // GET /product
      product.addMethod('POST');  // POST /product
      
      const singleProduct = product.addResource('{id}'); // product/{id}
      singleProduct.addMethod('GET'); // GET /product/{id}
      singleProduct.addMethod('PUT'); // PUT /product/{id}
      singleProduct.addMethod('DELETE'); // DELETE /product/{id}
    }

    private createBasketApi(basketMicroservice: IFunction) {
        // Basket microservices api gateway
        // root name = basket

        // GET /basket
        // POST /basket

        // Singular basket com userName parameter - resource name = basket/{userName}
        // GET /basket/{userName}
        // DELETE /basket/{userName}

        // checkout basket async flow
        // POST /basket/checkout

        const apigw = new LambdaRestApi(this, 'basketApi', {
            restApiName: 'Basket Service',
            handler: basketMicroservice,
            proxy: false
        });

        const basket = apigw.root.addResource('basket');
        basket.addMethod('GET');  // GET /basket
        basket.addMethod('POST');  // POST /basket

        const singleBasket = basket.addResource('{userName}');
        singleBasket.addMethod('GET');  // GET /basket/{userName}
        singleBasket.addMethod('DELETE'); // DELETE /basket/{userName}

        const basketCheckout = basket.addResource('checkout');
        basketCheckout.addMethod('POST'); // POST /basket/checkout
            // expected request payload : { userName : swn }
    }

    private createOrderApi(orderingMicroservices: IFunction) {
        // Ordenação microservices api gateway
        // root name = order

        // GET /order
	    // GET /order/{userName}
        // expected request : xxx/order/swn?orderDate=timestamp
        // ordena o ms grap input e o parametro de querys com os filtros no dynamo db

        const apigw = new LambdaRestApi(this, 'orderApi', {
            restApiName: 'Order Service',
            handler: orderingMicroservices,
            proxy: false
        });
    
        const order = apigw.root.addResource('order');
        order.addMethod('GET');  // GET /order        
    
        const singleOrder = order.addResource('{userName}');
        singleOrder.addMethod('GET');  // GET /order/{userName}
            // request esperada : xxx/order/swn?orderDate=timestamp
    
        return singleOrder;
    }
}