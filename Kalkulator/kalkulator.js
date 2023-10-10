function tambah()
{
    let angka1= parseFloat(document.calculator.angka1.value);
    let angka2= parseFloat(document.calculator.angka2.value);
    let hasil= angka1+angka2;
    document.calculator.hasil.value=hasil;
}

function kurang()
{
    let angka1= parseFloat(document.calculator.angka1.value);
    let angka2= parseFloat(document.calculator.angka2.value);
    let hasil= angka1-angka2;
    document.calculator.hasil.value=hasil;
}
function bagi()
{
    let angka1= parseFloat(document.calculator.angka1.value);
    let angka2= parseFloat(document.calculator.angka2.value);
    let hasil= angka1/angka2;
    document.calculator.hasil.value=hasil;
}
function kali()
{
    let angka1= parseFloat(document.calculator.angka1.value);
    let angka2= parseFloat(document.calculator.angka2.value);
    let hasil= angka1*angka2;
    document.calculator.hasil.value=hasil;
}