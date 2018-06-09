# TestAutomation
Test Automation
Proje1 -> Codeception testleri. Testlerin tamamını koşturmak için ilk başta selenium-standalone start komutu ile selenium başlatılır, daha sonra 
projenin olduğu klasöre gelinerek codeceptjs run komutu ile testler koşturulur. Default browser olarak chrome seçilmiştir. 
Firefox ile çalıştırmak için -> codeceptjs run-multiple basic:firefox komutu çalıştırışır.
Testlerin tamamını farklı iki browserda koşturmak için codeceptjs run-multiple basic komutu çalıştırılır.


Proje2-> Frisby testlerini koşturabilmek için scriptlerin içerisinde frisby'nin localde bulunduğu path verilmiştir. require('frisby') kısmının güncellenmesi gerekebilir. Testlerin koşabilmesi 
için projenin oluşturulduğu klasör içerisine config dosyası eklenmiştir. cmd'den çalıştırılırken bu config dosyasının da verilmesi gerekmektedir. Testlerin hepsinin koşturulması için 
cmd ekranına jest --config jest_config.js yazılmalıdır, testlerin koştuğu görülür. 

NOT: Frisby Test1 kısmında gelen result arrayi name anahtarına göre sıralı değildir, kontrol sıralı olmamasına göre yapılmıştır.
