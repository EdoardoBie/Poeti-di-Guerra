import { TimelineEvent, PoemFragment, TranslationData } from './types';

export const COLORS = {
  bg: '#0F0F0F',
  ivory: '#E6E4D5',
  red: '#5C1919', // Oxidized red
  redBright: '#8A1C1C',
  gray: '#4A4A4A',
  annaBlue: '#2C3E50', // Slate blue for Akhmatova
};

export const UI_TEXT = {
  en: {
    hero: {
      logic: "THE LOGIC",
      fog: "OF FOG",
      subtitle: "Parallel Histories",
      scroll: "SCROLL TO SYNC",
      chenRole: "NINE LEAVES • CHINA",
      annaRole: "SILVER AGE • RUSSIA"
    },
    manifesto: {
      title: "The Aesthetics of Ruin",
      words: ["BOMBING", "SURVIVAL", "FRAGMENTATION"],
      text: "War does not just destroy buildings; it dismantles language. Chen Jingrong wrote not to record history, but to salvage the human soul from its wreckage. Her modernism is a scar map—a jagged geography of resistance against the silence imposed by bombs and ideologies."
    },
    silence: {
      label: "SECTION: WAR AND SILENCE",
      instruction: "INSTRUCTION: BE STILL TO READ",
      detected: "[ Movement detected. The censor is watching. ]",
      poem: `"The logic of fog is the logic of survival. \nWhen the city burns, we become ash.\nWhen the mouth is covered, the eyes scream."`,
      title: "—— 雾的逻辑 (The Logic of Fog)"
    },
    timeline: {
      title: "FRACTURED TIME",
      desc: "The timeline is not linear. It is a debris field of memory.\nDrag the fragments to reorganize the past."
    },
    censorship: {
        text: "In the era of noise, silence is the loudest scream. We hide our hearts in the cellars of language, waiting for the bombing to stop. But the sky is always burning.",
        stamp: "CENSORED",
        record: "Official Record: #1948-B",
        status: "Status: RESTRICTED",
        interaction: "INTERACTION REQUIRED: HOVER TO DECLASSIFY",
        recovered: "WORDS RECOVERED"
    },
    echoes: {
        title: "Echoes across Empires",
        subtitle: "Beijing Fog / Leningrad Ice",
        centerTitle: "Sisters in Trauma",
        centerText: "Chen Jingrong and Anna Akhmatova never met, yet they share the same spiritual geography. Both refused to emigrate when their countries convulsed. Both witnessed the arrest of their closest peers. Both wrote poetry not as decoration, but as a record of enduring human dignity against the machinery of the state.",
        instruction: "< MOVE CURSOR TO EXPLORE >"
    },
    archive: {
        title: "ARCHIVE",
        subtitle: "SELECTED WORKS",
        end: "END"
    },
    footer: {
        tribute: "A digital tribute to the resilience of poetry in the face of history.",
        scroll: "SCROLL TO TOP TO REASSEMBLE"
    },
    fog: {
        move: "MOVE TO CLEAR THE FOG",
        lost: "LOST",
        coords: "Coordinates unknown. The map is burned.",
        war: "WAR",
        quote1: "\"The fog is not weather.",
        quote2: "It is history.\"",
        question: "Where are the nine leaves?"
    },
    signal: {
        drag: "DRAG HORIZONTALLY TO TUNE THE HISTORICAL FREQUENCY",
        receiving_sichuan: "RECEIVING: SICHUAN",
        receiving_leningrad: "RECEIVING: LENINGRAD",
        interference: "/// CRITICAL SIGNAL INTERFERENCE ///"
    },
    phonograph: {
        text: "THE CYCLICAL NATURE OF SUPPRESSION"
    }
  },
  it: {
    hero: {
      logic: "LA LOGICA",
      fog: "DELLA NEBBIA",
      subtitle: "Storie Parallele",
      scroll: "SCORRI PER SINCRONIZZARE",
      chenRole: "NOVE FOGLIE • CINA",
      annaRole: "ETÀ D'ARGENTO • RUSSIA"
    },
    manifesto: {
      title: "L'Estetica della Rovina",
      words: ["BOMBARDAMENTO", "SOPRAVVIVENZA", "FRAMMENTAZIONE"],
      text: "La guerra non distrugge solo gli edifici; smantella il linguaggio. Chen Jingrong non scriveva per registrare la storia, ma per salvare l'anima umana dalle sue macerie. Il suo modernismo è una mappa di cicatrici—una geografia frastagliata di resistenza contro il silenzio imposto dalle bombe e dalle ideologie."
    },
    silence: {
      label: "SEZIONE: GUERRA E SILENZIO",
      instruction: "ISTRUZIONE: RIMANI IMMOBILE PER LEGGERE",
      detected: "[ Movimento rilevato. Il censore sta guardando. ]",
      poem: `"La logica della nebbia è la logica della sopravvivenza. \nQuando la città brucia, diventiamo cenere.\nQuando la bocca è coperta, gli occhi urlano."`,
      title: "—— 雾的逻辑 (La Logica della Nebbia)"
    },
    timeline: {
      title: "TEMPO FRATTURATO",
      desc: "La linea temporale non è lineare. È un campo di detriti della memoria.\nTrascina i frammenti per riorganizzare il passato."
    },
    censorship: {
        text: "Nell'era del rumore, il silenzio è l'urlo più forte. Nascondiamo i nostri cuori nelle cantine del linguaggio, aspettando che i bombardamenti finiscano. Ma il cielo brucia sempre.",
        stamp: "CENSURATO",
        record: "Registro Ufficiale: #1948-B",
        status: "Stato: RISTRETTO",
        interaction: "INTERAZIONE RICHIESTA: PASSA SOPRA PER DECLASSIFICARE",
        recovered: "PAROLE RECUPERATE"
    },
    echoes: {
        title: "Echi attraverso gli Imperi",
        subtitle: "Nebbia di Pechino / Ghiaccio di Leningrado",
        centerTitle: "Sorelle nel Trauma",
        centerText: "Chen Jingrong e Anna Akhmatova non si sono mai incontrate, eppure condividono la stessa geografia spirituale. Entrambe si rifiutarono di emigrare mentre i loro paesi erano sconvolti. Entrambe assistettero all'arresto dei loro pari. Entrambe scrissero poesia non come decorazione, ma come registro della dignità umana contro la macchina dello stato.",
        instruction: "< MUOVI IL CURSORE PER ESPLORARE >"
    },
    archive: {
        title: "ARCHIVIO",
        subtitle: "OPERE SELEZIONATE",
        end: "FINE"
    },
    footer: {
        tribute: "Un tributo digitale alla resilienza della poesia di fronte alla storia.",
        scroll: "SCORRI IN ALTO PER RIASSEMBLARE"
    },
    fog: {
        move: "MUOVITI PER DIRADARE LA NEBBIA",
        lost: "PERSO",
        coords: "Coordinate sconosciute. La mappa è bruciata.",
        war: "GUERRA",
        quote1: "\"La nebbia non è meteo.",
        quote2: "È storia.\"",
        question: "Dove sono le nove foglie?"
    },
    signal: {
        drag: "TRASCINA ORIZZONTALMENTE PER SINTONIZZARE LA FREQUENZA STORICA",
        receiving_sichuan: "RICEZIONE: SICHUAN",
        receiving_leningrad: "RICEZIONE: LENINGRADO",
        interference: "/// INTERFERENZA SEGNALE CRITICA ///"
    },
    phonograph: {
        text: "LA NATURA CICLICA DELLA SOPPRESSIONE"
    }
  }
};

export const TIMELINE_EVENTS = {
  en: [
    { id: 't1', year: '1917', content: 'Born in Sichuan. The old world is collapsing.', theme: 'art', x: 10, y: 20 },
    { id: 't2', year: '1932', content: 'Beijing. The city walls are silent witnesses.', theme: 'art', x: 30, y: 50 },
    { id: 't3', year: '1937', content: 'War breaks out. Poetry becomes a weapon of survival.', theme: 'war', x: 60, y: 15 },
    { id: 't4', year: '1948', content: 'The "Nine Leaves" gather. Western modernism meets Chinese dust.', theme: 'art', x: 80, y: 40 },
    { id: 't5', year: '1957', content: 'Silence falls. The pen is broken.', theme: 'silence', x: 20, y: 80 },
    { id: 't6', year: '1966', content: 'Lost decades. A translator of shadows.', theme: 'silence', x: 50, y: 90 },
    { id: 't7', year: '1989', content: 'Departure. The fog lifts, leaving only words.', theme: 'art', x: 85, y: 70 },
  ],
  it: [
    { id: 't1', year: '1917', content: 'Nata nel Sichuan. Il vecchio mondo sta crollando.', theme: 'art', x: 10, y: 20 },
    { id: 't2', year: '1932', content: 'Pechino. Le mura della città sono testimoni silenziosi.', theme: 'art', x: 30, y: 50 },
    { id: 't3', year: '1937', content: 'Scoppia la guerra. La poesia diventa arma di sopravvivenza.', theme: 'war', x: 60, y: 15 },
    { id: 't4', year: '1948', content: 'Si riuniscono le "Nove Foglie". Il modernismo occidentale incontra la polvere cinese.', theme: 'art', x: 80, y: 40 },
    { id: 't5', year: '1957', content: 'Cala il silenzio. La penna è spezzata.', theme: 'silence', x: 20, y: 80 },
    { id: 't6', year: '1966', content: 'Decenni perduti. Una traduttrice di ombre.', theme: 'silence', x: 50, y: 90 },
    { id: 't7', year: '1989', content: 'Partenza. La nebbia si alza, lasciando solo parole.', theme: 'art', x: 85, y: 70 },
  ]
};

export const PARALLEL_LIVES = {
  en: [
    {
        id: 'origins',
        title: 'THE AWAKENING',
        dates: '1910s — 1920s',
        chen: {
          location: 'Sichuan / Beijing',
          text: 'Chen Jingrong emerges from the collapse of Imperial China, finding her voice in the misty rivers of Sichuan. She absorbs the aesthetics of Rilke and Baudelaire, seeking a language that can hold the fracture of modernity. Her early work reflects a solitude that is not emptiness, but a crowded waiting room for history.',
          quote: 'I collect the fragments of dusk.'
        },
        anna: {
          location: 'St. Petersburg (Leningrad)',
          text: 'Anna Akhmatova (born Gorenko) defines the "Silver Age" of Russian poetry. A queen of Acmeism, she demands clarity and earthly substance in poetry, rejecting Symbolist mysticism. She is the toast of the Stray Dog Café, a striking figure of elegance before the 1917 Revolution turns the sky red and the Neva river black.',
          quote: 'I taught women to speak... but, Lord, how to silence them?'
        }
      },
      {
        id: 'terror',
        title: 'THE TERROR',
        dates: '1930s — 1940s',
        chen: {
          location: 'Wartime China',
          text: 'Japanese bombers fly over. Chen writes "Symphony of Confusion." The "Nine Leaves" school forms in 1948—not as political propaganda, but as a defense of the individual soul against the collective scream. They publish "The China New Poetry", blending Western modernism with the harsh reality of civil war.',
          quote: 'The logic of fog covers the logic of iron.'
        },
        anna: {
          location: 'Stalinist Russia',
          text: 'The Great Purge. Her first husband, Gumilyov, is executed (1921). Her son, Lev, is arrested repeatedly. Akhmatova stands for 17 months in prison lines outside Kresty Prison. She composes "Requiem" in her mind, whispering verses to friends who memorize and burn them immediately. She becomes the voice of a silenced nation.',
          quote: 'Can you describe this? And I said: I can.'
        }
      },
      {
        id: 'guest',
        title: 'THE ENCOUNTER',
        dates: '1945 — 1946',
        chen: {
           location: 'Shanghai',
           text: 'In the brief interlude between wars, Chen edits "Poetry Creation" (Shi Chuangzao). She introduces Rilke’s "Letters to a Young Poet" to Chinese readers, arguing for the sanctity of the inner life just as the external world prepares to demand total conformity.',
           quote: 'To perceive is to resist.'
        },
        anna: {
           location: 'Fontanny Dom',
           text: 'The "Guest from the Future." Isaiah Berlin visits her in Leningrad. They talk until dawn, bridging the gap between Soviet isolation and Western thought. This meeting provokes Stalin’s wrath ("our nun is receiving foreign spies"). It leads to the 1946 Zhdanov Decree, effectively banning her work and sealing her in poverty.',
           quote: 'There is a certain hour... when the past meets the future.'
        }
      },
      {
        id: 'silence',
        title: 'THE SILENCE',
        dates: '1950s — 1970s',
        chen: {
          location: 'The Anti-Rightist Campaign',
          text: '1957. The poets are silenced. Labeled a "Rightist," Chen is forced to stop publishing her own work. She becomes a "translator," hiding her voice behind the words of Victor Hugo and Andersen. For decades, her own verses collect dust in a drawer, surviving only in memory.',
          quote: '[Redacted by History]'
        },
        anna: {
          location: 'Post-War USSR',
          text: 'Expelled from the Writers\' Union, labeled "half nun, half harlot." She lives in scarce conditions, translating works to survive. Yet, she remains the secret spiritual center of Russia. Young poets like Brodsky gather around her (the "Magic Choir"), learning that dignity is the only currency that matters.',
          quote: 'I am not with those who abandoned their land.'
        }
      },
      {
        id: 'legacy',
        title: 'THE RESURRECTION',
        dates: 'The Aftermath',
        chen: {
          location: 'Modern China',
          text: 'Rediscovered in the 1980s. Her "traumatic modernism" speaks to a new generation who understand that history is not a straight line, but a cycle of breaking and healing. She passes away in 1989, leaving a legacy of quiet, iron-hard resistance.',
          quote: 'The night passenger has finally arrived.'
        },
        anna: {
          location: 'Global Memory',
          text: 'Rehabilitated near death. "Requiem" is published in Russia only in 1987. She stands today not just as a poet, but as a monument to human endurance. Her profile—the hooked nose, the fringe—is the icon of the unconquered poet.',
          quote: 'No, not under the vault of alien skies...'
        }
      }
  ],
  it: [
    {
        id: 'origins',
        title: 'IL RISVEGLIO',
        dates: '1910s — 1920s',
        chen: {
          location: 'Sichuan / Pechino',
          text: 'Chen Jingrong emerge dal crollo della Cina Imperiale, trovando la sua voce nei fiumi nebbiosi del Sichuan. Assorbe l\'estetica di Rilke e Baudelaire, cercando un linguaggio capace di contenere la frattura della modernità. Il suo primo lavoro riflette una solitudine che non è vuoto, ma una sala d\'attesa affollata per la storia.',
          quote: 'Colleziono i frammenti del crepuscolo.'
        },
        anna: {
          location: 'San Pietroburgo (Leningrado)',
          text: 'Anna Akhmatova (nata Gorenko) definisce l\'"Età d\'Argento" della poesia russa. Regina dell\'Acmeismo, esige chiarezza e sostanza terrena nella poesia, rifiutando il misticismo simbolista. È la stella del Stray Dog Café, una figura di sorprendente eleganza prima che la Rivoluzione del 1917 tinga il cielo di rosso e il fiume Neva di nero.',
          quote: 'Ho insegnato alle donne a parlare... ma, Dio, come farle tacere?'
        }
      },
      {
        id: 'terror',
        title: 'IL TERRORE',
        dates: '1930s — 1940s',
        chen: {
          location: 'Cina in Guerra',
          text: 'I bombardieri giapponesi sorvolano. Chen scrive "Sinfonia della Confusione". La scuola "Nove Foglie" si forma nel 1948—non come propaganda politica, ma come difesa dell\'anima individuale contro l\'urlo collettivo. Pubblicano "The China New Poetry", fondendo il modernismo occidentale con la dura realtà della guerra civile.',
          quote: 'La logica della nebbia copre la logica del ferro.'
        },
        anna: {
          location: 'Russia Stalinista',
          text: 'La Grande Purga. Il suo primo marito, Gumilyov, viene giustiziato (1921). Suo figlio, Lev, viene arrestato ripetutamente. Akhmatova sta per 17 mesi in fila fuori dalla prigione di Kresty. Compone "Requiem" nella sua mente, sussurrando versi agli amici che li memorizzano e li bruciano immediatamente. Diventa la voce di una nazione messa a tacere.',
          quote: 'Puoi descrivere questo? E io dissi: Posso.'
        }
      },
      {
        id: 'guest',
        title: 'L\'INCONTRO',
        dates: '1945 — 1946',
        chen: {
           location: 'Shanghai',
           text: 'Nella breve pausa tra le guerre, Chen dirige "Poetry Creation" (Shi Chuangzao). Introduce le "Lettere a un giovane poeta" di Rilke ai lettori cinesi, argomentando per la sacralità della vita interiore proprio mentre il mondo esterno si prepara a richiedere conformità totale.',
           quote: 'Percepire è resistere.'
        },
        anna: {
           location: 'Fontanny Dom',
           text: 'L\'"Ospite dal Futuro". Isaiah Berlin la visita a Leningrado. Parlano fino all\'alba, colmando il divario tra l\'isolamento sovietico e il pensiero occidentale. Questo incontro provoca l\'ira di Stalin ("la nostra suora riceve spie straniere"). Porta al Decreto Zhdanov del 1946, bandendo di fatto il suo lavoro e sigillandola nella povertà.',
           quote: 'C\'è una certa ora... quando il passato incontra il futuro.'
        }
      },
      {
        id: 'silence',
        title: 'IL SILENZIO',
        dates: '1950s — 1970s',
        chen: {
          location: 'Campagna Anti-Destra',
          text: '1957. I poeti vengono messi a tacere. Etichettata come "di destra", Chen è costretta a smettere di pubblicare il proprio lavoro. Diventa una "traduttrice", nascondendo la sua voce dietro le parole di Victor Hugo e Andersen. Per decenni, i suoi versi raccolgono polvere in un cassetto, sopravvivendo solo nella memoria.',
          quote: '[Redatto dalla Storia]'
        },
        anna: {
          location: 'URSS Dopoguerra',
          text: 'Espulsa dall\'Unione degli Scrittori, etichettata "metà suora, metà sgualdrina". Vive in condizioni precarie, traducendo opere per sopravvivere. Tuttavia, rimane il centro spirituale segreto della Russia. Giovani poeti come Brodskij si riuniscono attorno a lei (il "Coro Magico"), imparando che la dignità è l\'unica valuta che conta.',
          quote: 'Non sono con coloro che hanno abbandonato la loro terra.'
        }
      },
      {
        id: 'legacy',
        title: 'LA RESURREZIONE',
        dates: 'Il Dopoguerra',
        chen: {
          location: 'Cina Moderna',
          text: 'Riscoperta negli anni \'80. Il suo "modernismo traumatico" parla a una nuova generazione che capisce che la storia non è una linea retta, ma un ciclo di rottura e guarigione. Muore nel 1989, lasciando un\'eredità di resistenza silenziosa e dura come il ferro.',
          quote: 'Il passeggero notturno è finalmente arrivato.'
        },
        anna: {
          location: 'Memoria Globale',
          text: 'Riabilitata vicino alla morte. "Requiem" viene pubblicato in Russia solo nel 1987. Oggi si erge non solo come poeta, ma come monumento alla resistenza umana. Il suo profilo—il naso aquilino, la frangia—è l\'icona del poeta non conquistato.',
          quote: 'No, non sotto la volta di cieli alieni...'
        }
      }
  ]
};

export const POEMS = {
  en: {
    chen: {
        title: "BEIJING FREQUENCY",
        lines: [
            "The fog has its own logic,",
            "It swallows the iron birds,",
            "We are small dust,",
            "Dancing in a beam of censored light."
        ]
    },
    anna: {
        title: "LENINGRAD FREQUENCY",
        lines: [
            "The ice has its own memory,",
            "It preserves the silent scream,",
            "I am the wild honey,",
            "And the black earth combined."
        ]
    },
    merged: {
        title: "SIGNAL INTERFERENCE",
        lines: [
            "THE FOG HAS MEMORY",
            "IRON BIRDS SCREAM SILENTLY",
            "WE ARE WILD DUST",
            "DANCING ON BLACK EARTH"
        ]
    }
  },
  it: {
    chen: {
        title: "FREQUENZA PECHINO",
        lines: [
            "La nebbia ha la sua logica,",
            "Inghiotte gli uccelli di ferro,",
            "Siamo piccola polvere,",
            "Che danza in un raggio di luce censurata."
        ]
    },
    anna: {
        title: "FREQUENZA LENINGRADO",
        lines: [
            "Il ghiaccio ha la sua memoria,",
            "Preserva l'urlo silenzioso,",
            "Io sono il miele selvatico,",
            "E la terra nera combinati."
        ]
    },
    merged: {
        title: "INTERFERENZA SEGNALE",
        lines: [
            "LA NEBBIA HA MEMORIA",
            "UCCELLI DI FERRO URLANO IN SILENZIO",
            "SIAMO POLVERE SELVAGGIA",
            "CHE DANZA SULLA TERRA NERA"
        ]
    }
  }
};

export const TRANSLATION_SAMPLE = {
  en: {
    commentary: 'Chen implies that in a chaotic world, the only logic is the persistence of suffering and the resilience of the soul.',
    chinese: '逻辑',
    pinyin: 'Luóji',
    english: 'Logic',
    desc: "In translation, meaning is both lost and found. Hover over the text to bridge the gap between East and West, between the unspoken and the spoken.",
    title: "Translation / Metamorphosis"
  },
  it: {
    commentary: 'Chen implica che in un mondo caotico, l\'unica logica è la persistenza della sofferenza e la resilienza dell\'anima.',
    chinese: '逻辑',
    pinyin: 'Luóji',
    english: 'Logica',
    desc: "Nella traduzione, il significato è sia perso che trovato. Passa sopra il testo per colmare il divario tra Oriente e Occidente, tra il non detto e il detto.",
    title: "Traduzione / Metamorfosi"
  }
};

export const ARCHIVE_WORKS = {
  en: [
    { title: "Symphony of Confusion", year: "1946", type: "Poetry Collection" },
    { title: "The Logic of Logic", year: "1948", type: "Essay" },
    { title: "Flowers of Evil (Baudelaire)", year: "1950s", type: "Translation" },
    { title: "Tales of Andersen", year: "1950s", type: "Translation" },
    { title: "Parasite", year: "1947", type: "Poem" },
    { title: "Night Passenger", year: "1980s", type: "Anthology" },
  ],
  it: [
    { title: "Sinfonia della Confusione", year: "1946", type: "Collezione Poetica" },
    { title: "La Logica della Logica", year: "1948", type: "Saggio" },
    { title: "I Fiori del Male (Baudelaire)", year: "1950s", type: "Traduzione" },
    { title: "Fiabe di Andersen", year: "1950s", type: "Traduzione" },
    { title: "Parassita", year: "1947", type: "Poesia" },
    { title: "Passeggero Notturno", year: "1980s", type: "Antologia" },
  ]
};

export const ECHOES_TEXT = {
  en: {
     chen: {
        name1: "Chen",
        name2: "Jingrong",
        quote: "\"We divide the night,\nbut the night is endless.\"",
        loc: "Location: Beijing",
        era: "Era: The Nine Leaves (1940s)",
        fate: "Fate: Silenced by ideology"
     },
     anna: {
        name1: "Anna",
        name2: "Akhmatova",
        quote: "\"I have learned how faces fall apart,\nHow fear looks out from under the eyelids.\"",
        loc: "Location: St. Petersburg",
        era: "Era: The Silver Age (1910s-60s)",
        fate: "Fate: The \"Guest of Stone\""
     }
  },
  it: {
     chen: {
        name1: "Chen",
        name2: "Jingrong",
        quote: "\"Dividiamo la notte,\nma la notte è infinita.\"",
        loc: "Posizione: Pechino",
        era: "Era: Nove Foglie (1940s)",
        fate: "Destino: Silenziata dall'ideologia"
     },
     anna: {
        name1: "Anna",
        name2: "Akhmatova",
        quote: "\"Ho imparato come i volti si sfasciano,\nCome la paura guarda da sotto le palpebre.\"",
        loc: "Posizione: San Pietroburgo",
        era: "Era: Età d'Argento (1910s-60s)",
        fate: "Destino: L'\"Ospite di Pietra\""
     }
  }
};