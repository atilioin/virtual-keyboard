var layouts2 = [
{ value: "sq", label:"ALBANIAN"},
{ value: "ar", label:"ARABIC"},
{ value: "hy_east", label:"ARMENIAN_EASTERN"},
{ value: "hy_west", label:"ARMENIAN_WESTERN"},
{ value: "eu", label:"BASQUE"},
{ value: "be", label:"BELARUSIAN"},
{ value: "bn_phone", label:"BENGALI_PHONETIC"},
{ value: "bs", label:"BOSNIAN"},
{ value: "pt_br", label:"BRAZILIAN_PORTUGUESE"},
{ value: "bg", label:"BULGARIAN"},
{ value: "ca", label:"CATALAN"},
{ value: "chr", label:"CHEROKEE"},
{ value: "hr", label:"CROATIAN"},
{ value: "cs", label:"CZECH"},
{ value: "cs_qwertz", label:"CZECH_QWERTZ"},
{ value: "da", label:"DANISH"},
{ value: "prs", label:"DARI"},
{ value: "nl", label:"DUTCH"},
{ value: "deva_phone", label:"DEVANAGARI_PHONETIC"},
{ value: "en", label:"ENGLISH"},
{ value: "et", label:"ESTONIAN"},
{ value: "ethi", label:"ETHIOPIC"},
{ value: "fi", label:"FINNISH"},
{ value: "fr", label:"FRENCH"},
{ value: "gl", label:"GALICIAN"},
{ value: "ka_qwerty", label:"GEORGIAN_QWERTY"},
{ value: "ka_typewriter", label:"GEORGIAN_TYPEWRITER"},
{ value: "de", label:"GERMAN"},
{ value: "el", label:"GREEK"},
{ value: "gu_phone", label:"GUJARATI_PHONETIC"},
{ value: "guru_phone", label:"GURMUKHI_PHONETIC"},
{ value: "he", label:"HEBREW"},
{ value: "hi", label:"HINDI"},
{ value: "hu_101", label:"HUNGARIAN_101"},
{ value: "is", label:"ICELANDIC"},
{ value: "it", label:"ITALIAN"},
{ value: "kn_phone", label:"KANNADA_PHONETIC"},
{ value: "kk", label:"KAZAKH"},
{ value: "km", label:"KHMER"},
{ value: "ko", label:"KOREAN"},
{ value: "ky_cyrl", label:"KYRGYZ"},
{ value: "lo", label:"LAO"},
{ value: "lv", label:"LATVIAN"},
{ value: "lt", label:"LITHUANIAN"},
{ value: "mk", label:"MACEDONIAN"},
{ value: "ml_phone", label:"MALAYALAM_PHONETIC"},
{ value: "mt", label:"MALTESE"},
{ value: "mn_cyrl", label:"MONGOLIAN_CYRILLIC"},
{ value: "srp", label:"MONTENEGRIN"},
{ value: "no", label:"NORWEGIAN"},
{ value: "or_phone", label:"ORIYA_PHONETIC"},
{ value: "latn_002", label:"PAN_AFRICA_LATIN"},
{ value: "ps", label:"PASHTO"},
{ value: "fa", label:"PERSIAN"},
{ value: "pl", label:"POLISH"},
{ value: "pt_pt", label:"PORTUGUESE"},
{ value: "rom", label:"ROMANI"},
{ value: "ro", label:"ROMANIAN"},
{ value: "ru", label:"RUSSIAN"},
{ value: "sa_phone", label:"SANSKRIT_PHONETIC"},
{ value: "sr_cyrl", label:"SERBIAN_CYRILLIC"},
{ value: "sr_latn", label:"SERBIAN_LATIN"},
{ value: "si", label:"SINHALA"},
{ value: "sk", label:"SLOVAK"},
{ value: "sk_qwerty", label:"SLOVAK_QWERTY"},
{ value: "sl", label:"SLOVENIAN"},
{ value: "uzs", label:"SOUTHERN_UZBEK"},
{ value: "es_es", label:"SPANISH"},
{ value: "sv", label:"SWEDISH"},
{ value: "ta_phone", label:"TAMIL_PHONETIC"},
{ value: "tt", label:"TATAR"},
{ value: "te_phone", label:"TELUGU_PHONETIC"},
{ value: "th", label:"THAI"},
{ value: "tr_f", label:"TURKISH_F"},
{ value: "tr_q", label:"TURKISH_Q"},
{ value: "ug", label:"UIGHUR"},
{ value: "uk_101", label:"UKRAINIAN_101"},
{ value: "ur", label:"URDU"},
{ value: "uz_latn", label:"UZBEK_LATIN"},
{ value: "uz_cyrl_phone", label:"UZBEK_CYRILLIC_PHONETIC"},
{ value: "uz_cyrl_type", label:"UZBEK_CYRILLIC_TYPEWRITTER"},
{ value: "vi_tcvn", label:"VIETNAMESE_TCVN"},
{ value: "vi_telex", label:"VIETNAMESE_TELEX"},
{ value: "vi_viqr", label:"VIETNAMESE_VIQR"}
];
var layouts = {
			  'ALBANIAN': 'sq',
			  'ARABIC': 'ar',
			  'ARMENIAN_EASTERN': 'hy_east',
			  'ARMENIAN_WESTERN': 'hy_west',
			  'BASQUE': 'eu',
			  'BELARUSIAN': 'be',
			  'BENGALI_PHONETIC': 'bn_phone',
			  'BOSNIAN': 'bs',
			  'BRAZILIAN_PORTUGUESE': 'pt_br',
			  'BULGARIAN': 'bg',
			  'CATALAN': 'ca',
			  'CHEROKEE': 'chr',
			  'CROATIAN': 'hr',
			  'CZECH': 'cs',
			  'CZECH_QWERTZ': 'cs_qwertz',
			  'DANISH': 'da',
			  'DARI': 'prs',
			  'DUTCH': 'nl',
			  'DEVANAGARI_PHONETIC': 'deva_phone',
			  'ENGLISH': 'en',
			  'ESTONIAN': 'et',
			  'ETHIOPIC': 'ethi',
			  'FINNISH': 'fi',
			  'FRENCH': 'fr',
			  'GALICIAN': 'gl',
			  'GEORGIAN_QWERTY': 'ka_qwerty',
			  'GEORGIAN_TYPEWRITER': 'ka_typewriter',
			  'GERMAN': 'de',
			  'GREEK': 'el',
			  'GUJARATI_PHONETIC': 'gu_phone',
			  'GURMUKHI_PHONETIC': 'guru_phone',
			  'HEBREW': 'he',
			  'HINDI': 'hi',
			  'HUNGARIAN_101': 'hu_101',
			  'ICELANDIC': 'is',
			  'ITALIAN': 'it',
			  'KANNADA_PHONETIC': 'kn_phone',
			  'KAZAKH': 'kk',
			  'KHMER': 'km',
			  'KOREAN': 'ko',
			  'KYRGYZ': 'ky_cyrl',
			  'LAO': 'lo',
			  'LATVIAN': 'lv',
			  'LITHUANIAN': 'lt',
			  'MACEDONIAN': 'mk',
			  'MALAYALAM_PHONETIC': 'ml_phone',
			  'MALTESE': 'mt',
			  'MONGOLIAN_CYRILLIC': 'mn_cyrl',
			  'MONTENEGRIN': 'srp',
			  'NORWEGIAN': 'no',
			  'ORIYA_PHONETIC': 'or_phone',
			  'PAN_AFRICA_LATIN': 'latn_002',
			  'PASHTO': 'ps',
			  'PERSIAN': 'fa',
			  'POLISH': 'pl',
			  'PORTUGUESE': 'pt_pt',
			  'ROMANI': 'rom',
			  'ROMANIAN': 'ro',
			  'RUSSIAN': 'ru',
			  'SANSKRIT_PHONETIC': 'sa_phone',
			  'SERBIAN_CYRILLIC': 'sr_cyrl',
			  'SERBIAN_LATIN': 'sr_latn',
			  'SINHALA': 'si',
			  'SLOVAK': 'sk',
			  'SLOVAK_QWERTY': 'sk_qwerty',
			  'SLOVENIAN': 'sl',
			  'SOUTHERN_UZBEK': 'uzs',
			  'SPANISH': 'es_es',
			  'SWEDISH': 'sv',
			  'TAMIL_PHONETIC': 'ta_phone',
			  'TATAR': 'tt',
			  'TELUGU_PHONETIC': 'te_phone',
			  'THAI': 'th',
			  'TURKISH_F': 'tr_f',
			  'TURKISH_Q': 'tr_q',
			  'UIGHUR': 'ug',
			  'UKRAINIAN_101': 'uk_101',
			  'URDU': 'ur',
			  'UZBEK_LATIN': 'uz_latn',
			  'UZBEK_CYRILLIC_PHONETIC': 'uz_cyrl_phone',
			  'UZBEK_CYRILLIC_TYPEWRITTER': 'uz_cyrl_type',
			  'VIETNAMESE_TCVN': 'vi_tcvn',
			  'VIETNAMESE_TELEX': 'vi_telex',
			  'VIETNAMESE_VIQR': 'vi_viqr'
			};