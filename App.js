class Product {
    constructor (name, price, year){
        this.name= name;
        this.price = price;
        this.year = year;
    }
}

class UI {
        addProduct(product){
            const productList= document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Nombre del producto</strong>: ${product.name} <br> 
                        <strong>Precio unitario</strong>: Q.${product.price} <br> 
                        <strong>Año año</strong>: ${product.year} <br> 
                        <a href="#" class="btn btn-danger" name="delete">Eliminar producto</a>
                    </div>
                </div>
            `;
            productList.appendChild(element);
            
        }
    
        resetForm(){
            document.getElementById('product-form').reset();
        }

        deleteProduct (element){
            if(element.name === 'delete'){
                element.parentElement.parentElement.parentElement.remove();
                this.showMessage('¡Producto eliminado correctamente!', 'info');
    
            }

        }

    

    

        showMessage(message, cssClass){
            const div = document.createElement('div');
            div.className =  'alert alert-${cssClass} mot-4';
            div.appendChild(document.createTextNode(message));
            //Mostrar en DOM
            const container = document.querySelector('.container');
            const app = document.querySelector('#App');
            container.insertBefore(div, app);
            setTimeout(function(){
                document.querySelector('.alert').remove();
            }, 4000);
    
           
        }
    
    
    }

    
 // DOM Eventos
document.getElementById('product-form')
.addEventListener('submit', function (e) {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value; 
  const year = document.getElementById('year').value; 


 
  const product = new Product(name, price, year);
  const ui = new UI(); 

  if(name === '' || price === '' || year=== '' ){
    return ui.showMessage('Por favor, completar cada uno de los campos','danger');
  }
  ui.addProduct(product); 
  ui.resetForm();
  ui.showMessage('¡Producto agregado correctamente!', 'success');

  e.preventDefault();
});

document.getElementById('product-list') .addEventListener('click', function(e){
      const ui = new UI();
      ui.deleteProduct(e.target);
       
    })


  






    








