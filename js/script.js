(() => {
  'use strict';

  const translations = window.templeTranslations || {};
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
    return `<section class="live-darshan-page"><div class="live-page-shell"><header class="live-page-heading"><div><span class="section-eyebrow">${words.liveEyebrow || ''}</span><h1>${words.liveHeading || words.liveTitle || ''}</h1><p>${words.liveDescription || words.liveIntro || ''}</p></div><span class="live-video-badge"><i class="bi bi-camera-video-fill" aria-hidden="true"></i>${words.liveVideoLabel || ''}</span></header><div class="live-page-layout"><article class="live-player-card"><div class="live-player-topline"><span><i class="bi bi-play-circle-fill" aria-hidden="true"></i>${words.liveVideoLabel || ''}</span><span class="live-platform-label"><i class="bi bi-youtube" aria-hidden="true"></i>YouTube</span></div><div class="live-video live-page-video"><iframe src="${videoUrl}" title="Meldi Dham Jasalpur darshan video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="live-player-caption"><span class="live-caption-icon"><i class="bi bi-flower1" aria-hidden="true"></i></span><div><h2>${words.liveHeading || ''}</h2><p>${words.liveVideoHint || ''}</p></div><div class="live-player-actions"><a class="live-youtube-button" href="${watchUrl}" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span>${words.liveWatchYoutube || ''}</span></a><button class="live-chat-button" type="button" data-live-chat-toggle aria-expanded="false" aria-controls="liveChatPanel"><i class="bi bi-chat-dots-fill" aria-hidden="true"></i><span>${words.liveChat || ''}</span></button></div></div><section class="live-chat-panel" id="liveChatPanel" data-live-chat-panel data-chat-url="${chatUrl}" hidden><header class="live-chat-heading"><div><span class="live-chat-heading-icon"><i class="bi bi-chat-square-text-fill" aria-hidden="true"></i></span><div><h2>${words.liveChat || ''}</h2><p>${words.liveChatNote || ''}</p></div></div><button class="live-chat-close" type="button" data-live-chat-close aria-label="${words.close || 'Close'}"><i class="bi bi-x-lg" aria-hidden="true"></i></button></header><div class="live-chat-frame"><iframe title="Meldi Dham YouTube live chat" loading="lazy" allow="autoplay; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" data-live-chat-frame></iframe></div></section></article><aside class="live-schedule-card"><div class="live-schedule-icon"><i class="bi bi-bell-fill" aria-hidden="true"></i></div><span class="live-schedule-eyebrow">${words.aartiEyebrow || ''}</span><h2>${words.liveScheduleHeading || ''}</h2><p class="live-schedule-note">${words.liveScheduleNote || ''}</p><div class="live-aarti-times"><div class="live-aarti-time"><span class="live-time-icon"><i class="bi bi-sunrise-fill" aria-hidden="true"></i></span><span><small>${words.morningAarti || ''}</small><strong>${words.morningAartiTime || ''}</strong></span></div><div class="live-aarti-time"><span class="live-time-icon evening"><i class="bi bi-sunset-fill" aria-hidden="true"></i></span><span><small>${words.eveningAarti || ''}</small><strong>${words.eveningAartiTime || ''}</strong></span></div></div><a class="live-aarti-link" href="index.html#aarti"><span>${words.aartiTitle || ''}</span><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a></aside></div></div></section>`;
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

  function applyLanguage(language, announce = false) {
    const code = translations[language] ? language : 'gu';
    const words = translations[code] || {};
    document.documentElement.lang = code;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = words[element.dataset.i18n];
      if (value !== undefined) setTranslatedText(element, value);
    });
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
    const subject = `[Meldi Dham] ${values.get('subject')}`;
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

  function setupHeroVideo() {
    const video = document.getElementById('homeHeroVideo');
    const playButton = document.getElementById('videoToggle');
    const audioButton = document.getElementById('audioToggle');
    if (!video || !playButton || !audioButton) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const words = () => translations[document.documentElement.lang] || translations.gu || {};
    const setPlayButton = () => {
      const isPaused = video.paused;
      playButton.innerHTML = isPaused ? '<i class="bi bi-play-fill" aria-hidden="true"></i>' : '<i class="bi bi-pause-fill" aria-hidden="true"></i>';
      playButton.setAttribute('aria-label', words()[isPaused ? 'videoPlay' : 'videoPause'] || (isPaused ? 'Play video' : 'Pause video'));
    };
    const setAudioButton = () => {
      audioButton.innerHTML = video.muted ? '<i class="bi bi-volume-mute-fill" aria-hidden="true"></i>' : '<i class="bi bi-volume-up-fill" aria-hidden="true"></i>';
      audioButton.setAttribute('aria-label', words()[video.muted ? 'audioUnmute' : 'audioMute'] || (video.muted ? 'Unmute audio' : 'Mute audio'));
    };
    if (reducedMotion) video.pause();
    video.addEventListener('play', setPlayButton);
    video.addEventListener('pause', setPlayButton);
    playButton.addEventListener('click', () => {
      if (video.paused) video.play().catch(() => {});
      else video.pause();
    });
    audioButton.addEventListener('click', () => {
      video.muted = !video.muted;
      if (!video.muted && video.paused) video.play().catch(() => {});
      setAudioButton();
    });
    setPlayButton();
    setAudioButton();
  }
  setupHeroVideo();

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
