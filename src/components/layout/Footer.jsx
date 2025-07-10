export const Footer = () => {
    return (
      <footer className="bg-[#010816] text-[#f7f7f7]">
        <div className="container mx-auto py-16 px-4 lg:px-0">
          {/* Footer top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Content 1 */}
            <div className="content_1">
            <img width={50}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU84awUzpy6YONbLPynuw9Eie9hKxLiguA_w&s" alt="" />
              <p className="mt-8 mb-6 text-[#ccc] text-sm leading-relaxed">
                Welcome to Bhaskar EcomStore, your ultimate destination for cutting-edge gadgets!
              </p>
              <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" className="w-40" />
            </div>
  
            {/* Content 2 */}
            <div className="content_2">
              <h4 className="text-white font-semibold tracking-wider mb-6 text-lg">
                SHOPPING
              </h4>
              <a href="#" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Computer Store
              </a>
              <a href="#" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Laptop Store
              </a>
              <a href="#" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Accessories
              </a>
              <a href="#" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Sales & Discount
              </a>
            </div>
  
            {/* Content 3 */}
            <div className="content_3">
              <h4 className="text-white font-semibold tracking-wider mb-6 text-lg">
                EXPERIENCE
              </h4>
              <a href="./contact.html" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Contact Us
              </a>
              <a href="#" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Payment Method
              </a>
              <a href="#" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Delivery
              </a>
              <a href="#" className="block mb-4 text-[#ccc] text-sm hover:text-white">
                Return and Exchange
              </a>
            </div>
  
            {/* Content 4 */}
            <div className="content_4">
              <h4 className="text-white font-semibold tracking-wider mb-6 text-lg">
                NEWSLETTER
              </h4>
              <p className="mb-6 text-[#ccc] text-sm leading-relaxed">
                Be the first to know about new arrivals, sales & promos!
              </p>
              <div className="flex items-center bg-[#1e1f23] p-3 rounded-lg">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full px-2"
                />
                <i className="bx bx-envelope text-white text-xl"></i>
              </div>
              <hr className="border-[#ccc] mt-4" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  