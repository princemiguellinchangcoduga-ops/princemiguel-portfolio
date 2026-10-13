/**
 * Contact: the headline is the route's own line; faqEyebrow, faqSub and the form copy are the plate
 * and the form beside it. Change the words here, never in the components.
 */
export const contactPage = {
  eyebrow: 'Contact',
  titleThin: "Let's connect &",
  titleBold: 'work together.',
  lede: 'Looking for graphic design, event video editing, or IT technical support? Reach out and I will reply within 24 hours.',
  faqEyebrow: 'FAQs',
  faqTitle: 'Quick answers',
  faqSub: 'Have an open question? Send a note below.',
  cardTitle: 'Send me a message',
  cardBody: 'Tell me about your event, organization, or project. What are your deliverables and preferred timeline?',
}

/** The form. Until a backend is wired, Send opens the visitor's own mail app with the message laid out. */
export const contactForm = {
  first: 'First name',
  last: 'Last name',
  email: 'Email',
  message: 'Tell me about your project',
  phFirst: 'First name',
  phLast: 'Last name',
  phEmail: 'yourname@email.com',
  phMessage: 'What do you need? What event or project are you working on? When is your deadline?',
  send: 'Send message',
  hint: 'This form opens your email app with the message pre-filled. Nothing is stored on this site.',
  error: 'Please add your name, a valid email, and a project note.',
  sentTitle: 'Your mail app has it.',
  sentBody: 'The message is prepared and addressed. Press send in your mail app to deliver it.',
  // The fallback for a visitor whose browser has no mail app set up.
  noMailApp: 'No mail app opened? Write directly to',
  copy: 'Copy message',
  copied: 'Copied',
  again: 'Write another',
}
