document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});
function downloadExcel() {
    const table = document.getElementById("product-table");
    const workbook = XLSX.utils.table_to_book(table, {sheet: "Listado"});
    XLSX.writeFile(workbook, "listado_compras.xlsx");
}