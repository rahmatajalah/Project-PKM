const products = [

    {
        nama: "Daily Shirt",
        kategori: "fashion",
        harga: 89000,
        gambar: "Foto/produk1.jpg"
    },

    {
        nama: "Daily Outfit",
        kategori: "fashion",
        harga: 129000,
        gambar: "Foto/produk2.jpg"
    },

    {
        nama: "Daily Accessories",
        kategori: "aksesoris",
        harga: 59000,
        gambar: "Foto/produk3.jpg"
    }

];


const nomorWhatsApp = "6283133734577";


const productContainer =
    document.getElementById("productContainer");

const filterButtons =
    document.querySelectorAll(".filter-btn");


function formatRupiah(harga) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(harga);

}


function tampilkanProduk(data) {

    productContainer.innerHTML = "";


    if (data.length === 0) {

        productContainer.innerHTML = `
            <p>
                Produk tidak ditemukan.
            </p>
        `;

        return;
    }


    data.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");


        card.innerHTML = `

            <img
                src="${product.gambar}"
                alt="${product.nama}"
            >

            <div class="product-info">

                <h3>
                    ${product.nama}
                </h3>

                <p class="product-category">
                    ${product.kategori}
                </p>

                <p class="product-price">
                    ${formatRupiah(product.harga)}
                </p>

                <button
                    class="btn"
                    onclick="pesanProduk('${product.nama}')"
                >
                    Pesan Sekarang
                </button>

            </div>
        `;


        productContainer.appendChild(card);

    });

}


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const category =
            button.dataset.category;


        if (category === "all") {

            tampilkanProduk(products);

        } else {

            const filteredProducts =
                products.filter(product =>
                    product.kategori === category
                );

            tampilkanProduk(filteredProducts);

        }

    });

});


function pesanProduk(namaProduk) {

    const pesan =
        `Halo Dear Daily Store,%0A%0A` +
        `Saya ingin memesan produk:%0A` +
        `${namaProduk}%0A%0A` +
        `Apakah produk tersebut masih tersedia?`;

    const url =
        `https://wa.me/${nomorWhatsApp}?text=${pesan}`;

    window.open(url, "_blank");

}


const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


tampilkanProduk(products);