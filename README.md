# Simple Yu Gi Oh! Deck Browser


### Η ανάπτυξη της εφαρμογής

Για την κατασκευή της συγκεκριμένης εφαρμογής έχουν  χρησιμοποιηθεί τεχνολογίες  scripting βασισμένες πάνω σε html, JavaScript και css. Ταυτόχρονα χρησιμοποιήθηκαν οι βιβλιοθήκες του backbone καθώς και αυτή του bootstrap. Το Backbone.js συγκεκριμένα παρέχει ένα  πιο δομημένο κώδικα γύρω από τα δεδομένα της εφαρμογής. Χρησιμοποιούνται  έννοιες όπως Models, Collections, Views, key-values observers που συντελούν σε ένα πιο ευανάγνωστο κώδικα. Τα δεδομένα μας, επιλέξαμε να αποθηκεύονται στην  Local Storage τοπικά μέσα browser του χρήστη σε μορφή json. Η LocalStorage στην ουσία είναι μια τοπική βάση δεδομένων στη μεριά του χρήστη. Αυτό σημαίνει πως τα δεδομένα για το συγκεκριμένο χρήστη είναι διαθέσιμα μόνο στον συγκεκριμένο περιηγητή διαδικτύου που χρησιμοποιεί και μόνο στο συγκεκριμένο ηλεκτρονικό υπολογιστή. Αυτός ο τρόπος αποθήκευσης επιλέχτηκε καθώς η τοπική αποθήκευση είναι αρκετά ασφαλής χωρίς να επηρεάζει την απόδοση της ιστοσελίδας μας.

Πιο συγκεκριμένα δημιουργήθηκε ένα Model για την αναπαράσταση της κάθε κάρτας, το οποίo παίρνει δυναμικά τα ορίσματα από το API στο όποιο συνδεόμαστε και αντλούμε τα δεδομένα μας. Επίσης κατασκευάστηκε μια Collection που ουσιαστικά περιέχει την συλλογή καρτών μας που είναι αποθηκευμένες στην λίστα και η οποία φορτώνεται κάθε φορά που ξεκινά η εφαρμογή. Παράλληλα έχει φτιαχτεί μια σειρά από views που χρησιμοποιούνται στην αλληλεπίδραση με τον χρηστή. Ουσιαστικά έχουμε Views για τα εξής : αναζήτηση, επιτυχής εύρεση κάρτας, μη εύρεση κάρτας, λεπτομέρειες κάρτας, λίστα καρτών, και μια μπάρα με προτεινόμενες κάρτες. 

Όσον αφορά τo framework bootstrap προσφέρει έναν εύκολο και responsive  τρόπο σχεδιασμού ιστοσελίδων. Ίσως είναι το πιο δημοφιλές HTML, CSS, και JS framework για την ανάπτυξη έργων web τα οποία είναι responsive, με στόχο τη λειτουργικότητα σε φορητές συσκευές. Έτσι η εφαρμογή μας συμπεριφέρεται εξίσου καλά σε όλα τα μεγέθη οθονών χωρίς να αλλοιώνεται το αποτέλεσμα που φτάνει στον χρήστη. Για την ανάγκη της εφαρμογής επιλέχτηκε ένα Custom Theme με συγκεκριμένες επεμβάσεις όπου κρίθηκε απαραίτητο.

### Βασικό Διάγραμμα Εφαρμογής

![Yu Gi Oh](https://github.com/thanostath13/yugi/blob/master/img/yugi_diagram.jpg "Simple Yu Gi Oh! Deck Browser diagram")

***

### Βασικές Δυνατότητες Εφαρμογής

* Αναζήτηση βάση ονόματος μιας κάρτας στο πάνω μέρος της σελίδας.
* Εμφάνιση της κάρτας που βρέθηκε της περιγραφής της, καθώς και της αντίστοιχης εικόνας.
* Κουμπί που προσθέτει την κάρτα που βρέθηκε στη τρέχουσα τράπουλα.
* Σε περίπτωση που δεν βρεθεί κάποια κάρτα με το όνομα αυτό, γίνεται εμφάνιση αντιστοίχου popover.
* Εμφάνιση τρέχουσας τράπουλας σε λίστα στο αριστερό μέρος της οθόνης. 
* Κουμπί που αφαιρεί μια κάρτα από την τρέχουσα τράπουλα.
* Εμφάνιση λεπτομερειών για κάποια κάρτα από την τρέχουσα τράπουλα στο δεξί κομμάτι της οθόνης.

### Λειτουργικότητα

* Η εφαρμογή φορτώνει την τρέχουσα τράπουλα που είναι αποθηκευμένη στη μνήμη όταν ξεκινά.
* Όταν μια κάρτα προστίθεται ή αφαιρείται από την τρέχουσα τράπουλα αποθηκεύσουμε την αλλαγή απευθείας στην μνήμη.
* Η τράπουλα δεν μπορεί να έχει πάνω από 30 κάρτες. Αν ο χρήστης υπερβεί αυτό το όριο  εμφανίζουμε αντίστοιχο μήνυμα.
* Κάθε κάρτα από την τράπουλα, έχει το σύνολο των πληροφοριών της αποθηκευμένο στη μνήμη.

***

### Στο παρακατω link μπορειται να βρειτε μια live έκδοση της συγκεκριμενης εφαρμογης

* [Simple Yu Gi Oh! Deck Browser](https://thanostath13.github.io/yugi/ "Simple Yu Gi Oh! Deck Browser")

***
