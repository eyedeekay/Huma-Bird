 window.addEventListener("load", onLoad);

 /*
 [accountId]
 (string)
 The id of the MailAccount this identity belongs to. The accountId property is read-only.
 [composeHtml]
 (boolean)
 – [Added in TB 85, backported to TB 78.7.0]
 If the identity uses HTML as the default compose format.
 [email]
 (string)
 The user’s email address as used when messages are sent from this identity.
 [id]
 (string)
 A unique identifier for this identity. The id property is read-only.
 [label]
 (string)
 A user-defined label for this identity.
 [name]
 (string)
 The user’s name as used when messages are sent from this identity.
 [organization]
 (string)
 The organization associated with this identity.
 [replyTo]
 (string)
 The reply-to email address associated with this identity.
 [signature]
 (string)
 – [Added in TB 91]
 The signature of the identity.
 [signatureIsPlainText]
 (boolean)
 – [Added in TB 91]
 If the signature should be interpreted as plain text or as HTML.
  */

 async function notifyMode(event) {
     await messenger.runtime.sendMessage({ popupCloseMode: event.target.getAttribute("data") });
     let user = document.getElementById('i2pmail-username').value;
     let password = document.getElementById('i2pmail-password').value;
     let mailIdentity = {
         composeHtml: true,
         email: user + "@mail.i2p",
         label: "I2P Mail: " + user + "@mail.i2p",
         replyTo: user + "@i2pmail.org",
         signatureIsPlainText: true,
         signature: true,
     }
     alert(mailIdentity);
     //does not work until bug 1675940 has landed on ESR
     //window.close();
     let win = await messenger.windows.getCurrent();
     messenger.windows.remove(win.id);
 }

 async function onLoad() {
     document.getElementById("button_ok").addEventListener("click", notifyMode);
     document.getElementById("button_cancel").addEventListener("click", notifyMode);
 }