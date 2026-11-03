(() => {
  'use strict';

  const translations = window.templeTranslations || {};
  const faqContent = {
    gu: {
      eyebrow: 'ભક્તો માટે ઉપયોગી માહિતી', title: 'વારંવાર પૂછાતા પ્રશ્નો', intro: 'દર્શન, આરતી, સ્થળ અને સેવા વિશેની માહિતી અહીં મેળવો.',
      items: [
        ['મંદિરમાં દર્શનનો સમય શું છે?', 'સવારે 5:30 થી બપોરે 12:00 અને સાંજે 4:00 થી 9:00 સુધી દર્શન કરી શકાય છે. બપોરે 12:00 થી 4:00 દરમિયાન દર્શન બંધ રહે છે.'],
        ['સવાર અને સાંજની આરતી ક્યારે થાય છે?', 'સવારની આરતી 6:00 વાગ્યે અને સાંજની આરતી 6:30 વાગ્યે થાય છે.'],
        ['માઁ મેલડી ધામ ક્યાં આવેલું છે?', 'માઁ મેલડી ધામ જાસલપુર, ગુજરાતમાં આવેલું છે. સંપર્ક પેજ પરથી Google Mapsમાં માર્ગ જોઈ શકો છો.', 'contact.html', 'સ્થળ અને માર્ગ જુઓ'],
        ['લાઈવ દર્શન ક્યાં જોઈ શકું?', 'લાઈવ દર્શન અને આરતી પેજ પર વિડિયો જુઓ. YouTube પર પ્રસારણ ચાલુ હોય ત્યારે લાઈવ દર્શન ઉપલબ્ધ રહેશે.', 'live-darshan.html', 'લાઈવ દર્શન ખોલો'],
        ['ઉત્સવો અને કાર્યક્રમોની માહિતી ક્યાં મળશે?', 'આગામી ઉત્સવો અને કાર્યક્રમોની તારીખો માટે કાર્યક્રમો પેજ જુઓ.', 'events.html', 'કાર્યક્રમો જુઓ'],
        ['દાન કે સેવા વિશે કેવી રીતે જાણવું?', 'દાન અને સેવા પેજ પર આપેલી માહિતી જુઓ. વધુ વિગતો માટે સંપર્ક પેજ મારફતે મંદિરનો સંપર્ક કરો.', 'donation.html', 'દાન અને સેવા જુઓ'],
        ['બીજો પ્રશ્ન હોય તો મંદિરનો સંપર્ક કેવી રીતે કરવો?', 'સંપર્ક પેજ પરનું ફોર્મ ભરીને તમારી પૂછપરછ મોકલો.', 'contact.html', 'સંપર્ક પેજ ખોલો']
      ]
    },
    hi: {
      eyebrow: 'भक्तों के लिए उपयोगी जानकारी', title: 'अक्सर पूछे जाने वाले प्रश्न', intro: 'दर्शन, आरती, स्थान और सेवा से जुड़ी जानकारी यहाँ पाएँ।',
      items: [
        ['मंदिर में दर्शन का समय क्या है?', 'सुबह 5:30 से दोपहर 12:00 बजे तक और शाम 4:00 से 9:00 बजे तक दर्शन कर सकते हैं। दोपहर 12:00 से 4:00 बजे तक दर्शन बंद रहते हैं।'],
        ['सुबह और शाम की आरती कब होती है?', 'सुबह की आरती 6:00 बजे और शाम की आरती 6:30 बजे होती है।'],
        ['माँ मेलडी धाम कहाँ स्थित है?', 'माँ मेलडी धाम जसालपुर, गुजरात में स्थित है। संपर्क पेज से Google Maps में रास्ता देख सकते हैं।', 'contact.html', 'स्थान और रास्ता देखें'],
        ['लाइव दर्शन कहाँ देख सकते हैं?', 'लाइव दर्शन और आरती पेज पर वीडियो देखें। YouTube पर प्रसारण चालू होने पर लाइव दर्शन उपलब्ध होंगे।', 'live-darshan.html', 'लाइव दर्शन खोलें'],
        ['उत्सव और आयोजनों की जानकारी कहाँ मिलेगी?', 'आगामी उत्सवों और आयोजनों की तारीखों के लिए आयोजन पेज देखें।', 'events.html', 'आयोजन देखें'],
        ['दान या सेवा के बारे में कैसे जानें?', 'दान और सेवा पेज पर दी गई जानकारी देखें। अधिक जानकारी के लिए संपर्क पेज से मंदिर से संपर्क करें।', 'donation.html', 'दान और सेवा देखें'],
        ['अन्य प्रश्न के लिए मंदिर से कैसे संपर्क करें?', 'संपर्क पेज पर दिया गया फ़ॉर्म भरकर अपनी पूछताछ भेजें।', 'contact.html', 'संपर्क पेज खोलें']
      ]
    },
    en: {
      eyebrow: 'Helpful information for devotees', title: 'Frequently Asked Questions', intro: 'Find information about darshan, aarti, directions, and seva.',
      items: [
        ['What are the mandir darshan hours?', 'Darshan is available from 5:30 AM to 12:00 PM and from 4:00 PM to 9:00 PM. Darshan is closed from 12:00 PM to 4:00 PM.'],
        ['When are the morning and evening aartis?', 'Morning aarti is at 6:00 AM and evening aarti is at 6:30 PM.'],
        ['Where is Maa Meldi Dham?', 'Maa Meldi Dham is in Jasalpur, Gujarat. Open the Contact page to get directions in Google Maps.', 'contact.html', 'View location and directions'],
        ['Where can I watch live darshan?', 'Visit the Live Darshan & Aarti page. Live darshan is available when the YouTube stream is live.', 'live-darshan.html', 'Open Live Darshan'],
        ['Where can I find festival and event information?', 'Check the Events page for upcoming festival and event dates.', 'events.html', 'View events'],
        ['How can I learn about donations or seva?', 'See the Donation & Seva page. Contact the mandir through the Contact page for more details.', 'donation.html', 'View Donation & Seva'],
        ['How can I contact the mandir with another question?', 'Send your enquiry using the form on the Contact page.', 'contact.html', 'Open Contact page']
      ]
    }
  };
  const dailyThoughts = {
    gu: [
      'સેવા, શ્રદ્ધા અને સદભાવથી જીવન સુંદર બને છે.',
      'સાચા મનથી કરેલી પ્રાર્થના હંમેશાં હિંમત આપે છે.',
      'દયા અને પ્રેમથી દરેક હૃદય જીતી શકાય છે.',
      'સારા વિચારો જીવનને સાચી દિશા આપે છે.',
      'માતાજી પર શ્રદ્ધા રાખો અને કર્મ કરતા રહો.',
      'નમ્રતા એ ભક્તિનું સુંદર આભૂષણ છે.',
      'બીજાની મદદ કરવી એ પણ માતાજીની સેવા છે.',
      'ધીરજ રાખો; દરેક સવાર નવી આશા લઈને આવે છે.',
      'મન સ્વચ્છ હોય તો દરેક કાર્ય પૂજા બની જાય છે.',
      'આભાર માનતું હૃદય હંમેશાં આનંદી રહે છે.',
      'સત્ય અને સદાચારનો માર્ગ હંમેશાં શ્રેષ્ઠ છે.',
      'ક્ષમા કરવાથી મન હળવું અને સંબંધ મજબૂત બને છે.',
      'નાની નાની ખુશીઓમાં પણ માતાજીની કૃપા જુઓ.',
      'શાંતિ બહાર નહીં, આપણા મનમાં વસે છે.',
      'પ્રેમથી બોલાયેલો શબ્દ કોઈના દિવસને સુંદર બનાવી શકે છે.',
      'વિશ્વાસ રાખો; મુશ્કેલી પછી સરળતા જરૂર આવે છે.',
      'સેવા નિઃસ્વાર્થ હોય ત્યારે તેનું ફળ પવિત્ર બને છે.',
      'દરેક દિવસ માતાજીનો આભાર માનવાની નવી તક છે.',
      'સંયમ અને સમજદારીથી જીવનમાં સુખ વધે છે.',
      'ભક્તિ મનને બળ અને જીવનને આશા આપે છે.',
      'પરિશ્રમ કરો અને પરિણામ માતાજીને અર્પણ કરો.',
      'બીજાનું સુખ જોઈને ખુશ થવું પણ મોટું પુણ્ય છે.',
      'મીઠાં વચન સંબંધોમાં માધુર્ય ભરે છે.',
      'સારા કર્મો જ જીવનની સાચી સંપત્તિ છે.',
      'ચિંતા છોડો, શ્રદ્ધા સાથે આજનું કર્તવ્ય કરો.',
      'મનથી કરેલી નાની સેવા પણ અમૂલ્ય છે.',
      'આશા અને હિંમતથી અઘરો રસ્તો પણ સરળ બને છે.',
      'દરેક જીવમાં માતાજીનો અંશ જોઈને પ્રેમ કરો.',
      'શાંતિથી સાંભળવું પણ એક સુંદર સેવા છે.',
      'ભક્તિમાં અહંકાર નહીં, સમર્પણ હોવું જોઈએ.',
      'આજનો સદવિચાર આવતીકાલનું સુંદર કર્મ બને છે.'
    ],
    hi: [
      'सेवा, श्रद्धा और सद्भाव से जीवन सुंदर बनता है।',
      'सच्चे मन से की गई प्रार्थना हमेशा हिम्मत देती है।',
      'दया और प्रेम से हर दिल जीता जा सकता है।',
      'अच्छे विचार जीवन को सही दिशा देते हैं।',
      'माताजी पर विश्वास रखें और अपना कर्म करते रहें।',
      'विनम्रता भक्ति का सुंदर आभूषण है।',
      'दूसरों की मदद करना भी माताजी की सेवा है।',
      'धैर्य रखें; हर सुबह नई आशा लेकर आती है।',
      'मन साफ हो तो हर काम पूजा बन जाता है।',
      'कृतज्ञ हृदय हमेशा आनंदित रहता है।',
      'सत्य और सदाचार का मार्ग हमेशा श्रेष्ठ है।',
      'क्षमा से मन हल्का और रिश्ते मजबूत होते हैं।',
      'छोटी-छोटी खुशियों में भी माताजी की कृपा देखें।',
      'शांति बाहर नहीं, हमारे मन में बसती है।',
      'प्रेम से कहा एक शब्द किसी का दिन सुंदर बना सकता है।',
      'विश्वास रखें; कठिनाई के बाद सरलता जरूर आती है।',
      'निःस्वार्थ सेवा का फल पवित्र होता है।',
      'हर दिन माताजी का आभार मानने का नया अवसर है।',
      'संयम और समझदारी से जीवन में सुख बढ़ता है।',
      'भक्ति मन को बल और जीवन को आशा देती है।',
      'परिश्रम करें और परिणाम माताजी को अर्पित करें।',
      'दूसरों की खुशी में खुश होना भी बड़ा पुण्य है।',
      'मीठे वचन रिश्तों में मिठास भरते हैं।',
      'अच्छे कर्म ही जीवन की सच्ची संपत्ति हैं।',
      'चिंता छोड़ें और श्रद्धा से आज का कर्तव्य करें।',
      'मन से की गई छोटी सेवा भी अनमोल है।',
      'आशा और हिम्मत से कठिन रास्ता भी आसान बनता है।',
      'हर जीव में माताजी का अंश देखकर प्रेम करें।',
      'शांति से सुनना भी एक सुंदर सेवा है।',
      'भक्ति में अहंकार नहीं, समर्पण होना चाहिए।',
      'आज का सद्विचार कल का सुंदर कर्म बनता है।'
    ],
    en: [
      'Service, faith, and kindness make life beautiful.',
      'A sincere prayer always gives us courage.',
      'Kindness and love can win every heart.',
      'Good thoughts give life the right direction.',
      'Trust in Mataji and keep doing your duty.',
      'Humility is a beautiful ornament of devotion.',
      'Helping others is also a way to serve Mataji.',
      'Be patient; every morning brings fresh hope.',
      'When the heart is pure, every task becomes worship.',
      'A grateful heart is always joyful.',
      'The path of truth and integrity is always best.',
      'Forgiveness lightens the heart and strengthens bonds.',
      'See Mataji’s grace in life’s little joys.',
      'Peace lives within us, not outside us.',
      'A loving word can brighten someone’s day.',
      'Have faith; ease follows hardship.',
      'Selfless service brings a sacred reward.',
      'Every day is a new chance to thank Mataji.',
      'Patience and wisdom bring more joy to life.',
      'Devotion gives strength to the heart and hope to life.',
      'Work hard and offer the result to Mataji.',
      'Finding joy in another’s happiness is a great virtue.',
      'Kind words bring warmth to every relationship.',
      'Good deeds are life’s truest wealth.',
      'Let go of worry and do today’s duty with faith.',
      'Even a small act of heartfelt service is precious.',
      'Hope and courage make a hard road easier.',
      'Love every being and see Mataji’s presence in all.',
      'Listening with peace is also a beautiful service.',
      'Devotion calls for surrender, not pride.',
      'A good thought today becomes a good deed tomorrow.'
    ]
  };
  const pageKey = document.body.dataset.page || 'home';
  const languageOptions = [...document.querySelectorAll('.language-option')];
  const languageButton = document.getElementById('languageMenu');
  const selectedLanguage = languageButton?.querySelector('.selected-language');
  const pageContent = document.getElementById('pageContent');
  const pageInfo = {
    about: ['aboutTitle', 'aboutIntro', 'aboutCard'],
    'live-darshan': ['liveTitle', 'liveIntro', 'liveCard'],
    events: ['eventsPageTitle', 'eventsPageIntro', 'eventsCard'],
    gallery: ['galleryPageTitle', 'galleryPageIntro', 'galleryCard'],
    donation: ['donationPageTitle', 'donationPageIntro', 'donationCard'],
    contact: ['contactPageTitle', 'contactPageIntro', 'contactCard']
  };

  function contactPageMarkup(words) {
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831.386168301262!2d72.33835438863909!3d23.36026124473463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c3d82f88368bf%3A0xeed5b4f0a36288f5!2sShree%20Meldi%20Mata%20Temple%20Jasalpur!5e0!3m2!1sen!2sin!4v1793607682803!5m2!1sen!2sin';
    const directionsUrl = 'https://www.google.com/maps/dir/?api=1&amp;destination=23.36026124473463%2C72.33835438863909';
    const contactFormNote = document.body.dataset.contactEmail ? '' : `<p class="contact-form-note">${words.contactFormNote || ''}</p>`;
    return `<section class="contact-modern"><div class="contact-modern-shell"><header class="contact-modern-heading"><span class="section-eyebrow">${words.contactEyebrow || ''}</span><h1>${words[pageInfo.contact[0]] || ''}</h1><p>${words[pageInfo.contact[1]] || ''}</p></header><div class="contact-modern-grid"><article class="contact-location-card"><div class="contact-location-title"><span class="contact-location-icon"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i></span><div><small>${words.templeLocation || ''}</small><h2>${words.locationDetails || ''}</h2></div></div><div class="contact-hours-list"><div class="contact-hours-row"><i class="bi bi-clock" aria-hidden="true"></i><span><small>${words.openingHours || ''}</small><strong>${words.openingTimeDetails || ''}</strong></span></div><div class="contact-hours-row"><i class="bi bi-sun" aria-hidden="true"></i><span><small>${words.darshanSchedule || ''}</small><strong>${words.contactDarshanHours || ''}</strong><em>${words.contactVisitNote || ''}</em></span></div></div><a class="button-outline contact-directions" href="${directionsUrl}" target="_blank" rel="noopener noreferrer"><i class="bi bi-sign-turn-right" aria-hidden="true"></i>${words.mapDirections || 'Get directions in Google Maps'}</a><div class="contact-map contact-modern-map"><iframe src="${mapUrl}" title="Shree Meldi Mata Temple Jasalpur map" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></article><section class="contact-form-card"><div class="contact-form-heading"><span><i class="bi bi-chat-heart" aria-hidden="true"></i></span><div><h2>${words.contactFormTitle || ''}</h2><p>${words.contactFormIntro || ''}</p></div></div><form id="contactForm" data-contact-form><label><span>${words.contactName || ''}</span><input name="name" type="text" autocomplete="name" required></label><label><span>${words.contactEmail || ''}</span><input name="email" type="email" autocomplete="email" required></label><label><span>${words.contactSubject || ''}</span><select name="subject" required><option value="">${words.contactSubject || ''}</option><option>${words.contactSubjectGeneral || ''}</option><option>${words.contactSubjectDarshan || ''}</option><option>${words.contactSubjectEvent || ''}</option><option>${words.contactSubjectSeva || ''}</option></select></label><label><span>${words.contactMessage || ''}</span><textarea name="message" rows="5" required></textarea></label><button class="button-maroon contact-submit" type="submit"><i class="bi bi-send" aria-hidden="true"></i>${words.contactSend || ''}</button>${contactFormNote}<p class="contact-form-status" data-contact-form-status role="status" aria-live="polite"></p></form></section></div></div></section>`;
  }

  function eventsPageMarkup(words) {
    const events = [
      { date: '2026-11-02', dateLabel: words.patotsavDate, title: words.eventOne, description: words.patotsavDescription, icon: 'bi-flower1', image: 'assets/image/Maa%20Event.jpeg' },
      { date: '', dateLabel: words.datePending, title: words.eventTwo, description: words.eventPending, icon: 'bi-sunrise' },
      { date: '', dateLabel: words.datePending, title: words.eventThree, description: words.eventPending, icon: 'bi-heart' }
    ].sort((a, b) => (a.date || '9999-12-31').localeCompare(b.date || '9999-12-31'));
    const rows = events.map((event, index) => `<article class="event-listing-card" style="--event-index:${index}"><div class="event-card-art${event.image ? ' has-photo' : ''}">${event.image ? `<img class="event-card-image" src="${event.image}" alt="${event.title}" loading="lazy">` : `<span class="event-art-orbit"></span><i class="bi ${event.icon}" aria-hidden="true"></i><span class="event-art-label">${words.eventsEyebrow || ''}</span>`}</div><div class="event-listing-content"><span class="event-listing-date"><i class="bi bi-calendar-event" aria-hidden="true"></i>${event.date ? `<time datetime="${event.date}">${event.dateLabel}</time>` : `<span>${event.dateLabel}</span>`}</span><h2>${event.title}</h2><p>${event.description}</p><a href="contact.html" class="event-details-link">${words.moreInfo || words.navContact || ''}<i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></div></article>`).join('');
    return `<section class="events-page"><div class="events-page-shell"><header class="events-page-heading"><span class="section-eyebrow">${words.eventsEyebrow || ''}</span><h1>${words.eventsPageTitle || ''}</h1><p>${words.eventsPageIntro || ''}</p></header><div class="events-card-grid" aria-label="${words.eventsPageTitle || ''}">${rows}</div><a class="button-outline events-contact-link" href="contact.html"><i class="bi bi-chat-dots" aria-hidden="true"></i>${words.navContact || ''}</a></div></section>`;
  }

  function galleryPageMarkup(words) {
    const photos = [
      ['assets/image/Mandir.jpg','galleryTemplePhoto','temple'],
      ['assets/image/Maa%20Event.jpeg','galleryFestivalMoment','festival'],
      ['assets/image/IMG_4896.JPG','galleryMatajiDarshan','darshan'],
      ['assets/image/IMG_20250418_170317_755.jpg','galleryAartiMoment','aarti'],
      ['assets/image/IMG_20250205_164535.jpg','galleryMatajiDarshan','darshan'],
      ['assets/image/IMG-20250519-WA0031.jpg','galleryFestivalMoment','festival'],
      ['assets/image/IMG-20250519-WA0029.jpg','galleryTemplePhoto','temple'],
      ['assets/image/IMG-20250428-WA0002.jpg','galleryAartiMoment','aarti'],
      ['assets/image/IMG-20250112-WA0019.jpg','galleryMatajiDarshan','darshan'],
      ['assets/image/IMG-20241102-WA0107.jpg','galleryFestivalMoment','festival'],
      ['assets/image/IMG-20241102-WA0086.jpg','galleryAartiMoment','aarti'],
      ['assets/image/IMG-20241031-WA0062.jpg','galleryTemplePhoto','temple'],
      ['assets/image/IMG-20241031-WA0061.jpg','galleryMatajiDarshan','darshan'],
      ['assets/image/IMG-20241010-WA0034.jpg','galleryTemplePhoto','temple'],
      ['assets/image/IMG-20241010-WA0032.jpg','galleryAartiMoment','aarti'],
      ['assets/image/IMG-20241010-WA0018.jpg','galleryFestivalMoment','festival'],
      ['assets/image/IMG-20241010-WA0004.jpg','galleryMatajiDarshan','darshan'],
      ['assets/image/IMG-20241007-WA0001.jpg','galleryTemplePhoto','temple'],
      ['assets/image/WhatsApp%20Image%202026-08-30%20at%201.16.11%20PM.jpeg','galleryFestivalMoment','festival'],
      ['assets/image/WhatsApp%20Image%202025-10-24%20at%207.42.02%20AM%20(1).jpeg','galleryAartiMoment','aarti'],
      ['assets/image/WhatsApp%20Image%202025-10-24%20at%207.42.01%20AM.jpeg','galleryTemplePhoto','temple'],
      ['assets/image/WhatsApp%20Image%202025-10-24%20at%207.42.00%20AM.jpeg','galleryMatajiDarshan','darshan'],
      ['assets/image/WhatsApp%20Image%202025-10-24%20at%207.42.00%20AM%20(2).jpeg','galleryFestivalMoment','festival'],
      ['assets/image/WhatsApp%20Image%202025-10-24%20at%207.41.59%20AM.jpeg','galleryAartiMoment','aarti'],
      ['assets/image/WhatsApp%20Image%202025-10-24%20at%207.41.57%20AM%20(1).jpeg','galleryTemplePhoto','temple'],
      ['assets/image/WhatsApp%20Image%202025-10-22%20at%2010.54.58%20PM%20(1).jpeg','galleryFestivalMoment','festival'],
      ['assets/image/WhatsApp%20Image%202025-10-21%20at%208.48.39%20PM.jpeg','galleryAartiMoment','aarti']
    ];
    const filters = [['all',words.galleryAll],['temple',words.galleryTemplePhoto],['darshan',words.galleryMatajiDarshan],['festival',words.galleryFestivalMoment],['aarti',words.galleryAartiMoment]];
    const filterMarkup = filters.map(([key,label],index) => `<button class="gallery-filter${index === 0 ? ' is-active' : ''}" type="button" data-gallery-filter="${key}" aria-pressed="${index === 0}">${label}</button>`).join('');
    const tiles = photos.map(([src,captionKey,category],index) => `<button class="gallery-photo" style="--gallery-index:${index}" type="button" data-gallery-open data-gallery-category="${category}" data-gallery-src="${src}" data-gallery-caption-key="${captionKey}" aria-label="${words[captionKey] || ''}"><img src="${src}" alt="${words[captionKey] || ''}" loading="lazy"><span class="gallery-photo-shade"><span>${words[captionKey] || ''}</span><i class="bi bi-arrows-angle-expand" aria-hidden="true"></i></span></button>`).join('');
    return `<section class="gallery-page"><div class="gallery-page-shell"><header class="gallery-page-heading"><span class="section-eyebrow">${words.galleryEyebrow || words.galleryTitle || ''}</span><h1>${words.galleryTitle || ''}</h1><p>${words.galleryIntro || ''}</p></header><nav class="gallery-filters" aria-label="${words.galleryTitle || ''}">${filterMarkup}</nav><div class="gallery-photo-grid">${tiles}</div></div><dialog class="gallery-lightbox" data-gallery-dialog aria-label="${words.galleryTitle || ''}"><button class="gallery-lightbox-close" type="button" data-gallery-close aria-label="${words.close || 'Close'}"><i class="bi bi-x-lg" aria-hidden="true"></i></button><img data-gallery-dialog-image alt=""><p data-gallery-dialog-caption></p></dialog></section>`;
  }

  function donationPageMarkup(words) {
    const copy = {
      gu: { badge: 'શ્રદ્ધાથી કરો સહયોગ', intro: 'માતાજીના ધામની સેવા અને ધાર્મિક પ્રવૃત્તિઓમાં આપનો સહયોગ અમૂલ્ય છે.', why: 'તમારું દાન ક્યાં ઉપયોગી બને છે?', whyText: 'મંદિરની દૈનિક સેવા, ઉત્સવો, ભક્તોની સુવિધા અને પરિસરની જાળવણીમાં સહયોગ.', formTitle: 'દાનની વિગતો', formIntro: 'દાનની વિગતો ભરો અને acknowledgment PDF મેળવો.', name: 'દાન આપનારનું પૂરું નામ', email: 'ઈમેલ સરનામું', phone: 'મોબાઇલ નંબર (વૈકલ્પિક)', amount: 'દાનની રકમ (₹)', purpose: 'દાનનો હેતુ', general: 'સામાન્ય મંદિર સેવા', utsav: 'ઉત્સવ અને પાટોત્સવ', annadan: 'અન્નદાન / પ્રસાદ સેવા', maintenance: 'મંદિર જાળવણી', payment: 'ચુકવણીની રીત', upi: 'UPI', bank: 'બેંક ટ્રાન્સફર', cash: 'રોકડ / મંદિર ખાતે', reference: 'ટ્રાન્ઝેક્શન રેફરન્સ (વૈકલ્પિક)', consent: 'હું ખાતરી આપું છું કે ઉપરની વિગતો સાચી છે.', submit: 'રસીદ બનાવો અને PDF મેળવો', notice: 'આ વેબસાઇટ હાલમાં ચુકવણી સ્વીકારતી નથી. આ acknowledgment આપેલી વિગતો પરથી બને છે; ચુકવણીની ચકાસણી થતી નથી.', secure: 'તમારી વિગતો અહીંથી કોઈ server પર સંગ્રહાતી નથી.', receiptTitle: 'દાનની acknowledgment', receiptId: 'Acknowledgment ID', receiptDate: 'તારીખ', receiptName: 'દાન આપનાર', receiptAmount: 'રકમ', receiptPurpose: 'હેતુ', receiptMode: 'ચુકવણીની રીત', receiptRef: 'રેફરન્સ', download: 'PDF ડાઉનલોડ કરો', sending: 'રસીદ ઈમેલ થઈ રહી છે…', sent: 'રસીદ તમારા ઈમેલ પર મોકલી છે.', emailSetup: 'PDF તૈયાર છે. ઈમેલ મોકલવા EmailJS સેટઅપ બાકી છે.', emailFail: 'ઈમેલ મોકલાઈ નથી. PDF ડાઉનલોડ કરીને સાચવી લો.', required: 'કૃપા કરીને જરૂરી વિગતો ભરો.' },
      hi: { badge: 'श्रद्धा से सहयोग करें', intro: 'माताजी के धाम की सेवा और धार्मिक गतिविधियों में आपका सहयोग अनमोल है।', why: 'आपका दान कहाँ उपयोगी होगा?', whyText: 'मंदिर की दैनिक सेवा, उत्सव, भक्तों की सुविधाओं और परिसर की देखभाल में सहयोग।', formTitle: 'दान का विवरण', formIntro: 'विवरण भरें और acknowledgment PDF प्राप्त करें।', name: 'दाता का पूरा नाम', email: 'ईमेल पता', phone: 'मोबाइल नंबर (वैकल्पिक)', amount: 'दान राशि (₹)', purpose: 'दान का उद्देश्य', general: 'सामान्य मंदिर सेवा', utsav: 'उत्सव और पाटोत्सव', annadan: 'अन्नदान / प्रसाद सेवा', maintenance: 'मंदिर रखरखाव', payment: 'भुगतान का तरीका', upi: 'UPI', bank: 'बैंक ट्रांसफर', cash: 'नकद / मंदिर में', reference: 'लेनदेन संदर्भ (वैकल्पिक)', consent: 'मैं पुष्टि करता/करती हूँ कि ऊपर दी गई जानकारी सही है।', submit: 'रसीद बनाएँ और PDF पाएँ', notice: 'यह वेबसाइट अभी भुगतान स्वीकार नहीं करती। यह acknowledgment आपके दिए विवरण पर बनेगा; भुगतान सत्यापित नहीं होगा।', secure: 'आपका विवरण यहाँ किसी server पर सहेजा नहीं जाता।', receiptTitle: 'दान acknowledgment', receiptId: 'Acknowledgment ID', receiptDate: 'तारीख', receiptName: 'दाता', receiptAmount: 'राशि', receiptPurpose: 'उद्देश्य', receiptMode: 'भुगतान तरीका', receiptRef: 'संदर्भ', download: 'PDF डाउनलोड करें', sending: 'रसीद ईमेल हो रही है…', sent: 'रसीद आपके ईमेल पर भेज दी गई।', emailSetup: 'PDF तैयार है। ईमेल भेजने के लिए EmailJS सेटअप बाकी है।', emailFail: 'ईमेल नहीं भेजा गया। PDF डाउनलोड करके सहेज लें।', required: 'कृपया आवश्यक जानकारी भरें।' },
      en: { badge: 'Give with devotion', intro: 'Your support helps care for the mandir and its religious activities.', why: 'Your contribution supports', whyText: 'Daily mandir seva, festivals, visitor facilities, and upkeep of the temple grounds.', formTitle: 'Donation details', formIntro: 'Enter the details to prepare an acknowledgement PDF.', name: 'Donor full name', email: 'Email address', phone: 'Mobile number (optional)', amount: 'Donation amount (₹)', purpose: 'Donation purpose', general: 'General mandir seva', utsav: 'Festival and Patotsav', annadan: 'Annadan / prasad seva', maintenance: 'Mandir upkeep', payment: 'Payment method', upi: 'UPI', bank: 'Bank transfer', cash: 'Cash / at the mandir', reference: 'Transaction reference (optional)', consent: 'I confirm that the details above are accurate.', submit: 'Create acknowledgement & PDF', notice: 'This website does not currently accept payments. The acknowledgement uses the details you provide and does not verify payment.', secure: 'Your details are not saved to a server by this page.', receiptTitle: 'Donation acknowledgement', receiptId: 'Acknowledgement ID', receiptDate: 'Date', receiptName: 'Donor', receiptAmount: 'Amount', receiptPurpose: 'Purpose', receiptMode: 'Payment method', receiptRef: 'Reference', download: 'Download PDF', sending: 'Emailing the receipt…', sent: 'The receipt was sent to your email.', emailSetup: 'PDF is ready. EmailJS setup is required to email it.', emailFail: 'Email was not sent. Download and keep the PDF.', required: 'Please complete the required details.' }
    }[document.documentElement.lang] || {};
    const titleKey = pageInfo.donation[0];
    const introKey = pageInfo.donation[1];
    return `<section class="donation-page"><div class="donation-shell"><header class="donation-heading"><span class="section-eyebrow">${copy.badge}</span><h1>${words[titleKey] || ''}</h1><p>${copy.intro}</p></header><div class="donation-layout"><aside class="donation-story-card"><span class="donation-story-icon"><i class="bi bi-heart-fill" aria-hidden="true"></i></span><h2>${copy.why}</h2><p>${copy.whyText}</p><div class="donation-blessing"><i class="bi bi-flower1" aria-hidden="true"></i><span>જય માતાજી</span></div><div class="donation-trust-note"><i class="bi bi-info-circle" aria-hidden="true"></i><span>${copy.notice}</span></div></aside><section class="donation-form-card"><header><span class="donation-form-icon"><i class="bi bi-receipt-cutoff" aria-hidden="true"></i></span><div><h2>${copy.formTitle}</h2><p>${copy.formIntro}</p></div></header><form data-donation-form><div class="donation-fields"><label><span>${copy.name} *</span><input name="donorName" autocomplete="name" maxlength="100" required></label><label><span>${copy.email} *</span><input name="donorEmail" type="email" autocomplete="email" required></label><label><span>${copy.phone}</span><input name="phone" type="tel" inputmode="numeric" autocomplete="tel" maxlength="10" minlength="10" pattern="[6-9][0-9]{9}" title="Enter a valid 10-digit mobile number"></label><label><span>${copy.amount} *</span><div class="donation-amount-wrap"><span>₹</span><input name="amount" type="number" min="1" max="10000000" step="1" required placeholder="501"></div></label><label><span>${copy.purpose} *</span><select name="purpose" required><option value="">${copy.purpose}</option><option>${copy.general}</option><option>${copy.utsav}</option><option>${copy.annadan}</option><option>${copy.maintenance}</option></select></label><label><span>${copy.payment} *</span><select name="paymentMethod" required><option value="">${copy.payment}</option><option>${copy.upi}</option><option>${copy.bank}</option><option>${copy.cash}</option></select></label><label class="donation-reference-field"><span>${copy.reference}</span><input name="reference" maxlength="80"></label></div><label class="donation-consent"><input name="confirmDetails" type="checkbox" required><span>${copy.consent}</span></label><p class="donation-form-notice"><i class="bi bi-shield-check" aria-hidden="true"></i>${copy.secure} ${copy.notice}</p><button class="button-maroon donation-submit" type="submit"><i class="bi bi-file-earmark-pdf" aria-hidden="true"></i>${copy.submit}</button><p class="donation-status" data-donation-status role="status" aria-live="polite"></p></form></section></div><section class="donation-receipt" data-donation-receipt hidden><div class="donation-receipt-paper" data-receipt-paper><div class="receipt-brand"><img src="assets/image/logo.png" alt="Maa Meldi Dham logo"><div><strong>Maa Meldi Dham (Jasalpur)</strong><span>Shree Ugtai Meldi Mataji Mandir</span></div></div><span class="receipt-kicker">${copy.receiptTitle}</span><h2>${words[titleKey] || ''}</h2><div class="receipt-id-row"><span>${copy.receiptId}</span><strong data-receipt-id></strong></div><dl><div><dt>${copy.receiptDate}</dt><dd data-receipt-date></dd></div><div><dt>${copy.receiptName}</dt><dd data-receipt-name></dd></div><div data-receipt-phone-row hidden><dt>${copy.phone}</dt><dd data-receipt-phone></dd></div><div><dt>${copy.receiptAmount}</dt><dd data-receipt-amount></dd></div><div><dt>${copy.receiptPurpose}</dt><dd data-receipt-purpose></dd></div><div><dt>${copy.receiptMode}</dt><dd data-receipt-mode></dd></div><div data-receipt-reference-row hidden><dt>${copy.receiptRef}</dt><dd data-receipt-reference></dd></div></dl><p class="receipt-disclaimer">${copy.notice}</p><div class="receipt-blessing">જય માતાજી</div></div><button class="button-outline receipt-download" type="button" data-receipt-download><i class="bi bi-download" aria-hidden="true"></i>${copy.download}</button></section></div></section>`;
  }

  async function createDonationPdf(paper) {
    if (!window.html2pdf) throw new Error('PDF library did not load');
    await Promise.all([
      document.fonts.load('16px "Noto Sans Gujarati"'),
      document.fonts.load('16px "Hind Vadodara"'),
      ...[...paper.querySelectorAll('img')].map(image => image.decode().catch(() => undefined))
    ]);
    paper.classList.add('pdf-exporting');
    try {
      return await window.html2pdf().set({
        margin: [9, 10, 9, 10],
        image: { type: 'jpeg', quality: .98 },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        html2canvas: { scale: 3, useCORS: true, scrollY: 0, backgroundColor: '#fffdf7', letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true }
      }).from(paper).outputPdf('datauristring');
    } finally { paper.classList.remove('pdf-exporting'); }
  }

  function liveDarshanMarkup(words) {
    const videoUrl = 'https://www.youtube.com/embed/RiUkaehpG-k?si=9UcJttA9mnbOs5LW';
    const watchUrl = 'https://www.youtube.com/watch?v=RiUkaehpG-k';
    const chatUrl = `https://www.youtube.com/live_chat?v=RiUkaehpG-k&embed_domain=${encodeURIComponent(window.location.hostname)}`;
    return `<section class="live-darshan-page"><div class="live-page-shell"><header class="live-page-heading"><div><span class="section-eyebrow">${words.liveEyebrow || ''}</span><h1>${words.liveHeading || words.liveTitle || ''}</h1><p>${words.liveDescription || words.liveIntro || ''}</p></div><span class="live-video-badge"><i class="bi bi-camera-video-fill" aria-hidden="true"></i>${words.liveVideoLabel || ''}</span></header><div class="live-page-layout"><article class="live-player-card"><div class="live-player-topline"><span><i class="bi bi-play-circle-fill" aria-hidden="true"></i>${words.liveVideoLabel || ''}</span><span class="live-platform-label"><i class="bi bi-youtube" aria-hidden="true"></i>YouTube</span></div><div class="live-video live-page-video"><iframe src="${videoUrl}" title="Maa Meldi Dham Jasalpur darshan video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="live-player-caption"><span class="live-caption-icon"><i class="bi bi-flower1" aria-hidden="true"></i></span><div><h2>${words.liveHeading || ''}</h2><p>${words.liveVideoHint || ''}</p></div><div class="live-player-actions"><a class="live-youtube-button" href="${watchUrl}" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span>${words.liveWatchYoutube || ''}</span></a><button class="live-chat-button" type="button" data-live-chat-toggle aria-expanded="false" aria-controls="liveChatPanel"><i class="bi bi-chat-dots-fill" aria-hidden="true"></i><span>${words.liveChat || ''}</span></button></div></div><section class="live-chat-panel" id="liveChatPanel" data-live-chat-panel data-chat-url="${chatUrl}" hidden><header class="live-chat-heading"><div><span class="live-chat-heading-icon"><i class="bi bi-chat-square-text-fill" aria-hidden="true"></i></span><div><h2>${words.liveChat || ''}</h2><p>${words.liveChatNote || ''}</p></div></div><button class="live-chat-close" type="button" data-live-chat-close aria-label="${words.close || 'Close'}"><i class="bi bi-x-lg" aria-hidden="true"></i></button></header><div class="live-chat-frame"><iframe title="Maa Meldi Dham YouTube live chat" loading="lazy" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" data-live-chat-frame></iframe></div></section></article><aside class="live-schedule-card"><div class="live-schedule-icon"><i class="bi bi-bell-fill" aria-hidden="true"></i></div><span class="live-schedule-eyebrow">${words.aartiEyebrow || ''}</span><h2>${words.liveScheduleHeading || ''}</h2><p class="live-schedule-note">${words.liveScheduleNote || ''}</p><div class="live-aarti-times"><div class="live-aarti-time"><span class="live-time-icon"><i class="bi bi-sunrise-fill" aria-hidden="true"></i></span><span><small>${words.morningAarti || ''}</small><strong>${words.morningAartiTime || ''}</strong></span></div><div class="live-aarti-time"><span class="live-time-icon evening"><i class="bi bi-sunset-fill" aria-hidden="true"></i></span><span><small>${words.eveningAarti || ''}</small><strong>${words.eveningAartiTime || ''}</strong></span></div></div><a class="live-aarti-link" href="index.html#aarti"><span>${words.aartiTitle || ''}</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></aside></div></div></section>`;
  }

  const safeReadLanguage = () => {
    try { return localStorage.getItem('temple-language'); } catch { return null; }
  };
  const safeSaveLanguage = value => {
    try { localStorage.setItem('temple-language', value); } catch { /* The selected language still applies until navigation. */ }
  };

  function setTranslatedText(element, value) {
    const icon = element.querySelector('i');
    if (!icon) {
      element.textContent = value;
      return;
    }
    const textNode = [...element.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.nodeValue = `${value} `;
    else element.insertBefore(document.createTextNode(`${value} `), icon);
    [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node !== textNode).forEach(node => node.remove());
  }

  function renderFaqs(language) {
    const section = document.querySelector('.faq-section');
    const list = section?.querySelector('[data-faq-list]');
    const content = faqContent[language] || faqContent.gu;
    if (!section || !list) return;
    section.querySelector('[data-faq-eyebrow]').textContent = content.eyebrow;
    section.querySelector('[data-faq-title]').textContent = content.title;
    section.querySelector('[data-faq-intro]').textContent = content.intro;
    list.replaceChildren(...content.items.map(([question, answer, href, linkLabel], index) => {
      const item = document.createElement('details');
      item.className = 'faq-item';
      if (index === 0) item.open = true;
      const summary = document.createElement('summary');
      summary.textContent = question;
      const panel = document.createElement('div');
      panel.className = 'faq-answer';
      const paragraph = document.createElement('p');
      paragraph.textContent = answer;
      panel.append(paragraph);
      if (href && linkLabel) {
        const link = document.createElement('a');
        link.href = href;
        link.className = 'faq-link';
        link.textContent = linkLabel;
        panel.append(link);
      }
      item.append(summary, panel);
      return item;
    }));
  }

  function applyLanguage(language, announce = false) {
    const code = translations[language] ? language : 'gu';
    const words = translations[code] || {};
    document.documentElement.lang = code;
    renderFaqs(code);
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = words[element.dataset.i18n];
      if (value !== undefined) setTranslatedText(element, value);
    });
    const thought = document.querySelector('[data-i18n="thoughtText"]');
    if (thought) {
      const today = new Date();
      const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
      const quotes = dailyThoughts[code] || dailyThoughts.gu;
      thought.textContent = quotes[dayNumber % quotes.length];
    }
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const value = words[element.dataset.i18nPlaceholder];
      if (value !== undefined) element.placeholder = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const value = words[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    const subtitle = document.querySelector('.brand-subtitle');
    if (subtitle) subtitle.lang = code;
    const selected = languageOptions.find(option => option.dataset.language === code);
    if (selectedLanguage && selected) selectedLanguage.textContent = selected.dataset.label;
    languageOptions.forEach(option => option.setAttribute('aria-pressed', String(option === selected)));
    safeSaveLanguage(code);

    if (pageKey === 'contact' && pageContent) {
      pageContent.innerHTML = contactPageMarkup(words);
      document.title = `${words.contactPageTitle || 'Contact'} | Shree Ugtai Meldi Mataji Mandir`;
    } else if (pageKey === 'live-darshan' && pageContent) {
      pageContent.innerHTML = liveDarshanMarkup(words);
      document.title = `${words.liveHeading || words.liveTitle || 'Live Darshan'} | Shree Ugtai Meldi Mataji Mandir`;
    } else if (pageKey === 'events' && pageContent) {
      pageContent.innerHTML = eventsPageMarkup(words);
      document.title = `${words.eventsPageTitle || 'Events'} | Shree Ugtai Meldi Mataji Mandir`;
    } else if (pageKey === 'gallery' && pageContent) {
      pageContent.innerHTML = galleryPageMarkup(words);
      document.title = `${words.galleryTitle || 'Gallery'} | Shree Ugtai Meldi Mataji Mandir`;
    } else if (pageKey === 'donation' && pageContent) {
      pageContent.innerHTML = donationPageMarkup(words);
      document.title = `${words.donationPageTitle || 'Donation'} | Shree Ugtai Meldi Mataji Mandir`;
    } else if (pageKey !== 'home' && pageKey !== 'about' && pageKey !== 'contact' && pageContent && pageInfo[pageKey]) {
      const [titleKey, introKey, noteKey] = pageInfo[pageKey];
      pageContent.innerHTML = `<section class="welcome-section"><div class="welcome-inner"><span class="page-eyebrow">${words.pageEyebrow || ''}</span><h1>${words[titleKey] || ''}</h1><p class="welcome-intro">${words[introKey] || ''}</p><div class="welcome-note"><i class="bi bi-flower1" aria-hidden="true"></i><p>${words[noteKey] || ''}</p></div></div></section>`;
      document.title = `${words[titleKey] || 'Mandir'} | Shree Ugtai Meldi Mataji Mandir`;
    } else if (pageKey === 'home') {
      document.title = `${words.heroTitle || 'Shree Ugtai Meldi Mataji Mandir'} | Shree Ugtai Meldi Mataji Mandir`;
    } else if (pageKey === 'about') {
      document.title = `${words.aboutHeroTitle || 'About the Mandir'} | Shree Ugtai Meldi Mataji Mandir`;
    }
    if (announce) document.dispatchEvent(new CustomEvent('temple:languagechange', { detail: { language: code } }));
  }

  applyLanguage(safeReadLanguage() || 'gu');
  setupGujaratiCalendar();
  languageOptions.forEach(option => option.addEventListener('click', () => applyLanguage(option.dataset.language, true)));
  document.addEventListener('input', event => {
    if (event.target instanceof HTMLInputElement && event.target.name === 'phone') event.target.value = event.target.value.replace(/\D/g, '').slice(0, 10);
  });
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const toggle = event.target.closest('[data-live-chat-toggle]');
    const close = event.target.closest('[data-live-chat-close]');
    if (!toggle && !close) return;
    const panel = document.querySelector('[data-live-chat-panel]');
    const frame = panel?.querySelector('[data-live-chat-frame]');
    if (!panel || !frame) return;
    const open = Boolean(toggle && panel.hidden);
    panel.hidden = !open;
    document.querySelector('[data-live-chat-toggle]')?.setAttribute('aria-expanded', String(open));
    if (open) frame.src = panel.dataset.chatUrl || '';
    else frame.removeAttribute('src');
  });
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const filter = event.target.closest('[data-gallery-filter]');
    if (filter) {
      const category = filter.dataset.galleryFilter;
      document.querySelectorAll('[data-gallery-filter]').forEach(button => {
        const active = button === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      document.querySelectorAll('.gallery-photo').forEach(photo => { photo.hidden = category !== 'all' && photo.dataset.galleryCategory !== category; });
      return;
    }
    const photo = event.target.closest('[data-gallery-open]');
    const close = event.target.closest('[data-gallery-close]');
    const dialog = document.querySelector('[data-gallery-dialog]');
    if (!dialog) return;
    if (photo) {
      const image = dialog.querySelector('[data-gallery-dialog-image]');
      const caption = dialog.querySelector('[data-gallery-dialog-caption]');
      const words = translations[document.documentElement.lang] || translations.gu || {};
      image.src = photo.dataset.gallerySrc;
      image.alt = words[photo.dataset.galleryCaptionKey] || '';
      caption.textContent = image.alt;
      dialog.showModal();
    } else if (close || event.target === dialog) dialog.close();
  });
  document.addEventListener('click', async event => {
    if (!(event.target instanceof Element) || !event.target.closest('[data-receipt-download]')) return;
    const paper = document.querySelector('[data-receipt-paper]');
    if (!paper || !window.html2pdf) return;
    const id = document.querySelector('[data-receipt-id]')?.textContent || 'Meldi-Dham-Receipt';
    const pdfUri = await createDonationPdf(paper);
    const link = document.createElement('a'); link.href = pdfUri; link.download = `${id}.pdf`; document.body.append(link); link.click(); link.remove();
  });
  const sessionKey = 'meldi-session-v1';
  const readSession = () => {
    try { return JSON.parse(localStorage.getItem(sessionKey) || 'null'); } catch { return null; }
  };
  const session = readSession();
  document.querySelectorAll('[data-auth="signed-out"]').forEach(item => { item.hidden = Boolean(session?.userId); });
  document.querySelectorAll('[data-auth="signed-in"]').forEach(item => { item.hidden = !session?.userId; });
  document.querySelectorAll('[data-auth-logout]').forEach(button => button.addEventListener('click', () => {
    try { localStorage.removeItem(sessionKey); } catch { /* Continue to the home page if storage is unavailable. */ }
    window.location.href = 'index.html';
  }));

  document.addEventListener('submit', event => {
    const form = event.target;
    if (form instanceof HTMLFormElement && form.matches('[data-donation-form]')) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const language = document.documentElement.lang;
      const statusText = {
        gu: { setup: 'PDF તૈયાર છે. EmailJS સેટઅપ કર્યા પછી જ રસીદ ઈમેલ કરી શકાશે.', sending: 'રસીદ PDF ઈમેલ થઈ રહી છે…', sent: 'રસીદ PDF તમારા ઈમેલ પર મોકલી છે.', failed: 'ઈમેલ મોકલી શકાયો નથી. PDF ડાઉનલોડ કરીને સાચવો.' },
        hi: { setup: 'PDF तैयार है। EmailJS सेटअप के बाद ही रसीद ईमेल की जा सकेगी।', sending: 'रसीद PDF ईमेल हो रही है…', sent: 'रसीद PDF आपके ईमेल पर भेज दी गई।', failed: 'ईमेल नहीं भेजा जा सका। PDF डाउनलोड करके सहेजें।' },
        en: { setup: 'PDF is ready. Configure EmailJS to email the receipt.', sending: 'Emailing the receipt PDF…', sent: 'The receipt PDF was sent to your email.', failed: 'Email could not be sent. Download and save the PDF.' }
      }[language] || {};
      const data = new FormData(form);
      const now = new Date();
      const receiptId = `MD-${now.toISOString().slice(0,10).replaceAll('-','')}-${Math.random().toString(36).slice(2,7).toUpperCase()}`;
      const setReceipt = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
      const receipt = document.querySelector('[data-donation-receipt]');
      const paper = document.querySelector('[data-receipt-paper]');
      const status = form.querySelector('[data-donation-status]');
      const reference = String(data.get('reference') || '').trim();
      setReceipt('[data-receipt-id]', receiptId);
      setReceipt('[data-receipt-date]', new Intl.DateTimeFormat(language, { dateStyle: 'long' }).format(now));
      setReceipt('[data-receipt-name]', String(data.get('donorName')).trim());
      const phone = String(data.get('phone') || '').trim();
      setReceipt('[data-receipt-phone]', phone);
      const phoneRow = document.querySelector('[data-receipt-phone-row]');
      if (phoneRow) phoneRow.hidden = !phone;
      setReceipt('[data-receipt-amount]', new Intl.NumberFormat(language, { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(data.get('amount'))));
      setReceipt('[data-receipt-purpose]', String(data.get('purpose')));
      setReceipt('[data-receipt-mode]', String(data.get('paymentMethod')));
      setReceipt('[data-receipt-reference]', reference);
      const referenceRow = document.querySelector('[data-receipt-reference-row]');
      if (referenceRow) referenceRow.hidden = !reference;
      receipt.hidden = false;
      receipt.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      (async () => {
        try {
          const pdfUri = await createDonationPdf(paper);
          const link = document.createElement('a');
          link.href = pdfUri;
          link.download = `${receiptId}.pdf`;
          document.body.append(link);
          link.click();
          link.remove();
          const config = window.templeDonationConfig || {};
          if (!config.publicKey || !config.serviceId || !config.templateId || !window.emailjs) {
            status.textContent = statusText.setup;
            return;
          }
          status.textContent = statusText.sending;
          window.emailjs.init({ publicKey: config.publicKey, limitRate: { id: 'meldi-donation-receipt', throttle: 3000 } });
          await window.emailjs.send(config.serviceId, config.templateId, {
            to_email: String(data.get('donorEmail')).trim(), donor_name: String(data.get('donorName')).trim(), donor_phone: phone, receipt_id: receiptId,
            donation_amount: new Intl.NumberFormat(language, { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(data.get('amount'))),
            donation_purpose: String(data.get('purpose')), payment_method: String(data.get('paymentMethod')), transaction_reference: reference || '—',
            receipt_date: new Intl.DateTimeFormat(language, { dateStyle: 'long' }).format(now), receipt_pdf: pdfUri
          });
          status.textContent = statusText.sent;
        } catch (error) {
          console.error('Donation receipt generation/email failed:', error);
          status.textContent = statusText.failed;
        }
      })();
      return;
    }
    if (!(form instanceof HTMLFormElement) || !form.matches('[data-contact-form]')) return;
    event.preventDefault();
    if (!form.reportValidity()) return;
    const words = translations[document.documentElement.lang] || translations.gu || {};
    const status = form.querySelector('[data-contact-form-status]');
    const recipient = document.body.dataset.contactEmail?.trim();
    if (!recipient) {
      if (status) status.textContent = words.contactEmailMissing || 'The mandir contact email is not configured. Your message was not sent.';
      return;
    }
    const values = new FormData(form);
    const subject = `[Maa Meldi Dham] ${values.get('subject')}`;
    const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (status) status.textContent = words.contactEmailOpened || 'Your email app opened with the message. Review it before sending.';
  });

  const header = document.getElementById('siteHeader');
  const currentYear = document.getElementById('currentYear');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
  const backToTopButton = document.getElementById('backToTop');
  const progressCircle = backToTopButton?.querySelector('.progress-value');
  const progressCircumference = 2 * Math.PI * 17;
  if (progressCircle) {
    progressCircle.style.strokeDasharray = String(progressCircumference);
    progressCircle.style.strokeDashoffset = String(progressCircumference);
  }
  const updateScrollProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    if (progressCircle) progressCircle.style.strokeDashoffset = String(progressCircumference * (1 - progress));
    backToTopButton?.style.setProperty('--scroll-progress', `${Math.round(progress * 100)}%`);
    const visible = window.scrollY > 180;
    backToTopButton?.classList.toggle('is-visible', visible);
    backToTopButton?.setAttribute('aria-hidden', String(!visible));
    if (backToTopButton) backToTopButton.tabIndex = visible ? 0 : -1;
  };
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  const updateScrollUI = () => { updateHeader(); updateScrollProgress(); };
  updateScrollUI();
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  backToTopButton?.addEventListener('click', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = [...document.querySelectorAll('.primary-nav .nav-link')];
  const currentLink = navLinks.find(link => link.getAttribute('href')?.split('/').pop() === currentFile) || navLinks[0];
  navLinks.forEach(link => {
    const active = link === currentLink;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    link.addEventListener('click', () => {
      const nav = document.getElementById('headerNavigation');
      if (window.innerWidth < 1200 && nav?.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });

  function setupAartiPlayers() {
    const formatTime = seconds => {
      if (!Number.isFinite(seconds)) return '--:--';
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${minutes}:${remainingSeconds}`;
    };
    const words = () => translations[document.documentElement.lang] || translations.gu || {};
    const players = [...document.querySelectorAll('.aarti-card.has-audio')];
    players.forEach(card => {
      const audio = card.querySelector('[data-aarti-audio]');
      const button = card.querySelector('[data-aarti-toggle]');
      const seek = card.querySelector('[data-aarti-seek]');
      const current = card.querySelector('[data-aarti-current]');
      const duration = card.querySelector('[data-aarti-duration]');
      if (!audio || !button || !seek || !current || !duration) return;

      const updateButton = () => {
        const playing = !audio.paused;
        button.innerHTML = playing
          ? '<i class="bi bi-pause-fill" aria-hidden="true"></i>'
          : '<i class="bi bi-play-fill" aria-hidden="true"></i>';
        button.setAttribute('aria-label', words()[playing ? 'pauseAartiAudio' : 'playAartiAudio'] || (playing ? 'Pause aarti' : 'Play aarti'));
      };
      const updateProgress = () => {
        current.textContent = formatTime(audio.currentTime);
        if (Number.isFinite(audio.duration) && audio.duration > 0) {
          duration.textContent = formatTime(audio.duration);
          seek.value = String((audio.currentTime / audio.duration) * 100);
        }
      };

      button.addEventListener('click', () => {
        if (audio.paused) {
          players.forEach(otherCard => {
            const otherAudio = otherCard.querySelector('[data-aarti-audio]');
            if (otherAudio && otherAudio !== audio) otherAudio.pause();
          });
          audio.play().catch(() => {});
        } else audio.pause();
      });
      seek.addEventListener('input', () => {
        if (Number.isFinite(audio.duration) && audio.duration > 0) {
          audio.currentTime = (Number(seek.value) / 100) * audio.duration;
        }
      });
      audio.addEventListener('loadedmetadata', updateProgress);
      audio.addEventListener('durationchange', updateProgress);
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('play', updateButton);
      audio.addEventListener('pause', updateButton);
      audio.addEventListener('ended', () => {
        updateButton();
        updateProgress();
      });
      updateButton();
    });
  }
  setupAartiPlayers();

  function setupChoghadiya() {
    if (!document.querySelector('.choghadiya-panel')) return;
    const longitude = 72.33835438863909;
    const latitude = 23.36026124473463;
    const timezoneMinutes = 330;
    const cycle = ['udveg', 'chal', 'labh', 'amrit', 'kaal', 'shubh', 'rog'];
    const dayStarts = [0, 3, 6, 2, 5, 1, 4];
    const nightStarts = [5, 1, 4, 0, 3, 6, 2];
    const favorable = new Set(['amrit', 'shubh', 'labh']);
    const words = () => translations[document.documentElement.lang] || translations.gu || {};
    const localParts = date => Object.fromEntries(new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata', year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', hourCycle: 'h23'
    }).formatToParts(date).filter(part => part.type !== 'literal').map(part => [part.type, Number(part.value)]));
    const solarTimes = (year, month, day) => {
      const dayOfYear = Math.floor((Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 0)) / 86400000);
      const longitudeHour = longitude / 15;
      const radians = degrees => degrees * Math.PI / 180;
      const degrees = radiansValue => radiansValue * 180 / Math.PI;
      const normalize = value => (value % 360 + 360) % 360;
      const solarEvent = sunrise => {
        const approx = dayOfYear + ((sunrise ? 6 : 18) - longitudeHour) / 24;
        const meanAnomaly = 0.9856 * approx - 3.289;
        const trueLongitude = normalize(meanAnomaly + 1.916 * Math.sin(radians(meanAnomaly)) + 0.020 * Math.sin(2 * radians(meanAnomaly)) + 282.634);
        let rightAscension = normalize(degrees(Math.atan(0.91764 * Math.tan(radians(trueLongitude)))));
        rightAscension += Math.floor(trueLongitude / 90) * 90 - Math.floor(rightAscension / 90) * 90;
        rightAscension /= 15;
        const sinDeclination = 0.39782 * Math.sin(radians(trueLongitude));
        const cosDeclination = Math.cos(Math.asin(sinDeclination));
        const cosHourAngle = (Math.cos(radians(90.833)) - sinDeclination * Math.sin(radians(latitude))) / (cosDeclination * Math.cos(radians(latitude)));
        const hourAngle = (sunrise ? 360 - degrees(Math.acos(cosHourAngle)) : degrees(Math.acos(cosHourAngle))) / 15;
        const localMeanTime = hourAngle + rightAscension - 0.06571 * approx - 6.622;
        const utcMinutes = ((localMeanTime - longitudeHour) % 24 + 24) % 24 * 60;
        return Math.round((utcMinutes + timezoneMinutes) % 1440);
      };
      return { sunrise: solarEvent(true), sunset: solarEvent(false) };
    };
    const formatTime = minutes => {
      const clockMinutes = (Math.round(minutes) % 1440 + 1440) % 1440;
      const hour = Math.floor(clockMinutes / 60);
      const minute = clockMinutes % 60;
      return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
    };
    const renderList = (list, startMinute, duration, startIndex, nowMinute, isNight, sunriseMinute) => {
      list.replaceChildren();
      for (let index = 0; index < 8; index += 1) {
        const start = startMinute + duration * index;
        const end = startMinute + duration * (index + 1);
        const type = cycle[(startIndex + index) % cycle.length];
        const nightNow = nowMinute < sunriseMinute ? nowMinute + 1440 : nowMinute;
        const isCurrent = isNight
          ? nightNow >= start && nightNow < end
          : nowMinute >= start && nowMinute < end;
        const kind = favorable.has(type) ? 'favorable' : type === 'chal' ? 'neutral' : 'avoid';
        const item = document.createElement('li');
        item.className = `choghadiya-item is-${kind}${isCurrent ? ' is-current' : ''}`;
        if (isCurrent) item.setAttribute('aria-current', 'time');
        const name = document.createElement('strong');
        name.textContent = words()[`chog${type[0].toUpperCase()}${type.slice(1)}`] || type;
        const time = document.createElement('time');
        time.textContent = `${formatTime(start)} – ${formatTime(end)}`;
        const quality = document.createElement('span');
        quality.className = 'choghadiya-quality';
        quality.textContent = words()[kind === 'favorable' ? 'choghadiyaAuspicious' : kind === 'neutral' ? 'choghadiyaNeutral' : 'choghadiyaAvoid'] || kind;
        item.append(name, time, quality);
        if (isCurrent) {
          const current = document.createElement('span');
          current.className = 'choghadiya-current';
          current.textContent = words().choghadiyaCurrent || 'Now';
          item.append(current);
        }
        list.append(item);
      }
    };

    const render = () => {
      const panels = document.querySelectorAll('.choghadiya-panel');
      if (!panels.length) return;
      const now = new Date();
      const parts = localParts(now);
      const weekday = new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay();
      const { sunrise, sunset } = solarTimes(parts.year, parts.month, parts.day);
      const dayDuration = (sunset - sunrise) / 8;
      const nightDuration = (1440 - sunset + sunrise) / 8;
      const nowMinute = parts.hour * 60 + parts.minute;
      const dateLabel = new Intl.DateTimeFormat(document.documentElement.lang === 'hi' ? 'hi-IN' : document.documentElement.lang === 'en' ? 'en-IN' : 'gu-IN', {
        timeZone: 'Asia/Kolkata', dateStyle: 'full'
      }).format(now);
      panels.forEach(panel => {
        const date = panel.querySelector('[data-choghadiya-date]');
        if (date) date.textContent = dateLabel;
        const dayList = panel.querySelector('[data-choghadiya-list="day"]');
        const nightList = panel.querySelector('[data-choghadiya-list="night"]');
        if (dayList) renderList(dayList, sunrise, dayDuration, dayStarts[weekday], nowMinute, false, sunrise);
        if (nightList) renderList(nightList, sunset, nightDuration, nightStarts[weekday], nowMinute, true, sunrise);
      });
    };

    render();
    document.addEventListener('temple:languagechange', render);
    window.setInterval(render, 60000);
  }
  setupChoghadiya();

  function setupGujaratiCalendar() {
    const button = document.querySelector('[data-calendar-button]');
    const card = document.getElementById('gujaratiCalendarCard');
    if (!button || !card) return;
    const copy = {
      gu: { button:'ગુજરાતી પંચાંગ', place:'માઁ મેલડી ધામ · જાસલપુર', loading:'આજનું પંચાંગ મેળવી રહ્યા છીએ…', error:'પંચાંગ હમણાં મેળવી શકાયું નથી. ઇન્ટરનેટ જોડાણ તપાસીને ફરી પ્રયાસ કરો.', retry:'ફરી પ્રયાસ કરો', date:'તારીખ અને વાર', year:'સંવત્સર', monthLine:'માસ-પક્ષ-તિથિ', more:'અન્ય માહિતી', badge:'સૂક્ષ્મ પંચાંગ વિગતો', weekday:'gu-IN', paksha:{Shukla:'સુદ',Krishna:'વદ'}, tithis:['પડવો','બીજ','ત્રીજ','ચોથ','પાંચમ','છઠ્ઠ','સાતમ','આઠમ','નોમ','દસમ','અગિયારસ','બારસ','તેરસ','ચૌદસ','પૂનમ','અમાસ'], months:{Chaitra:'ચૈત્ર',Vaishakha:'વૈશાખ',Jyeshtha:'જેઠ',Ashadha:'અષાઢ',Shravana:'શ્રાવણ',Bhadrapada:'ભાદરવો',Ashwina:'આસો',Ashvina:'આસો',Ashwin:'આસો',Kartika:'કારતક',Margashirsha:'માગશર',Agrahayana:'માગશર',Pausha:'પોષ',Magha:'મહા',Phalguna:'ફાગણ'}, sun:['સૂર્યોદય','સૂર્યાસ્ત','ચંદ્રોદય','ચંદ્રાસ્ત'], muhurta:'શુભ સમય', inauspicious:'અશુભ સમય', ends:'સુધી', tithiWas:'સુધી હતી', fields:{tithi:'તિથિ',nakshatra:'નક્ષત્ર',yoga:'યોગ',karana:'કરણ',moon:'ચંદ્રરાશિ',sun:'સૂર્યરાશિ',abhijit:'અભિજિત મુહૂર્ત',rahu:'રાહુકાળ',gulika:'ગુલિક કાળ',yamaganda:'યમગંડ'}, nakshatras:['અશ્વિની','ભરણી','કૃતિકા','રોહિણી','મૃગશીર્ષ','આર્દ્રા','પુનર્વસુ','પુષ્ય','આશ્લેષા','મઘા','પૂર્વા ફાલ્ગુની','ઉત્તરા ફાલ્ગુની','હસ્ત','ચિત્રા','સ્વાતિ','વિશાખા','અનુરાધા','જ્યેષ્ઠા','મૂળ','પૂર્વાષાઢા','ઉત્તરાષાઢા','શ્રવણ','ધનિષ્ઠા','શતભિષા','પૂર્વા ભાદ્રપદ','ઉત્તરા ભાદ્રપદ','રેવતી'], signs:{Aries:'મેષ',Taurus:'વૃષભ',Gemini:'મિથુન',Cancer:'કર્ક',Leo:'સિંહ',Virgo:'કન્યા',Libra:'તુલા',Scorpio:'વૃશ્ચિક',Sagittarius:'ધનુ',Capricorn:'મકર',Aquarius:'કુંભ',Pisces:'મીન'}, yogaNames:{Shukla:'શુક્લ',Brahma:'બ્રહ્મ',Priti:'પ્રીતિ',Ayushman:'આયુષ્માન',Saubhagya:'સૌભાગ્ય',Shobhana:'શોભન',Atiganda:'અતિગંડ',Sukarma:'સુકર્મા',Dhriti:'ધૃતિ',Shula:'શૂલ',Ganda:'ગંડ',Vriddhi:'વૃદ્ધિ',Dhruva:'ધ્રુવ',Vyaghata:'વ્યાઘાત',Harshana:'હર્ષણ',Vajra:'વજ્ર',Siddhi:'સિદ્ધિ',Vyatipata:'વ્યતિપાત',Variyana:'વરીયાન',Parigha:'પરિઘ',Shiva:'શિવ',Siddha:'સિદ્ધ',Sadhya:'સાધ્ય',Shubha:'શુભ',Indra:'ઇન્દ્ર',Vaidhriti:'વૈધૃતિ'}, karanaNames:{Bava:'બવ',Balava:'બાલવ',Kaulava:'કૌલવ',Taitila:'તૈતિલ',Garaja:'ગર',Gara:'ગર',Vanija:'વણિજ',Vishti:'વિષ્ટિ',Shakuni:'શકુનિ',Chatushpada:'ચતુષ્પદ',Naga:'નાગ',Kimstughna:'કિંસ્તુઘ્ન'} },
      hi: { button:'गुजराती पंचांग',place:'माँ मेलडी धाम · जसालपुर',loading:'आज का पंचांग प्राप्त हो रहा है…',error:'पंचांग अभी प्राप्त नहीं हो सका। इंटरनेट जाँचकर फिर कोशिश करें।',retry:'फिर कोशिश करें',date:'तारीख और वार',year:'संवत्सर',monthLine:'मास-पक्ष-तिथि',more:'अन्य जानकारी',badge:'सूक्ष्म पंचांग विवरण',weekday:'hi-IN',paksha:{Shukla:'शुक्ल',Krishna:'कृष्ण'},tithis:['प्रतिपदा','द्वितीया','तृतीया','चतुर्थी','पंचमी','षष्ठी','सप्तमी','अष्टमी','नवमी','दशमी','एकादशी','द्वादशी','त्रयोदशी','चतुर्दशी','पूर्णिमा','अमावस्या'],months:{Chaitra:'चैत्र',Vaishakha:'वैशाख',Jyeshtha:'ज्येष्ठ',Ashadha:'आषाढ़',Shravana:'श्रावण',Bhadrapada:'भाद्रपद',Ashwina:'आश्विन',Ashvina:'आश्विन',Ashwin:'आश्विन',Kartika:'कार्तिक',Margashirsha:'मार्गशीर्ष',Agrahayana:'मार्गशीर्ष',Pausha:'पौष',Magha:'माघ',Phalguna:'फाल्गुन'},sun:['सूर्योदय','सूर्यास्त','चंद्रोदय','चंद्रास्त'],muhurta:'शुभ समय',inauspicious:'अशुभ समय',ends:'तक',tithiWas:'तक थी',fields:{tithi:'तिथि',nakshatra:'नक्षत्र',yoga:'योग',karana:'करण',moon:'चंद्र राशि',sun:'सूर्य राशि',abhijit:'अभिजित मुहूर्त',rahu:'राहु काल',gulika:'गुलिक काल',yamaganda:'यमगंड'},nakshatras:['अश्विनी','भरणी','कृत्तिका','रोहिणी','मृगशिरा','आर्द्रा','पुनर्वसु','पुष्य','आश्लेषा','मघा','पूर्वा फाल्गुनी','उत्तरा फाल्गुनी','हस्त','चित्रा','स्वाति','विशाखा','अनुराधा','ज्येष्ठा','मूल','पूर्वाषाढ़ा','उत्तराषाढ़ा','श्रवण','धनिष्ठा','शतभिषा','पूर्वा भाद्रपद','उत्तरा भाद्रपद','रेवती'],signs:{Aries:'मेष',Taurus:'वृषभ',Gemini:'मिथुन',Cancer:'कर्क',Leo:'सिंह',Virgo:'कन्या',Libra:'तुला',Scorpio:'वृश्चिक',Sagittarius:'धनु',Capricorn:'मकर',Aquarius:'कुंभ',Pisces:'मीन'},yogaNames:{Shukla:'शुक्ल',Brahma:'ब्रह्म',Priti:'प्रीति',Ayushman:'आयुष्मान',Saubhagya:'सौभाग्य',Shobhana:'शोभन',Atiganda:'अतिगंड',Sukarma:'सुकर्मा',Dhriti:'धृति',Shula:'शूल',Ganda:'गंड',Vriddhi:'वृद्धि',Dhruva:'ध्रुव',Vyaghata:'व्याघात',Harshana:'हर्षण',Vajra:'वज्र',Siddhi:'सिद्धि',Vyatipata:'व्यतिपात',Variyana:'वरीयान',Parigha:'परिघ',Shiva:'शिव',Siddha:'सिद्ध',Sadhya:'साध्य',Shubha:'शुभ',Indra:'इंद्र',Vaidhriti:'वैधृति'},karanaNames:{Bava:'बव',Balava:'बालव',Kaulava:'कौलव',Taitila:'तैतिल',Garaja:'गर',Gara:'गर',Vanija:'वणिज',Vishti:'विष्टि',Shakuni:'शकुनि',Chatushpada:'चतुष्पद',Naga:'नाग',Kimstughna:'किंस्तुघ्न'} },
      en: { button:'Gujarati Panchang',place:'Maa Meldi Dham · Jasalpur',loading:'Fetching today’s panchang…',error:'Panchang could not be loaded. Check your connection and try again.',retry:'Try again',date:'Date and weekday',year:'Samvatsara',monthLine:'Month · paksha · tithi',more:'Other information',badge:'Panchang details',weekday:'en-IN',paksha:{Shukla:'Shukla',Krishna:'Krishna'},tithis:['Pratipada','Dwitiya','Tritiya','Chaturthi','Panchami','Shashthi','Saptami','Ashtami','Navami','Dashami','Ekadashi','Dwadashi','Trayodashi','Chaturdashi','Purnima','Amavasya'],months:{Chaitra:'Chaitra',Vaishakha:'Vaishakha',Jyeshtha:'Jyeshtha',Ashadha:'Ashadha',Shravana:'Shravana',Bhadrapada:'Bhadrapada',Ashwina:'Ashwina',Ashvina:'Ashwina',Ashwin:'Ashwina',Kartika:'Kartika',Margashirsha:'Margashirsha',Agrahayana:'Margashirsha',Pausha:'Pausha',Magha:'Magha',Phalguna:'Phalguna'},sun:['Sunrise','Sunset','Moonrise','Moonset'],muhurta:'Favorable time',inauspicious:'Avoid',ends:'until',tithiWas:'had ended at',fields:{tithi:'Tithi',nakshatra:'Nakshatra',yoga:'Yoga',karana:'Karana',moon:'Moon sign',sun:'Sun sign',abhijit:'Abhijit Muhurta',rahu:'Rahu Kaal',gulika:'Gulika Kaal',yamaganda:'Yamaganda'},nakshatras:['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'],signs:{Aries:'Aries',Taurus:'Taurus',Gemini:'Gemini',Cancer:'Cancer',Leo:'Leo',Virgo:'Virgo',Libra:'Libra',Scorpio:'Scorpio',Sagittarius:'Sagittarius',Capricorn:'Capricorn',Aquarius:'Aquarius',Pisces:'Pisces'},yogaNames:{Shukla:'Shukla',Brahma:'Brahma',Priti:'Priti',Ayushman:'Ayushman',Saubhagya:'Saubhagya',Shobhana:'Shobhana',Atiganda:'Atiganda',Sukarma:'Sukarma',Dhriti:'Dhriti',Shula:'Shula',Ganda:'Ganda',Vriddhi:'Vriddhi',Dhruva:'Dhruva',Vyaghata:'Vyaghata',Harshana:'Harshana',Vajra:'Vajra',Siddhi:'Siddhi',Vyatipata:'Vyatipata',Variyana:'Variyana',Parigha:'Parigha',Shiva:'Shiva',Siddha:'Siddha',Sadhya:'Sadhya',Shubha:'Shubha',Indra:'Indra',Vaidhriti:'Vaidhriti'},karanaNames:{Bava:'Bava',Balava:'Balava',Kaulava:'Kaulava',Taitila:'Taitila',Garaja:'Garaja',Gara:'Gara',Vanija:'Vanija',Vishti:'Vishti',Shakuni:'Shakuni',Chatushpada:'Chatushpada',Naga:'Naga',Kimstughna:'Kimstughna'} }
    };
    let latestData = null;
    let failedDate = null;
    const dateForIndia = () => Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit' }).formatToParts(new Date()).filter(part => part.type !== 'literal').map(part => [part.type,part.value]));
    const dateLocale = () => document.documentElement.lang === 'hi' ? 'hi-IN' : document.documentElement.lang === 'en' ? 'en-IN' : 'gu-IN';
    const tithiIndexFor = value => {
      const names=['Pratipada','Dwitiya','Tritiya','Chaturthi','Panchami','Shashthi','Saptami','Ashtami','Navami','Dashami','Ekadashi','Dwadashi','Trayodashi','Chaturdashi','Purnima','Amavasya'];
      let index=names.findIndex(name => new RegExp(`\\b${name}\\b`,'i').test(String(value||'')));
      if(index<0 && /\b(Sashti|Shashti)\b/i.test(String(value||''))) index=5;
      return index;
    };
    const tithiForCurrentTime = panchang => {
      const sourceIndex=tithiIndexFor(panchang.tithi?.name);
      const sourcePaksha=panchang.paksha||'';
      const sourceMonth=panchang.month?.amanta||panchang.month?.purnimanta||'';
      const end=String(panchang.tithi?.end||'');
      const endClock=end.match(/(\d{1,2}):(\d{2})/);
      const dayOffset=Number(/\(\+(\d+)d\)/.exec(end)?.[1]||0);
      const nowParts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).filter(part=>part.type!=='literal').map(part=>[part.type,Number(part.value)]));
      const nowMinute=nowParts.hour*60+nowParts.minute;
      const endMinute=endClock?Number(endClock[1])*60+Number(endClock[2]):Infinity;
      const hasEnded=sourceIndex>=0&&dayOffset===0&&nowMinute>=endMinute;
      let index=sourceIndex;
      let paksha=sourcePaksha;
      let month=sourceMonth;
      if(hasEnded){
        if(sourceIndex===14){index=0;paksha='Krishna';}
        else if(sourceIndex===15){index=0;paksha='Shukla';const months=['Chaitra','Vaishakha','Jyeshtha','Ashadha','Shravana','Bhadrapada','Ashwina','Kartika','Margashirsha','Agrahayana','Pausha','Magha','Phalguna'];const monthIndex=months.findIndex(name=>name.toLowerCase()===sourceMonth.toLowerCase());if(monthIndex>=0)month=months[(monthIndex+1)%months.length];}
        else index=Math.min(sourceIndex+1,15);
      }
      return {index,paksha,month,hasEnded,sourceIndex,sourcePaksha,end};
    };
    const formatClock = value => {
      if(!value || typeof value !== 'string') return '—';
      const match=value.match(/(\d{1,2}):(\d{2})(?::\d{2})?/);
      if(!match) return value;
      const hour=Number(match[1]), minute=match[2];
      const suffix=hour<12?'AM':'PM';
      return `${hour%12||12}:${minute} ${suffix}${/\(\+1d\)/.test(value)?' (+1d)':''}`;
    };
    const formatEnd = (value, date) => {
      if(!value) return '';
      const match=String(value).match(/(\d{1,2}):(\d{2})(?::\d{2})?/);
      if(!match) return String(value);
      let dayOffset=/\(\+(\d+)d\)/.exec(String(value));
      const clock=formatClock(value).replace(/ \(\+1d\)/,'');
      const endDate=new Date(`${date}T12:00:00+05:30`);
      if(dayOffset) endDate.setUTCDate(endDate.getUTCDate()+Number(dayOffset[1]));
      const dateStr=new Intl.DateTimeFormat(dateLocale(),{timeZone:'Asia/Kolkata',day:'numeric',month:'short'}).format(endDate);
      return `${dateStr} ${clock}`;
    };
    const interval = period => period?.start && period?.end ? `${formatClock(period.start)} – ${formatClock(period.end)}` : '—';
    const translateName = (value, mapping) => mapping?.[value] || value || '—';
    const detailRow = (container, label, value, meta='', tone='') => {
      if(!value || value==='—') return;
      const row=document.createElement('div'); row.className=`calendar-detail-row${tone?` is-${tone}`:''}`;
      const marker=document.createElement('span'); marker.className='calendar-detail-marker';
      const name=document.createElement('strong'); name.textContent=label;
      const detail=document.createElement('div'); detail.className='calendar-detail-value';
      const main=document.createElement('strong'); main.textContent=value; detail.append(main);
      if(meta){ const note=document.createElement('small'); note.textContent=meta; detail.append(note); }
      row.append(marker,name,detail); container.append(row);
    };
    const render = panchang => {
      const language=copy[document.documentElement.lang]||copy.gu;
      const locale=dateLocale();
      const date=panchang.date;
      const dateValue=new Date(`${date}T12:00:00+05:30`);
      const weekday=new Intl.DateTimeFormat(locale,{timeZone:'Asia/Kolkata',weekday:'long'}).format(dateValue);
      const numericDate=new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',day:'numeric',month:'numeric',year:'numeric'}).format(dateValue);
      card.querySelector('[data-calendar-place]').textContent=language.place;
      card.querySelector('[data-calendar-date-label]').textContent=language.date;
      card.querySelector('[data-calendar-date]').textContent=`${numericDate} (${weekday})`;
      const calendarState=tithiForCurrentTime(panchang);
      const monthRaw=calendarState.month;
      const month=translateName(monthRaw,language.months);
      const paksha=calendarState.paksha;
      const vikrama=Number(panchang.samvat?.vikrama);
      const vikramYear=Number.isFinite(vikrama)?vikrama-(/ashwina|ashvina|ashwin/i.test(monthRaw)&&/krishna/i.test(paksha)?1:0):'—';
      const vikramLabel=document.documentElement.lang==='gu'?'વિક્રમ સંવત':document.documentElement.lang==='hi'?'विक्रम संवत':'Vikram Samvat';
      card.querySelector('[data-calendar-samvat]').textContent=`${language.year}: ${vikramLabel} ${vikramYear}`;
      const tithiRaw=panchang.tithi?.name||'';
      const tithiIndex=calendarState.index;
      const tithi=tithiIndex>=0?language.tithis[tithiIndex]:tithiRaw;
      const tithiPhrase=`${month} ${translateName(paksha,language.paksha)} - ${tithi}`.trim();
      card.querySelector('[data-calendar-month]').textContent=`${language.monthLine}: ${tithiPhrase}`;
      const sunGrid=card.querySelector('[data-calendar-sun]');
      const sunValues=[panchang.sunrise,panchang.sunset,panchang.moonrise,panchang.moonset];
      sunGrid.replaceChildren(...language.sun.map((label,index)=>{
        const item=document.createElement('div');item.className=`calendar-sun-tile calendar-sun-${index}`;
        const icon=document.createElement('span');icon.className='calendar-sun-icon';icon.innerHTML=['<i class="bi bi-sunrise-fill" aria-hidden="true"></i>','<i class="bi bi-sunset-fill" aria-hidden="true"></i>','<i class="bi bi-moon-stars-fill" aria-hidden="true"></i>','<i class="bi bi-moon-fill" aria-hidden="true"></i>'][index];
        const title=document.createElement('span');title.textContent=label;
        const value=document.createElement('strong');value.textContent=formatClock(sunValues[index]);
        item.append(icon,title,value);return item;
      }));
      const brahma=panchang.auspicious?.brahma_muhurta;
      const brahmaBox=card.querySelector('[data-calendar-brahma]');
      if(brahma?.start&&brahma?.end){
        brahmaBox.hidden=false;brahmaBox.replaceChildren();
        const icon=document.createElement('span');icon.className='calendar-brahma-icon';icon.innerHTML='<i class="bi bi-lamp-fill" aria-hidden="true"></i>';
        const text=document.createElement('div');text.className='calendar-brahma-copy';
        const title=document.createElement('strong');title.textContent=document.documentElement.lang==='hi'?'ब्रह्म मुहूर्त':document.documentElement.lang==='en'?'Brahma Muhurta':'બ્રહ્મ મુહૂર્ત';
        const time=document.createElement('span');time.textContent=`${formatClock(brahma.start)} ${language.ends} ${formatClock(brahma.end)}`;
        const quality=document.createElement('b');quality.textContent=language.muhurta;
        text.append(title,time);brahmaBox.append(icon,text,quality);
      }else brahmaBox.hidden=true;
      card.querySelector('[data-calendar-more-title]').textContent=language.more;
      card.querySelector('[data-calendar-method]').textContent=language.badge;
      const list=card.querySelector('[data-calendar-details]');list.replaceChildren();
      const previousTithi=calendarState.sourceIndex>=0?language.tithis[calendarState.sourceIndex]:tithiRaw;
      const tithiMeta=panchang.tithi?.end?`${calendarState.hasEnded?`${previousTithi} `:''}${formatEnd(panchang.tithi.end,date)} ${calendarState.hasEnded?language.tithiWas:language.ends}`:'';
      const nakMeta=panchang.nakshatra?.end?`${formatEnd(panchang.nakshatra.end,date)} ${language.ends}`:'';
      const yogaMeta=panchang.yoga?.end?`${formatEnd(panchang.yoga.end,date)} ${language.ends}`:'';
      const karanaMeta=panchang.karana?.end?`${formatEnd(panchang.karana.end,date)} ${language.ends}`:'';
      detailRow(list,language.fields.tithi,`${translateName(paksha,language.paksha)} - ${tithi}`,tithiMeta);
      const nIndex=language.nakshatras.findIndex((_,i)=>i===['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'].indexOf(panchang.nakshatra?.name));
      const nakName=nIndex>=0?language.nakshatras[nIndex]:panchang.nakshatra?.name;
      detailRow(list,language.fields.nakshatra,nakName,nakMeta);
      detailRow(list,language.fields.yoga,translateName(panchang.yoga?.name,language.yogaNames),yogaMeta);
      detailRow(list,language.fields.karana,translateName(panchang.karana?.name,language.karanaNames),karanaMeta);
      detailRow(list,language.fields.moon,translateName(panchang.signs?.moon?.name||panchang.signs?.moon,language.signs));
      detailRow(list,language.fields.sun,translateName(panchang.signs?.sun?.name||panchang.signs?.sun,language.signs));
      detailRow(list,language.fields.abhijit,interval(panchang.auspicious?.abhijit_muhurta),'', 'good');
      detailRow(list,language.fields.rahu,interval(panchang.inauspicious?.rahu_kalam),'', 'avoid');
      detailRow(list,language.fields.gulika,interval(panchang.inauspicious?.gulika_kalam),'', 'neutral');
      detailRow(list,language.fields.yamaganda,interval(panchang.inauspicious?.yamaganda),'', 'neutral');
      card.querySelector('[data-calendar-status]').textContent='';
      const credit=card.querySelector('[data-calendar-credit]');credit.replaceChildren(document.createTextNode('Panchang data by '));
      const source=document.createElement('a');source.href='https://horoscopes.today/api';source.target='_blank';source.rel='noopener noreferrer';source.textContent='Horoscopes.Today';credit.append(source);
    };
    const fetchData=async()=>{
      const parts=dateForIndia();const date=`${parts.year}-${parts.month}-${parts.day}`;const status=card.querySelector('[data-calendar-status]');const retry=card.querySelector('[data-calendar-retry]');
      failedDate=null;
      status.textContent=(copy[document.documentElement.lang]||copy.gu).loading;retry.hidden=true;
      card.querySelector('[data-calendar-place]').textContent=(copy[document.documentElement.lang]||copy.gu).place;
      try{
        const response=await fetch('https://jagannatha-hora-359167915530.europe-west1.run.app/panchang',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({date,latitude:23.36026124473463,longitude:72.33835438863909,timezone:5.5,place:'Jasalpur, Gujarat'})});
        if(!response.ok)throw new Error(`Panchang request failed (${response.status})`);
        const result=await response.json();const panchang=result.panchang;
        if(!panchang?.date||!panchang?.tithi?.name)throw new Error('Panchang response was incomplete');
        latestData=panchang;render(panchang);
      }catch{
        failedDate=date;
        status.textContent=(copy[document.documentElement.lang]||copy.gu).error;retry.textContent=(copy[document.documentElement.lang]||copy.gu).retry;retry.hidden=false;
      }
    };
    const updateButton=()=>{button.querySelector('[data-calendar-button-label]').textContent=(copy[document.documentElement.lang]||copy.gu).button;};
    button.addEventListener('click',async()=>{
      const opening=card.hidden;card.hidden=!opening;button.setAttribute('aria-expanded',String(opening));
      if(!opening)return;
      const p=dateForIndia();const today=`${p.year}-${p.month}-${p.day}`;
      if(latestData?.date===today)render(latestData);else await fetchData();
    });
    card.querySelector('[data-calendar-retry]').addEventListener('click',fetchData);
    document.addEventListener('temple:languagechange',()=>{updateButton();if(!card.hidden&&latestData)render(latestData);});
    window.setInterval(()=>{if(card.hidden)return;const p=dateForIndia();const today=`${p.year}-${p.month}-${p.day}`;if(latestData?.date===today)render(latestData);else if(failedDate!==today)fetchData();},60000);
    updateButton();
  }
  const galleryModalElement = document.getElementById('galleryLightbox');
  if (galleryModalElement) {
    const galleryModal = bootstrap.Modal.getOrCreateInstance(galleryModalElement);
    const image = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');
    document.querySelectorAll('[data-gallery-image]').forEach(button => button.addEventListener('click', () => {
      image.src = button.dataset.galleryImage;
      image.alt = button.dataset.galleryCaption || 'Mandir gallery image';
      const language = translations[document.documentElement.lang] || translations.gu || {};
      caption.textContent = language[button.dataset.galleryCaptionKey] || button.dataset.galleryCaption || '';
      galleryModal.show();
    }));
  }

  const updatesForm = document.getElementById('updatesForm');
  updatesForm?.addEventListener('submit', event => {
    event.preventDefault();
    if (!updatesForm.reportValidity()) return;
    const words = translations[document.documentElement.lang] || translations.gu || {};
    const message = document.getElementById('updatesMessage');
    message.textContent = words.formNeedsService || 'The subscription service is not connected. Your email has not been saved.';
    message.classList.add('form-message-notice');
    updatesForm.reset();
  });

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealElements.forEach(element => observer.observe(element));
  } else revealElements.forEach(element => element.classList.add('is-visible'));
})();
