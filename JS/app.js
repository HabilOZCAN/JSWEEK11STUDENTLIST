/**
 * Bu programda kullancının formdan girmiş olduğu öğrenci bilgileri kontrol edilerek öğrenci listesine eklenmektedir.
 * Unique key olarak öğrenci numarası kullanılmıştır.
 * age ve öğrenci numarası sıfırdan küçük olamaz
 * isim ve soyisimde özel karakter ve numaara kullanılamaz.
 */


elementrem = document.getElementsByClassName("student-list")[0]; // to remove or reduce the product from the shopping cart and manupulate HTML file `elementrem' "handle" is used.
elementrem.addEventListener("click", function (pEvent) {
    deleteStudentInfo(pEvent)
});

const addButton = document.getElementById('add-button');
addButton.addEventListener("click", function () {
    addStudents()
});