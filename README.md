# Simple Yu Gi Oh! Deck Browser

Η κατασκευή της εφαρμογής (βασικές τεχνολογίες).

Για την κατασκευή της συγκεκριμένης εφαρμογής έχουν  χρησιμοποιηθεί τεχνολογίες  scripting βασισμένες πάνω σε html, JavaScript, php, css και . Για το backend κομμάτι χρησιμοποιήθηκε η βιβλιοθήκη του backbone. Το Backbone.js  παρέχει πιο δομημένο κώδικα γύρω από τα δεδομένα της εφαρμογής. Χρησιμοποιούνται  έννοιες όπως Models, Collections, View, key-value observers. 

Πιο συγκεκριμένα δημιουργήθηκε ένα Model για την αναπαράσταση της κάθε κάρτας, το οποία παίρνει δυναμικά τα ορίσματα από το API που συνδεόμαστε και αντλούμε τα δεδομένα μας. Επίσης κατασκευάστηκε μια Collection που ουσιαστικά περιέχει την συλλογή καρτών που είναι αποθηκευμένες στην λίστα και η οποία φορτώνεται κάθε φορά που ξεκινά η εφαρμογή. Παράλληλα έχει φτιαχτεί μια σειρά από views που χρησιμοποιούνται στην αλληλεπίδραση με τον χρηστή. Ουσιαστικά έχουμε Views για τα εξής : αναζήτηση, επιτυχής εύρεση κάρτας, μη εύρεση κάρτας, λεπτομέρειες κάρτας, λίστα καρτών, και μια μπάρα με προτεινόμενες κάρτες.

Για το frontend κομμάτι επιλέχτηκε το framework του bootstrap.  To bootstrap προσφέρει έναν εύκολο τρόπο σχεδιασμού και ανάπτυξης ιστοσελίδων και παράλληλα μια responsive ανάπτυξη. Έτσι η εφαρμογή μας συμπεριφέρεται εξίσου καλά σε όλα τα μεγέθη οθονών χωρίς να αλιώνεται το αποτέλεσμα που φτάνει στον χρήστη. Για την ανάγκη της εφαρμογής επιλέχτηκε ένα Custom Theme με συγκεκριμένες επεμβάσεις όπου κρίθηκε απαραίτητο.
