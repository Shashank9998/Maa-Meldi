# Donation PDF and email setup

The donation page creates a donor acknowledgement PDF and downloads it. The current site has no payment gateway, so it does not accept or verify donations. The acknowledgement clearly says it is based on the details entered and is not proof of verified payment or a tax certificate.

## Enable receipt emails

1. Create an EmailJS account and connect an email service.
2. Create a template addressed to `{{to_email}}`. Include these variables in the email body: `{{donor_name}}`, `{{receipt_id}}`, `{{donation_amount}}`, `{{donation_purpose}}`, `{{payment_method}}`, `{{transaction_reference}}`, and `{{receipt_date}}`.
3. In the template's **Attachments** tab, add a **Variable Attachment** with parameter name `receipt_pdf`, filename `donation-acknowledgement.pdf`, and content type `application/pdf`.
4. Restrict the EmailJS allowed origins to the deployed site domain and add the account's public key, service ID, and template ID to `js/donation-config.js`.

The page emails the PDF to the donor's entered address only after PDF generation. Without the EmailJS identifiers it will still prepare and download the PDF, and show that email setup is pending. EmailJS documents [browser setup](https://www.emailjs.com/docs/sdk/installation/) and [programmatic attachments](https://www.emailjs.com/docs/user-guide/file-attachments/).

## Payment integration

To accept donations online and issue a payment-confirmed receipt, connect a payment provider and verify successful transactions server-side. Do not mark self-entered payment details as paid based on this static page alone.
