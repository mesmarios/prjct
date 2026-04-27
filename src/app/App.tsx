import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ContentSection } from './components/ContentSection';
import { InfiniteCanvasSection } from './components/InfiniteCanvasSection';
import { EditorialGallerySection } from './components/EditorialGallerySection';
import archivesImg from '../assets/haavara.png';
import judea from '../assets/judeadeclareswar.png';
import boyc from '../assets/boycott1.png';
import boyc1 from '../assets/boycott2.png';
import boyc2 from '../assets/boycott3.png';
import boyc3 from '../assets/boycott4.png';
import nsdapleader from '../assets/nsdapleader.png';
import gustloffmurder from '../assets/gustloffmurder.png';
import nazissmash from '../assets/nazissmash.png';


export default function App() {
  const { scrollYProgress } = useScroll();
  const [scaleBalance, setScaleBalance] = useState(0);

  // Transform scroll progress to control statue movement
  const statueX = useTransform(scrollYProgress, [0, 0.4], ['0%', '35%']);
  const statueScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.65]);
  const statueOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 0.8, 0.5]);

  // Subtle scale micro-animation that resets to center
  useEffect(() => {
    const interval = setInterval(() => {
      setScaleBalance(Math.sin(Date.now() / 3000) * 2);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative z-10 flex flex-col items-center"
          style={{
            x: statueX,
            scale: statueScale,
            opacity: statueOpacity
          }}
        >
          <motion.div
            className="relative"
            style={{
              transform: `rotate(${scaleBalance}deg)`,
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1768839722927-df0ef3188f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsYWR5JTIwanVzdGljZSUyMHN0YXR1ZSUyMHNjYWxlcyUyMGJsaW5kZm9sZHxlbnwxfHx8fDE3NzczMDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Lady Justice holding scales"
              className="h-[70vh] w-auto object-contain grayscale contrast-110 opacity-90"
              style={{
                filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                mixBlendMode: 'luminosity'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-deep-navy)] to-[var(--color-butter-cream)]" />
          </motion.div>

          <motion.h1
            className="mt-12 text-center max-w-3xl px-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '3rem',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              opacity: 0.95
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Η ζυγαριά της δικαιοσύνης ζυγίζει την αλήθεια με το βάρος της ιστορίας
          </motion.h1>
        </motion.div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-butter-cream)] to-[var(--background)]" />
      </section>

      {/* Spacer for scroll */}
      <div className="h-32" />

      {/* Content Sections */}
      <ContentSection
        title="Η Συμφωνία Μεταφοράς «Haavara»"
        content="Η ναζιστική Γερμανία, για γεωπολιτικούς και προπαγανδιστικούς λόγους, επιδίωκε καλές σχέσεις με τον αραβικό κόσμο (ειδικά με τους Παλαιστίνιους Άραβες, αλλά και με χώρες όπως η Ιράκ, η Συρία, η Αίγυπτος), ελπίζοντας είτε να τους στρέψει εναντίον των Βρετανών και των Γάλλων αποικιοκρατών είτε να εξασφαλίσει πρόσβαση σε πετρέλαιο και στρατηγικές θέσεις.

        Η συμφωνία Haavara, όμως, βοηθούσε άμεσα την εβραϊκή μετανάστευση και αποικισμό στην Παλαιστίνη — κάτι που οι Άραβες ηγέτες και ο πληθυσμός της περιοχής θεωρούσαν απειλή για τα εθνικά και εδαφικά τους συμφέροντα.

        Έτσι, η «δυσαρέσκεια του αραβικού κόσμου» σημαίνει: Οι Ναζί γνώριζαν ότι η Haavara θα προκαλούσε θυμό, καχυποψία ή εχθρότητα από τους Άραβες απέναντι στη Γερμανία, επειδή η Γερμανία βοηθούσε τους Σιωνιστές εναντίον τους. Αυτό ήταν πρόβλημα για τον Χίτλερ, καθώς ήθελε να έχει τους Άραβες συμμάχους ή τουλάχιστον ουδέτερους.

        Παρόλα αυτά, όπως τονίζει το κείμενο, ο Χίτλερ αποφάσισε τρεις φορές (1937-38) να συνεχίσει τη Haavara, γιατί ο στόχος της απομάκρυνσης των Εβραίων από τη Γερμανία ήταν σημαντικότερος από το διπλωματικό κόστος των τεταμένων σχέσεων με τους Άραβες. "

        
        imageSrc={archivesImg}
        imageAlt="Historical legal documents"
      />

      <ContentSection
        title="Judea declares war"
        content="υπήρχε ταυτόχρονη συνεργασία και εχθρότητα. Από τη μία, η Συμφωνία Haavara (1933-1939) ήταν κρατική συμφωνία μεταξύ ναζιστικής Γερμανίας και σιωνιστικών φορέων, η οποία εξυπηρέτησε τη μετανάστευση 50.000-60.000 Εβραίων και τη μεταφορά κεφαλαίων στην Παλαιστίνη. Από την άλλη, η πλειοψηφία του παγκόσμιου εβραϊσμού, και επισήμως η σιωνιστική ηγεσία μετά το 1939, αντιτάχθηκε στρατιωτικά και πολιτικά στο ναζιστικό καθεστώς.
        Ο Βάιτσμαν δεν είχε την εξουσία να κηρύξει πόλεμο εξ ονόματος «των Εβραίων του κόσμου» ως κρατική οντότητα. Πρόκειται για ρητορική δέσμευση πολιτικής και ηθικής υποστήριξης, καθώς και για προσφορά πρακτικής βοήθειας (ανθρώπινο δυναμικό, τεχνική εμπειρία, οικονομικούς πόρους). Ουσιαστικά, ήταν μια διακήρυξη ότι το σιωνιστικό κίνημα τάσσεται με τις συμμαχικές δυνάμεις.
        Ο Βάιτσμαν, ως πρόεδρος της Παγκόσμιας Σιωνιστικής Οργάνωσης και της Εβραϊκής Υπηρεσίας, έστειλε επιστολή στον Βρετανό πρωθυπουργό Νέβιλ Τσάμπερλεν, διαβεβαιώνοντάς τον ότι οι Εβραίοι της Παλαιστίνης και οι Εβραίοι παγκοσμίως θα σταθούν στο πλευρό της Βρετανίας στον πόλεμο κατά της Γερμανίας. Η φράση «οι Εβραίοι συμπαρατάσσονται με τη Μεγάλη Βρετανία και θα πολεμήσουν στο πλευρό των δημοκρατιών» αποδίδεται πράγματι σε αυτή την επιστολή ή σε δηλώσεις του εκείνη την περίοδο.
        Ήδη από τις 24 Μαρτίου 1933, ο Παγκόσμιος Εβραϊσμός είχε κηρύξει πόλεμο κατά της Γερμανίας. Παρά τις καλύτερες προσπάθειες των Ναζί να συνεργαστούν με τους Σιωνιστές, οι οποίοι επίσης επιδίωκαν την απομάκρυνση των Εβραίων από τη Γερμανία, η γερμανική κυβέρνηση θεωρούσε τον εβραϊκό πληθυσμό ανατρεπτικό και δικαιολογούσε τη φυσική τους εκδίωξη επικαλούμενη ανακοινώσεις όπως αυτή."
        
        imageSrc={judea}
        imageAlt="Archival testimony records"
        reverse
      />

      <ContentSection
        title="BOYCOTT"
        content="Η ανακοίνωση αυτή επαναλήφθηκε με πρωτοσέλιδους τίτλους σε πολλές εφημερίδες της εποχής. Ο Παγκόσμιος Εβραϊσμός δήλωσε έτσι τον εαυτό του ως εμπόλεμο μέρος στον Δεύτερο Παγκόσμιο Πόλεμο, και ως εκ τούτου υπήρχε επαρκής βάση σύμφωνα με το διεθνές δίκαιο για τους Γερμανούς να θέσουν υπό κράτηση τον εβραϊκό πληθυσμό ως εχθρική δύναμη. Σε απάντηση αυτών των εκστρατειών, η Εθνικοσοσιαλιστική κυβέρνηση οργάνωσε το δικό της μποϊκοτάζ των εβραϊκών επιχειρήσεων εντός της Γερμανίας.
Αυτές οι εικόνες παρουσιάζονται τις περισσότερες φορές χωρίς να εξηγείται ότι ήταν αντιδράσεις στο εβραϊκής προέλευσης μποϊκοτάζ που περιγράφηκε παραπάνω.Μια μαζική συγκέντρωση Εβραίων στη Νέα Υόρκη, το 1933, που ζητούσε μποϊκοτάζ της Γερμανίας."
        imageSrc={boyc}
        imageAlt="Legal framework documents"
      />

      <ContentSection
        title="Daily Express"
        content="Το οργανωμένο εβραϊκό μποϊκοτάζ ανακοινώνεται στο Λονδίνο, το 1933, χρησιμοποιώντας τον ίδιο τίτλο όπως και στην Daily Express."
        imageSrc={boyc1}
        imageAlt="Historical timeline"
        reverse
      />

      <ContentSection
        title="Διαφήμιση των Αμερικανών Εβραίων"
        content="Διαφήμιση των Αμερικανών Εβραίων Βετεράνων Πολέμου που καλεί σε μποϊκοτάζ της Γερμανίας, 1933. Το μποϊκοτάζ ξεκίνησε τον Μάρτιο του 1933 τόσο στην Ευρώπη όσο και στις ΗΠΑ και συνεχίστηκε μέχρι την είσοδο των ΗΠΑ στον πόλεμο."
        imageSrc={boyc2}
        imageAlt="Historical timeline"
      />

      <ContentSection
        title="Το ναζιστικό μποϊκοτάζ των εβραϊκών επιχειρήσεων"
        content="Το ναζιστικό μποϊκοτάζ των εβραϊκών επιχειρήσεων στη Γερμανία ήταν, σε αντίθεση με το εβραϊκό μποϊκοτάζ της Γερμανίας, ένα μονοήμερο γεγονός που πραγματοποιήθηκε την 1η Απριλίου 1933. Εικόνες όπως αυτές παρουσιάζονται πάντα χωρίς την εξήγηση ότι το ναζιστικό μποϊκοτάζ ήταν απλώς μια αντίδραση στα διεθνή εβραϊκά μέτρα που εφαρμόζονταν αλλού στον κόσμο."
        imageSrc={boyc3}
        imageAlt="Historical timeline"
        reverse
      />

      <InfiniteCanvasSection />

      <EditorialGallerySection
        heading="Archive Notes and Visual Evidence"
        subheading="This block is a second storytelling style under the infinite canvas. Add or edit cards from the items array in App.tsx to keep extending your narrative."
        items={[
          {
            id: 'note-01',
            eyebrow: 'Document Cluster',
            title: 'Ο ηγέτης του NSDAP στην Ελβετία, Βίλχελμ Γκούστλοφ, δολοφονημένος από τον Εβραίο Ντέιβιντ Φράνκφουρτερ, δεξιά',
            body: 'Η πρώτη δολοφονία συνέβη στις 4 Φεβρουαρίου 1936, όταν ο Εβραίος Ντέιβιντ Φράνκφουρτερ πυροβόλησε μέχρι θανάτου τον Βίλχελμ Γκούστλοφ, τον Γερμανό ηγέτη του Ναζιστικού Κόμματος στην Ελβετία. Η δολοφονία του Γκούστλοφ προκάλεσε οργή στη Γερμανία, και στην κηδεία του παρευρέθηκαν δεκάδες χιλιάδες πενθούντες, συμπεριλαμβανομένων των Χίτλερ, Γκέμπελς, Γκέρινγκ, Χίμλερ και του Γερμανού υπουργού Εξωτερικών Γιοαχίμ φον Ρίμπεντροπ. Ο Γκούστλοφ ανακηρύχθηκε ναζιστικός Blutzeuge (μάρτυρας) και ένα μεγάλο πλοίο πήρε το όνομά του.',
            imageSrc: nsdapleader,
            imageAlt: 'Archival transfer document',
          },
          {
            id: 'note-02',
            eyebrow: 'Press Material',
            title: 'Ο Γερμανός διπλωμάτης στο Παρίσι, Ερνστ φομ Ρατ, δολοφονημένος από τον Εβραίο Χέρσελ Γκρίνσπαν, δεξιά.',
            body: 'Η οργή του γερμανικού κοινού για τη δολοφονία Γκούστλοφ είχε μόλις υποχωρήσει όταν ο Εβραίος Χέρσελ Γκρίνσπαν δολοφόνησε τον Γερμανό διπλωμάτη Ερνστ φομ Ρατ εντός της γερμανικής πρεσβείας στο Παρίσι στις 7 Νοεμβρίου 1938.',
            imageSrc: gustloffmurder,
            imageAlt: 'Historic headline board',
          },
          {
            id: 'note-03',
            eyebrow: 'Visual Record',
            title: 'Ναζί και Σιωνιστές πριν τον Πόλεμο',
            body: 'Όταν η είδηση της δεύτερης δολοφονίας έφτασε στη Γερμανία, οργισμένα πλήθη βγήκαν στους δρόμους σε ολόκληρη τη Γερμανία και επιτέθηκαν σε εβραϊκά καταστήματα και συναγωγές.'+

            'Η σφοδρότητα της αντίδρασης αιφνιδίασε την ηγεσία της Γερμανίας, και οι επιθέσεις σταμάτησαν μόνο αφού ο Γκέμπελς εξέδωσε δημόσια διαταγή να σταματήσει η βία, όπως αναφέρθηκε στους New York Times της 11ης Νοεμβρίου 1938.' +

            'Η ίδια εφημερίδα ανέφερε επίσης ότι οι επιθέσεις ήταν «εκδίκηση» για τη δολοφονία του φομ Ρατ.',
            imageSrc: nazissmash,
            imageAlt: 'Crowd and protest visuals',
          },
          {
            id: 'note-04',
            eyebrow: 'Comparative View',
            title: 'Ναζί και Σιωνιστές πριν τον Πόλεμο',
            body: 'Ακόμη και οι New York Times παραδέχτηκαν στο ρεπορτάζ τους για τα γεγονότα της Kristallnacht ότι ο Γκέμπελς και η ναζιστική ηγεσία ήταν εκείνοι που σταμάτησαν τη βία. Το γεγονός αυτό αγνοείται πάντα από τους αφηγητές του Ολοκαυτώματος.',
            imageSrc: nazissmash,
            imageAlt: 'Comparative archival collage',
          },
        ]}
      />

      {/* Footer */}
      <footer className="py-24 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p
            className="opacity-50"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              letterSpacing: '0.05em'
            }}
          >
            Research Archive · Historical Justice Initiative
          </p>
        </div>
      </footer>
    </div>
  );
}
