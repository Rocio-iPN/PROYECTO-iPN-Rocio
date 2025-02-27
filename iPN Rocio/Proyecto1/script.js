document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    const mainImg = document.getElementById('MainImg');
    const thumbnail = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            let tempSrc = mainImg.src;
            mainImg.src = thumbnail.src;
            thumbnail.src = tempSrc;
        });
    });
});
function downloadExcel() {
    const table = document.getElementById("product-table");
    const workbook = XLSX.utils.table_to_book(table, {sheet: "Listado"});
    XLSX.writeFile(workbook, "listado_compras.xlsx");
}
function aplicarFiltros() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const tipo = document.getElementById('tipo').checked;

    console.log("ID:", id);
    console.log("Nombre:", nombre);
    console.log("Categoría:", categoria);
    console.log("Tipo es Producto/Artículo:", tipo);
}
function changeImage(image, product) {
    document.getElementById('mainImage').src = image;
    document.getElementById('productDetail').textContent = `Descripción de ${product}. Puedes agregar mas detalles.`;
}
 const scriptModule = document.createElement("script");
    scriptModule.type = "module";
    scriptModule.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

    const scriptNoModule = document.createElement("script");
    scriptNoModule.nomodule = true;
    scriptNoModule.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

    document.head.appendChild(scriptModule);
    document.head.appendChild(scriptNoModule);
    