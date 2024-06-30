import React from 'react'

const Home = () => {
        return (
          <div className="font-sans">
           
      
            <main className="container mx-auto px-4 py-10">
              <section className="flex flex-col md:flex-row md:space-x-10">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Banner Image" className="w-full md:w-1/2 mb-4 md:mb-0 rounded-lg" />
                <div className="w-full md:w-1/2 prose">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus magna, dictum quis augue vitae, tincidunt lacinia lorem. Integer at laoreet sem. Donec non eros et magna aliquam fringilla. Pellentesque euismod magna eu nibh hendrerit consectetur.</p>
                  <p>Proin eget tortor risus. Donec euismod velit eget magna pharetra aliquam. Sed posuere consectetur est at lobortis. Maecenas sed diam eget turpis varius tempor.</p>
                  <a href="/products" className="inline-block px-4 py-2 mt-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">Learn More</a>
                </div>
              </section>
      
              <section className="mt-10">
                <h2 className="text-xl font-bold mb-4">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <i className="text-blue-500 text-2xl fas fa-check-circle"></i>
                    <h3 className="text-lg font-bold mt-2">Service One</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <i className="text-blue-500 text-2xl fas fa-lightbulb"></i>
                    <h3 className="text-lg font-bold mt-2">Service Two</h3>
                    <p className="text-gray-600">Donec euismod velit eget magna pharetra aliquam.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <i className="text-blue-500 text-2xl fas fa-rocket"></i>
                    <h3 className="text-lg font-bold mt-2">Service Three</h3>
                    <p className="text-gray-600">Proin eget tortor risus. Donec euismod velit eget magna.</p>
                  </div>
                </div>
              </section>
            </main>
    
          </div>
        );
      }

export default Home;
