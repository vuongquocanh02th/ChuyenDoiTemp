function chuyenNhietDo(val){
    val=parseFloat(val);
    document.getElementById('doC')
        .innerHTML=(val-32)/1.8;
}