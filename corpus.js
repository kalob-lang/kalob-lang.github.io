// corpus.js
const KALOB_CORPUS = [
    {
        title: "The North Fart & the Sun",
        description: "A classic linguistic translation text demonstrating noun compounding, syntax, and complex modulations.",
        sentences: [
            {
                translation: "(The North Wind and the Day-Star counter-mutually-spoke that one of the two was stronger [eternally], when a traveler came wrapped in a warm back-garment.)",
                fragments: [
                    { text: "Qhind", lexeme: "qhind-ø", gloss: "wind-N" },
                    { text: "Nordhij", lexeme: "nordh-ij", gloss: "north-PTCP.GNOM" },
                    { text: "vd", lexeme: "vd", gloss: "and" },
                    { text: "Taguphyezd", lexeme: "tag⟨u⟩phyezd-ø", gloss: "day⟨CMPD⟩star-N" },
                    { text: "sku", lexeme: "sku", gloss: "ANTI" },
                    { text: "ku", lexeme: "ku", gloss: "MUT" },
                    { text: "spige", lexeme: "spig-e", gloss: "speak-V.PST" },
                    { text: "kw", lexeme: "kw", gloss: "COMP.FACT" },
                    { text: "pya", lexeme: "pya", gloss: "3SG.DU" },
                    { text: "estergi,", lexeme: "e-sterg-i", gloss: "CMP-strong-V.GNOM" },
                    { text: "khw", lexeme: "khw", gloss: "when" },
                    { text: "an", lexeme: "an", gloss: "INDEF" },
                    { text: "merjherd", lexeme: "merjh-erd-ø", gloss: "travel-ACTR-N" },
                    { text: "kwme", lexeme: "kwm-e", gloss: "come-V.PST" },
                    { text: "pajhezh", lexeme: "pajh-ezh", gloss: "wrap-ADV.PASS" },
                    { text: "in", lexeme: "in", gloss: "in" },
                    { text: "an", lexeme: "an", gloss: "INDEF" },
                    { text: "pozduklodh", lexeme: "pozd⟨u⟩klodh-ø", gloss: "back⟨CMPD⟩garment-N" },
                    { text: "tyobej.", lexeme: "tyob-ej", gloss: "warm-ADJ.GEN" }
                ]
            },
            {
                translation: "(Both mutually-agreed that the one of the two who first succeeded [to] cause that the traveler [subjunctive] takes off his back-garment ought to be thought stronger [eternally].)",
                fragments: [
                    { text: "pye", lexeme: "pye", gloss: "3PL.DU" },
                    { text: "ku", lexeme: "ku", gloss: "MUT" },
                    { text: "tragde", lexeme: "tragd-e", gloss: "agree-V.PST" },
                    { text: "kw", lexeme: "kw", gloss: "COMP.FACT" },
                    { text: "pya", lexeme: "pya", gloss: "3SG.DU" },
                    { text: "ra", lexeme: "ra", gloss: "REL" },
                    { text: "skide", lexeme: "skid-e", gloss: "succeed-V.PST" },
                    { text: "prizh", lexeme: "prizh", gloss: "first.ADV" },
                    { text: "koze", lexeme: "koz-e", gloss: "cause-V.PST" },
                    { text: "kw", lexeme: "kw", gloss: "COMP" },
                    { text: "merjherd", lexeme: "merjh-erd-ø", gloss: "travel-ACTR-N" },
                    { text: "thu", lexeme: "thu", gloss: "SUBJ" },
                    { text: "snyado", lexeme: "snyad-o", gloss: "take.off-V.PRS" },
                    { text: "lea", lexeme: "lea", gloss: "3SG.POSS" },
                    { text: "pozduklodh", lexeme: "pozd⟨u⟩klodh-ø", gloss: "back⟨CMPD⟩garment-N" },
                    { text: "spegua", lexeme: "speg-⟨u⟩-a", gloss: "think-⟨PASS⟩-V.FUT" },
                    { text: "estergij.", lexeme: "e-sterg-ij", gloss: "CMP-strong-PTCP.GNOM" }
                ]
            },
            {
                translation: "(Then the North Wind blew as-strongly as he was able, but when he blew more-strongly, consequently the traveler folded more-closely his back-garment around himself; and the North Wind finally stopped the attempt.)",
                fragments: [
                    { text: "stv", lexeme: "stv", gloss: "then" },
                    { text: "Qhind", lexeme: "qhind-ø", gloss: "wind-N" },
                    { text: "Nordhij", lexeme: "nordh-ij", gloss: "north-PTCP.GNOM" },
                    { text: "pwbhe", lexeme: "pwbh-e", gloss: "blow-V.PST" },
                    { text: "ustergezh", lexeme: "u-sterg-ezh", gloss: "EQU-strong-ADV" },
                    { text: "rw", lexeme: "rw", gloss: "than" },
                    { text: "le", lexeme: "le", gloss: "3SG.ANIM" },
                    { text: "nwnge,", lexeme: "nwng-e", gloss: "able-V.PST" },
                    { text: "pv", lexeme: "pv", gloss: "but" },
                    { text: "khw", lexeme: "khw", gloss: "when" },
                    { text: "le", lexeme: "le", gloss: "3SG.ANIM" },
                    { text: "pwbhe", lexeme: "pwbh-e", gloss: "blow-V.PST" },
                    { text: "estergezh,", lexeme: "e-sterg-ezh", gloss: "CMP-strong-ADV" },
                    { text: "slv", lexeme: "slv", gloss: "consequently" },
                    { text: "merjherd", lexeme: "merjh-erd-ø", gloss: "travel-ACTR-N" },
                    { text: "pholde", lexeme: "phold-e", gloss: "fold-V.PST" },
                    { text: "eklozezh", lexeme: "e-kloz-ezh", gloss: "CMP-close-ADV" },
                    { text: "lea", lexeme: "lea", gloss: "3SG.POSS" },
                    { text: "pozduklodh", lexeme: "pozd⟨u⟩klodh-ø", gloss: "back⟨CMPD⟩garment-N" },
                    { text: "iz", lexeme: "iz", gloss: "around" },
                    { text: "ele;", lexeme: "ele", gloss: "3SG.ANIM.EMPH" },
                    { text: "vd", lexeme: "vd", gloss: "and" },
                    { text: "Qhind", lexeme: "qhind-ø", gloss: "wind-N" },
                    { text: "Nordhij", lexeme: "nordh-ij", gloss: "north-PTCP.GNOM" },
                    { text: "thame", lexeme: "tham-e", gloss: "stop-V.PST" },
                    { text: "phinzh", lexeme: "phinzh", gloss: "finally.ADV" },
                    { text: "tezd.", lexeme: "tezd-ø", gloss: "attempt-N" }
                ]
            },
            {
                translation: "(Then the Day-Star radiated-light outwardly warmly, and the traveler immediately took off his back-garment.)",
                fragments: [
                    { text: "stv", lexeme: "stv", gloss: "then" },
                    { text: "Taguphyezd", lexeme: "tag⟨u⟩phyezd-ø", gloss: "day⟨CMPD⟩star-N" },
                    { text: "qangusrajhe", lexeme: "qang⟨u⟩srajh-e", gloss: "light⟨CMPD⟩radiate-V.PST" },
                    { text: "sternvbhezh", lexeme: "stern-vbh-ezh", gloss: "outside-ACT-ADV" },
                    { text: "tyobezh,", lexeme: "tyob-ezh", gloss: "warm-ADV" },
                    { text: "vd", lexeme: "vd", gloss: "and" },
                    { text: "merjherd", lexeme: "merjh-erd-ø", gloss: "travel-ACTR-N" },
                    { text: "snyade", lexeme: "snyad-e", gloss: "take.off-V.PST" },
                    { text: "cywzh", lexeme: "cywzh", gloss: "immediately.ADV" },
                    { text: "lea", lexeme: "lea", gloss: "3SG.POSS" },
                    { text: "pozduklodh.", lexeme: "pozd⟨u⟩klodh-ø", gloss: "back⟨CMPD⟩garment-N" }
                ]
            },
            {
                translation: "(And consequently the North Wind had to confess that the Day-Star was the stronger one of the two.)",
                fragments: [
                    { text: "vd", lexeme: "vd", gloss: "and" },
                    { text: "slv", lexeme: "slv", gloss: "consequently" },
                    { text: "Qhind", lexeme: "qhind-ø", gloss: "wind-N" },
                    { text: "Nordhij", lexeme: "nordh-ij", gloss: "north-PTCP.GNOM" },
                    { text: "mwzde", lexeme: "mwzd-e", gloss: "must-V.PST" },
                    { text: "kogze", lexeme: "kogz-e", gloss: "confess-V.PST" },
                    { text: "kw", lexeme: "kw", gloss: "COMP.FACT" },
                    { text: "Taguphyezd", lexeme: "tag⟨u⟩phyezd-ø", gloss: "day⟨CMPD⟩star-N" },
                    { text: "sene", lexeme: "sen-e", gloss: "be-V.PST" },
                    { text: "pya", lexeme: "pya", gloss: "3SG.DU" },
                    { text: "estergij.", lexeme: "e-sterg-ij", gloss: "CMP-strong-PTCP.GNOM" }
                ]
            }
        ]
    }
];