
    const products = [
        { id: 1, name: "SkyPhone 15 Pro", price: 1199, cat: "Electronics", img: "https://th.bing.com/th/id/OIP.DTKszk03iz80k3gLndjhuAHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
        { id: 2, name: "First Aid Premium Kit", price: 45, cat: "Medical", img: "https://productimages.coles.com.au/productimages/5/5855833.jpg" },
        { id: 3, name: "Digital Thermometer", price: 15, cat: "Medical", img: "https://tse4.mm.bing.net/th/id/OIP.KXcWtciZSdBf5X2zydQrAgHaF7?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { id: 5, name: "SkyBasics HDMI Cable", price: 9, cat: "Basics", img: "https://pakistanstore.pk/wp-content/uploads/2023/03/Fiber-HDMI-Cable-30-Meter.jpg" },
        { id: 6, name: "Blood Pressure Monitor", price: 55, cat: "Medical", img: "https://omronhealthcare.com/images/fit=crop-50-50,fm=jpg,h=1600,w=1600/products/bp5255-hero-1200x1200.jpg?signature=86bfc407ce5dc5960b2db270bb0e561db55a2084a8c5e0822229e54ef3b6bbcf" },
        { id: 7, name: "Wireless Mouse", price: 25, cat: "Electronics", img: "https://www.maketecheasier.com/assets/uploads/2023/08/Microsoft-Bluetooth-Ergonomic-Wireless-Mouse-1-1536x570.jpg" },
        { id: 8, name: "Stethoscope", price: 113.28, cat: "Medical", img: "https://th.bing.com/th/id/OIP.jjFgNGE8A7qMoTnEKdDepwHaHa?w=187&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
        { id: 9, name: "Manual Sphygmomanometer ", price: 45, cat: "Medical", img: "https://th.bing.com/th/id/OIP.ljRSryNFR1h3jgfhyYvy2AHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
        { id: 10, name: "Infrared Non-Contact Thermometer ", price: 45, cat: "Medical", img: "https://th.bing.com/th/id/OIP.hpIGqrFro36Es9gOXQ_kIQHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
        { id: 11, name: "Fingertip Pulse Oximeter ", price: 45, cat: "Medical", img: "https://th.bing.com/th/id/OIP.lt5XOz0tWLGxY2m749DifQHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
        { id: 12, name: "Ophthalmoscope ", price: 45, cat: "Medical", img: "https://th.bing.com/th/id/OIP.LTkUHVbcpEs3LaN0ocFEzAHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
        { id: 13, name: "Otoscope (Diagnostic) ", price: 45, cat: "Medical", img: "https://th.bing.com/th/id/OIP.wfZ70Ll6URkNFQ9R_64gcwHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
        { id: 14, name: "Glucometer Kit (On Call Plus) ", price: 45, cat: "Medical", img: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/8158941/1.jpg?2669" },
    ];

    const items = [
        
        { id: 501, name: "The Romantic - Bruno Mars (Album)", price: 12.99, cat: "Music", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1OB-Y0cHWFZUh2X891serxGNBtvkHHCrnTg&s" },
        { id: 502, name: "With Heaven On Top - Zach Bryan", price: 11.99, cat: "Music", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQUrGGB9ix88K0v_KbtfXnYD4dSsFP0K3IA&s" },
        { id: 504, name: "The Art of Loving - Olivia Dean", price: 9.99, cat: "Music", img: "https://th.bing.com/th?q=Olivia+Dean+Man+City&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247" },
        ] ;

    

    let cart = [];
    let orders = [];

   
    function toggleSidebar() {
        const sb = document.getElementById('sidebar');
        const ov = document.getElementById('overlay');
        sb.classList.toggle('open');
        ov.style.display = sb.classList.contains('open') ? 'block' : 'none';
    }

    function toggleCart() {
        const cm = document.getElementById('cart-modal');
        cm.style.display = cm.style.display === 'block' ? 'none' : 'block';
        renderCart();
    }

    function closeAll() {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('cart-modal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    
    function addToCart(id) {
        const item = products.find(p => p.id === id);
        cart.push({...item});
        updateCartCount();
       
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
        updateCartCount();
    }

    function updateCartCount() {
        document.getElementById('cart-count').innerText = cart.length;
    }

    function placeOrder() {
        if (cart.length === 0) return;

        if (confirm("Confirm your order and place it now?")) {
            const timestamp = new Date();
            cart.forEach(item => {
                const order = {
                    ...item,
                    orderId: "SKY-" + Math.floor(Math.random()*90000 + 10000),
                    time: timestamp
                };
                orders.push(order);

               
                item.cat = "Today's Deals";
            });

            cart = [];
            updateCartCount();
            toggleCart();
            alert("Success! Your order has been placed.");
            filterCategory('Today\'s Deals');
        }
    }

    function cancelOrder(orderId) {
        const index = orders.findIndex(o => o.orderId === orderId);
        if (index === -1) return;

        const now = new Date();
        const diff = (now - orders[index].time) / 1000 / 60; // in minutes

        if (diff <= 15) {
            orders.splice(index, 1);
            alert("Order " + orderId + " has been cancelled.");
            filterCategory('Customer Service');
        } else {
            alert("Cancellation denied. You can only cancel within 15 minutes of placing the order.");
        }
    }

  
    function renderProducts(list) {
        const grid = document.getElementById('product-grid');
        grid.innerHTML = list.map(p => `
            <div class="card">
                <img src="${p.img || 'https://via.placeholder.com/150?text=Product'}">
                <h3>${p.name}</h3>
                <div class="price">$${p.price}</div>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `).join('');
    }

    function renderCart() {
        const list = document.getElementById('cart-items-list');
        const footer = document.getElementById('cart-footer');
        const totalDisp = document.getElementById('total-price');
        let total = 0;

        if (cart.length === 0) {
            list.innerHTML = "<p>Your cart is empty.</p>";
            totalDisp.innerText = "0";
            footer.innerHTML = "";
            return;
        }

        list.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>$${item.price} <span class="remove-btn" onclick="removeFromCart(${index})">×</span></span>
                </div>
            `;
        }).join('');

        totalDisp.innerText = total.toFixed(2);
        footer.innerHTML = `<button class="place-order-btn" onclick="placeOrder()">Place Order</button>`;
    }

    function filterCategory(cat) {
        document.getElementById('view-title').innerText = cat;
        closeAll();

        if (cat === 'Customer Service') {
            const grid = document.getElementById('product-grid');
            if (orders.length === 0) {
                grid.innerHTML = "<div style='padding:20px;'><h3>No recent orders.</h3><p>Your orders will appear here once placed.</p></div>";
            } else {
                grid.innerHTML = orders.map(o => `
                    <div class="card order-badge">
                        <div style="font-size:12px; color:gray;">Order ID: ${o.orderId}</div>
                        <h3>${o.name}</h3>
                        <div class="price">$${o.price}</div>
                        <div style="font-size:11px; margin-bottom:10px;">Placed: ${o.time.toLocaleTimeString()}</div>
                        <button class="cancel-btn" onclick="cancelOrder('${o.orderId}')">Cancel Order</button>
                    </div>
                `).join('');
            }
            return;
        }

        const filtered = (cat === 'All') ? products : products.filter(p => p.cat === cat);
        renderProducts(filtered);
    }

    function search() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const results = products.filter(p => p.name.toLowerCase().includes(query));
        renderProducts(results);
    }

    // Initial Start
    window.onload = () => renderProducts(products);
